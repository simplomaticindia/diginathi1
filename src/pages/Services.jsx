import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageHead from '../components/PageHead'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { services } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './Services.css'

const ROUTER = [
  {
    say: '“Our process lives in three spreadsheets and one person’s head.”',
    go: 'software-development',
    why: 'You need software built around how you actually work.'
  },
  {
    say: '“Someone spends all morning copying data between two systems.”',
    go: 'ai-automation',
    why: 'That is a task an agent can take, with a review queue behind it.'
  },
  {
    say: '“We have a storeroom of files and no way to find anything.”',
    go: 'digitization',
    why: 'Scan, index and load into a system people can actually search.'
  },
  {
    say: '“We have the PDFs, but our software still cannot use them.”',
    go: 'data-capture',
    why: 'Fields extracted, validated against your rules, loaded to your schema.'
  }
]

export default function Services() {
  useSeo({
    title: 'Services',
    description:
      'Enterprise software development, AI automation and AI agents, records digitization, and data capture and structuring. Four disciplines, one in-house team.',
    path: '/services'
  })

  const byslug = Object.fromEntries(services.map(s => [s.slug, s]))

  return (
    <>
      <PageHead
        eyebrow="Services"
        title="Four things, done properly."
        lede="We removed manpower supply from our offering so we could go deeper on the work that actually compounds for a client: the software, the automation, and getting your records into a state where both are possible."
        aside={
          <ol className="phead-toc">
            {services.map(s => (
              <li key={s.slug}>
                <a href={`#${s.slug}`}>
                  <span className="numtag">{s.num}</span> {s.title}
                </a>
              </li>
            ))}
          </ol>
        }
      />

      {/* ---------------------------------------- Which one do I need? */}
      <section className="band band--tight">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Start here</p>
            <h2 className="srv-router-h2">If one of these sounds like your Tuesday, you are in the right place.</h2>
          </Reveal>

          <div className="srv-router">
            {ROUTER.map((r, i) => {
              const s = byslug[r.go]
              return (
                <Reveal key={r.go} delay={i * 60}>
                  <Link to={`/services/${s.slug}`} className="srv-router-row">
                    <p className="srv-router-say">{r.say}</p>
                    <div className="srv-router-go">
                      <span className="srv-router-arrow"><ArrowRight size={16} /></span>
                      <div>
                        <strong>{s.title}</strong>
                        <span>{r.why}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------- Detailed sections */}
      {services.map((s, idx) => {
        const Icon = s.icon
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`band srv-block ${idx % 2 ? 'band--sunk' : ''}`}
          >
            <div className="wrap">
              <div className="srv-block-grid">
                <Reveal className="srv-block-head">
                  <span className="srv-block-num">{s.num}</span>
                  <span className="srv-block-icon"><Icon size={26} strokeWidth={1.5} /></span>
                  <h2>{s.title}</h2>
                  <p className="srv-block-line">{s.heroLine}</p>
                  <p className="srv-block-sum">{s.summary}</p>
                  <Link to={`/services/${s.slug}`} className="btn btn--primary srv-block-btn">
                    Full detail <ArrowRight size={17} />
                  </Link>
                </Reveal>

                <Reveal delay={100} className="srv-block-body">
                  <p className="eyebrow">{s.offer.title}</p>
                  <ul className="srv-offer">
                    {s.offer.items.map(o => (
                      <li key={o.name}>
                        <Check size={15} strokeWidth={2.4} />
                        <div>
                          <strong>{o.name}</strong>
                          <p>{o.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="srv-facts">
                    {s.facts.map(f => (
                      <div key={f.label} className="srv-fact">
                        <div className="figure-num">{f.value}</div>
                        <div className="figure-lbl">{f.label}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      <CtaBand
        title="Not sure which of these your problem is?"
        body="Describe it in plain language and we will tell you honestly — including if it is smaller than you think, or if it is not a software problem at all."
        secondary={{ to: '/about', text: 'How we work' }}
      />
    </>
  )
}
