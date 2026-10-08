import Link from 'next/link'

export default function BasicAutocorrectTerms() {
  return (
    <div className="container">
      <h1>Terms of Service</h1>
      <p className="subtitle">Basic Autocorrect</p>
      <p className="updated">Last updated: October 7, 2026</p>

      <div className="content">
        <p>By using Basic Autocorrect ("the Extension"), you agree to these terms. The Extension is provided by The Waldgrave.</p>

        <h2>Use of the Extension</h2>
        <p>Basic Autocorrect is a free browser extension that automatically corrects common typos as you type. You may use it for any personal or commercial purpose.</p>

        <h2>Your Content</h2>
        <p>Everything you type remains yours. The Extension runs entirely in your browser and never sends your text anywhere. You are responsible for reviewing what you write, including any automatic corrections, before you send, publish, or submit it.</p>

        <h2>Data and Privacy</h2>
        <p>Your use of the Extension is also governed by our <Link href="/basicautocorrect/privacy">Privacy Policy</Link>. In short: the Extension collects no data.</p>

        <h2>Disclaimers</h2>
        <p>The Extension is provided "as is" without warranties of any kind, either express or implied. Autocorrect can occasionally change a word you meant to type; we do not guarantee that the Extension will be error-free or meet your specific requirements.</p>

        <h2>Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, The Waldgrave shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Extension, including damages caused by an automatic correction.</p>

        <h2>Changes to These Terms</h2>
        <p>We may update these terms as the Extension evolves. Continued use of the Extension after changes constitutes acceptance of the updated terms.</p>

        <h2>Contact</h2>
        <p>bricarlis@gmail.com</p>
      </div>

      <footer className="footer">
        <Link href="/basicautocorrect">Basic Autocorrect</Link>
        <span className="divider">|</span>
        <Link href="/basicautocorrect/privacy">Privacy Policy</Link>
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
