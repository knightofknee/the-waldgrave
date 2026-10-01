import Link from 'next/link'
import AppStoreCta from '../../components/AppStoreCta'

export default function BeKin() {
  return (
    <div className="container">
      <h1>BeKin</h1>
      <p className="tagline">Friends-only social media. Light the beacon when you&apos;re down to hang, and see only your friends&apos; posts.</p>

      <AppStoreCta url="https://apps.apple.com/us/app/bekin-by-the-waldgrave/id6746952014" />

      <div className="features">
        <div className="feature">
          <h3>Light the Beacon</h3>
          <p>Let your friends know you&apos;re down to hang.</p>
        </div>
        <div className="feature">
          <h3>Just Your Friends</h3>
          <p>You choose whose posts and recommendations you see. No algorithms, and no notifications required.</p>
        </div>
        <div className="feature">
          <h3>Built to Be Put Down</h3>
          <p>A post limit keeps it from taking over your day. Yes, we want to minimize your app usage.</p>
        </div>
      </div>

      <footer className="footer">
        <Link href="/bekinPrivacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/bekin/delete-account">Delete Account</Link>
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
          flex: 1;
          min-width: 200px;
          max-width: 300px;
          padding: 1.5em;
          border: 1px solid #eee;
          border-radius: 8px;
          text-align: left;
        }
        .feature h3 {
          margin-top: 0;
          color: #42b983;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          font-size: 0.85em;
        }
        .footer a {
          color: #42b983;
        }
        .divider {
          margin: 0 0.5em;
          color: #ccc;
        }
        .credit {
          margin-top: 0.75em;
          font-size: 0.8em;
          color: #999;
        }
      `}</style>
    </div>
  )
}
