import Link from 'next/link'

export default function DirectDemocracyPrivacy() {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p className="subtitle">direct democracy</p>
      <p className="updated">Last updated: September 29, 2026</p>

      <div className="content">
        <p>direct democracy is a civic engagement app for Chicago built by The Waldgrave. It is designed to know as little about you as possible while still keeping the vote honest. This policy explains what we collect, how we use it, and your choices.</p>

        <h2>What We Collect</h2>
        <p>Your email address and password hash, used only for signing in (or your Google/Apple account identifier if you sign in with them); a display name you choose - it is a pseudonym, and your real name is never shown to anyone, even after verification; the content you post (concerns, comments, questions, ballots, and judgments); and participation counters (votes cast, concerns raised) that power in-app milestones. If you look up your voting districts (US House, state legislature, county, school board, police), we keep the district numbers only, so the election tab can show your races first. If you turn on phone notifications, we keep each phone&apos;s notification address and the language it shows them in; signing out removes that phone. If you turn news sources or story languages off while signed in, we keep which ones, so the choice follows your account. If you pay for a verification, we keep a record of which verification you bought, when, and the store&apos;s transaction number; your payment details stay with Apple or Google, and we never see them.</p>

        <h2>Identity Verification</h2>
        <p>If you choose to verify, verification is performed by Didit, a third-party identity service. Your government ID and face data go to Didit, never to us. We keep only these: a verified yes/no flag, your ward and district numbers, and a unique identifier that stops one person from verifying two accounts. Your ward is worked out at the moment you verify from the address on your ID (or on the bill or statement you use when verifying a new address), using the US Census Bureau&apos;s public address lookup and Chicago&apos;s ward boundaries; the address is used only for that lookup and is never saved. The same goes for an address you type to find your districts: it is looked up and dropped, and only the district numbers are kept. We never store your documents, your address, your legal name, or your face. The identifier is deleted with your account.</p>

        <h2>Face Data</h2>
        <p>During optional identity verification, Didit&apos;s verification flow asks you to take a selfie for a liveness check and compares your face to the photo on your government ID. This face data (the selfie images and any facial geometry derived from them) is captured inside Didit&apos;s verification flow and transmitted directly to Didit&apos;s servers. It is never sent to, received by, or stored on our servers. We do not collect, use, store, share, or sell face data, and we never see it - the only thing Didit sends back to us is the verification verdict described above, which contains no biometric information.</p>
        <p>Didit uses your face data solely to confirm that you are a real, live person and that the ID you presented is yours, and does not use it for advertising or sell it. As soon as the result of your verification is recorded, we have Didit delete the entire verification, including your ID images, your selfie, and any face data derived from it. A verification that is never completed is deleted within 7 days. Didit&apos;s privacy policy is available at <a href="https://didit.me/privacy-policy/">didit.me/privacy-policy</a>.</p>

        <h2>What We Never Do</h2>
        <p>We do not sell your personal information. We do not use your data for advertising. We do not share your content or identity data with third parties beyond the service providers that run the app: Google Firebase for data storage, Didit for verification, the US Census Bureau&apos;s address lookup for finding your ward and districts, Expo&apos;s push service (which hands notifications to Apple and Google) if you turn on phone notifications, and Apple or Google for payments.</p>

        <h2>Who Can See What</h2>
        <p>Your profile is readable only by you. Content you post publicly carries your display name and a verified badge - nothing more. Your individual ballots and judgments are readable only by you; everyone else sees only aggregate tallies. Reports you file are visible only to the platform operators.</p>

        <h2>Your Controls</h2>
        <p>Change your display name at any time. Retract any vote, withdraw your concerns and unanswered questions, and delete your comments. Block any user to hide their content from your account, and report any content to the operators. Delete your account at any time from Settings: your sign-in, profile, verification status, and every vote, judgment, and approval you cast are removed, and the tallies are recounted without them. Anything you posted stays on the record but is re-attributed to [deleted].</p>

        <h2>Data Storage</h2>
        <p>Your data is stored on our servers, powered by Google Firebase. We use reasonable administrative, technical, and physical safeguards to protect it, and all aggregate vote counts are computed server-side so no one - including you - can tamper with a tally.</p>

        <h2>Children</h2>
        <p>The app is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If you believe a child has provided personal data, contact us and we will remove it.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy as the app evolves. We will post updates at this URL and change the &quot;Last updated&quot; date above.</p>

        <h2>Contact</h2>
        <p>bricarlis@gmail.com</p>
      </div>

      <footer className="footer">
        <Link href="/directdemocracy">direct democracy</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/terms">Terms of Service</Link>
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
          color: #41B6E6;
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
