import Link from 'next/link'
import Head from 'next/head'
import AppStoreCta from '../../components/AppStoreCta'
import HomeButton from '../../components/HomeButton'

export default function BeKin() {
  return (
    <div className="container">
      <Head>
        <title>BeKin: light your beacon when you&apos;re free to hang</title>
        <meta name="description" content="Light your beacon when you're free. Your friends see it and say they're in. Just your friends, no feed to scroll." />
        <meta property="og:title" content="BeKin" />
        <meta property="og:description" content="Free to hang? Light your beacon. Your friends see it and say they're in." />
        <meta property="og:image" content="https://www.waldgrave.com/bekin/icon.png" />
      </Head>
      <HomeButton />
      <h1>BeKin</h1>
      <p className="tagline">Free to hang? Light your beacon. Your friends see it and say they&apos;re in.</p>

      <AppStoreCta
        url="https://apps.apple.com/us/app/bekin-by-the-waldgrave/id6746952014"
        play="https://play.google.com/store/apps/details?id=com.waldgrave.bekin"
      >
        <p className="also">
          Free app, or <a href="/bekin/app">use your browser</a>
        </p>
      </AppStoreCta>

      <div className="features">
        <div className="feature">
          <h3>Light it</h3>
          <p>One tap says you&apos;re free tonight. Add a time and a note if you have a plan, or don&apos;t.</p>
        </div>
        <div className="feature">
          <h3>Friends jump in</h3>
          <p>They get the alert, tap &quot;I&apos;m in&quot;, and the plan comes together in the beacon&apos;s chat.</p>
        </div>
        <div className="feature">
          <h3>Anyone can join</h3>
          <p>Text your beacon to people who don&apos;t have the app. They can see it and say they&apos;re in from the link.</p>
        </div>
      </div>

      <p className="fineprint">
        Just your friends: no strangers, no ads, no feed built to keep you scrolling. Open it when you&apos;re free,
        put it down when you&apos;re not.
      </p>

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
        .also {
          margin: 0.75em 0 0;
          font-size: 0.95em;
          color: #666;
        }
        .also a {
          color: #42b983;
        }
        .fineprint {
          max-width: 560px;
          margin: 0 auto;
          color: #666;
          line-height: 1.5;
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
