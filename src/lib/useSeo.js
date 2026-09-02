import { useEffect } from 'react'

const set = (selector, attr, value) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    const m = selector.match(/\[(.+?)="(.+?)"\]/)
    if (m) el.setAttribute(m[1], m[2])
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

/* ponytail: 20 lines instead of react-helmet. Upgrade only if we ever need SSR. */
export function useSeo({ title, description, path }) {
  useEffect(() => {
    const full = title ? `${title} — Diginathi` : 'Diginathi'
    document.title = full
    if (description) {
      set('meta[name="description"]', 'content', description)
      set('meta[property="og:description"]', 'content', description)
    }
    set('meta[property="og:title"]', 'content', full)
    if (path) {
      const url = `https://diginathi.in${path}`
      set('link[rel="canonical"]', 'href', url)
      set('meta[property="og:url"]', 'content', url)
    }
  }, [title, description, path])
}
