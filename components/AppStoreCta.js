import { useEffect, useState } from 'react'

// When the apps still in Google Play testing are expected there. Until a
// page passes its Play listing as `play`, the line under the App Store button
// counts down to this date, then says "soon". Move it if the launch moves.
// A page whose app isn't in Play testing yet passes android={false}.
export const PLAY_EXPECTED = '2026-10-15'

const WORDING = {
  en: {
    label: 'Download on the App Store',
    note: 'Opens the App Store',
    playLabel: 'Get it on Google Play',
    playNote: 'Opens Google Play',
    twoWeeks: 'Coming to Google Play in 2 weeks',
    overAWeek: 'Coming to Google Play in just over a week',
    aWeek: 'Coming to Google Play in a week',
    soon: 'Coming soon to Google Play',
  },
  es: {
    label: 'Descárgala en el App Store',
    note: 'Abre el App Store',
    playLabel: 'Disponible en Google Play',
    playNote: 'Abre Google Play',
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

// The one call to action on each app's page: big store buttons at the
// center of focus, labeled so nobody is surprised when their phone asks to
// open a store. An app live on Google Play passes its listing as `play` and
// gets a second button; otherwise a line says where it stands on Google Play.
export default function AppStoreCta({ url, play, lang = 'en', android: showAndroid = true, children }) {
  const w = WORDING[lang]
  // Worked out in the browser, so a page built days ago still counts from today.
  const [android, setAndroid] = useState(null)
  useEffect(() => setAndroid(playLine(w, new Date())), [w])

  return (
    <div className="appStoreCta">
      <div className="buttons">
        <a className="storeButton" href={url}>
          <span className="small">{w.note}</span>
          <span className="big">{w.label}</span>
        </a>
        {play && (
          <a className="storeButton" href={play}>
            <span className="small">{w.playNote}</span>
            <span className="big">{w.playLabel}</span>
          </a>
        )}
      </div>
      {!play && showAndroid && (
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
        .buttons {
          display: inline-grid;
          gap: 0.75em;
          max-width: 100%;
        }
        @media (min-width: 600px) {
          .buttons {
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
          }
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
