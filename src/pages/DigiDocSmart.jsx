import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Minus } from 'lucide-react'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { DmsLayers } from '../components/Diagrams'
import { industries, dmsUrl } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './Product.css'

const TOUR = [
  {
    id: 'dashboard',
    eyebrow: 'The daily view',
    title: 'Everything waiting on you, on one screen.',
    body: 'What is in the system, what is moving, and what is stuck on your approval. Most people never need to go further than this page.',
    points: ['Files, pages and storage at a glance', 'Approvals waiting on you, counted', 'Activity and upload trends over 14 days'],
    img: '/assets/dms/dashboard_light.png',
    alt: 'DigiDocSmart dashboard with file counts, storage used, active workflows and pending tasks'
  },
  {
    id: 'search',
    eyebrow: 'Finding things',
    title: 'Search the contents, not just the filenames.',
    body: 'Every document is indexed full-text on the way in. Filter by type, date, department, classification, owner or your own metadata fields — then save the filter if you run it weekly.',
    points: ['Full-text across the whole archive', 'Filter by any indexed field', 'Saved searches and recent history'],
    img: '/assets/dms/search_light.png',
    alt: 'DigiDocSmart search screen with filters and results'
  },
  {
    id: 'workflows',
    eyebrow: 'Getting sign-off',
    title: 'Approvals that chase themselves.',
    body: 'Build the route once — two approvers, then finance, escalate if nobody acts in 48 hours — and every document of that type follows it. The audit report at the end is one click.',
    points: ['Multi-step, multi-approver routes', 'Timeouts and automatic escalation', 'Exportable audit report per workflow'],
    img: '/assets/dms/workflows_light.png',
    alt: 'DigiDocSmart workflow management screen showing task counts and approval queues'
  },
  {
    id: 'security',
    eyebrow: 'Proving it',
    title: 'A record of who touched what, that cannot be quietly edited.',
    body: 'Each audit entry is hash-chained to the one before it. Alter a past entry and the chain breaks visibly. That is the difference between a log and evidence.',
    points: ['Hash-chained, tamper-evident audit trail', 'Two-factor auth and session fingerprinting', 'Retention policies enforced by the system'],
    img: '/assets/dms/security_dark.png',
    alt: 'DigiDocSmart security and audit screen',
    dark: true
  }
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

export default function DigiDocSmart() {
  useSeo({
    title: 'DigiDocSmart — document management & approval workflows',
    description:
      'DigiDocSmart is a document management system with approval workflows, classification-based permissions and a hash-chained audit trail. Cloud or on-premises.',
    path: '/products/digidocsmart'
  })

  return (
    <>
      {/* ---------------------------------------------- hero */}
      <section className="phero">
        <div className="wrap phero-in">
          <Reveal className="phero-copy">
            <p className="eyebrow">Our product · Live today</p>
            <h1>DigiDocSmart</h1>
            <p className="phero-tag">
              Document management, built for organisations that get audited.
            </p>
            <p className="lede phero-lede">
              Store it, control who sees it, route it for approval, and prove afterwards
              exactly what happened. Runs on our cloud, or entirely inside your own network.
            </p>
            <div className="btn-row phero-btns">
              <a href={dmsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Open digidocsmart.com <ArrowUpRight size={16} />
              </a>
              <Link to="/contact" className="btn btn--line">Book a walkthrough</Link>
            </div>
            <dl className="phero-facts">
              {[
                ['Cloud or on-prem', 'Same platform, either way'],
                ['Hash-chained', 'Tamper-evident audit trail'],
                ['4 levels', 'Public → Restricted classification'],
                ['10 → 10,000', 'Users, without re-platforming']
              ].map(([t, d]) => (
                <div key={t}>
                  <dt>{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="phero-shot">
            <div className="shot-frame shot-frame--dark">
              <div className="shot-bar"><span /><span /><span /></div>
              <img
                src="/assets/dms/dashboard_dark.png"
                alt="DigiDocSmart dashboard in dark mode"
                width="1280" height="720"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- what it is */}
      <section className="band band--sunk">
        <div className="wrap">
          <div className="dl-grid">
            <Reveal>
              <p className="eyebrow">What it is</p>
              <h2 className="dl-h2">Four layers. Most systems give you the first two and stop.</h2>
              <p className="lede dl-lede">
                Plenty of tools will store your documents and let you make folders. Far fewer
                will route a document for approval and then hand you evidence that stands up
                in an audit. That gap is the entire reason DigiDocSmart exists.
              </p>
              <Link to="/contact" className="tlink dl-link">
                Ask about your compliance regime <ArrowRight size={15} />
              </Link>
            </Reveal>
            <Reveal delay={110} className="dl-diagram">
              <DmsLayers />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- tour */}
      <section className="band">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">A walk through it</p>
              <h2>Real screens, not marketing renders.</h2>
            </div>
            <p className="lede">
              These are screenshots from the live product. If something here looks close to
              what you need but not exact, say so on a call — a fair amount of it is configurable.
            </p>
          </Reveal>
        </div>

        <div className="tour">
          {TOUR.map((t, i) => (
            <div key={t.id} className={`tour-row ${i % 2 ? 'is-flipped' : ''}`}>
              <div className="wrap tour-in">
                <Reveal className="tour-copy">
                  <p className="eyebrow">{t.eyebrow}</p>
                  <h3>{t.title}</h3>
                  <p className="tour-body">{t.body}</p>
                  <ul className="ticks tour-points">
                    {t.points.map(p => (
                      <li key={p}><Check size={15} strokeWidth={2.4} /><span>{p}</span></li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={100} className="tour-shot">
                  <div className={`shot-frame ${t.dark ? 'shot-frame--dark' : ''}`}>
                    <div className="shot-bar"><span /><span /><span /></div>
                    <img src={t.img} alt={t.alt} width="1280" height="720" loading="lazy" />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------- deployment */}
      <section className="band band--sunk">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Deployment</p>
              <h2>Our servers, or yours. Pick on facts, not fear.</h2>
            </div>
            <p className="lede">
              On-premises is not automatically safer — it moves the responsibility to your team.
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

      {/* ---------------------------------------------- industries */}
      <section className="band band--tight">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Who runs it</p>
            <h2 className="pind-h2">Sectors where a missing document is a real problem.</h2>
          </Reveal>
          <div className="pind-grid">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 40} className="pind-cell">
                <h4>{ind.name}</h4>
                <p>{ind.note}</p>
              </Reveal>
            ))}
          </div>
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
