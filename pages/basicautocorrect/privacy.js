import Link from 'next/link'

export default function BasicAutocorrectPrivacy() {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p className="subtitle">Basic Autocorrect</p>
      <p className="updated">Last updated: October 7, 2026</p>

      <div className="content">
        <p>Basic Autocorrect is a browser extension for Firefox and Chrome built by The Waldgrave. It fixes obvious typos as you type. This policy explains what it does with your information. The short version: your keystrokes never leave your browser.</p>

        <h2>Information We Collect</h2>
        <p>None. Basic Autocorrect has no servers, no accounts, no analytics, and no tracking. It never sends what you type, or anything else, to us or to anyone else. It makes no network requests at all; its word lists ship inside the extension.</p>

        <h2>How the Extension Handles Your Typing</h2>
        <p>When you finish a word in a text field, the extension looks at the few characters just before your cursor (at most 64), checks the last word against its correction lists, and fixes it if needed. This happens entirely inside your browser on your device. The text is not stored or transmitted, and is forgotten immediately.</p>

        <h2>What Is Stored on Your Device</h2>
        <p>The extension saves its settings in your browser's local extension storage, on your device only: whether autocorrect is on, Basic or Aggressive mode, sites where you turned it off, your own corrections, your "never correct" words, and a short list of the last 10 corrections it made (for example "dont → don't"), so you can mark one as "never correct". That list contains only the corrected words, never the surrounding text. None of this is synced or sent anywhere.</p>

        <h2>Permissions</h2>
        <p><strong>Storage</strong> saves the settings described above on your device. <strong>Access to websites</strong> lets the extension run in the text fields where you type, so it can correct your typing there. It does not read pages, collect browsing history, or send data anywhere.</p>

        <h2>What We Do Not Do</h2>
        <p>We do not collect, sell, share, or transfer any user data. We do not use data for advertising, profiling, or creditworthiness. We do not use AI services or any remote code. Basic Autocorrect's use of information complies with the Chrome Web Store User Data Policy, including its Limited Use requirements, and with Mozilla's add-on policies.</p>

        <h2>Your Choices</h2>
        <p>You can view, edit, export, and delete your corrections and word lists at any time from the extension's popup. Removing the extension deletes all of its stored data from your browser.</p>

        <h2>Children</h2>
        <p>The extension collects no personal data from anyone, including children.</p>

        <h2>Changes to This Policy</h2>
        <p>If the extension ever changes how it handles information, we will update this policy at this URL and change the "Last updated" date above.</p>

        <h2>Contact</h2>
        <p>bricarlis@gmail.com</p>
      </div>

      <footer className="footer">
        <Link href="/basicautocorrect">Basic Autocorrect</Link>
        <span className="divider">|</span>
        <Link href="/basicautocorrect/terms">Terms of Service</Link>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          padding: 2em;
          color: #2c3e50;
        }
        h1 {
          text-align: center;
          font-weight: normal;
          margin-bottom: 0.1em;
        }
        .subtitle {
          text-align: center;
          color: #42b983;
          font-size: 1.1em;
          margin-bottom: 0.25em;
        }
        .updated {
          text-align: center;
          color: #999;
          font-size: 0.85em;
          margin-bottom: 2em;
        }
        .content h2 {
          font-size: 1.15em;
          margin-top: 1.5em;
          color: #2c3e50;
        }
        .content p {
          line-height: 1.6;
          text-align: left;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 0.85em;
        }
        .footer a {
          color: #42b983;
        }
        .divider {
          margin: 0 0.5em;
          color: #ccc;
        }
      `}</style>
    </div>
  )
}
