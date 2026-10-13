import { useEffect, useRef } from 'react'
import './ProductTour.css'

/* Tabbed tour of real product screens. Controlled, so a page can jump to a
   screen from elsewhere (a rollout step, a feature row).
   screens: [{ key, label, sub, img, url, title, points, phone? }] */
export default function ProductTour({ screens, base, host, current, onChange }) {
  const tabsRef = useRef(null)
  const n = screens.length

  useEffect(() => {
    screens.forEach(s => { new Image().src = `${base}/${s.img}` })
  }, [screens, base])

  const go = (i, focus) => {
    const k = (i + n) % n
    onChange(k)
    if (focus) {
      const b = tabsRef.current?.children[k]
      b?.focus({ preventScroll: true })
      b?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    }
  }

  const onKey = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); go(current + 1, true) }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); go(current - 1, true) }
  }

  const s = screens[current]
  const tabId = (key) => `pt-${host}-${key}`
  return (
    <div className="pt-tour">
      <div className="pt-tabs" role="tablist" aria-label="Product screens" ref={tabsRef} onKeyDown={onKey}>
        {screens.map((t, i) => (
          <button
            key={t.key} id={tabId(t.key)} type="button" role="tab"
            aria-selected={i === current} tabIndex={i === current ? 0 : -1}
            onClick={() => go(i, true)}
          >
            <b>{t.label}</b><small>{t.sub}</small>
          </button>
        ))}
      </div>

      <div className="pt-viewer" role="tabpanel" aria-labelledby={tabId(s.key)} aria-live="polite">
        {s.phone ? (
          <div key={s.key} className="pt-phone pt-swap">
            <img src={`${base}/${s.img}`} alt={s.title} width="780" height="1688" />
          </div>
        ) : (
          <div key={s.key} className="pt-browser pt-swap">
            <div className="pt-browser-bar"><i /><i /><i /><span>{host}/{s.url}</span></div>
            <img src={`${base}/${s.img}`} alt={s.title} width="1600" height="1000" />
          </div>
        )}
        <div className="pt-viewer-copy">
          <div>
            <h3>{s.title}</h3>
            <ul>{s.points.map(p => <li key={p}>{p}</li>)}</ul>
          </div>
          <div className="pt-pager">
            <button type="button" aria-label="Previous screen" onClick={() => go(current - 1, false)}>←</button>
            <button type="button" aria-label="Next screen" onClick={() => go(current + 1, false)}>→</button>
          </div>
        </div>
      </div>
    </div>
  )
}
