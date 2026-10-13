import { createContext, useContext, useEffect } from 'react'
import { buildHead } from './seo'

/* At build time the prerender passes an object through this context and each
   page writes its SEO fields into it during render. In the browser there is no
   provider, and the effect below keeps <head> in step on client navigation. */
export const SeoContext = createContext(null)

const applyHead = (head) => {
  document.title = head.title
  document.head.querySelectorAll('[data-seo]').forEach(el => el.remove())
  const frag = document.createDocumentFragment()
  head.meta.forEach(([k, v, c]) => {
    const m = document.createElement('meta')
    m.setAttribute(k, v); m.setAttribute('content', c); m.setAttribute('data-seo', '')
    frag.appendChild(m)
  })
  if (head.canonical) {
    const l = document.createElement('link')
    l.rel = 'canonical'; l.href = head.canonical; l.setAttribute('data-seo', '')
    frag.appendChild(l)
  }
  const s = document.createElement('script')
  s.type = 'application/ld+json'; s.textContent = JSON.stringify(head.jsonLd); s.setAttribute('data-seo', '')
  frag.appendChild(s)
  document.head.appendChild(frag)
}

/* fields: { title, description, path, image, type, pageType, jsonLd, noindex, crumb } */
export function useSeo(fields) {
  const ssr = useContext(SeoContext)
  if (ssr) ssr.fields = fields

  const key = JSON.stringify(fields)
  useEffect(() => {
    applyHead(buildHead(JSON.parse(key)))
  }, [key])
}
