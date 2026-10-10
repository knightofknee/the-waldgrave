/** @type {import('next').NextConfig} */
const fs = require("fs");
const path = require("path");

// Case-insensitive URLs: build a lowercase → canonical map of every page route at
// build time and hand it to middleware.js through `env` (inlined into the middleware
// bundle). Files keep their capitalization (/CarlsCommentary stays canonical); any
// casing a visitor types is rewritten to the real route. New pages are picked up on
// the next build with nothing to maintain.
function collectRoutes(dir, prefix = "") {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (prefix === "" && entry.name === "api") continue;
      routes.push(...collectRoutes(path.join(dir, entry.name), `${prefix}/${entry.name}`));
      continue;
    }
    const m = entry.name.match(/^(.*)\.(js|jsx|ts|tsx)$/);
    if (!m || m[1].startsWith("_")) continue;
    routes.push(m[1] === "index" ? prefix || "/" : `${prefix}/${m[1]}`);
  }
  return routes;
}

const staticRoutes = {};
const dynamicPrefixes = [];
for (const route of collectRoutes(path.join(__dirname, "pages"))) {
  const bracket = route.indexOf("[");
  if (bracket >= 0) {
    // Dynamic route such as /bekin/invite/[code]: only the static prefix is
    // case-folded; the parameter keeps whatever case the visitor typed.
    const prefix = route.slice(0, bracket);
    dynamicPrefixes.push([prefix.toLowerCase(), prefix]);
  } else {
    staticRoutes[route.toLowerCase()] = route;
  }
}

// Serve the Apple App Site Association file (which has no file extension) as JSON. Next.js serves
// files in /public at the site root, so /.well-known/apple-app-site-association resolves; this just
// forces the correct Content-Type. assetlinks.json already has a .json extension and needs no rule.
// direct democracy's web version: the app's single-page web export lives in
// public/directdemocracy/app (copied in by `npm run publish-web` in the app's
// repo). Real files there (scripts, images) are served as-is; every other
// path under it is a screen of the app, so it gets the app's index.html and
// the app's router takes it from there.
const DD_APP = "/directdemocracy/app";

const nextConfig = {
  // Claude Code previews build into .next-claude so they never collide with
  // the dev server running on port 3000 (two servers sharing .next corrupt it).
  distDir: process.env.CLAUDE_PREVIEW ? ".next-claude" : ".next",
  env: {
    CASE_ROUTES: JSON.stringify({ static: staticRoutes, dynamic: dynamicPrefixes }),
  },
  async rewrites() {
    return {
      afterFiles: [
        { source: DD_APP, destination: `${DD_APP}/index.html` },
        { source: `${DD_APP}/:path((?!_expo/|assets/).*)`, destination: `${DD_APP}/index.html` },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      {
        // Content-hashed file names: a new export gets new names.
        source: `${DD_APP}/_expo/static/:path*`,
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: `${DD_APP}/index.html`,
        headers: [{ key: "Cache-Control", value: "no-cache" }],
      },
      {
        // The app's publish writes a page per public screen (a candidate, a
        // race, an alderman) as an extensionless file, e.g.
        // /directdemocracy/app/official/<id>, so crawlers and link previews
        // get that page's title, description, and content. With no extension
        // Next would serve them as application/octet-stream; this serves them
        // as HTML. Skips _expo/ and assets/ and any path whose last segment
        // has an extension (scripts, images, sitemap.xml).
        source: `${DD_APP}/:path((?!_expo/|assets/)(?:[^/]+/)*[^/.]+)`,
        headers: [{ key: "Content-Type", value: "text/html; charset=utf-8" }],
      },
    ];
  },
};

module.exports = nextConfig;
