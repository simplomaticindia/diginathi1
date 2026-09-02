import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Download, Mail, Phone, AlertCircle } from 'lucide-react'
import PageHead from '../components/PageHead'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { AgentFlow, PaperToData, BuildTimeline, DataPipeline } from '../components/Diagrams'
import { getService, services, company, legacyServiceSlugs } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './ServiceDetail.css'

const DIAGRAM = {
  'software-development': BuildTimeline,
  'ai-automation': AgentFlow,
  'digitization': PaperToData,
  'data-capture': DataPipeline
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  useSeo({
    title: service ? service.title : 'Service not found',
    description: service?.summary,
    path: `/services/${slug}`
  })

  if (!service) {
    const moved = legacyServiceSlugs[slug]
    return <Navigate to={moved ? `/services/${moved}` : '/services'} replace />
  }

  const Diagram = DIAGRAM[service.slug]
  const related = service.related.map(getService).filter(Boolean)

  return (
    <>
      <PageHead
        eyebrow={`Service ${service.num} · ${service.kicker}`}
        title={service.title}
        lede={service.summary}
        aside={
          <div className="sd-headfacts">
            {service.facts.map(f => (
              <div key={f.label}>
                <div className="figure-num">{f.value}</div>
                <div className="figure-lbl">{f.label}</div>
              </div>
            ))}
          </div>
        }
      />

      <div className="band sd-body">
        <div className="wrap sd-layout">
          <main className="sd-main">

            {/* ---------------- the problem ---------------- */}
            <Reveal as="section" className="sd-sec">
              <p className="eyebrow">{service.problem.title}</p>
              <p className="sd-bigp">{service.problem.body}</p>
              <ul className="sd-symptoms">
                {service.problem.symptoms.map(s => (
                  <li key={s}>
                    <AlertCircle size={15} strokeWidth={2} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* ---------------- diagram ---------------- */}
            {Diagram && (
              <Reveal as="section" className="sd-sec sd-diagram">
                <p className="eyebrow">How it works</p>
                <Diagram />
              </Reveal>
            )}

            {/* ---------------- offer ---------------- */}
            <Reveal as="section" className="sd-sec">
              <h2>{service.offer.title}</h2>
              <div className="sd-offer">
                {service.offer.items.map((o, i) => (
                  <div key={o.name} className="sd-offer-item">
                    <span className="numtag">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{o.name}</h3>
                    <p>{o.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ---------------- process ---------------- */}
            <Reveal as="section" className="sd-sec">
              <h2>How an engagement runs</h2>
              <ol className="sd-steps">
                {service.process.map(p => (
                  <li key={p.step}>
                    <span className="sd-step-num">{p.step}</span>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* ---------------- deliverables ---------------- */}
            <Reveal as="section" className="sd-sec">
              <h2>What you actually receive</h2>
              <ul className="ticks sd-deliver">
                {service.deliverables.map(d => (
                  <li key={d}><Check size={16} strokeWidth={2.3} /><span>{d}</span></li>
                ))}
              </ul>
            </Reveal>
          </main>

          {/* ---------------- sidebar ---------------- */}
          <aside className="sd-side">
            <div className="sd-card sd-card--talk">
              <h4>Talk to the person who would run this</h4>
              <p>Not a salesperson. A 30-minute call to work out whether this is the right service for your problem.</p>
              <Link to="/contact" className="btn btn--primary sd-card-btn">
                Book a call <ArrowRight size={16} />
              </Link>
              <div className="sd-card-links">
                <a href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a>
                <a href={`tel:${company.phones[0].replace(/\s/g, '')}`}><Phone size={15} />{company.phones[0]}</a>
              </div>
              <p className="sd-card-hours">{company.hours.us}</p>
            </div>

            {service.brochure && (
              <a className="sd-card sd-card--dl" href={service.brochure} download>
                <Download size={18} />
                <div>
                  <strong>Service brochure</strong>
                  <span>PDF, one page</span>
                </div>
              </a>
            )}

            <div className="sd-card">
              <h4>Related</h4>
              <ul className="sd-related">
                {related.map(r => (
                  <li key={r.slug}>
                    <Link to={`/services/${r.slug}`}>
                      <span className="numtag">{r.num}</span>
                      {r.title}
                      <ArrowUpRight size={15} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <nav className="sd-card sd-card--nav" aria-label="All services">
              <h4>All services</h4>
              <ul className="sd-related">
                {services.map(s => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className={s.slug === service.slug ? 'is-current' : ''}
                    >
                      <span className="numtag">{s.num}</span>
                      {s.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>

      <CtaBand
        title={`Have a ${service.short.toLowerCase()} problem you want a second opinion on?`}
        body="Send us the messy version. We do not need a written brief to have a useful first conversation."
        secondary={{ to: '/services', text: 'All services' }}
      />
    </>
  )
}
