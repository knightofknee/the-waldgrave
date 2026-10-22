import Head from 'next/head'
import Link from 'next/link'
import AppStoreCta from '../../components/AppStoreCta'
import HomeButton from '../../components/HomeButton'
import { electionLine } from '../../utils/directDemocracyElection'

const APP_STORE = 'https://apps.apple.com/us/app/direct-democracy-chicago/id6797189381'

// Builds up to 1.0.10 use this page as the continue URL for Firebase email
// sign-in links; Firebase's handler forwards the link's parameters here.
// Send those on to the handoff page, which opens the app.
export async function getServerSideProps({ query, resolvedUrl }) {
  if (query.mode === 'signIn' && query.oobCode) {
    const q = resolvedUrl.indexOf('?')
    return { redirect: { destination: '/directdemocracy/auth' + (q >= 0 ? resolvedUrl.slice(q) : ''), permanent: false } }
  }
  return { props: { election: electionLine('en') } }
}

export default function DirectDemocracy({ election }) {
  return (
    <div className="container">
      <Head>
        <title>direct democracy: Chicago&apos;s civic app</title>
        <meta name="description" content="Take part in your Chicago ward, fill out a mock ballot before you vote, and ask officials the questions your neighbors want answered. Free." />
        <link rel="alternate" hrefLang="en" href="https://www.waldgrave.com/directdemocracy" />
        <link rel="alternate" hrefLang="es" href="https://www.waldgrave.com/directdemocracy/es" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <HomeButton />

      <header className="hero">
        <p className="kicker">Chicago&apos;s civic app</p>
        <h1>direct democracy</h1>
        <p className="tagline">Know when and where your ward&apos;s decisions get made, fill out a mock ballot before you vote, and put the city&apos;s questions to the people who run it.</p>
        {election && <p className="election">{election}</p>}
      </header>

      <AppStoreCta url={APP_STORE}>
        <p className="also">
          Free. Or <a href="/directdemocracy/app">use it in your browser</a> · <Link href="/directdemocracy/es">Español</Link>
        </p>
      </AppStoreCta>

      <section className="lead">
        <h2>Take part in your ward</h2>
        <p className="lede">Pick your ward and see where its decisions get made, and when you can be heard.</p>
        <div className="row">
          <img className="shot" src="/directdemocracy/screens/take-part.jpg" alt="The Take Part section of a ward: zoning changes and police district council meetings" />
          <ul>
            <li><strong>Ward meetings</strong> and the ward office&apos;s address, hours, and newsletter</li>
            <li><strong>Zoning changes</strong> and development hearings, with their comment deadlines</li>
            <li><strong>Police district council</strong> meetings near you</li>
            <li><strong>City Council</strong> meetings with public comment deadlines, and how your alderman voted when the Council split</li>
            <li><strong>Polls from your alderman</strong>, and a report card graded by their own verified residents</li>
          </ul>
        </div>
      </section>

      <section className="lead">
        <h2>Fill out a mock ballot</h2>
        <p className="lede">Enter your address once and see every race you&apos;ll vote in. Read up, pick race by race, and walk into the booth with a cheat sheet.</p>
        <div className="row flip">
          <img className="shot" src="/directdemocracy/screens/ballot.jpg" alt="A race on the mock ballot, with each candidate's background and a Pick button" />
          <ul>
            <li><strong>Every race</strong>, from Congress and the state legislature to county offices, the school board, and judges up for retention</li>
            <li><strong>Judges with a bad bar rating</strong> listed first, so you know who you&apos;re keeping on the bench</li>
            <li><strong>Your cheat sheet</strong> saves as an image or PDF. Your picks stay on your phone, never sent to us</li>
            <li><strong>Where and when to vote</strong>: early voting sites in every ward, dates, and mail ballot links</li>
            <li><strong>The race for mayor</strong> in February 2027: every candidate&apos;s platform, policy by policy, open for comment</li>
          </ul>
        </div>
      </section>

      <section className="lead">
        <h2>The people ask the questions</h2>
        <p className="lede">Anyone can put a question to an official, and neighbors back the questions they want answered too. When the answer comes in, the community decides if it was a real answer or a dodge.</p>
        <div className="row">
          <img className="shot" src="/directdemocracy/screens/alderman.jpg" alt="An alderman's page: a report card, an approval vote, and a box to ask a question" />
          <ul>
            <li><strong>Ask anything</strong>, in public, of your alderman, the mayor, or anyone running</li>
            <li><strong>Back a question</strong> and it counts for more on their report card. Ignoring fifty neighbors costs far more than ignoring one</li>
            <li><strong>Answered or dodged</strong> is the community&apos;s call, never the politician&apos;s</li>
            <li><strong>One question, every mayoral candidate</strong>: see who actually answers it</li>
          </ul>
        </div>
      </section>

      <h2 className="moreTitle">And the rest</h2>
      <div className="features">
        <div className="feature">
          <h3>The Big Board</h3>
          <p>Raise what&apos;s wrong in your ward or the city and rate how much everything else matters. Votes count citywide and by ward, and every result shows everyone next to verified residents.</p>
        </div>
        <div className="feature">
          <h3>Chicago News</h3>
          <p>Headlines from Chicago newsrooms, newest first, never ranked by an algorithm. Narrow it to stories that name your ward.</p>
        </div>
        <div className="feature">
          <h3>Anonymous by Design</h3>
          <p>Verifying is optional and handled by a third party. We keep a yes or no and your ward, never your ID, address, or face. You show up as something like &ldquo;Steadfast Heron.&rdquo;</p>
        </div>
        <div className="feature">
          <h3>Seven Languages</h3>
          <p>English, Español, 中文, Polski, Tagalog, 한국어, and हिन्दी. Every screen has a &ldquo;?&rdquo; explaining what&apos;s on it and what you can do.</p>
        </div>
      </div>

      <div className="closer">
        <h2>Chicago runs better when you&apos;re in it.</h2>
        <AppStoreCta url={APP_STORE} />
      </div>

      <footer className="footer">
        <Link href="/directdemocracy/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/terms">Terms of Service</Link>
        <p className="credit">A Waldgrave Production</p>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Instrument Sans', 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 920px;
          margin: 0 auto;
          padding: 1.5em 16px 2em;
          text-align: center;
          color: #2c3e50;
        }
        .hero {
          margin-top: 0.5em;
        }
        .kicker {
          margin: 0;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0B4A6F;
        }
        h1 {
          font-size: clamp(2.6rem, 8vw, 4.4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          margin: 0.15em 0 0.35em;
        }
        .tagline {
          font-size: clamp(1.1rem, 2.4vw, 1.3rem);
          line-height: 1.5;
          max-width: 34em;
          margin: 0 auto;
          text-wrap: balance;
        }
        .election {
          display: inline-block;
          margin: 1.4em 0 0;
          padding: 0.5em 1.1em;
          border-radius: 999px;
          background: #0B4A6F;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .also {
          margin: 0;
          font-size: 0.95em;
          color: #555;
        }
        .also :global(a) {
          color: #0B4A6F;
        }
        h2 {
          font-size: clamp(1.7rem, 4.5vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 0.4em;
          text-wrap: balance;
        }
        .lead {
          padding: 3em 0;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
        }
        .lede {
          font-size: 1.15rem;
          line-height: 1.55;
          max-width: 34em;
          margin: 0 auto 2em;
          text-wrap: balance;
        }
        .row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2em;
        }
        .shot {
          width: 100%;
          max-width: 270px;
          border-radius: 26px;
          box-shadow: 0 18px 40px rgba(11, 20, 40, 0.35);
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: left;
          max-width: 30em;
        }
        li {
          position: relative;
          padding: 0 0 0 1.4em;
          margin: 0 0 1em;
          line-height: 1.5;
          font-size: 1.05rem;
        }
        li::before {
          content: '✶';
          position: absolute;
          left: 0;
          top: 0.05em;
          color: #0B4A6F;
          font-size: 0.85em;
        }
        li strong {
          font-weight: 600;
        }
        @media (min-width: 760px) {
          .row {
            flex-direction: row;
            justify-content: center;
            gap: 3.5em;
          }
          .row.flip {
            flex-direction: row-reverse;
          }
          .shot {
            flex: 0 0 270px;
          }
        }
        .moreTitle {
          padding-top: 1.4em;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
        }
        .features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25em;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          margin: 1.5em 0 1em;
        }
        @media (min-width: 760px) {
          .features {
            grid-template-columns: 1fr 1fr;
          }
        }
        .feature {
          padding: 1.25em 1.4em;
          border: 1px solid rgba(44, 62, 80, 0.22);
          border-radius: 16px;
          text-align: left;
        }
        .feature h3 {
          margin: 0 0 0.4em;
          color: #0B4A6F;
          font-size: 1.15rem;
          font-weight: 700;
        }
        .feature p {
          margin: 0;
          line-height: 1.55;
        }
        .closer {
          margin-top: 3em;
          padding-top: 2.5em;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
        }
        .footer {
          margin-top: 1em;
          padding-top: 1.5em;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
          font-size: 0.9em;
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
