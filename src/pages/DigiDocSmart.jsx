import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Minus } from 'lucide-react'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import ProductTour from '../components/ProductTour'
import { dmsUrl } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { faqLd, softwareLd } from '../lib/seo'
import './Product.css'

/* Screens come from the demo workspace, filled with sample documents for a
   fictional hospital group (Demo Healthcare Pvt. Ltd.), not a customer. */
const IMG = '/assets/dms'

const SCREENS = [
  { key: 'dashboard', label: 'Dashboard', sub: 'What needs you today', img: 'dashboard.jpg', url: 'dashboard', title: 'Everything waiting on you, on one screen.', points: ['Files, pages and storage at a glance', 'Approvals waiting on you, with days left', 'Upload activity and the latest audit events'] },
  { key: 'storage', label: 'Storage', sub: 'Folders by department', img: 'storage.jpg', url: 'storage', title: 'Department folders, with a classification on every file.', points: ['Public, Internal, Confidential or Restricted', 'Version history and password-protected share links', 'Favourites, recycle bin and bulk actions'] },
  { key: 'viewer', label: 'Document viewer', sub: 'Open without downloading', img: 'viewer.jpg', url: 'storage?open', title: 'Read it in the browser. Every view is logged.', points: ['PDFs and images open in place', 'Zoom, search inside the page, full screen', 'Downloads can be switched off by classification'] },
  { key: 'search', label: 'Search', sub: 'Contents, not just names', img: 'search.jpg', url: 'search?q=oxygen', title: 'Search what the documents say.', points: ['Full text, including scanned pages after OCR', 'Filter by department, type, author, date and tags', 'Results only show what the user may open'] },
  { key: 'workflows', label: 'Approvals', sub: 'Tasks with due dates', img: 'workflows.jpg', url: 'workflows', title: 'Approvals that chase themselves.', points: ['Approve, decline or send back, one at a time or in bulk', 'Priority, due date and progress on every task', 'Completed, declined and overdue counted for you'] },
  { key: 'designer', label: 'Workflow designer', sub: 'Build a route once', img: 'designer.jpg', url: 'workflows/new', title: 'Draw the route once. Every document follows it.', points: ['Approval, review, notify, condition and status steps', 'Assign by role or person, with a quorum', 'Timeouts escalate to a fallback approver'] },
  { key: 'templates', label: 'Data extraction', sub: 'Fields you define', img: 'templates.jpg', url: 'extraction/templates', title: 'Say which fields you need. It reads them out.', points: ['Templates per document type: invoice, PO, certificate', 'Text, number, date and yes/no fields with hints', 'Export to Excel or CSV after review'] },
  { key: 'audit', label: 'Audit trail', sub: 'Verify the chain', img: 'audit.jpg', url: 'audit', title: 'A record of who did what, that cannot be quietly edited.', points: ['Every sign-in, view, download and change', 'Hash-chained; one click verifies nothing was altered', 'Security alerts and active sessions alongside'] },
  { key: 'dark', label: 'Dark mode', sub: 'Light, dark or system', img: 'dashboard-dark.jpg', url: 'dashboard', title: 'Easy on the eyes on a night shift.', points: ['Follows the device, or set it per user', 'Same layout and data in both', 'Works on a phone or tablet browser'] }
]
const screenIndex = (key) => SCREENS.findIndex(s => s.key === key)

const LAYERS = [
  { t: 'Store and share', d: 'Department folders, four classification levels, version history, and share links with a password and an expiry date.', screen: 'storage' },
  { t: 'Extract data', d: 'OCR and AI read the fields you define from scans and PDFs. Export them to Excel, CSV or PDF.', screen: 'templates' },
  { t: 'Route approvals', d: 'Multi-step workflows by role or person, with delegation and timeouts.', screen: 'designer' },
  { t: 'Prove every action', d: 'A tamper-evident, hash-chained audit trail you can verify at any time.', screen: 'audit' }
]

const SECTORS = {
  Hospitals: {
    line: 'Classify patient records Confidential so only their department can open them. Every view and download is recorded.',
    docs: ['Patient files', 'Lab reports', 'Consent forms', 'Insurance claims', 'Discharge summaries'],
    doc: 'Lab report, page 1',
    fields: [['patient_mrn', 'MRN-204517', 99], ['result', 'HbA1c 6.8 %', 97], ['collected_on', '03-09-2026', 61]]
  },
  Corporate: {
    line: 'Invoices and contracts are read on upload, sent for approval, and filed under the right classification.',
    docs: ['Contracts', 'GST invoices', 'HR letters', 'Board minutes', 'Policies'],
    doc: 'Supplier invoice, page 1',
    fields: [['supplier', 'Shree Ganesh Traders', 99], ['total_inr', '1,84,320.00', 97], ['po_ref', 'PO-7731', 68]]
  },
  Manufacturing: {
    line: 'Certificates, challans and SOPs are filed by department, with the key fields pulled out for search and export.',
    docs: ['Purchase orders', 'Delivery challans', 'Test certificates', 'SOPs', 'Inspection reports'],
    doc: 'Material test certificate, page 1',
    fields: [['heat_no', 'H24-11873', 98], ['grade', 'IS 2062 E250BR', 96], ['inspected_on', '12-09-2026', 64]]
  }
}

const DPDP = [
  { t: 'Erase on time', ref: 'Sec 8(7)', d: 'Retention policies purge personal data once its purpose ends.' },
  { t: 'Logs that hold up', ref: 'Rule 6', d: 'Every view and download recorded, tamper-evident, kept five years.' },
  { t: 'Breach register', ref: 'Sec 8(6)', d: 'Log and track a breach from discovery to closure.' },
  { t: 'Reasonable safeguards', ref: 'Sec 8(5)', d: 'Classification-based access, two-factor sign-in, backups.' }
]

const DEPLOY = [
  { row: 'Time to first login', saas: 'Same day', prem: '2–4 weeks' },
  { row: 'Where your files sit', saas: 'Our managed cloud', prem: 'Your servers, your network' },
  { row: 'Updates', saas: 'We handle them', prem: 'Scheduled with your IT' },
  { row: 'Backups & uptime', saas: 'Our responsibility', prem: 'Your infrastructure team' },
  { row: 'Works offline / air-gapped', saas: false, prem: true },
  { row: 'Data never leaves your country', saas: 'Region of your choice', prem: true },
  { row: 'Typical fit', saas: 'Under 500 users, no data-residency rule', prem: 'Regulated, or a hard data-residency rule' }
]

const FAQ = [
  ['Can we bring the files we already have?', 'Yes. Upload whole folders with their structure intact; uploads continue in the background and duplicates are detected by fingerprint. For large shared drives we do the migration with you and map old folders to departments and classifications.'],
  ['We still have paper. Can you help with that too?', 'That is where Diginathi started. Our digitization team scans, indexes and loads archives straight into DigiDocSmart, so you are not left with a folder of unnamed PDFs.'],
  ['Does it work with our ERP or HR system?', 'It has an API for uploads, search and workflow events, so documents can arrive from your ERP and approvals can update it. If you want AI working across both systems, that is a project our engineers take on.'],
  ['Can it read scanned documents?', 'Yes. Scans are OCR’d so their text is searchable, and extraction templates pull specific fields out of invoices, certificates and forms. Low-confidence fields are held for a person to check.'],
  ['Who can see what?', 'Each file has a department and one of four classification levels. Roles decide what a person can do; classification decides what they can open. Two-factor sign-in can be required.'],
  ['How is it priced?', 'By the number of users and the deployment you choose, cloud or on-premises. Tell us your team size and document volume on a walkthrough and we will send a written quote.']
]

function SectorDemo() {
  const names = Object.keys(SECTORS)
  const [at, setAt] = useState(names[0])
  const s = SECTORS[at]
  return (
    <div className="dds-sector">
      <div>
        <div className="dds-seg" role="tablist" aria-label="Built for">
          {names.map(n => (
            <button key={n} type="button" role="tab" aria-selected={n === at} onClick={() => setAt(n)}>{n}</button>
          ))}
        </div>
        <p className="dds-sector-line">{s.line}</p>
        <ul className="dds-chips">{s.docs.map(d => <li key={d}>{d}</li>)}</ul>
      </div>
      <div className="dds-read" key={at} aria-live="polite">
        <div className="dds-read-head"><span>{s.doc}</span><span>Amber: checked by a person</span></div>
        {s.fields.map(([k, v, c]) => (
          <div key={k} className={`dds-read-row ${c < 80 ? 'is-flag' : ''}`}>
            <small>{k}</small>
            <span className="v">{v}</span>
            <span className="c"><i style={{ width: `${c}%` }} />{c}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const jump = (id) => (e) => {
  e?.preventDefault()
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

export default function DigiDocSmart() {
  useSeo({
    title: 'DigiDocSmart Document Management Software',
    crumb: 'DigiDocSmart',
    description:
      'Document management with OCR, approval workflows and a hash-chained audit trail. DPDP Act ready, cloud or on-premises. Built by Diginathi in India.',
    path: '/products/digidocsmart',
    image: '/og/digidocsmart.jpg',
    jsonLd: [
      softwareLd({ path: '/products/digidocsmart', name: 'DigiDocSmart', image: '/og/digidocsmart.jpg', description: 'Document management system with classification-based access, OCR and data extraction, multi-step approval workflows and a hash-chained audit trail. Cloud or on-premises.' }),
      faqLd('/products/digidocsmart', FAQ)
    ]
  })
  const [screen, setScreen] = useState(0)
  const show = (key) => (e) => { setScreen(screenIndex(key)); jump('tour')(e) }

  return (
    <>
      {/* ---------------------------------------------- hero */}
      <section className="phero">
        <div className="wrap phero-in">
          <Reveal className="phero-copy">
            <p className="eyebrow">Our own product, in use today</p>
            <h1>DigiDocSmart</h1>
            <p className="phero-tag">Every document read, filed and accounted for.</p>
            <p className="lede phero-lede">
              One secure place for every record. It reads the data out of scans, routes documents
              for approval, and keeps a verifiable record of who did what. Runs on our cloud, or
              entirely inside your own network.
            </p>
            <div className="btn-row phero-btns">
              <Link to="/contact" className="btn btn--primary">
                Book a walkthrough <ArrowRight size={17} />
              </Link>
              <a href="#tour" onClick={jump('tour')} className="btn btn--line">See the screens</a>
            </div>
            <dl className="phero-facts">
              {[
                ['DPDP Act ready', 'Retention, breach register, logs'],
                ['Hash-chained', 'Audit trail you can verify'],
                ['4 levels', 'Public to Restricted classification'],
                ['Cloud or on-prem', 'Same product, either way']
              ].map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="phero-shot">
            <div className="shot-frame">
              <div className="shot-bar"><span /><span /><span /></div>
              <img
                src={`${IMG}/dashboard.jpg`}
                alt="DigiDocSmart dashboard with pending approvals, upload activity and recent audit events"
                width="1600" height="1000"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- what it is */}
      <section className="band band--sunk">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">What it is</p>
              <h2>Four layers. Most systems give you the first two and stop.</h2>
            </div>
            <p className="lede">
              Plenty of tools store documents and let you make folders. Far fewer route a
              document for approval and then hand you evidence that stands up in an audit.
              That gap is the reason DigiDocSmart exists.
            </p>
          </Reveal>
          <ol className="dds-layers">
            {LAYERS.map((l, i) => (
              <Reveal as="li" key={l.t} delay={i * 70}>
                <span className="numtag">0{i + 1}</span>
                <b>{l.t}</b>
                <p>{l.d}</p>
                <a href="#tour" onClick={show(l.screen)} className="tlink">See this screen <ArrowRight size={14} /></a>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------- tour */}
      <section className="band" id="tour">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">A walk through it</p>
              <h2>Real screens, not marketing renders.</h2>
            </div>
            <p className="lede">
              Taken from a demo workspace for a hospital group: supplier invoices, purchase
              orders, contracts, SOPs and HR policies, with approvals in flight. Pick a screen,
              or use the arrows.
            </p>
          </Reveal>
          <ProductTour screens={SCREENS} base={IMG} host="digidocsmart" current={screen} onChange={setScreen} />
        </div>
      </section>

      {/* ---------------------------------------------- sectors */}
      <section className="band band--sunk">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Built for</p>
              <h2>Set up the way your sector files things.</h2>
            </div>
            <p className="lede">
              The same product, configured with the folders, classifications and extraction
              fields that each kind of organisation actually uses.
            </p>
          </Reveal>
          <Reveal><SectorDemo /></Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- DPDP */}
      <section className="band band--slab on-slab">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">DPDP Act 2023 · Rules 2025</p>
              <h2>Ready for India’s data protection law.</h2>
            </div>
            <p className="lede dds-slab-lede">
              DigiDocSmart supplies the controls the Act expects of a data fiduciary. Consent
              notices and data-principal requests stay with your own process.
            </p>
          </Reveal>
          <div className="dds-dpdp">
            {DPDP.map((d, i) => (
              <Reveal key={d.t} delay={i * 70} className="dds-dpdp-item">
                <span className="dds-ref">{d.ref}</span>
                <h3>{d.t}</h3>
                <p>{d.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- deployment */}
      <section className="band">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Deployment</p>
              <h2>Our servers, or yours. Pick on facts, not fear.</h2>
            </div>
            <p className="lede">
              On-premises is not automatically safer. It moves the responsibility to your team.
              Here is the honest comparison so the choice is made on requirements.
            </p>
          </Reveal>

          <Reveal className="cmp-wrap">
            <table className="cmp">
              <caption className="sr-only">Comparison of cloud and on-premises deployment</caption>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Cloud (SaaS)</th>
                  <th scope="col">On-premises</th>
                </tr>
              </thead>
              <tbody>
                {DEPLOY.map(d => (
                  <tr key={d.row}>
                    <th scope="row">{d.row}</th>
                    {[d.saas, d.prem].map((v, i) => (
                      <td key={i}>
                        {v === true ? <Check size={17} className="cmp-yes" aria-label="Yes" />
                          : v === false ? <Minus size={17} className="cmp-no" aria-label="No" />
                          : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="cmp-note">Both options run the same codebase. You can move from one to the other later.</p>
        </div>
      </section>

      {/* ---------------------------------------------- faq */}
      <section className="band band--sunk">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <p className="eyebrow">Questions we are asked</p>
              <h2>Before you book a walkthrough.</h2>
            </div>
          </Reveal>
          <div className="dds-faq">
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <p className="dds-faq-more">
            Want documents and AI working inside your existing ERP instead?{' '}
            <Link to="/services/ai-for-existing-systems" className="tlink">AI for existing systems <ArrowRight size={14} /></Link>
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Try it"
        title="See it with your own documents in it."
        body="Bring three real files and the approval route you use today. In half an hour you will know whether this fits, which is more than any brochure can tell you."
        primary={{ to: '/contact', text: 'Book a walkthrough' }}
        secondary={{ href: dmsUrl, text: 'Open digidocsmart.com' }}
      />
    </>
  )
}
