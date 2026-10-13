import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import ProductTour from '../components/ProductTour'
import { company } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './Product.css'
import './DigiAssetTrack.css'

/* Screens come from a demo database (Demo Healthcare Pvt. Ltd., 283 assets), not a customer. */
const IMG = '/assets/dat'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/* In-page jumps scroll directly rather than through the router, so the URL stays clean. */
const jump = (id) => (e) => {
  e?.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
}

/* ==========================================================================
   Scan demo (hero)
   ========================================================================== */

const SCANS = [
  { tag: 'DN/KOL/MED/00001', name: 'Dräger Savina 300', asset: 'Dräger Savina 300 ventilator', exp: 'Kolkata › Tower A › ICU', expOk: 'same room', held: 'ICU nursing', res: 'Found', resOk: 'saved', warn: false, note: 'Saved on the phone; sends when there is signal.' },
  { tag: 'DN/KOL/MED/00015', name: 'GE MAC 5500 HD', asset: 'GE Healthcare MAC 5500 HD ECG', exp: 'Kolkata › Tower A › Ward 2A', expOk: 'other room', held: 'Cardiology', res: 'Found here, expected in Ward 2A', resOk: 'flagged', warn: true, note: 'Recorded where it was seen. The location can be corrected later.' },
  { tag: 'DN/KOL/IT/00042', name: 'Dell Latitude 5440', asset: 'Dell Latitude 5440 laptop', exp: 'Kolkata › Tower A › ICU', expOk: 'same room', held: 'Dr. Ananya Mukherjee', res: 'Found, damaged: cracked hinge', resOk: 'saved', warn: true, note: 'Damaged items go to the maintenance list.' },
  { tag: 'DN/KOL/ELE/00008', name: 'Hikvision DS-2CD1023', asset: 'Hikvision CCTV camera', exp: 'Kolkata › Tower A › ICU', expOk: 'same room', held: 'Facilities', res: 'Found', resOk: 'saved', warn: false, note: 'One room done. Missing items show up in the reconciliation.' }
]
const ROOM_TOTAL = 21

function QrMark() {
  return (
    <svg viewBox="0 0 25 25" role="img" aria-label="QR code on the sticker">
      <path fill="#16211F" d="M0 0h7v7H0zM18 0h7v7h-7zM0 18h7v7H0z" />
      <path fill="#F7F3EA" d="M1 1h5v5H1zM19 1h5v5h-5zM1 19h5v5H1z" />
      <path fill="#16211F" d="M2 2h3v3H2zM20 2h3v3h-3zM2 20h3v3H2zM9 0h2v2H9zM12 1h2v3h-2zM9 4h2v2H9zM15 3h2v2h-2zM8 8h3v2H8zM12 7h2v4h-2zM16 8h2v2h-2zM20 9h3v2h-3zM0 9h2v3H0zM3 10h3v2H3zM9 12h2v3H9zM13 13h3v2h-3zM18 12h2v3h-2zM22 13h3v2h-3zM8 17h2v2H8zM11 16h2v3h-2zM15 17h3v3h-3zM20 17h2v2h-2zM23 18h2v4h-2zM9 21h3v2H9zM13 22h2v3h-2zM16 21h2v2h-2zM19 21h3v4h-3z" />
    </svg>
  )
}

function ScanDemo() {
  const [at, setAt] = useState(0)
  const [checked, setChecked] = useState(15)
  const [scanning, setScanning] = useState(false)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const next = () => {
    if (scanning) return
    const advance = () => {
      setAt(a => (a + 1) % SCANS.length)
      setChecked(c => (c >= ROOM_TOTAL ? 15 : c + 1))
    }
    if (prefersReducedMotion()) return advance()
    setScanning(true)
    timers.current = [setTimeout(advance, 650), setTimeout(() => setScanning(false), 1150)]
  }

  const s = SCANS[at]
  return (
    <>
      <div className={`dat-scan ${scanning ? 'is-scanning' : ''}`} aria-labelledby="dat-scan-label">
        <div className="dat-sticker">
          <div className="dat-sticker-org">Property of Demo Healthcare</div>
          <div className="dat-sticker-qr"><QrMark /><div className="dat-beam" /></div>
          <div>
            <div className="dat-sticker-tag">{s.tag}</div>
            <div className="dat-sticker-nm">{s.name}</div>
          </div>
        </div>
        <ul className="dat-fields" aria-live="polite">
          <li><small>asset</small><span className="v">{s.asset}</span><span className="ok">matched</span></li>
          <li><small>expected_location</small><span className="v">{s.exp}</span><span className={`ok ${s.expOk !== 'same room' ? 'warn' : ''}`}>{s.expOk}</span></li>
          <li><small>held_by</small><span className="v">{s.held}</span><span className="ok">on record</span></li>
          <li><small>result</small><span className="v">{s.res}</span><span className={`ok ${s.warn ? 'warn' : ''}`}>{s.resOk}</span></li>
        </ul>
        <div className="dat-scan-foot">
          <div
            className="dat-meter" role="progressbar" aria-label="ICU checked"
            aria-valuemin={0} aria-valuemax={ROOM_TOTAL} aria-valuenow={checked}
          >
            <span style={{ width: `${Math.round(checked * 100 / ROOM_TOTAL)}%` }} />
          </div>
          <p id="dat-scan-label">{checked} of {ROOM_TOTAL} checked in the ICU. {s.note}</p>
          <button className="btn btn--accent" type="button" onClick={next}>Scan next sticker</button>
        </div>
      </div>
      <p className="dat-scan-note">
        Try it: this is how a verifier works through a room. Each scan fills in what the
        register expects, and anything out of place is flagged.
      </p>
    </>
  )
}

/* ==========================================================================
   Product tour
   ========================================================================== */

const SCREENS = [
  { key: 'dashboard', label: 'Dashboard', sub: 'What needs doing today', img: 'dashboard.jpg', url: 'dashboard', title: 'Everything waiting on you, on one screen.', points: ['The register as a pipeline, from no tag number to sticker fixed', 'Approvals, overdue returns and expiring warranties counted', 'Verification progress and the audit trail status'] },
  { key: 'assets', label: 'Asset register', sub: 'Search and filter', img: 'assets.jpg', url: 'assets', title: 'Every asset, where it is and who holds it.', points: ['Search by tag, name, serial, make or model', 'Filter by branch, room, category, status and tag progress', 'Tick assets to print stickers, move or dispose of them together'] },
  { key: 'tagging', label: 'Tagging', sub: 'Numbers and stickers', img: 'tagging.jpg', url: 'tagging/progress', title: 'Tagging that finishes instead of stalling.', points: ['Tag numbers in your own format, issued in walking order', 'QR and barcode stickers on A4 sheets or label printers', 'Progress per branch, so you see which site is behind'] },
  { key: 'phone', label: 'Phone verification', sub: 'Scan room by room', img: 'phone-verify.jpg', phone: true, url: 'verification', title: 'The phones your staff already carry.', points: ['Scan with the camera or a handheld scanner', 'Works offline, sends checks when signal returns', 'Assets in the wrong room are recorded where they were seen'] },
  { key: 'verification', label: 'Verification cycle', sub: 'Every room, every verifier', img: 'verification.jpg', url: 'verification/2', title: 'A whole verification round, room by room.', points: ['Assign verifiers to each location', 'Live progress: found, damaged, elsewhere, not found', 'Reconciliation and write-off when the round closes'] },
  { key: 'movement', label: 'Movements', sub: 'Approvals and gate passes', img: 'movement.jpg', url: 'movements/12', title: 'Transfers with approval and a paper trail at the gate.', points: ['Room, department, branch or repair vendor', 'Gate passes and delivery challans as PDF', 'GST notes for transfers between states, e-way bill reminders'] },
  { key: 'audit', label: 'Audit log', sub: 'Signed and checked daily', img: 'audit.jpg', url: 'admin/audit', title: 'A record of who changed what.', points: ['Every change with the value before and after', 'Daily integrity check with a receipt by email', 'Compare any old receipt to prove nothing was removed'] },
  { key: 'reports', label: 'Reports', sub: '17, in Excel and PDF', img: 'reports.jpg', url: 'reports', title: 'Ready for the statutory audit.', points: ['Register, depreciation schedule, reconciliation, gate passes', 'Warranty, AMC and maintenance cost', 'Each report respects the branches the user may see'] },
  { key: 'dark', label: 'Dark mode', sub: 'Light, dark or automatic', img: 'dashboard-dark.jpg', url: 'dashboard', title: 'Easy on the eyes on a night shift.', points: ['Light, dark, or follow the device', 'Same layout and data in both', 'Installs on a phone home screen like an app'] }
]
const screenIndex = (key) => SCREENS.findIndex(s => s.key === key)

/* ==========================================================================
   Rollout steps
   ========================================================================== */

const STEPS = [
  { t: 'Import the register', s: 'Excel template, checked row by row', d: 'Download the template, paste in your current sheet and upload it. Every row is checked against your branches, rooms and categories, and you see each problem with its row number before anything is saved.', kv: [['Template', 'assets, employees, vendors, locations'], ['Checks', 'missing room, bad dates, duplicate serials']], screen: 'assets' },
  { t: 'Give tag numbers', s: 'Your own format, in walking order', d: 'Choose a format per branch and category, such as DN/KOL/IT/00042. Numbers are issued in the order someone will walk the building, so stickers come off the sheet in room order.', kv: [['Format', 'DN/{branch}/{category}/{00000}'], ['Also', 'reserve ranges for pre-printed stickers']], screen: 'tagging' },
  { t: 'Print and fix stickers', s: 'QR and barcode on A4 sheets', d: 'Print stickers on standard A4 label sheets. As each room is done, mark its stickers as fixed; the dashboard pipeline moves the assets along and shows what is left.', kv: [['Sheets', 'A4, 24 per sheet, or label printers'], ['Reprints', 'logged with who printed and why']], screen: 'tagging' },
  { t: 'Verify with a phone', s: 'Works without signal', d: 'Start a verification round, assign verifiers to rooms, and let them scan. Found, damaged and found-in-another-room are one tap each. Checks made offline are sent later, once.', kv: [['Scanning', 'phone camera or handheld scanner'], ['Offline', 'saved on the phone, sent once']], screen: 'phone' },
  { t: 'Reconcile and report', s: 'Missing items to write-off', d: 'Close the round to get found, missing, misplaced and unlisted lists. Missing items go to write-off with approval, depreciation runs for the year, and every report downloads as Excel or PDF.', kv: [['Lists', 'found, not found, elsewhere, unlisted'], ['Next', 'write-off with approval, reports']], screen: 'reports' }
]

function Rollout({ onShowScreen }) {
  const [at, setAt] = useState(0)
  const s = STEPS[at]
  return (
    <>
      <ol className="dat-flow" role="tablist" aria-label="Rollout steps">
        {STEPS.map((step, i) => (
          <li key={step.t}>
            <button
              type="button" role="tab" id={`dat-step-${i}`}
              aria-selected={i === at} onClick={() => setAt(i)}
            >
              <span className="n">0{i + 1}</span>
              <span className="t">{step.t}</span>
              <span className="s">{step.s}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="dat-flow-detail" role="tabpanel" aria-labelledby={`dat-step-${at}`} aria-live="polite">
        <div>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
          <a className="btn btn--line dat-flow-btn" href="#tour" onClick={(e) => { onShowScreen(s.screen); jump('tour')(e) }}>
            See this screen
          </a>
        </div>
        <div className="dat-kv">
          {s.kv.map(([k, v]) => <div key={k}><b>{k}</b><br />{v}</div>)}
        </div>
      </div>
    </>
  )
}

/* ==========================================================================
   Audit trail test — real HMAC-SHA-256 in the browser
   ========================================================================== */

const LOG = [
  { id: 231, what: 'Ventilator DN/KOL/MED/00001 moved ICU → OT 1', who: 'Rahul Sen, 10:42' },
  { id: 232, what: 'Purchase cost of DN/KOL/MED/00023 set to ₹1,65,000', who: 'Priya Das, 11:05' },
  { id: 233, what: 'Sticker DN/KOL/IT/00042 marked as fixed', who: 'Arjun Bose, 11:20' },
  { id: 234, what: 'Movement MV/2627/00012 approved', who: 'Priya Das, 12:02' }
]
const ZERO = '0'.repeat(64)
const enc = new TextEncoder()
const hex = (buf) => Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('')
let keyPromise
const sign = async (text) => {
  keyPromise ??= crypto.subtle.importKey(
    'raw', enc.encode('kept-in-.env-on-your-server'), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  )
  return hex(await crypto.subtle.sign('HMAC', await keyPromise, enc.encode(text)))
}
const plainHash = async (text) => hex(await crypto.subtle.digest('SHA-256', enc.encode(text)))
const entryText = (prev, r) => `${prev}|${r.what}|${r.who}`

async function buildChain() {
  let prev = ZERO
  const out = []
  for (const r of LOG) {
    const fp = await sign(entryText(prev, r))
    out.push({ ...r, prev, fp, mark: '', edited: false })
    prev = fp
  }
  return out
}

async function checkChain(rows) {
  let prev = ZERO
  let broken = null
  const out = []
  for (const r of rows) {
    const want = await sign(entryText(prev, r))
    if (broken === null && (r.prev !== prev || want !== r.fp)) broken = r.id
    out.push({ ...r, mark: broken === null ? 'good' : 'bad' })
    prev = r.fp
  }
  return { rows: out, broken }
}

const START_MSG = <>Press <b>Run the daily check</b> to verify these four entries.</>

function AuditDemo() {
  const supported = typeof window !== 'undefined' && !!window.crypto?.subtle
  const [rows, setRows] = useState([])
  const [stage, setStage] = useState('fresh') // fresh → edited → forged
  const [verdict, setVerdict] = useState({ cls: '', msg: supported ? START_MSG : 'This demonstration needs a modern browser. In the product, the check runs on your server every day.' })

  const reset = async () => {
    setRows(await buildChain())
    setStage('fresh')
    setVerdict({ cls: '', msg: START_MSG })
  }

  useEffect(() => { if (supported) reset() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const runCheck = async () => {
    const { rows: checkedRows, broken } = await checkChain(rows)
    setRows(checkedRows)
    if (broken === null) {
      setVerdict({ cls: 'good', msg: <><b>Intact.</b> All four entries match their signatures. A receipt with entry #234 and its fingerprint is emailed to your auditors.</> })
    } else if (stage === 'forged') {
      setVerdict({ cls: 'bad', msg: <><b>Check failed at entry #{broken}.</b> The new fingerprints were not made with your key, so the forgery is caught anyway. Auditors and admins are alerted.</> })
    } else {
      setVerdict({ cls: 'bad', msg: <><b>Check failed at entry #{broken}.</b> The entry no longer matches its signature, and every entry after it is suspect. Auditors and admins are alerted in the app and by email.</> })
    }
  }

  const tamper = () => {
    setRows(rs => rs.map((r, i) => ({
      ...r,
      mark: '',
      ...(i === 1 ? { what: 'Purchase cost of DN/KOL/MED/00023 set to ₹16,500', edited: true } : {})
    })))
    setStage('edited')
    setVerdict({ cls: '', msg: 'Entry #232 now says ₹16,500 instead of ₹1,65,000. Nothing on screen gives it away. Run the check.' })
  }

  const forge = async () => {
    let prev = rows[0].fp
    const out = [{ ...rows[0], mark: '' }]
    for (const r of rows.slice(1)) {
      const fp = await plainHash(entryText(prev, r))
      out.push({ ...r, prev, fp, mark: '' })
      prev = fp
    }
    setRows(out)
    setStage('forged')
    setVerdict({ cls: '', msg: 'The fingerprints from #232 onwards were worked out again so the chain links up. Without the secret key they are not real signatures. Run the check.' })
  }

  const steps = [
    { k: '01', t: 'Run the daily check', d: 'What the software does every morning', on: runCheck, off: !supported },
    { k: '02', t: 'Edit entry #232 in the database', d: 'Someone lowers a purchase cost directly in MySQL', on: tamper, off: !supported || stage !== 'fresh' },
    { k: '03', t: 'Recalculate the fingerprints', d: 'They try to cover it up, without the secret key', on: forge, off: !supported || stage !== 'edited' },
    { k: '↺', t: 'Start again', d: 'Put the log back as it was', on: reset, off: !supported }
  ]

  return (
    <div className="dat-audit">
      <Reveal className="dat-audit-copy">
        <p className="eyebrow">Proving it</p>
        <h2>An audit trail that cannot be quietly edited.</h2>
        <p className="lede">
          Every change is recorded with who made it and what it was before. Each entry is signed
          and chained to the one before, so a change made straight in the database shows up at
          the next check.
        </p>
        <div className="dat-audit-steps">
          {steps.map(s => (
            <button key={s.k} type="button" onClick={s.on} disabled={s.off}>
              <span className="k">{s.k}</span>
              <span><b>{s.t}</b><small>{s.d}</small></span>
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal delay={100}>
        <ol className="dat-chain" aria-live="polite">
          {rows.map(r => (
            <li key={r.id} className={`${r.mark} ${r.edited ? 'edited' : ''}`.trim()}>
              <span className="id">#{r.id}</span>
              <span className="what">{r.what}<small>{r.who}</small></span>
              <span className="st">{r.mark === 'good' ? 'verified' : r.mark === 'bad' ? 'broken' : 'not checked'}</span>
              <span className="fp">fingerprint {r.fp.slice(0, 24)}…</span>
            </li>
          ))}
        </ol>
        <div className={`dat-verdict ${verdict.cls}`} role="status">{verdict.msg}</div>
      </Reveal>
    </div>
  )
}

/* ==========================================================================
   Ways to buy (no public prices — quoted on the demo call)
   ========================================================================== */

const OPTIONS = [
  {
    key: 'Hosted',
    title: 'Hosted',
    line: 'We run it for you',
    points: [
      'On our managed cloud, ready to use the same week',
      'Updates, backups and uptime are our job',
      'A subscription, monthly or yearly'
    ],
    cta: 'Ask about hosted'
  },
  {
    key: 'One-time licence',
    title: 'One-time licence',
    line: 'Pay once, keep it',
    points: [
      'Installed on your own server; ordinary cPanel hosting is enough',
      'No limits on assets, branches or users',
      'One year of support and updates included'
    ],
    cta: 'Ask about the licence'
  }
]

/* ==========================================================================
   Demo request — opens WhatsApp or email with the details filled in
   ========================================================================== */

const KINDS = ['Hospital or clinic', 'Bank or NBFC', 'School or college', 'Company office', 'Government or PSU', 'Other']
const PLANS = ['Not sure yet', ...OPTIONS.map(o => o.key)]
const waLine = company.phones.find(p => p.wa)?.number

function DemoForm({ form, setForm }) {
  const [err, setErr] = useState('')
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))
  const v = (k) => form[k].trim()

  const message = [
    'Hi Diginathi, I would like a demo of DigiAssetTrack.',
    `Name: ${v('name')}`,
    `Organisation: ${v('org')} (${form.kind})`,
    `Phone: ${v('phone')}`,
    v('email') && `Email: ${v('email')}`,
    v('assets') && `Assets: about ${v('assets')}`,
    form.plan !== 'Not sure yet' && `Interested in: ${form.plan}`,
    v('msg')
  ].filter(Boolean).join('\n')

  const mailHref = `mailto:${company.email}?subject=${encodeURIComponent(`DigiAssetTrack demo: ${v('org') || 'request'}`)}&body=${encodeURIComponent(message)}`

  const submit = (e) => {
    e.preventDefault()
    const missing = [['name', 'your name'], ['org', 'your organisation'], ['phone', 'a phone number']].filter(([k]) => !v(k))
    if (missing.length) {
      const words = missing.map(([, w]) => w)
      setErr(`Add ${words.length > 1 ? `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}` : words[0]} so we can reach you.`)
      document.getElementById(`dat-${missing[0][0]}`)?.focus()
      return
    }
    setErr('')
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <form className="dat-form" onSubmit={submit} noValidate>
      <label>Your name<input id="dat-name" value={form.name} onChange={set('name')} autoComplete="name" required /></label>
      <label>Organisation<input id="dat-org" value={form.org} onChange={set('org')} autoComplete="organization" required /></label>
      <label>Phone<input id="dat-phone" value={form.phone} onChange={set('phone')} type="tel" autoComplete="tel" inputMode="tel" required /></label>
      <label>Email<input value={form.email} onChange={set('email')} type="email" autoComplete="email" /></label>
      <label>Type of organisation
        <select value={form.kind} onChange={set('kind')}>{KINDS.map(k => <option key={k}>{k}</option>)}</select>
      </label>
      <label>Roughly how many assets<input value={form.assets} onChange={set('assets')} inputMode="numeric" placeholder="e.g. 2,500" /></label>
      <label className="full">How would you like to run it
        <select value={form.plan} onChange={set('plan')}>{PLANS.map(p => <option key={p}>{p}</option>)}</select>
      </label>
      <label className="full">Anything we should know
        <textarea value={form.msg} onChange={set('msg')} placeholder="Branches, current spreadsheet, audit dates…" />
      </label>
      <p className="dat-form-err full" role="alert">{err}</p>
      <div className="btn-row full">
        <button className="btn btn--accent" type="submit">
          <WhatsAppIcon /> Send on WhatsApp
        </button>
        <a className="btn btn--line" href={mailHref}>Send by email instead</a>
      </div>
      {sent && (
        <p className="dat-form-sent full">
          WhatsApp should open in a new tab with your message ready; press send there. If it did
          not open, email {company.email} or call {waLine}.
        </p>
      )}
    </form>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.5 1.5.6 2 .7 2.8.6.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z" />
    </svg>
  )
}

/* ==========================================================================
   Page
   ========================================================================== */

const INDIA = [
  ['₹ lakh and crore', 'Amounts read the way finance writes them: ₹3.8 Cr and ₹12.5 L, with Indian digit grouping.'],
  ['April to March', 'Financial year by default, and depreciation runs per year that are worked out, reviewed and posted.'],
  ['Schedule II', 'Useful life and residual value per category, straight line or written down value.'],
  ['GSTIN, e-way bill', 'GSTINs checked to the last digit. Transfers between states flagged for a tax invoice, and an e-way bill above ₹50,000.'],
  ['DPDP Act, 2023', 'Employee data export, correction requests with due dates, and 72-hour breach records.'],
  ['Exit clearance', 'A No Dues certificate is issued only once every asset given to the employee is back.']
]

const FAQ = [
  ['Where is our data kept?', 'Your choice. On the hosted option it sits on our managed cloud, and we look after backups and updates. With the one-time licence it runs on your own server or hosting account — ordinary PHP and MySQL hosting with cPanel is enough — so your asset and employee records never sit on ours.'],
  ['Do we need special scanners or a Play Store app?', 'No. Any phone with a camera scans the QR stickers from the browser, and it can be added to the home screen like an app. USB and Bluetooth handheld scanners also work, because they type straight into the tag box.'],
  ['What happens where there is no mobile signal?', 'The verification screen keeps working. Checks are saved on the phone and sent when the connection returns, and each check is sent only once even if the connection drops halfway.'],
  ['Can we bring our existing register?', 'Yes. Fill our Excel template from your current sheet and upload it. Every row is checked first, and you see what to fix before anything is saved.'],
  ['Who can see what?', 'Roles decide what each person can do, and each user can be limited to certain branches or departments. Purchase costs stay hidden from people who do not need them.'],
  ['How long does a rollout take?', 'Setup and import take a day. Tagging depends on how many assets you have and how many people walk the rooms; the tagging screens show progress per branch so you can see where it is stuck.'],
  ['How much does it cost?', 'It depends on whether you want it hosted or on your own server, and whether our team does the tagging on site. We give you a written quote after the demo call, once we know the size of your register.']
]

const EMPTY_FORM = { name: '', org: '', phone: '', email: '', kind: KINDS[0], assets: '', plan: PLANS[0], msg: '' }

export default function DigiAssetTrack() {
  useSeo({
    title: 'DigiAssetTrack — fixed asset register with QR tagging',
    description:
      'DigiAssetTrack is a fixed asset register with QR tagging, offline phone verification, Schedule II depreciation and a signed audit trail. Hosted by Diginathi or on your own server.',
    path: '/products/digiassettrack'
  })

  const [screen, setScreen] = useState(0)
  const [form, setForm] = useState(EMPTY_FORM)

  const askFor = (plan) => (e) => {
    setForm(f => ({ ...f, plan }))
    jump('contact')(e)
  }

  return (
    <>
      {/* ---------------------------------------------- hero */}
      <section className="phero">
        <div className="wrap phero-in dat-hero-in">
          <Reveal className="phero-copy">
            <p className="eyebrow">Our own product, built in Kolkata</p>
            <h1>DigiAssetTrack</h1>
            <p className="phero-tag">The fixed asset register for organisations that get audited.</p>
            <p className="lede phero-lede">
              Put a QR sticker on every asset, check them with any phone, even where there is no
              signal, and keep depreciation and an audit trail your auditor can trust. Hosted by us,
              or installed on your own server.
            </p>
            <div className="btn-row phero-btns">
              <a href="#contact" onClick={jump('contact')} className="btn btn--primary">
                Book a demo <ArrowRight size={17} />
              </a>
              <a href="#tour" onClick={jump('tour')} className="btn btn--line">See the product</a>
            </div>
            <dl className="phero-facts">
              {[
                ['Schedule II', 'SLM and WDV, worked out day by day'],
                ['Works offline', 'Verify in basements and server rooms'],
                ['Signed audit trail', 'Checked daily, receipts by email'],
                ['Hosted or yours', 'Our cloud, or your own server']
              ].map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <ScanDemo />
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- proof strip */}
      <div className="wrap">
        <dl className="dat-proof">
          {[
            ['17', 'reports, each in Excel and PDF'],
            ['Any phone', 'scans the stickers from the browser, no app store'],
            ['1 day', 'to set up and import your sheet'],
            ['0', 'per-user fees, hosted or one time']
          ].map(([v, l]) => (
            <div key={l}><dt className="figure-num">{v}</dt><dd>{l}</dd></div>
          ))}
        </dl>
      </div>

      {/* ---------------------------------------------- tour */}
      <section className="band" id="tour">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">A walk through it</p>
              <h2>Real screens, not marketing renders.</h2>
            </div>
            <p className="lede">
              These come from a demo hospital with 283 assets across four branches. Pick a screen,
              or use the arrows.
            </p>
          </Reveal>
          <ProductTour screens={SCREENS} base={IMG} host="digiassettrack" current={screen} onChange={setScreen} />
        </div>
      </section>

      {/* ---------------------------------------------- rollout */}
      <section className="band band--slab on-slab" id="how">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">How a rollout goes</p>
              <h2>From a spreadsheet to a verified register.</h2>
            </div>
            <p className="lede dat-on-slab-lede">
              Most organisations start with an Excel sheet and no stickers. The software walks you
              through it in this order. Pick a step to see what happens.
            </p>
          </Reveal>
          <Rollout onShowScreen={(key) => setScreen(screenIndex(key))} />
        </div>
      </section>

      {/* ---------------------------------------------- audit trail */}
      <section className="band band--sunk" id="audit">
        <div className="wrap">
          <AuditDemo />
        </div>
      </section>

      {/* ---------------------------------------------- india */}
      <section className="band">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Built for India</p>
              <h2>Made for how Indian organisations keep books.</h2>
            </div>
            <p className="lede">The details a foreign tool gets wrong, handled from the start.</p>
          </Reveal>
          <div className="dat-india">
            {INDIA.map(([t, d], i) => (
              <Reveal key={t} delay={i * 50}>
                <b>{t}</b>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- ways to buy */}
      <section className="band band--sunk" id="options">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Two ways to run it</p>
              <h2>Hosted by us, or bought once.</h2>
            </div>
            <p className="lede">
              Both have every feature, phone verification included, and neither charges per user.
              Tell us about your register on a demo call and we will send a written quote.
            </p>
          </Reveal>
          <div className="dat-options">
            {OPTIONS.map((o, i) => (
              <Reveal key={o.key} delay={i * 90} className="dat-option">
                <p className="dat-option-line">{o.line}</p>
                <h3>{o.title}</h3>
                <ul className="ticks">
                  {o.points.map(p => (
                    <li key={p}><Check size={16} strokeWidth={2.2} /><span>{p}</span></li>
                  ))}
                </ul>
                <a href="#contact" onClick={askFor(o.key)} className="btn btn--primary">
                  {o.cta} <ArrowRight size={17} />
                </a>
              </Reveal>
            ))}
          </div>
          <p className="dat-fine">
            Want our team to put the stickers on and run the first verification on site? We quote
            that separately, per asset.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------- faq */}
      <section className="band" id="faq">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <p className="eyebrow">Questions we are asked</p>
              <h2>Before you book a call.</h2>
            </div>
          </Reveal>
          <div className="dat-faq">
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- demo request */}
      <section className="band band--slab on-slab" id="contact">
        <div className="wrap dat-contact">
          <Reveal className="dat-contact-copy">
            <p className="eyebrow">Book a demo</p>
            <h2>See your own register in DigiAssetTrack.</h2>
            <p className="lede dat-on-slab-lede">
              Tell us a little about your assets. We will load a sample of your sheet into a demo
              and walk your team through tagging and verification in thirty minutes.
            </p>
            <div className="dat-ways">
              <div><span>Email</span><a href={`mailto:${company.email}`}>{company.email}</a></div>
              <div><span>Phone and WhatsApp</span><a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">{waLine}</a></div>
              <div><span>Office</span>{company.address.line1}, Kolkata 700107</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <DemoForm form={form} setForm={setForm} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
