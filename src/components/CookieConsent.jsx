import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useConsent } from '../lib/consent'
import './CookieConsent.css'

/* First-visit banner and the preferences panel ("Cookie settings" in the
   footer reopens it). Accept and Reject sit side by side with equal weight,
   as EU regulators require; nothing optional is on until someone says yes. */

const CATS = [
  { key: 'necessary', title: 'Strictly necessary', body: 'Remembers this choice, and keeps the site secure and working. Always on; nothing here tracks you.', locked: true },
  { key: 'functional', title: 'Functional', body: 'Third-party features that set their own cookies, such as the Google Map on the contact page.' },
  { key: 'analytics', title: 'Analytics', body: 'Google Analytics, so we can see which pages help and which do not. IP addresses are not stored and advertising features are off.' }
]

export default function CookieConsent() {
  const c = useConsent()
  const [draft, setDraft] = useState({ functional: false, analytics: false })
  const dialogRef = useRef(null)

  const showBanner = c.ready && !c.decided && !c.panelOpen
  const showPanel = c.ready && c.panelOpen

  useEffect(() => {
    if (showPanel) {
      setDraft({ functional: c.functional, analytics: c.analytics })
      dialogRef.current?.querySelector('button, input')?.focus()
    }
  }, [showPanel]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!showPanel) return
    const onKey = (e) => { if (e.key === 'Escape') c.closePanel() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showPanel, c])

  if (!showBanner && !showPanel) return null

  if (showBanner) {
    return (
      <section className="cc-banner" role="region" aria-label="Cookie consent">
        <div className="cc-banner-in">
          <div className="cc-copy">
            <p className="cc-title">Your privacy, your choice</p>
            <p>
              We use strictly necessary storage to run this site. With your permission we would
              also use analytics cookies to learn which pages help, and load Google Maps on the
              contact page. You can change this any time under “Cookie settings”.{' '}
              <Link to="/cookies">Cookie policy</Link> · <Link to="/privacy">Privacy policy</Link>
            </p>
            {c.gpc && (
              <p className="cc-gpc">Your browser sends a Global Privacy Control signal, so analytics stays off unless you switch it on.</p>
            )}
          </div>
          <div className="cc-actions">
            <button type="button" className="btn btn--primary" onClick={c.acceptAll}>Accept all</button>
            <button type="button" className="btn btn--primary" onClick={c.rejectAll}>Reject non-essential</button>
            <button type="button" className="btn btn--line" onClick={c.openPanel}>Choose</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="cc-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget && c.decided) c.closePanel() }}>
      <div className="cc-panel" role="dialog" aria-modal="true" aria-labelledby="cc-panel-title" ref={dialogRef}>
        <h2 id="cc-panel-title">Cookie settings</h2>
        <p className="cc-panel-lede">
          Choose what this site may store on your device. Optional categories are off until you
          turn them on, and you can withdraw consent here as easily as you gave it.
        </p>
        <ul className="cc-cats">
          {CATS.map(cat => {
            const on = cat.locked ? true : draft[cat.key]
            return (
              <li key={cat.key}>
                <label className="cc-cat">
                  <span className="cc-cat-text">
                    <b>{cat.title}</b>
                    <span>{cat.body}</span>
                  </span>
                  <input
                    type="checkbox"
                    role="switch"
                    className="cc-switch"
                    checked={on}
                    disabled={cat.locked}
                    aria-checked={on}
                    onChange={(e) => setDraft(d => ({ ...d, [cat.key]: e.target.checked }))}
                  />
                </label>
              </li>
            )
          })}
        </ul>
        {c.gpc && <p className="cc-gpc cc-gpc--panel">Global Privacy Control detected: we treat it as an opt-out of analytics. You can still turn analytics on here.</p>}
        <p className="cc-panel-note">
          We do not sell or share personal information for advertising. Details in the{' '}
          <Link to="/cookies" onClick={c.closePanel}>cookie policy</Link> and{' '}
          <Link to="/privacy" onClick={c.closePanel}>privacy policy</Link>.
        </p>
        <div className="cc-panel-actions">
          <button type="button" className="btn btn--line" onClick={c.rejectAll}>Reject non-essential</button>
          <button type="button" className="btn btn--line" onClick={() => c.save({ functional: true, analytics: true })}>Accept all</button>
          <button type="button" className="btn btn--primary" onClick={() => c.save(draft)}>Save choices</button>
        </div>
      </div>
    </div>
  )
}

/* Footer link that reopens the panel. */
export function CookieSettingsLink({ children = 'Cookie settings', className }) {
  const c = useConsent()
  return <button type="button" className={className} onClick={c.openPanel}>{children}</button>
}
