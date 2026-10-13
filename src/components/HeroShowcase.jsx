import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CaptureDemo from './CaptureDemo'
import './HeroShowcase.css'

/* The hero's moving part: the three things the company is hired for, each shown
   doing its job rather than described. Rotates on its own until someone picks a
   tab; never rotates for people who asked for reduced motion. */

const TABS = [
  { id: 'build', num: '01', label: 'Software we build', short: 'Software' },
  { id: 'agent', num: '02', label: 'AI agents', short: 'AI agents' },
  { id: 'assist', num: '03', label: 'AI in your ERP', short: 'AI in ERP' },
  { id: 'dms', num: 'DMS', label: 'DigiDocSmart', short: 'DigiDocSmart', product: true },
  { id: 'far', num: 'FAR', label: 'DigiAssetTrack', short: 'DigiAssetTrack', product: true }
]
const ROTATE_MS = 8000

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/* Counts 0 → n once, so rows arrive one after another. */
function useSteps(n, ms = 260) {
  const [step, setStep] = useState(reducedMotion() ? n : 0)
  useEffect(() => {
    if (reducedMotion()) return
    let i = 0
    const t = setInterval(() => { i += 1; setStep(i); if (i >= n) clearInterval(t) }, ms)
    return () => clearInterval(t)
  }, [n, ms])
  return step
}

/* ------------------------------------------------------------ 01 build */

const ORDERS = [
  { id: 'SO-20418', who: 'Mehta Pharma, Howrah', stage: 'Out for delivery', tone: 'go', eta: '14:30' },
  { id: 'SO-20421', who: 'Lifeline Clinics', stage: 'Packed', tone: 'ok', eta: '16:00' },
  { id: 'SO-20425', who: 'Sunrise Diagnostics', stage: 'Short by 2 cartons', tone: 'flag', eta: 'Hold' },
  { id: 'SO-20427', who: 'City Care Hospital', stage: 'Picking', tone: 'ok', eta: '17:15' }
]

function BuildPanel() {
  const step = useSteps(ORDERS.length + 1)
  return (
    <figure className="hs-fig">
      <div className="hs-surface">
        <div className="hs-win">
          <div className="hs-win-bar"><i /><i /><i /><span>dispatch.yourcompany.in</span></div>
          <div className="hs-app">
            <div className="hs-app-head">
              <b>Dispatch board</b>
              <span>Tuesday · 42 orders · 3 vans out</span>
            </div>
            <ul className="hs-orders">
              {ORDERS.map((o, i) => (
                <li key={o.id} className={i < step ? 'is-in' : ''}>
                  <span className="hs-o-id">{o.id}</span>
                  <span className="hs-o-who">{o.who}</span>
                  <span className={`hs-chip hs-chip--${o.tone}`}>{o.stage}</span>
                  <span className="hs-o-eta">{o.eta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={`hs-ship ${step > ORDERS.length ? 'is-in' : ''}`}>
          <span className="hs-dot" /> Sprint 7 shipped Friday: route planning and delivery photos, live on staging with your data.
        </p>
      </div>
      <figcaption>
        Software shaped around how your operation runs, delivered in two-week slices you can
        click through. You own every line of it.
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------ 03 assist */

const HOLDS = [
  { inv: 'KOG-2627-0733', why: 'Billed 6,100 m³ of oxygen, goods receipt says 5,840.' },
  { inv: 'MEQ-INV-55120', why: 'Coil replacement for ₹1,42,500 is not on PO/0098.' },
  { inv: 'BLL/0926/221', why: 'No purchase order quoted on the invoice.' }
]

function AssistPanel() {
  const step = useSteps(HOLDS.length + 3, 420)
  return (
    <figure className="hs-fig">
      <div className="hs-surface hs-surface--assist">
        <div className="hs-erp" aria-hidden="true">
          <div className="hs-erp-bar">Your ERP · Purchase invoices</div>
          {[['KOG-2627-0733', 'On hold'], ['MEQ-INV-55120', 'On hold'], ['ESS/2627/0418', 'Posted'], ['BLL/0926/221', 'On hold'], ['PLD/26/09/1187', 'Posted']].map(([n, s]) => (
            <div key={n} className="hs-erp-row">
              <span>{n}</span>
              <span className={s === 'On hold' ? 'is-hold' : 'is-ok'}>{s}</span>
            </div>
          ))}
        </div>

        <div className="hs-chat">
          <p className="hs-q">Why are three supplier invoices on hold?</p>
          <div className={`hs-a ${step > 0 ? 'is-in' : ''}`}>
            <p>Two don’t match what was received, and one has no purchase order.</p>
            <ul>
              {HOLDS.map((h, i) => (
                <li key={h.inv} className={i + 1 < step ? 'is-in' : ''}><b>{h.inv}</b> {h.why}</li>
              ))}
            </ul>
            <p className={`hs-src ${step > HOLDS.length ? 'is-in' : ''}`}>From the purchase register, goods receipts and PO master.</p>
          </div>
          <div className={`hs-act ${step > HOLDS.length + 1 ? 'is-in' : ''}`}>
            <span className="hs-act-btn">Draft a query to Kolkata Oxygen</span>
            <span className="hs-act-note">Sends only after you approve</span>
          </div>
        </div>
      </div>
      <figcaption>
        AI added to the system you already run. It reads with the signed-in user’s
        permissions, shows its sources, and writes nothing without approval.
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------ products */

function ProductPanel({ name, line, img, alt, phone, to, caption }) {
  return (
    <figure className="hs-fig">
      <div className="hs-surface hs-surface--product">
        <div className="hs-shot">
          <div className="hs-win-bar"><i /><i /><i /><span>{name.toLowerCase()}</span></div>
          <img src={img} alt={alt} width="1600" height="1000" />
          {phone && <img className="hs-phone" src={phone} alt="" width="780" height="1688" />}
        </div>
        <div className="hs-prod-foot">
          <p><b>{name}</b> {line}</p>
          <Link to={to} className="hs-prod-link">See {name} <ArrowRight size={15} /></Link>
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------ shell */

export default function HeroShowcase() {
  const [tab, setTab] = useState(0)
  const [auto, setAuto] = useState(!reducedMotion())
  const [paused, setPaused] = useState(false)
  const tabsRef = useRef(null)

  useEffect(() => {
    if (!auto || paused) return
    const t = setTimeout(() => setTab(i => (i + 1) % TABS.length), ROTATE_MS)
    return () => clearTimeout(t)
  }, [tab, auto, paused])

  const pick = (i, focus) => {
    setAuto(false)
    setTab(i)
    if (focus) tabsRef.current?.children[i]?.focus()
  }
  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); pick((tab + 1) % TABS.length, true) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); pick((tab + TABS.length - 1) % TABS.length, true) }
  }

  return (
    <div
      className="hs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hs-tabs" role="tablist" aria-label="What we do, running" ref={tabsRef} onKeyDown={onKey}>
        {TABS.map((t, i) => (
          <button
            key={t.id} id={`hs-tab-${t.id}`} type="button" role="tab"
            aria-label={t.label} aria-selected={i === tab} aria-controls="hs-panel" tabIndex={i === tab ? 0 : -1}
            className={t.product ? 'is-product' : ''}
            onClick={() => pick(i)}
          >
            <span className="hs-tab-num">{t.num}</span>
            <span className="hs-tab-long">{t.label}</span>
            <span className="hs-tab-short" aria-hidden="true">{t.short}</span>
            {i === tab && auto && !paused && <span className="hs-tab-timer" key={tab} />}
          </button>
        ))}
      </div>
      <div className="hs-panel" id="hs-panel" role="tabpanel" aria-labelledby={`hs-tab-${TABS[tab].id}`}>
        {tab === 0 && <BuildPanel />}
        {tab === 1 && <CaptureDemo />}
        {tab === 2 && <AssistPanel />}
        {tab === 3 && (
          <ProductPanel
            name="DigiDocSmart" to="/products/digidocsmart"
            line="Documents, approvals and an audit trail you can verify."
            img="/assets/dms/dashboard.jpg"
            alt="DigiDocSmart dashboard with pending approvals and recent audit events"
            caption="Our document management product, in use today. Cloud or on-premises, DPDP Act ready."
          />
        )}
        {tab === 4 && (
          <ProductPanel
            name="DigiAssetTrack" to="/products/digiassettrack"
            line="QR-tagged fixed asset register, verified by phone."
            img="/assets/dat/dashboard.jpg" phone="/assets/dat/phone-verify.jpg"
            alt="DigiAssetTrack dashboard with the tagging pipeline and verification progress"
            caption="Our fixed asset product: tag, verify offline, depreciate under Schedule II, and prove it to the auditor."
          />
        )}
      </div>
    </div>
  )
}
