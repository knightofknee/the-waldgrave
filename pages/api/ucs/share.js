// Link previews for shared Universal Complaint System links.
//
// The web version of the app is a single page (public/ucs/app/index.html), so a
// link to one complaint would otherwise preview as just "Universal Complaint
// System". next.config.js sends /ucs/app/point/<id>, /subject/<id> and
// /submission/<id> here. People get the app's page exactly as before, with no
// waiting. Link-preview fetchers (Messages, Slack, WhatsApp, search engines)
// get the same page with that complaint's title and description written in,
// looked up from the app's own public endpoint (functions/src/share.ts in the
// UniversalComplaintSystem repo). If the lookup fails or is slow, the plain
// page is served: a shared link never breaks because of a preview.
import fs from 'fs'
import path from 'path'

const PREVIEW = 'https://us-central1-universal-complaint-system.cloudfunctions.net/linkPreview'
const SHELL = path.join(process.cwd(), 'public', 'ucs', 'app', 'index.html')
const SITE = 'Universal Complaint System'
const IMAGE = 'https://www.waldgrave.com/ucs/icon.png'
const FETCHERS =
  /bot|crawl|spider|facebookexternalhit|facebot|whatsapp|slack|discord|telegram|linkedin|pinterest|embedly|preview|skype|vkshare|iframely|mastodon|signal/i
const KINDS = ['point', 'subject', 'submission']

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export default async function handler(req, res) {
  const kind = String(req.query.kind || '')
  const id = String(req.query.id || '')
  let html
  try {
    html = fs.readFileSync(SHELL, 'utf8')
  } catch {
    res.status(404).end()
    return
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'no-cache')

  const wantsPreview =
    FETCHERS.test(req.headers['user-agent'] || '') && KINDS.includes(kind) && /^[A-Za-z0-9_-]{1,100}$/.test(id)
  if (!wantsPreview) {
    res.status(200).send(html)
    return
  }
  let meta = null
  try {
    const r = await fetch(`${PREVIEW}?kind=${kind}&id=${id}`, { signal: AbortSignal.timeout(4000) })
    if (r.ok) {
      const found = await r.json()
      if (found && typeof found.title === 'string' && typeof found.description === 'string') meta = found
    }
  } catch {
    // Fall through to the plain page.
  }
  if (!meta) {
    res.status(200).send(html)
    return
  }
  const title = esc(meta.title)
  const description = esc(meta.description)
  const tags = [
    `<meta name="description" content="${description}"/>`,
    `<meta property="og:type" content="article"/>`,
    `<meta property="og:site_name" content="${SITE}"/>`,
    `<meta property="og:title" content="${title}"/>`,
    `<meta property="og:description" content="${description}"/>`,
    `<meta property="og:url" content="https://www.waldgrave.com/ucs/app/${kind}/${id}"/>`,
    `<meta property="og:image" content="${IMAGE}"/>`,
    `<meta name="twitter:card" content="summary"/>`,
    `<meta name="twitter:title" content="${title}"/>`,
    `<meta name="twitter:description" content="${description}"/>`,
  ].join('')
  res.status(200).send(
    html.replace(/<title>[^<]*<\/title>/, `<title>${title} · ${SITE}</title>`).replace('</head>', `${tags}</head>`),
  )
}
