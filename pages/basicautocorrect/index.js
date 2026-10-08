import Link from 'next/link'

export default function BasicAutocorrect() {
  return (
    <div className="container">
      <h1>Basic Autocorrect</h1>
      <p className="tagline">Autocorrect for your browser. Free. Works locally. Your keystrokes never leave your browser.</p>

      <div className="features">
        <div className="feature">
          <h3>Fixes Typos as You Type</h3>
          <p>Type "dont" and press space: it becomes "don't". Common typos like "teh" and "recieve" are fixed instantly, with no popups and nothing to accept.</p>
        </div>
        <div className="feature">
          <h3>Made for Google Docs</h3>
          <p>Fills the gaps in Docs' own autocorrect, like "cant" and "wont". It also works in regular text boxes across the web.</p>
        </div>
        <div className="feature">
          <h3>Private by Design</h3>
          <p>No accounts, no servers, no tracking, no AI. Everything runs inside your browser, and your own corrections stay on your device.</p>
        </div>
      </div>

      <div className="cta">
        <p>Coming soon to Firefox and Chrome</p>
      </div>

      <footer className="footer">
        <Link href="/basicautocorrect/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/basicautocorrect/terms">Terms of Service</Link>
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
        .cta {
          margin: 2em 0;
          font-size: 1.1em;
          color: #888;
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
