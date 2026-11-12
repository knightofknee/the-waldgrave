import Link from 'next/link'
import HomeButton from '../../components/HomeButton'

// Mirrors how the Universal Complaint System app actually moderates
// (functions/src/moderation.ts, intake.ts, ai.ts in that repo). Keep it true.
export default function UcsChildSafety() {
  return (
    <div className="container">
      <HomeButton />
      <h1>Child Safety Standards</h1>
      <p className="subtitle">Universal Complaint System</p>
      <p className="updated">Last updated: November 11, 2026</p>

      <div className="content">
        <p>The Universal Complaint System is a public record of complaints about companies, products, services and public institutions, built by The Waldgrave and intended for adults. These standards describe our policies against child sexual abuse and exploitation (CSAE) and how we enforce them.</p>

        <h2>Zero tolerance</h2>
        <p>Child sexual abuse material (CSAM) and any content that sexualizes, exploits, endangers, grooms, or solicits minors is strictly prohibited everywhere on the platform: complaints, photos, responses, proposed fixes, private messages, and organization pages. There are no exceptions.</p>

        <h2>An adult platform by design</h2>
        <p>The app is directed at adults: its target audience is 18 and over, and it is built for complaining about organizations, not for meeting or messaging people. Private conversations exist only between a person and an organization they complained to.</p>

        <h2>Checked before anything is posted</h2>
        <p>Every complaint is checked before it is posted, and sexual content is refused. Every photo is screened by Google Cloud Vision for sexual and violent content before anyone else can see it, and photos that fail are never published.</p>

        <h2>In-app reporting</h2>
        <p>Everything in the app carries a Report action: complaints, issues, responses, proposed fixes, organization pages, and private messages and conversations. &ldquo;Harms or sexualizes a child&rdquo; is the first reason listed. Child safety reports alert the operator immediately; other reports are reviewed within 24 hours. Anyone can hide an author, and either side of a private conversation can block the other.</p>

        <h2>Enforcement</h2>
        <p>Reported content is reviewed by the operator. Content that violates these standards is removed and the account responsible is suspended. Where content appears to constitute CSAM or child exploitation, we preserve what the law requires and report it to the National Center for Missing and Exploited Children (NCMEC) and to law enforcement, in accordance with applicable law, including 18 U.S.C. 2258A.</p>

        <h2>Compliance with child safety laws</h2>
        <p>We comply with applicable child safety laws in the jurisdictions where the app operates, including mandatory reporting obligations in the United States.</p>

        <h2>Child safety point of contact</h2>
        <p>Questions, reports, or notices regarding child safety on the Universal Complaint System can be sent to Brian Carlisle at bricarlis@gmail.com. This contact is prepared to discuss our CSAE policies and practices.</p>
      </div>

      <footer className="footer">
        <Link href="/ucs">Universal Complaint System</Link>
        <span className="divider">|</span>
        <Link href="/ucs/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/ucs/terms">Terms</Link>
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
          color: #2346d8;
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
