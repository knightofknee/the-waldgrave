import Link from 'next/link'
import AppStoreCta from '../../components/AppStoreCta'

const APP_STORE = 'https://apps.apple.com/us/app/direct-democracy-chicago/id6797189381'

// Builds up to 1.0.10 use this page as the continue URL for Firebase email
// sign-in links; Firebase's handler forwards the link's parameters here.
// Send those on to the handoff page, which opens the app.
export async function getServerSideProps({ query, resolvedUrl }) {
  if (query.mode === 'signIn' && query.oobCode) {
    const q = resolvedUrl.indexOf('?')
    return { redirect: { destination: '/directdemocracy/auth' + (q >= 0 ? resolvedUrl.slice(q) : ''), permanent: false } }
  }
  return { props: {} }
}

export default function DirectDemocracy() {
  return (
    <div className="container">
      <h1>direct democracy</h1>
      <p className="tagline">Chicago&apos;s civic voice: a citywide big board of the people&apos;s concerns, ward-level votes, your whole ballot, and AMAs where the community decides whether officials actually answered.</p>

      <AppStoreCta url={APP_STORE}>
        <p className="also">
          Or <a href="/directdemocracy/app">use it in your browser</a> · <Link href="/directdemocracy/es">Español</Link>
        </p>
      </AppStoreCta>

      <div className="features">
        <div className="feature">
          <h3>The Big Board</h3>
          <p>Raise the issues that matter and rate how much each one matters, from 1 to 5, to rank what the whole city cares about. Every result shows all users and verified residents side by side.</p>
        </div>
        <div className="feature">
          <h3>Your Ward</h3>
          <p>Browse any of the 50 wards. Set your home ward, or verify once as a resident so your votes count in your ward&apos;s verified tallies and your alderman&apos;s grade.</p>
        </div>
        <div className="feature">
          <h3>Real Answers</h3>
          <p>Ask officials anything. The community, never the politician, judges whether a response answered the question, and every official carries a public report card.</p>
        </div>
        <div className="feature">
          <h3>Your Ballot</h3>
          <p>Enter your address once to see the races on your ballot first, from Congress to the school board, with your early voting site and how to vote. Covers November 3, 2026 and February 23, 2027.</p>
        </div>
        <div className="feature">
          <h3>City Council</h3>
          <p>Upcoming meetings with their public comment deadlines, and the Council votes that split, with how each alderman voted, as the City Clerk records them.</p>
        </div>
        <div className="feature">
          <h3>Anonymous by Design</h3>
          <p>Identity verification is handled by a third party; the app keeps only whether you&apos;re verified, your ward, and your district numbers. Your real name is never shown.</p>
        </div>
        <div className="feature">
          <h3>Seven Languages</h3>
          <p>English, Español, 中文, Polski, Tagalog, 한국어, and हिन्दी. Every screen has a help button explaining what&apos;s on it and what you can do.</p>
        </div>
      </div>

      <footer className="footer">
        <Link href="/directdemocracy/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/terms">Terms of Service</Link>
        <p className="credit">A Waldgrave Production</p>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 2em;
          text-align: center;
          color: #2c3e50;
        }
        h1 {
          font-size: 2.5em;
          font-weight: normal;
          margin-bottom: 0.25em;
        }
        .tagline {
          font-size: 1.1em;
          color: #666;
          margin-bottom: 2em;
        }
        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5em;
          justify-content: center;
          margin: 2em 0;
        }
        .feature {
          flex: 1 1 300px;
          max-width: 340px;
          padding: 1.25em;
          border: 1px solid #eee;
          border-radius: 12px;
          text-align: left;
        }
        .feature h3 {
          margin-top: 0;
          color: #0B4A6F;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .feature p {
          line-height: 1.55;
          margin-bottom: 0;
        }
        .also {
          margin: 0;
          font-size: 0.95em;
          color: #666;
        }
        .also :global(a) {
          color: #0B4A6F;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          font-size: 0.9em;
        }
        .divider {
          margin: 0 0.75em;
          color: #ccc;
        }
        .credit {
          color: #999;
          font-size: 0.85em;
          margin-top: 1em;
        }
      `}</style>
    </div>
  )
}
