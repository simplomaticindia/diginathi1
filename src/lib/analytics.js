import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useConsent } from './consent'

/* Google Analytics 4 with Consent Mode v2, in "basic" mode: gtag.js is not even
   requested until the visitor grants analytics consent, so nothing is sent to
   Google before that. Set VITE_GA_ID (G-XXXXXXX) in Vercel to switch it on;
   without it this module does nothing. Advertising signals stay denied always. */

const GA_ID = import.meta.env.VITE_GA_ID

let loaded = false

function gtag() {
  window.dataLayer = window.dataLayer || []
  // gtag expects the arguments object itself
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

function load() {
  if (loaded || !GA_ID) return
  loaded = true
  window[`ga-disable-${GA_ID}`] = false
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    security_storage: 'granted'
  })
  gtag('js', new Date())
  // page views are sent by hand on route change below
  gtag('config', GA_ID, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

/* On withdrawal: stop collection and remove the GA cookies on this domain. */
function revoke() {
  if (!GA_ID) return
  window[`ga-disable-${GA_ID}`] = true
  if (loaded) gtag('consent', 'update', { analytics_storage: 'denied' })
  document.cookie.split(';').map(c => c.trim().split('=')[0]).filter(n => n === '_ga' || n.startsWith('_ga_'))
    .forEach(n => {
      const host = location.hostname
      ;[host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`].forEach(d => {
        document.cookie = `${n}=; Max-Age=0; path=/; domain=${d}`
      })
      document.cookie = `${n}=; Max-Age=0; path=/`
    })
}

export function useAnalytics() {
  const { ready, analytics } = useConsent()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!ready) return
    if (analytics) load()
    else revoke()
  }, [ready, analytics])

  useEffect(() => {
    if (!ready || !analytics || !GA_ID) return
    gtag('event', 'page_view', { page_path: pathname, page_location: location.href, page_title: document.title })
  }, [ready, analytics, pathname])
}
