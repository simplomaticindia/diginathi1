/* Build step 3 of 3: render every route to static HTML.

   1. `vite build`              → dist/ (client bundle + index.html template)
   2. `vite build --ssr ...`    → dist-ssr/entry-server.js
   3. this script               → dist/<route>.html, dist/404.html, dist/sitemap.xml

   Each page gets its own <title>, description, canonical URL, Open Graph and
   Twitter tags and JSON-LD, so crawlers and link previews see real content
   without running JavaScript. Vercel serves dist/about.html at /about
   (cleanUrls in vercel.json). */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.mjs')

const { render, routes, SITE_URL } = await import(pathToFileURL(ssrEntry).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

/* Optional Google Search Console HTML-tag verification: set GSC_VERIFICATION
   (just the content value) in the Vercel project. DNS verification needs nothing here. */
const gsc = process.env.GSC_VERIFICATION
  ? `<meta name="google-site-verification" content="${process.env.GSC_VERIFICATION}" />`
  : ''

function page(url) {
  const { html, head } = render(url)
  return template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head)
    .replace('<!--gsc-->', gsc)
    .replace('<!--app-html-->', html)
}

const outFile = (url) => (url === '/' ? 'index.html' : `${url.slice(1)}.html`)

for (const url of routes) {
  const file = path.join(dist, outFile(url))
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(url))
}

// Not-found page: rendered from an unmatched path, marked noindex by the page itself.
fs.writeFileSync(path.join(dist, '404.html'), page('/__not-found__'))

// Sitemap: every indexable route. lastmod is the build date.
const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(u => `  <url><loc>${SITE_URL}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerendered ${routes.length} pages + 404, sitemap with ${routes.length} URLs`)
