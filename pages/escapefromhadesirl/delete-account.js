import Head from 'next/head'
import Link from 'next/link'

export default function EscapeFromHadesIRLDeleteAccount() {
  return (
    <div className="container">
      <Head>
        <title>Delete Your Account | Escape from Hades IRL</title>
      </Head>
      <h1>Delete Your Account</h1>
      <p className="subtitle">Escape from Hades IRL</p>
      <p className="updated">Last updated: October 1, 2026</p>

      <div className="content">
        <p><strong>App name:</strong> Escape from Hades IRL</p>
        <p><strong>Developer:</strong> Brian Carlisle (The Waldgrave)</p>

        <h2>Delete your account in the app</h2>
        <ol>
          <li>Open Escape from Hades IRL and sign in.</li>
          <li>Go to the <strong>Settings</strong> tab and tap <strong>Additional Settings</strong>.</li>
          <li>In the <strong>Danger Zone</strong> section, tap <strong>Delete Account</strong>.</li>
          <li>Tap <strong>Delete</strong> to confirm.</li>
          <li>Confirm it&apos;s you: enter your password, or sign in again with Google or Apple.</li>
        </ol>
        <p>Your account and all of its data are deleted right away, and you are signed out. This cannot be undone.</p>

        <h2>Request deletion without the app</h2>
        <p>
          If you can&apos;t use the app, email <a href="mailto:bricarlis@gmail.com?subject=Delete%20my%20Escape%20from%20Hades%20IRL%20account">bricarlis@gmail.com</a> from
          the email address on your account, with the subject &quot;Delete my Escape from Hades IRL account&quot;. We will confirm the
          request came from the account owner, delete the account and all of its data, and reply to let you know. Requests are completed
          within 30 days.
        </p>

        <h2>What gets deleted</h2>
        <ul>
          <li>Your account and sign-in record (email, display name, and sign-in method)</li>
          <li>Your habits and every daily record, including step counts and meditation sessions</li>
          <li>Quests and their progress</li>
          <li>Chores and their completion history</li>
          <li>Notes, checklists, and tags</li>
          <li>Vacation days and app settings</li>
          <li>Habit tile icon images you uploaded</li>
          <li>Word suggestions and milestone progress stored on your device</li>
        </ul>

        <h2>What is kept</h2>
        <p>
          Nothing from your account is kept. We do not keep backup copies of your data, so once it is deleted it cannot be recovered.
          Step data read from Apple Health or Health Connect stays in those apps on your phone; we never write to them, and you manage
          that data there. Uninstalling the app without deleting your account does not delete your data, so delete your account first if
          you want it gone.
        </p>

        <h2>Contact</h2>
        <p><a href="mailto:bricarlis@gmail.com">bricarlis@gmail.com</a></p>
      </div>

      <footer className="footer">
        <Link href="/escapefromhadesirl">Escape from Hades IRL</Link>
        <span className="divider">|</span>
        <Link href="/escapefromhadesirl/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/escapefromhadesirl/terms">Terms of Service</Link>
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
        .content p,
        .content li {
          line-height: 1.6;
          text-align: left;
        }
        .content ol,
        .content ul {
          padding-left: 1.5em;
        }
        .content a {
          color: #42b983;
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
