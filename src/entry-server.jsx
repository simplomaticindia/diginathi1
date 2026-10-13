import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { SeoContext } from './lib/useSeo'
import { buildHead, headHtml, SITE_URL } from './lib/seo'
import { services, products } from './data/site'

/* Build-time renderer used by scripts/prerender.mjs. */

export const routes = [
  '/',
  '/services',
  ...services.map(s => `/services/${s.slug}`),
  ...products.map(p => `/products/${p.slug}`),
  '/about',
  '/contact',
  '/privacy',
  '/cookies',
  '/terms'
]

export function render(url) {
  const seo = {}
  const html = renderToString(
    <SeoContext.Provider value={seo}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </SeoContext.Provider>
  )
  return { html, head: headHtml(buildHead(seo.fields || { path: url })), fields: seo.fields }
}

export { SITE_URL }
