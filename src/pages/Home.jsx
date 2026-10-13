import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { AgentFlow, AiOverlay, TimezoneOverlap } from '../components/Diagrams'
import HeroShowcase from '../components/HeroShowcase'
import { services, products, getProduct, getService, industries, principles, dmsUrl } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './Home.css'

const dms = getProduct('digidocsmart')
const dat = getProduct('digiassettrack')
const inDevelopment = products.filter(p => p.status === 'soon')

/* The three things we are hired for, in the order we want to be known for them. */
const PILLARS = [
  { slug: 'software-development', title: 'Enterprise software', line: 'Applications, portals and integrations built around how you work.' },
  { slug: 'ai-automation', title: 'AI automation and agents', line: 'Agents that read, decide and act, with a person on the exceptions.' },
  { slug: 'ai-for-existing-systems', title: 'AI for your existing systems', line: 'AI inside SAP, Tally, Zoho or your in-house app. Nothing replaced.' }
].map(p => ({ ...p, num: getService(p.slug).num }))

const SYSTEMS = ['SAP', 'Oracle', 'Tally', 'Zoho', 'Salesforce', 'Dynamics 365', 'Odoo', 'Your in-house app']

export default function Home() {
  useSeo({
    title: 'Enterprise software, AI automation & AI for existing systems',
    description:
      'Diginathi builds enterprise applications, automates work with AI agents, and adds AI to the ERP, CRM and in-house systems you already run. Engineering team in Kolkata working US business hours.',
    path: '/'
  })

  return (
    <>
      {/* ================================================= HERO */}
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-lead">
            <h1>
              We build the software your business runs on.
              <span className="hero-h1-alt">Then we put AI to work inside it, and inside the systems you already own.</span>
            </h1>
            <p className="lede hero-lede">
              Diginathi is an engineering company. We build enterprise applications, hand the
              repetitive work to AI agents, and add AI to the ERP, CRM and in-house software you
              already depend on. No résumé farming, no reselling someone else's platform.
            </p>
            <ul className="hero-pillars">
              {PILLARS.map(p => (
                <li key={p.slug}>
                  <Link to={`/services/${p.slug}`}>
                    <span className="numtag">{p.num}</span>
                    <span className="hero-pillar-body">
                      <b>{p.title}</b>
                      <span>{p.line}</span>
                    </span>
                    <ArrowRight size={16} className="hero-pillar-go" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="btn-row hero-btns">
              <Link to="/contact" className="btn btn--primary">
                Talk to an engineer <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn btn--line">
                Everything we do
              </Link>
            </div>
            <p className="hero-where">
              Kolkata, since 2023. We keep US hours, so most days you get an answer
              before lunch.
            </p>
          </div>

          {/* The hero's one moving part: the three things we do, each running. */}
          <div className="hero-demo">
            <HeroShowcase />
          </div>
        </div>

        <div className="wrap">
          <div className="hero-facts">
            {[
              { v: '2 wks', l: 'To your first working demo' },
              { v: '0', l: 'Systems you have to replace to get AI' },
              { v: '4 hrs', l: 'Live overlap with US Eastern' },
              { v: '100%', l: 'Code ownership stays with you' }
            ].map((f, i) => (
              <Reveal key={f.l} delay={i * 70} className="hero-fact">
                <div className="figure-num">{f.v}</div>
                <div className="figure-lbl">{f.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= SERVICES */}
      <section className="band band--sunk" id="services">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <h2>Software and AI first. The data work underneath.</h2>
            </div>
            <p className="lede">
              Most vendors sell you one of these and subcontract the rest. We do all of it
              in-house, so the AI works on clean data, inside software that was built to
              take it.
            </p>
          </Reveal>

          <div className="svc-rows">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.slug} delay={i * 60}>
                  <Link to={`/services/${s.slug}`} className="svc-row">
                    <span className="svc-row-num numtag">{s.num}</span>
                    <span className="svc-row-icon"><Icon size={22} strokeWidth={1.6} /></span>
                    <div className="svc-row-body">
                      <h3>{s.title}</h3>
                      <p className="svc-row-line">{s.heroLine}</p>
                      <p className="svc-row-sum">{s.summary}</p>
                    </div>
                    <span className="svc-row-go">
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================= AI FOCUS */}
      <section className="band band--slab on-slab ai-band">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Where we are pushing hardest</p>
              <h2>AI automation, with a person still holding the wheel.</h2>
            </div>
            <p className="lede ai-lede">
              An agent that reads an invoice, checks it against the purchase order, and routes
              the one mismatched line to a human is worth more than a chatbot on your homepage.
              This is the work we care about most.
            </p>
          </Reveal>

          <Reveal className="ai-diagram">
            <AgentFlow />
          </Reveal>

          <div className="ai-points">
            {[
              {
                t: 'We measure before we promise',
                d: 'Four-week pilot on your real documents. We publish the accuracy, including the cases it gets wrong. If the numbers do not justify the build, you have spent four weeks.'
              },
              {
                t: 'Nothing happens silently',
                d: 'Every decision is audit-logged with its inputs and confidence score. Every step has a manual override. You set the threshold at which a person must look.'
              },
              {
                t: 'It gets better at your documents',
                d: 'Corrections your reviewers make feed back into the system, so accuracy on your specific paperwork climbs over the first few months instead of flatlining.'
              }
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="ai-point">
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="ai-cta">
            <Link to="/services/ai-automation" className="btn btn--primary">
              How our AI work runs <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================================================= AI ON EXISTING SYSTEMS */}
      <section className="band band--sunk ax-band" id="ai-existing">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">AI for the systems you already run</p>
              <h2>Your ERP stays. The busywork leaves.</h2>
            </div>
            <p className="lede">
              Most companies do not need a new system. They need the one they have to stop
              depending on people to feed it. We add AI through its own API, under its own
              permissions, and nothing is written back without a person's say-so.
            </p>
          </Reveal>

          <Reveal className="ax-diagram">
            <AiOverlay />
          </Reveal>

          <div className="ax-points">
            {[
              { t: 'Replace nothing', d: 'Years of data and process stay where they are. We work through your system\'s API, a read-only view, or the screen itself when there is nothing else.' },
              { t: 'Your permissions, not ours', d: 'The assistant sees exactly what the signed-in user may see. A store clerk cannot ask it for the salary register.' },
              { t: 'Read-only until trusted', d: 'Pilots answer questions on live data without changing it. Writes come later, and go through an approval step you control.' },
              { t: 'Private when it must be', d: 'Models hosted in your cloud or on your own servers for regulated data. Every prompt and answer is logged in your environment.' }
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 70} className="ax-point">
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="ax-foot">
            <p className="ax-systems">
              <span>If it has an API, a database or just a screen, we can work with it:</span>
              {SYSTEMS.map(n => <b key={n}>{n}</b>)}
            </p>
            <Link to="/services/ai-for-existing-systems" className="btn btn--primary">
              How we add AI to your system <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================================================= PRODUCTS */}
      <section className="band dms-band" id="products">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Our own products</p>
              <h2>Proof we ship: software we built, run and support ourselves.</h2>
            </div>
            <p className="lede">
              The same engineers who build client systems built these. Use them as they are,
              or as a head start on something of your own.
            </p>
          </Reveal>

          <div className="dms-grid">
            <Reveal className="dms-copy">
              <p className="eyebrow">For documents and approvals</p>
              <h3 className="dms-name">
                DigiDocSmart
                <span className="dms-abbr">DMS</span>
              </h3>
              <p className="lede dms-lede">{dms.tagline}</p>
              <p className="dms-body">{dms.blurb}</p>

              <ul className="ticks dms-ticks">
                {[
                  'Approval workflows with escalation and timeouts',
                  'Classification-based permissions, down to the document',
                  'Hash-chained audit trail you can hand to an auditor',
                  'Runs on our cloud or entirely inside your network'
                ].map(t => (
                  <li key={t}><Check size={16} strokeWidth={2.2} /><span>{t}</span></li>
                ))}
              </ul>

              <div className="btn-row dms-btns">
                <Link to="/products/digidocsmart" className="btn btn--primary">
                  Product detail <ArrowRight size={17} />
                </Link>
                <a href={dmsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--line">
                  digidocsmart.com <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="dms-shot">
              <div className="shot-frame">
                <div className="shot-bar"><span /><span /><span /></div>
                <img
                  src="/assets/dms/dashboard.jpg"
                  alt="DigiDocSmart dashboard with pending approvals, upload activity and recent audit events"
                  width="1600" height="1000" loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="dms-grid dat-grid">
            <Reveal className="dms-copy">
              <p className="eyebrow">For fixed assets and audits</p>
              <h3 className="dms-name">
                {dat.name}
                <span className="dms-abbr">{dat.abbr}</span>
              </h3>
              <p className="lede dms-lede">{dat.tagline}</p>
              <p className="dms-body">{dat.blurb}</p>

              <ul className="ticks dms-ticks">
                {[
                  'QR stickers, tag numbers issued in walking order',
                  'Phone verification that works without signal',
                  'Schedule II depreciation, SLM and WDV',
                  'Signed audit trail, checked every morning'
                ].map(t => (
                  <li key={t}><Check size={16} strokeWidth={2.2} /><span>{t}</span></li>
                ))}
              </ul>

              <div className="btn-row dms-btns">
                <Link to={`/products/${dat.slug}`} className="btn btn--primary">
                  Product detail <ArrowRight size={17} />
                </Link>
                <Link to={`/products/${dat.slug}#contact`} className="btn btn--line">
                  Book a demo
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120} className="dat-shot">
              <div className="shot-frame">
                <div className="shot-bar"><span /><span /><span /></div>
                <img
                  src="/assets/dat/dashboard.jpg"
                  alt="DigiAssetTrack dashboard showing the tagging pipeline, pending approvals and verification progress"
                  width="1600" height="1000" loading="lazy"
                />
              </div>
              <div className="dat-shot-phone">
                <img
                  src="/assets/dat/phone-verify.jpg"
                  alt="DigiAssetTrack phone verification screen scanning a room"
                  width="780" height="1688" loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="prod-more">
            <p className="eyebrow">Also in the workshop</p>
            <div className="prod-more-grid">
              {inDevelopment.map(p => {
                const Icon = p.icon
                return (
                  <Link key={p.slug} to={`/products/${p.slug}`} className="prod-mini">
                    <span className="prod-mini-icon"><Icon size={20} strokeWidth={1.6} /></span>
                    <div>
                      <h4>{p.name} <span className="chip">In development</span></h4>
                      <p>{p.tagline}</p>
                    </div>
                    <ArrowRight size={17} className="prod-mini-go" />
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================= US CLIENTS */}
      <section className="band band--sunk" id="us-clients">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">For our US clients</p>
              <h2>An offshore team that is awake when you are.</h2>
            </div>
            <p className="lede">
              We are honest about this: our engineers are in Kolkata. What we do about it is
              shift our day so there are four hours every afternoon where you can get a person,
              not a ticket.
            </p>
          </Reveal>

          <Reveal className="tz-wrap card">
            <TimezoneOverlap />
          </Reveal>

          <div className="us-grid">
            {[
              { t: 'Contracts and invoicing in USD', d: 'Standard US-style MSA and SOW, net-30 terms, wire or ACH.' },
              { t: 'A written handover every day', d: 'What moved, what is blocked, what we need from you — in your inbox before your morning.' },
              { t: 'Your NDA, not ours', d: 'We sign yours. Confidentiality terms cover every individual on the project, named.' },
              { t: 'One named engineer, not a pool', d: 'You get the same person on every call. No rotating account manager between you and the build.' }
            ].map((u, i) => (
              <Reveal key={u.t} delay={i * 70} className="us-item">
                <h4>{u.t}</h4>
                <p>{u.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= PRINCIPLES */}
      <section className="band">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">How we work</p>
              <h2>Four commitments we will put in the contract.</h2>
            </div>
            <p className="lede">
              These are not values on a wall. Each one is a clause you can hold us to,
              and the reason clients stay past the first project.
            </p>
          </Reveal>

          <div className="prin-grid">
            {principles.map((p, i) => (
              <Reveal key={p.num} delay={i * 70} className="prin">
                <span className="numtag">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= INDUSTRIES */}
      <section className="band band--tight ind-band">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Where our work lands</p>
            <h2 className="ind-h2">Sectors where a missing document is a real problem.</h2>
          </Reveal>
          <div className="ind-grid">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 40} className="ind-cell">
                <h4>{ind.name}</h4>
                <p>{ind.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= CTA */}
      <section className="band band--slab on-slab cta-band">
        <div className="wrap cta-in">
          <Reveal>
            <p className="eyebrow">Next step</p>
            <h2 className="cta-h2">
              Tell us the process that is costing you the most, and we'll tell you whether
              software can fix it.
            </h2>
            <p className="lede cta-lede">
              A 30-minute call, no deck. If the answer is that you do not need us,
              that is a fine outcome and we will say so.
            </p>
            <div className="btn-row cta-btns">
              <Link to="/contact" className="btn btn--accent">
                Book a call <ArrowRight size={17} />
              </Link>
              <a href="mailto:info@diginathi.in" className="btn btn--line">
                info@diginathi.in
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
