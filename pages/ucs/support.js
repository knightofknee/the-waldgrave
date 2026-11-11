import Head from 'next/head'
import Link from 'next/link'
import HomeButton from '../../components/HomeButton'

export default function UcsSupport() {
  return (
    <div className="container">
      <Head>
        <title>Support · Universal Complaint System</title>
        <meta name="description" content="How to get help with the Universal Complaint System, report content, hide or block someone, and respond for your organization." />
      </Head>
      <HomeButton />
      <h1>Support</h1>
      <p className="subtitle">Universal Complaint System</p>
      <p className="updated">Last updated: November 5, 2026</p>

      <div className="content">
        <h2>Get help</h2>
        <p>Email <a href="mailto:bricarlis@gmail.com">bricarlis@gmail.com</a> with what happened and, if you can, what you were doing in the app. If you signed in, writing from that email address helps us find your account.</p>

        <h2>Report something</h2>
        <p>Every complaint, point, organization response, organization or topic page, and private message has a <strong>Report</strong> link. Tap it, pick what is wrong (threats, hate or harassment; a private person targeted; personal details shown; spam; something illegal; or something else), and send.</p>
        <p>Reports go to the people who run UCS, never to the organization concerned, and organizations never see who reported what. We review every report within a day. Content that breaks the <Link href="/ucs/terms">terms of use</Link> is removed and listed in the public removal log, and accounts behind threats, hate, harassment or sexual content are suspended.</p>

        <h2>Hide an author</h2>
        <p>On any complaint, tap <strong>Hide this author</strong> and you won&apos;t see their complaints anymore. They won&apos;t know. Undo it in <strong>Me &gt; Hidden authors</strong>.</p>

        <h2>Block someone in a private conversation</h2>
        <p>Either side of a private conversation can block the other: open the conversation and tap <strong>Block</strong>. Nobody can send in it until you unblock it, from the same button. You can still report any abusive message.</p>

        <h2>For organizations</h2>
        <p>Anyone who works for an organization can respond for it with a verified work email at the organization&apos;s domain. In the app, go to <strong>Me &gt; Work somewhere? Respond for it</strong>, add and verify your work email if you haven&apos;t, pick the organization, and request access.</p>
        <p>If your email domain is already known for that organization you can respond right away. Otherwise we check your domain against the organization&apos;s website, and anything we can&apos;t confirm is reviewed by hand. Organizations can respond publicly, reply to private complaints sent to them, and mark problems fixed (a fix counts only once the people who raised it confirm it). They can never edit or remove what anyone wrote.</p>

        <h2>Your account</h2>
        <p>You can delete your account at any time from <strong>Me &gt; About &gt; Delete account</strong>. See <Link href="/ucs/delete-account">deleting your account</Link> for exactly what is removed.</p>
      </div>

      <footer className="footer">
        <Link href="/ucs">Universal Complaint System</Link>
        <span className="divider">|</span>
        <Link href="/ucs/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/ucs/terms">Terms of Use</Link>
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
          color: #2346D8;
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
        .content p,
        .content li {
          line-height: 1.6;
          text-align: left;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 0.9em;
        }
        .divider {
          margin: 0 0.75em;
          color: #ccc;
        }
      `}</style>
    </div>
  )
}
