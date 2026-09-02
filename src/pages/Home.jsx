import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { AgentFlow, TimezoneOverlap } from '../components/Diagrams'
import { services, products, industries, principles, dmsUrl } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './Home.css'

const dms = products[0]

export default function Home() {
  useSeo({
    title: 'Enterprise software, AI automation & digitization',
    description:
      'Diginathi builds enterprise applications and AI agents, and turns paper archives into structured data. Engineering team in Kolkata working US business hours.',
    path: '/'
  })

  return (
    <>
      {/* ================================================= HERO */}
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-lead">
            <p className="eyebrow">Est. 2023 · Kolkata, working US hours</p>
            <h1>
              We build the software<br />your operation runs on.
              <span className="hero-h1-alt">And the agents that run it while you sleep.</span>
            </h1>
            <p className="lede hero-lede">
              Diginathi is a small engineering company that does four things properly:
              enterprise applications, AI automation, records digitization, and turning
              documents into clean data. No résumé farming, no reselling someone else's platform.
            </p>
            <div className="btn-row hero-btns">
              <Link to="/contact" className="btn btn--primary">
                Talk to an engineer <ArrowRight size={17} />
              </Link>
              <Link to="/products/digidocsmart" className="btn btn--line">
                See DigiDocSmart
              </Link>
            </div>
          </div>

          {/* Editorial index card — a table of contents, not a stock photo */}
          <aside className="hero-index" aria-label="What we do">
            <div className="hero-index-head">
              <span>What we do</span>
              <span>In priority order</span>
            </div>
            <ul>
              {services.map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>
                    <span className="numtag">{s.num}</span>
                    <span className="hero-index-name">{s.title}</span>
                    <span className="hero-index-kick">{s.kicker}</span>
                    <ArrowUpRight size={16} className="hero-index-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
            
          </aside>
        </div>

        <div className="wrap">
          <div className="hero-facts">
            {[
              { v: '10M+', l: 'Pages digitized' },
              { v: '2 wks', l: 'To your first working demo' },
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
              <p className="eyebrow">Services</p>
              <h2>Four disciplines, one team that talks to each other.</h2>
            </div>
            <p className="lede">
              Most vendors sell you one of these and subcontract the rest. We do all four
              in-house, which is why the digitization actually lands inside working software
              instead of a folder of PDFs.
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

      {/* ================================================= DMS */}
      <section className="band dms-band">
        <div className="wrap">
          <div className="dms-grid">
            <Reveal className="dms-copy">
              <p className="eyebrow">Our product · Live today</p>
              <h2>
                DigiDocSmart
                <span className="dms-abbr">DMS</span>
              </h2>
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
                  Open digidocsmart.com <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="dms-shot">
              <div className="shot-frame shot-frame--dark">
                <div className="shot-bar"><span /><span /><span /></div>
                <img
                  src="/assets/dms/dashboard_dark.png"
                  alt="DigiDocSmart dashboard showing file counts, storage use, active workflows and pending tasks"
                  width="1280" height="720" loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="prod-more">
            <p className="eyebrow">Also in the workshop</p>
            <div className="prod-more-grid">
              {products.slice(1).map(p => {
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
