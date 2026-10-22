import Link from 'next/link'
import HomeButton from '../../components/HomeButton'

export default function BekinChildSafety() {
  return (
    <div className="container">
      <HomeButton />
      <h1>Child Safety Standards</h1>
      <p className="subtitle">BeKin</p>
      <p className="updated">Last updated: October 20, 2026</p>

      <div className="content">
        <p><strong>App name:</strong> BeKin</p>
        <p><strong>Developer:</strong> Brian Carlisle (Waldgrave)</p>

        <p>BeKin has zero tolerance for child sexual abuse and exploitation (CSAE). These standards apply to everyone who uses BeKin and to all content shared in the app, including profiles, beacons, posts, comments, and chat messages.</p>

        <h2>What is prohibited</h2>
        <p>The following are strictly prohibited on BeKin:</p>
        <ul>
          <li>Child sexual abuse material (CSAM) of any kind, including drawn, animated, or AI-generated imagery that sexualizes minors</li>
          <li>Any content that sexualizes, exploits, or endangers a minor</li>
          <li>Grooming, meaning any attempt to build a relationship with a minor for the purpose of sexual contact or exploitation</li>
          <li>Sextortion, or soliciting sexual images or content from a minor</li>
          <li>Child trafficking, or arranging to meet a minor for sexual purposes</li>
          <li>Sharing, requesting, or linking to any of the above, including links to outside sites</li>
        </ul>

        <h2>Age requirement</h2>
        <p>You must be at least 13 years old to use BeKin. We remove accounts we learn belong to someone under 13.</p>

        <h2>How to report</h2>
        <ul>
          <li><strong>In the app:</strong> use the Report option on any post, comment, or chat message. You can also block any user, which immediately stops them from seeing or contacting you.</li>
          <li><strong>By email:</strong> contact our child safety contact at <a href="mailto:bricarlis@gmail.com">bricarlis@gmail.com</a>. Include the username of the account and a description of what you saw. Please do not attach or forward illegal images.</li>
        </ul>
        <p>If a child is in immediate danger, contact your local police or emergency services first.</p>

        <h2>What we do</h2>
        <ul>
          <li>We review child safety reports as a top priority.</li>
          <li>We remove violating content and permanently ban the accounts responsible.</li>
          <li>We report apparent child sexual abuse material to the National Center for Missing &amp; Exploited Children (NCMEC) through its CyberTipline, and cooperate with law enforcement as required by applicable law.</li>
          <li>We preserve relevant information as required by law to support investigations.</li>
        </ul>

        <h2>Compliance</h2>
        <p>BeKin complies with applicable child safety laws, including requirements to report child sexual abuse material to the appropriate authorities.</p>

        <h2>Child safety contact</h2>
        <p>Brian Carlisle, developer of BeKin<br /><a href="mailto:bricarlis@gmail.com">bricarlis@gmail.com</a></p>
      </div>

      <footer className="footer">
        <Link href="/bekinPrivacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/bekin/delete-account">Delete Account</Link>
        <span className="divider">|</span>
        <Link href="/">Home</Link>
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
