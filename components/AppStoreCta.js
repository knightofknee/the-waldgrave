import { useEffect, useState } from 'react'

// When the apps in Google Play testing (BeKin and direct democracy, since
// 2026-10-01) are expected there. The line under the App Store button
// counts down to it, then says "soon". Move this date if the launch moves.
// A page whose app isn't in Play testing yet passes android={false}.
export const PLAY_EXPECTED = '2026-10-15'

const WORDING = {
  en: {
    label: 'Download on the App Store',
    note: 'Opens the App Store',
    twoWeeks: 'Coming to Google Play in 2 weeks',
    overAWeek: 'Coming to Google Play in just over a week',
    aWeek: 'Coming to Google Play in a week',
    soon: 'Coming soon to Google Play',
  },
  es: {
    label: 'Descárgala en el App Store',
    note: 'Abre el App Store',
    twoWeeks: 'Llega a Google Play en 2 semanas',
    overAWeek: 'Llega a Google Play en poco más de una semana',
    aWeek: 'Llega a Google Play en una semana',
    soon: 'Próximamente en Google Play',
  },
}

/** The Google Play line for today: 2 weeks, just over a week, a week, then soon. */
function playLine(w, now) {
  const days = Math.ceil((new Date(`${PLAY_EXPECTED}T00:00:00-05:00`) - now) / 86400000)
  if (days >= 14) return w.twoWeeks
  if (days > 7) return w.overAWeek
  if (days === 7) return w.aWeek
  return w.soon
}

// The one call to action on each app's page: a big App Store button at the
// center of focus, labeled so nobody is surprised when their phone asks to
// open the App Store. Under it, where the app stands on Google Play.
export default function AppStoreCta({ url, lang = 'en', android: showAndroid = true, children }) {
  const w = WORDING[lang]
  // Worked out in the browser, so a page built days ago still counts from today.
  const [android, setAndroid] = useState(null)
  useEffect(() => setAndroid(playLine(w, new Date())), [w])

  return (
    <div className="appStoreCta">
      <a className="storeButton" href={url}>
        <span className="small">{w.note}</span>
        <span className="big">{w.label}</span>
      </a>
      {showAndroid && (
        <p className="android" style={{ visibility: android ? 'visible' : 'hidden' }}>
          {android ?? w.soon}
        </p>
      )}
      {children}
      <style jsx>{`
        .appStoreCta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6em;
          margin: 1.5em 0 2.5em;
        }
        .storeButton {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15em;
          min-width: 240px;
          max-width: 100%;
          padding: 0.75em 1.3em;
          border-radius: 14px;
          background: #000;
          color: #fff;
          text-decoration: none;
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          transition: opacity 0.15s;
        }
        .storeButton:hover {
          opacity: 0.85;
        }
        .small {
          font-size: 0.75em;
          letter-spacing: 0.04em;
          opacity: 0.8;
        }
        .big {
          font-size: 1.2em;
          font-weight: 700;
          white-space: nowrap;
        }
        .android {
          margin: 0;
          color: #666;
          font-size: 0.95em;
        }
      `}</style>
    </div>
  )
}
