import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, Check, Circle, CircleDot, CheckCircle2 } from 'lucide-react'
import PageHead from '../components/PageHead'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { DataPipeline } from '../components/Diagrams'
import { getProduct } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './Product.css'

/* Honest status language. "Coming soon" with no date is how vendors lose trust —
   we say which stage each thing is actually at. */
const DETAIL = {
  digidocuiq: {
    headline: 'DigiDocuIQ',
    kicker: 'Intelligent document processing',
    lede:
      'Point it at a folder of invoices, claim forms or contracts. It works out what each document is, pulls the fields out, checks them against your rules, and sends only the uncertain ones to a person.',
    why: {
      title: 'Why we are building it',
      body:
        'We have spent three years doing document extraction as a service — running the models, staffing the review queue, reporting the accuracy. DigiDocuIQ is that same operation packaged so a client can run it themselves, on their own documents, at their own pace.'
    },
    modules: [
      { t: 'Classification', d: 'Works out what each document is before trying to read it. An invoice and a delivery note need different treatment.' },
      { t: 'Field extraction', d: 'Pulls the fields you care about into a structured record, including from scans and handwriting.' },
      { t: 'Rule validation', d: 'Totals must add up. IDs must exist. Dates must be plausible. Failures route to review instead of into your database.' },
      { t: 'Review queue', d: 'A clean screen for a person to resolve only the low-confidence cases, with the source page beside the extracted field.' },
      { t: 'Accuracy reporting', d: 'Per-field accuracy over time, so you can see where it is strong and where it still needs a human.' },
      { t: 'API and webhooks', d: 'Push documents in, get structured records out, into whatever system you already run.' }
    ],
    stages: [
      { s: 'done', t: 'Extraction engine', d: 'In use on our own service engagements' },
      { s: 'now', t: 'Self-serve interface', d: 'In build — the part that lets you run it yourself' },
      { s: 'next', t: 'Review queue & reporting', d: 'Designed, not yet built' },
      { s: 'next', t: 'Public API', d: 'Planned after the first pilot clients' }
    ],
    diagram: true,
    ask: 'If you have a document type with real volume behind it, we want it in the pilot. Pilot clients help set the roadmap and get the work done at cost.'
  },

  digiact: {
    headline: 'DigiACT',
    kicker: 'Customers, tasks and attendance in one place',
    lede:
      'For teams currently running their pipeline in one tool, their tasks in another, and their attendance in a WhatsApp group. One system, one set of numbers, no reconciling three exports at month end.',
    why: {
      title: 'Why we are building it',
      body:
        'Every small operations team we work with runs the same three tools badly. The individual products are fine; the problem is that a salesperson’s activity, their task list and their working hours live in three places that never agree. We are building the boring version that keeps them in one.'
    },
    modules: [
      { t: 'Pipeline', d: 'Leads, contacts and deals with a visible stage-by-stage view, and follow-ups that get chased automatically.' },
      { t: 'Tasks', d: 'Assign, prioritise and track. Dependencies where they matter, and a plain list where they do not.' },
      { t: 'Attendance', d: 'Check-in and check-out with location, leave requests, shift rosters — without a separate biometric system.' },
      { t: 'One report', d: 'Team activity, pipeline movement and hours worked from the same data, so the numbers cannot disagree.' },
      { t: 'Reminders that stop', d: 'Escalation when something is genuinely overdue, and silence when it is not. Notification fatigue is a design failure.' },
      { t: 'Mobile first', d: 'Because attendance and field updates happen on a phone, not at a desk.' }
    ],
    stages: [
      { s: 'done', t: 'Data model & attendance', d: 'Built' },
      { s: 'now', t: 'Pipeline module', d: 'In build' },
      { s: 'next', t: 'Reporting layer', d: 'Designed, not yet built' },
      { s: 'next', t: 'External release', d: 'After a full quarter of pilot use' }
    ],
    diagram: false,
    ask: 'If you want to be an early user, tell us how your team works today and we will tell you honestly whether it is ready for you yet.'
  }
}

const STAGE_ICON = { done: CheckCircle2, now: CircleDot, next: Circle }
const STAGE_LABEL = { done: 'Built', now: 'In build', next: 'Planned' }

export default function ProductSoon() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const d = DETAIL[slug]

  useSeo({
    title: product ? `${product.name} — ${product.tagline}` : 'Product',
    description: d?.lede,
    path: `/products/${slug}`
  })

  if (!product || !d) return <Navigate to="/products/digidocsmart" replace />

  return (
    <>
      <PageHead
        eyebrow={`In development · ${d.kicker}`}
        title={d.headline}
        lede={d.lede}
        aside={
          <div className="soon-stages">
            <p className="eyebrow eyebrow--plain">Where it actually is</p>
            <ul>
              {d.stages.map(st => {
                const Icon = STAGE_ICON[st.s]
                return (
                  <li key={st.t} className={`soon-stage is-${st.s}`}>
                    <Icon size={17} strokeWidth={2} />
                    <div>
                      <strong>{st.t}</strong>
                      <span>{st.d}</span>
                    </div>
                    <em>{STAGE_LABEL[st.s]}</em>
                  </li>
                )
              })}
            </ul>
          </div>
        }
      />

      <section className="band">
        <div className="wrap">
          <div className="soon-why">
            <Reveal>
              <p className="eyebrow">{d.why.title}</p>
              <p className="sd-bigp soon-why-p">{d.why.body}</p>
            </Reveal>
          </div>

          <Reveal className="soon-modules-head">
            <h2>What it does</h2>
          </Reveal>
          <div className="soon-modules">
            {d.modules.map((m, i) => (
              <Reveal key={m.t} delay={i * 50} className="soon-module">
                <span className="numtag">{String(i + 1).padStart(2, '0')}</span>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {d.diagram && (
        <section className="band band--sunk">
          <div className="wrap">
            <Reveal className="sec-head sec-head--split">
              <div>
                <p className="eyebrow">The shape of it</p>
                <h2>Extract, validate, and only then trust it.</h2>
              </div>
              <p className="lede">
                The important part is not the model. It is the gate after the model, and the
                person who handles what the gate rejects.
              </p>
            </Reveal>
            <Reveal className="card soon-diagram">
              <DataPipeline />
            </Reveal>
          </div>
        </section>
      )}

      <section className="band band--tight soon-ask-band">
        <div className="wrap wrap--narrow center">
          <Reveal>
            <p className="eyebrow eyebrow--plain soon-ask-eyebrow">Early access</p>
            <p className="soon-ask">{d.ask}</p>
            <div className="btn-row soon-ask-btns">
              <Link to="/contact" className="btn btn--primary">
                Ask about the pilot <ArrowRight size={17} />
              </Link>
              <Link to="/products/digidocsmart" className="btn btn--line">
                See DigiDocSmart, which is live
              </Link>
            </div>
            <ul className="ticks soon-ask-ticks">
              {[
                'No payment while it is in pilot',
                'You keep whatever data you put in',
                'We will tell you if it is not ready for your case'
              ].map(t => (
                <li key={t}><Check size={15} strokeWidth={2.4} /><span>{t}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Meanwhile"
        title="The service version of this already runs today."
        body="Everything DigiDocuIQ and DigiACT will do, we can do as a managed service right now. The product is about handing you the controls, not about capability we do not have."
        primary={{ to: '/services/ai-automation', text: 'See AI automation' }}
        secondary={{ to: '/contact', text: 'Talk to us' }}
      />
    </>
  )
}
