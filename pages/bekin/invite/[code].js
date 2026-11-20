import { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";

// A BeKin friend link: /bekin/invite/CODE, optionally with ?b=TOKEN when it was shared from a lit
// beacon. When the app IS installed, iOS Universal Links / Android App Links open BeKin directly
// and this page never loads. Reaching it means the visitor (probably) doesn't have the app, so
// this page does the job the app would:
//   - says WHO invited them, by name
//   - shows that person's open beacon, if there is one
//   - lets them say "I'm in" (and, on a shared beacon, chat) right here, with no account
//   - offers the app (installing connects them with the inviter automatically) or the browser version
// The page is rendered on the server so the link unfurls in Messages as
// "Brian lit a beacon: Tonight at 8 PM" instead of a bare URL.
const FN = "https://us-central1-waldgrave-profiles.cloudfunctions.net";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.waldgrave.bekin";
const APP_STORE_URL = "https://apps.apple.com/app/id6746952014";
const SITE = "https://www.waldgrave.com";

const CODE_RE = /^[A-Z0-9]{6}$/;
const TOKEN_RE = /^[a-z0-9]{16}$/;

const qs = (code, b, extra = {}) => {
  const p = new URLSearchParams({ code, ...(b ? { b } : {}), ...extra });
  return p.toString();
};

export async function getServerSideProps({ params, query }) {
  const code = String(params.code || "").toUpperCase();
  const rawB = Array.isArray(query.b) ? query.b[0] : query.b;
  const b = TOKEN_RE.test(String(rawB || "")) ? String(rawB) : "";
  let preview = null;
  if (CODE_RE.test(code)) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 4000);
      const r = await fetch(`${FN}/invitePreview?${qs(code, b)}`, { signal: ctrl.signal });
      clearTimeout(t);
      if (r.ok) preview = await r.json();
    } catch {
      // The page still works without it: generic invite, store buttons.
    }
  }
  return { props: { code: CODE_RE.test(code) ? code : "", b, preview } };
}

// Android: the Play Store passes `referrer` through install, so the app connects the two (and
// opens the beacon) at signup with nothing else to do.
const playUrlFor = (code, b) => {
  if (!code) return PLAY_STORE_URL;
  const ref = `bekin_invite=${code}${b ? `&bekin_b=${b}` : ""}`;
  return `${PLAY_STORE_URL}&referrer=${encodeURIComponent(ref)}`;
};

function guestIdentity() {
  try {
    let id = localStorage.getItem("bekin_guest_id");
    if (!id || !/^[a-z0-9]{12,32}$/.test(id)) {
      const bytes = new Uint8Array(16);
      crypto.getRandomValues(bytes);
      id = Array.from(bytes, (x) => "abcdefghijklmnopqrstuvwxyz0123456789"[x % 36]).join("");
      localStorage.setItem("bekin_guest_id", id);
    }
    return { id, name: localStorage.getItem("bekin_guest_name") || "" };
  } catch {
    return { id: "", name: "" };
  }
}

const timeOf = (ms) => (ms ? new Date(ms).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "");

export default function BekinInvite({ code, b, preview: initial }) {
  const [preview, setPreview] = useState(initial);
  const [platform, setPlatform] = useState("other");
  const [guest, setGuest] = useState({ id: "", name: "" });
  const [name, setName] = useState("");
  const [imIn, setImIn] = useState(false);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState("");
  const [messages, setMessages] = useState(null);
  const [draft, setDraft] = useState("");
  const listRef = useRef(null);

  const inviter = preview?.inviterName || "A friend";
  const beacon = preview?.beacon || null;
  const canChat = !!beacon?.canChat;

  useEffect(() => {
    const ua = (typeof navigator !== "undefined" && navigator.userAgent) || "";
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    setPlatform(isIOS ? "ios" : /Android/i.test(ua) ? "android" : "other");
    const g = guestIdentity();
    setGuest(g);
    setName(g.name);
    try {
      setImIn(localStorage.getItem(`bekin_in_${code}_${b}`) === "1");
    } catch {}

    // iOS only: Apple passes nothing through an App Store install, so the app matches this visit
    // on first launch to connect the two (and to open the beacon). Android's install referrer
    // already carries both.
    if (code && isIOS) {
      fetch(`${FN}/recordInviteVisit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, ...(b ? { b } : {}) }),
        keepalive: true,
      }).catch(() => {});
    }
  }, [code, b]);

  const refreshPreview = useCallback(() => {
    if (!code) return;
    fetch(`${FN}/invitePreview?${qs(code, b)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((p) => p && setPreview(p))
      .catch(() => {});
  }, [code, b]);

  const loadChat = useCallback(() => {
    if (!canChat || !guest.id) return;
    fetch(`${FN}/guestChat?${qs(code, b, { guestId: guest.id })}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d?.messages && setMessages(d.messages))
      .catch(() => {});
  }, [canChat, guest.id, code, b]);

  // Live-ish: the chat (and who's going) refresh every few seconds while the page is in front.
  useEffect(() => {
    if (!beacon) return;
    loadChat();
    const t = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      loadChat();
      refreshPreview();
    }, 8000);
    return () => clearInterval(t);
  }, [!!beacon, loadChat, refreshPreview]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages?.length]);

  const keepName = (n) => {
    try {
      localStorage.setItem("bekin_guest_name", n);
    } catch {}
  };

  const rsvp = async (on) => {
    const n = name.trim();
    if (on && !n) return setNote("Add your name so they know who's coming.");
    if (!guest.id || busy) return;
    setBusy(true);
    setNote("");
    try {
      const r = await fetch(`${FN}/guestRsvp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, ...(b ? { b } : {}), guestId: guest.id, name: n, on }),
      });
      if (r.ok) {
        setImIn(on);
        if (on) keepName(n);
        try {
          localStorage.setItem(`bekin_in_${code}_${b}`, on ? "1" : "0");
        } catch {}
        refreshPreview();
        loadChat();
      } else if (r.status === 404) {
        setNote("This beacon has ended.");
        refreshPreview();
      } else {
        setNote(r.status === 429 ? "Too many tries from this network. Give it a bit." : "That didn't go through. Try again.");
      }
    } catch {
      setNote("That didn't go through. Check your connection.");
    }
    setBusy(false);
  };

  const send = async (e) => {
    e.preventDefault();
    const n = name.trim();
    const text = draft.trim();
    if (!text || busy) return;
    if (!n) return setNote("Add your name above first.");
    setBusy(true);
    setNote("");
    try {
      const r = await fetch(`${FN}/guestChat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, b, guestId: guest.id, name: n, text }),
      });
      if (r.ok) {
        const d = await r.json();
        setDraft("");
        keepName(n);
        if (d?.messages) setMessages(d.messages);
      } else {
        setNote(r.status === 429 ? "Too many messages from this network. Give it a bit." : "That didn't send. Try again.");
      }
    } catch {
      setNote("That didn't send. Check your connection.");
    }
    setBusy(false);
  };

  // What the link says when it unfurls in a message thread.
  const title = beacon
    ? `${inviter} lit a beacon${beacon.when ? `: ${beacon.when}` : ""}`
    : `${inviter} invited you to BeKin`;
  const description = beacon
    ? beacon.message || "Open it to see the plan and say you're in."
    : "BeKin is how friends say they're free to hang out. Tap to connect.";
  const url = `${SITE}/bekin/invite/${code}${b ? `?b=${b}` : ""}`;
  const webAppUrl = `/bekin/app?invite=${code}${b ? `&b=${b}` : ""}`;
  const going = beacon?.going || [];

  return (
    <div className="page">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BeKin" />
        <meta property="og:image" content={`${SITE}/bekin/icon.png`} />
        <meta name="twitter:card" content="summary" />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <div className="brand">
          <img src="/bekin/icon.png" alt="" width="40" height="40" />
          <span>BeKin</span>
        </div>

        {beacon ? (
          <>
            <h1>🔥 {inviter} lit a beacon</h1>
            <div className="card">
              <div className="when">{beacon.pollOpen ? "Time still being picked" : beacon.when}</div>
              {beacon.message ? <p className="msg">{beacon.message}</p> : null}
              <p className="going">
                {beacon.goingCount > 0
                  ? `${going.slice(0, 4).join(", ")}${beacon.goingCount > 4 ? ` and ${beacon.goingCount - 4} more` : ""} ${
                      beacon.goingCount === 1 ? "is" : "are"
                    } in`
                  : `Be the first to tell ${inviter} you're in`}
              </p>

              {imIn ? (
                <div className="inRow">
                  <span className="inBadge">✓ You&apos;re in</span>
                  <button className="linkBtn" onClick={() => rsvp(false)} disabled={busy}>
                    Take it back
                  </button>
                </div>
              ) : (
                <div className="rsvp">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    maxLength={30}
                    autoComplete="given-name"
                    aria-label="Your name"
                  />
                  <button className="btn fire" onClick={() => rsvp(true)} disabled={busy}>
                    I&apos;m in
                  </button>
                </div>
              )}
              {note ? <p className="note">{note}</p> : null}
            </div>

            {canChat ? (
              <div className="card chat">
                <div className="chatTitle">Beacon chat</div>
                <div className="chatList" ref={listRef}>
                  {messages === null ? (
                    <p className="empty">Loading…</p>
                  ) : messages.length === 0 ? (
                    <p className="empty">Nothing yet. Say something.</p>
                  ) : (
                    messages.map((m) =>
                      m.system ? (
                        <p key={m.id} className="sys">
                          <b>{m.name}</b> {m.text}
                        </p>
                      ) : (
                        <div key={m.id} className={m.mine ? "bubble mine" : "bubble"}>
                          {m.mine ? null : <div className="who">{m.name}</div>}
                          <div>{m.text}</div>
                          <div className="at">{timeOf(m.at)}</div>
                        </div>
                      )
                    )
                  )}
                </div>
                <form className="composer" onSubmit={send}>
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder={name.trim() ? "Message" : "Add your name above, then message"}
                    maxLength={500}
                    aria-label="Message"
                  />
                  <button className="btn" type="submit" disabled={busy || !draft.trim()}>
                    Send
                  </button>
                </form>
              </div>
            ) : null}

            <h2>Get the alert next time</h2>
            <p className="lead">
              With the app, your phone tells you the moment {inviter} lights a beacon. Install it and you two are
              connected automatically.
            </p>
          </>
        ) : (
          <>
            <h1>{inviter} invited you to BeKin</h1>
            <p className="lead">
              {preview?.ended ? "That beacon has ended, but the invite stands. " : ""}
              BeKin is how friends say they&apos;re free to hang out: light your beacon, and your friends see it and
              say they&apos;re in. Install it and you&apos;re connected with {inviter} automatically.
            </p>
          </>
        )}

        <div className="cta">
          {platform !== "android" && (
            <a className="btn store" href={APP_STORE_URL}>
              Download on the App Store
            </a>
          )}
          {platform !== "ios" && (
            <a className="btn store" href={playUrlFor(code, b)}>
              Get it on Google Play
            </a>
          )}
          {code ? (
            <a className="btn ghost" href={webAppUrl}>
              Or use BeKin in your browser
            </a>
          ) : null}
          {code && platform !== "other" ? (
            <a className="quiet" href={`bekin8://invite/${code}${b ? `?b=${b}` : ""}`}>
              Already have BeKin? Open the app
            </a>
          ) : null}
        </div>

        <footer className="footer">
          <a href="/bekin">What is BeKin?</a>
          <span className="divider">|</span>
          <a href="/bekinPrivacy">Privacy Policy</a>
          <span className="credit">A Waldgrave Production</span>
        </footer>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(1200px 500px at 50% -10%, #3b1d0a 0%, #0f1117 55%);
          color: #f3f4f6;
          font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        }
        .wrap {
          max-width: 520px;
          margin: 0 auto;
          padding: 28px 20px 48px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 18px;
          margin-bottom: 22px;
        }
        .brand img {
          border-radius: 10px;
        }
        h1 {
          font-size: 28px;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        h2 {
          font-size: 20px;
          margin: 28px 0 6px;
        }
        .lead {
          color: #cbd5e1;
          font-size: 16px;
          line-height: 1.5;
          margin: 0 0 18px;
        }
        .card {
          background: rgba(26, 29, 39, 0.92);
          border: 1px solid rgba(253, 186, 116, 0.35);
          border-radius: 18px;
          padding: 18px;
          margin-bottom: 14px;
        }
        .when {
          font-size: 22px;
          font-weight: 800;
          color: #fdba74;
        }
        .msg {
          font-size: 18px;
          line-height: 1.4;
          margin: 8px 0 0;
          white-space: pre-wrap;
          overflow-wrap: anywhere;
        }
        .going {
          color: #94a3b8;
          font-size: 14px;
          margin: 12px 0 14px;
        }
        .rsvp,
        .composer {
          display: flex;
          gap: 8px;
        }
        input {
          flex: 1;
          min-width: 0;
          background: #232733;
          border: 1px solid #374151;
          border-radius: 12px;
          color: #f3f4f6;
          font-size: 16px;
          padding: 12px 14px;
          font-family: inherit;
        }
        input:focus {
          outline: none;
          border-color: #fb923c;
        }
        .btn {
          display: inline-block;
          border: 0;
          border-radius: 12px;
          padding: 12px 18px;
          font-size: 16px;
          font-weight: 800;
          font-family: inherit;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          background: #2f6fed;
          color: #fff;
        }
        .btn:disabled {
          opacity: 0.5;
        }
        .fire {
          background: #fb923c;
          color: #1c0a00;
          white-space: nowrap;
        }
        .inRow {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .inBadge {
          background: rgba(34, 197, 94, 0.16);
          color: #4ade80;
          font-weight: 800;
          border-radius: 999px;
          padding: 9px 14px;
        }
        .linkBtn,
        .quiet {
          background: none;
          border: 0;
          color: #94a3b8;
          font-size: 14px;
          text-decoration: underline;
          cursor: pointer;
          font-family: inherit;
        }
        .note {
          color: #fca5a5;
          font-size: 14px;
          margin: 10px 0 0;
        }
        .chatTitle {
          font-weight: 800;
          margin-bottom: 10px;
        }
        .chatList {
          max-height: 300px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 12px;
        }
        .empty,
        .sys {
          color: #94a3b8;
          font-size: 14px;
          text-align: center;
          margin: 4px 0;
        }
        .bubble {
          align-self: flex-start;
          max-width: 82%;
          background: #232733;
          border-radius: 14px;
          padding: 8px 12px;
          font-size: 15px;
          line-height: 1.35;
          overflow-wrap: anywhere;
          white-space: pre-wrap;
        }
        .bubble.mine {
          align-self: flex-end;
          background: #2f6fed;
        }
        .who {
          font-size: 12px;
          font-weight: 800;
          color: #fdba74;
          margin-bottom: 2px;
        }
        .at {
          font-size: 11px;
          opacity: 0.6;
          margin-top: 2px;
        }
        .cta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: stretch;
        }
        .store {
          padding: 15px 18px;
          font-size: 17px;
        }
        .ghost {
          background: transparent;
          color: #93c5fd;
          border: 1px solid #334155;
        }
        .quiet {
          text-align: center;
          padding: 6px;
        }
        .footer {
          margin-top: 36px;
          color: #64748b;
          font-size: 13px;
          text-align: center;
        }
        .footer a {
          color: #94a3b8;
        }
        .divider {
          margin: 0 8px;
        }
        .credit {
          display: block;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}
