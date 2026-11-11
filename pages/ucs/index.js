import Head from 'next/head'
import Link from 'next/link'
import HomeButton from '../../components/HomeButton'

// Copy follows docs/STORE-SETUP.md section 4 ("Listing copy") in the
// Universal Complaint System repo. The web version is the app's own export,
// published into public/ucs/app by `npm run publish-web` there.
const DESCRIPTION =
  "Complain about anything. Join others who agree. See who fixes it."

export default function UniversalComplaintSystem() {
  return (
    <div className="container">
      <Head>
        <title>Universal Complaint System: every complaint, counted</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content="Universal Complaint System" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://www.waldgrave.com/ucs/icon.png" />
        <link rel="apple-touch-icon" href="/ucs/icon.png" />
      </Head>
      <HomeButton />

      <header className="hero">
        <img className="icon" src="/ucs/icon.png" alt="Universal Complaint System icon" width="112" height="112" />
        <h1>Universal Complaint System</h1>
        <p className="tagline">Every complaint, counted</p>
      </header>

      <div className="cta">
        <a className="open" href="/ucs/app">Open the web version</a>
        <p className="also">Free. No account needed.</p>
      </div>

      <section className="about">
        <h2>Something&apos;s wrong? Say it here.</h2>
        <p>
          The Universal Complaint System is an independent public record of what&apos;s wrong, about anything: a company,
          a product, a public service, or something nobody owns. No organization controls it. They can respond, but they
          can never delete or edit what you wrote.
        </p>
        <ul>
          <li>Complain in seconds, in any language, no account needed.</li>
          <li>See if others already said it, and add your support with one tap.</li>
          <li>
            Your complaint is split into specific problems and merged with everyone who shares them, so a hundred people
            saying the same thing count as one loud point.
          </li>
          <li>Organizations respond publicly. Each one&apos;s page shows how much it has seen, answered and fixed.</li>
          <li>Fixes only count when the people who raised them agree.</li>
          <li>
            Need help with your own order or account? Send it privately: only that organization can read it, and they can
            reply to you.
          </li>
        </ul>
        <p className="closer">Rants welcome. Specifics get things fixed.</p>
      </section>

      <footer className="footer">
        <Link href="/ucs/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/ucs/terms">Terms of Use</Link>
        <span className="divider">|</span>
        <Link href="/ucs/support">Support</Link>
        <span className="divider">|</span>
        <Link href="/ucs/delete-account">Delete your account</Link>
        <p className="credit">A Waldgrave Production</p>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 760px;
          margin: 0 auto;
          padding: 1.5em 16px 2em;
          text-align: center;
          color: #2c3e50;
        }
        .hero {
          margin-top: 1em;
        }
        .icon {
          width: 112px;
          height: 112px;
          border-radius: 24px;
          box-shadow: 0 10px 28px rgba(35, 70, 216, 0.28);
        }
        h1 {
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0.5em 0 0.2em;
          text-wrap: balance;
        }
        .tagline {
          margin: 0;
          font-size: clamp(1.1rem, 2.6vw, 1.35rem);
          color: #2346D8;
          font-weight: 600;
        }
        .cta {
          margin: 2em 0 2.5em;
        }
        .open {
          display: inline-block;
          padding: 0.85em 1.8em;
          border-radius: 999px;
          background: #2346D8;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(35, 70, 216, 0.3);
        }
        .open:hover,
        .open:focus-visible {
          background: #1A37B0;
        }
        .also {
          margin: 0.9em 0 0;
          font-size: 0.95em;
          color: #555;
        }
        .about {
          padding-top: 2.5em;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
        }
        h2 {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          margin: 0 0 0.6em;
          text-wrap: balance;
        }
        .about p {
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 34em;
          margin: 0 auto 1.5em;
        }
        ul {
          list-style: none;
          margin: 0 auto;
          padding: 0;
          text-align: left;
          max-width: 32em;
        }
        li {
          position: relative;
          padding: 0 0 0 1.4em;
          margin: 0 0 1em;
          line-height: 1.5;
          font-size: 1.05rem;
        }
        li::before {
          content: '•';
          position: absolute;
          left: 0.2em;
          top: 0;
          color: #2346D8;
          font-weight: 700;
        }
        .about .closer {
          margin-top: 1.5em;
          font-weight: 600;
        }
        .footer {
          margin-top: 2.5em;
          padding-top: 1.5em;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
          font-size: 0.9em;
          line-height: 2;
        }
        .divider {
          margin: 0 0.75em;
          color: #888;
        }
        .credit {
          color: #666;
          font-size: 0.85em;
          margin-top: 1em;
        }
      `}</style>
    </div>
  )
}
