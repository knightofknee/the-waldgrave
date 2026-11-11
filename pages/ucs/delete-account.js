import Head from 'next/head'
import Link from 'next/link'
import HomeButton from '../../components/HomeButton'

// What deletion does must match the "Deleting your account" section of
// src/app/privacy.tsx in the Universal Complaint System repo (and
// deleteAccount in functions/src/account.ts). Change them together.
export default function UcsDeleteAccount() {
  return (
    <div className="container">
      <Head>
        <title>Delete Your Account · Universal Complaint System</title>
        <meta name="description" content="How to delete your Universal Complaint System account, and exactly what is deleted and what is kept." />
      </Head>
      <HomeButton />
      <h1>Delete Your Account</h1>
      <p className="subtitle">Universal Complaint System</p>
      <p className="updated">Last updated: November 5, 2026</p>

      <div className="content">
        <p><strong>App name:</strong> Universal Complaint System</p>
        <p><strong>Developer:</strong> Brian Carlisle, The Waldgrave</p>

        <h2>How to delete your account in the app</h2>
        <ol>
          <li>Open the app (or the <a href="/ucs/app">web version</a>) on the device or account you use.</li>
          <li>Go to the <strong>Me</strong> tab.</li>
          <li>Scroll to the bottom and tap <strong>About</strong>, then <strong>Delete account</strong>.</li>
          <li>Tap <strong>Delete my account</strong> and confirm.</li>
        </ol>
        <p>Deletion runs immediately and cannot be undone.</p>

        <h2>What is deleted</h2>
        <ul>
          <li>Your private complaints, their conversations and photos.</li>
          <li>The text, photos and display name of your public complaints.</li>
          <li>Your support, your votes, and what you said about fixes; the counts drop. Fixes you proposed.</li>
          <li>Your organization access and requests, queued complaints, hidden-author list, notifications, phone tokens, and sign-in.</li>
        </ul>

        <h2>What is kept</h2>
        <ul>
          <li>The points your public complaints fed stay on the record without your name, because other people share them.</li>
          <li>Reports you sent stay, without your account attached.</li>
          <li>An organization&apos;s private counts keep the anonymous number, which contains none of your words.</li>
        </ul>

        <h2>No app? Ask us by email</h2>
        <p>If you can&apos;t use the app, email <a href="mailto:bricarlis@gmail.com?subject=Delete%20my%20UCS%20account">bricarlis@gmail.com</a> from the email address on your account and ask us to delete it. Sending from that address is how we know the request comes from the account&apos;s owner. We delete the same data listed above.</p>
        <p>An account you never signed in to exists only on the device that made it, so it can only be deleted from inside the app on that device.</p>
      </div>

      <footer className="footer">
        <Link href="/ucs">Universal Complaint System</Link>
        <span className="divider">|</span>
        <Link href="/ucs/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/ucs/support">Support</Link>
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
