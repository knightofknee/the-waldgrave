import Head from 'next/head'
import { useRouter } from 'next/router'
import AppStoreCta from '../../../components/AppStoreCta'
import HomeButton from '../../../components/HomeButton'

// Chore friend invite. With the app installed on iOS, this link opens the app
// directly (apple-app-site-association claims /escapefromhadesirl/friend/*),
// so this page is only seen without the app, or on Android: open it in the
// app via its URL scheme, or install it and type the code.
export default function EscapeFromHadesFriendInvite() {
  const { query } = useRouter()
  const code = typeof query.code === 'string' ? query.code.toUpperCase().replace(/[^A-Z0-9]/g, '') : ''

  return (
    <div className="container">
      <HomeButton />
      <Head>
        <title>Chore friend invite | Escape from Hades IRL</title>
      </Head>
      <h1>Share chores</h1>
      <p className="tagline">Someone wants to share chores with you on Escape from Hades IRL. Either of you can mark them done.</p>

      {code && (
        <>
          <a className="open" href={`escapefromhadesirl://friend/${code}`}>Open in the app</a>
          <p className="codeLabel">Or open Chores, tap +, then Chore friends, and enter:</p>
          <p className="code">{code}</p>
        </>
      )}

      <AppStoreCta url="https://apps.apple.com/us/app/escape-from-hades-irl/id6760863438" android={false} />

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 520px;
          margin: 0 auto;
          padding: 48px 20px;
          text-align: center;
        }
        h1 { font-size: 2rem; margin-bottom: 8px; }
        .tagline { opacity: 0.8; line-height: 1.5; margin-bottom: 28px; }
        .open {
          display: inline-block;
          background: #e74c3c;
          color: #fff;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
        }
        .codeLabel { margin-top: 24px; opacity: 0.7; }
        .code {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          margin: 8px 0 32px;
        }
      `}</style>
    </div>
  )
}
