// The election line above the store buttons on the direct democracy pages,
// picked by today's date in Chicago so the page never advertises an election
// that already happened. Null hides it.
const LINES = {
  en: {
    early: 'Early voting is open in every ward. Election Day is Tuesday, November 3.',
    general: 'It’s Election Day. Polls are open until 7 p.m.',
    next: 'Next up: February 23, 2027, when Chicago picks its mayor and all 50 aldermen.',
    municipal: 'It’s Election Day in Chicago. Polls are open until 7 p.m.',
  },
  es: {
    early: 'El voto anticipado está abierto en todos los distritos. El día de las elecciones es el martes 3 de noviembre.',
    general: 'Hoy es el día de las elecciones. Los lugares de votación abren hasta las 7 p.m.',
    next: 'Lo que sigue: el 23 de febrero de 2027, cuando Chicago elige a su alcalde y a los 50 concejales.',
    municipal: 'Hoy es el día de las elecciones en Chicago. Los lugares de votación abren hasta las 7 p.m.',
  },
}

export function electionLine(lang = 'en') {
  const w = LINES[lang]
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Chicago' })
  if (today < '2026-11-03') return w.early
  if (today === '2026-11-03') return w.general
  if (today < '2027-02-23') return w.next
  if (today === '2027-02-23') return w.municipal
  return null
}
