import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'
import PageHead from '../components/PageHead'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { TimezoneOverlap } from '../components/Diagrams'
import { company, principles, services } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './About.css'

const NOT_US = [
  {
    t: 'A staffing agency',
    d: 'We used to supply manpower. We stopped, because doing it well and doing engineering well are different businesses and we were only interested in one of them.'
  },
  {
    t: 'A body shop billing by the head',
    d: 'We do not sell you five developers and let you work out what to do with them. We take responsibility for an outcome and staff it ourselves.'
  },
  {
    t: 'A reseller with a badge',
    d: 'We are not implementing someone else’s platform and calling it our product. DigiDocSmart is ours, top to bottom.'
  },
  {
    t: 'The cheapest quote you will get',
    d: 'There is always someone offering half our rate. Sometimes that is the right choice for a piece of work, and we will say so.'
  }
]

const TIMELINE = [
  { y: '2023', t: 'Diginathi is founded', d: 'Starting with what we knew: records digitization and data work for organisations drowning in paper.' },
  { y: '2024', t: 'Software becomes the core', d: 'Clients kept asking where the digitized records should live. Building the answer turned out to be the more valuable half of the job.' },
  { y: '2025', t: 'DigiDocSmart ships', d: 'The document management system we had been building for clients one at a time, turned into a product with cloud and on-premises deployment.' },
  { y: '2026', t: 'AI automation takes the lead', d: 'Manpower supply is retired. Enterprise software and AI automation become the focus, with digitization and data capture feeding both.' }
]

export default function About() {
  useSeo({
    title: 'About us',
    description:
      'Diginathi is an engineering company in Kolkata building enterprise software and AI automation for clients in the United States and India. Founded 2023.',
    path: '/about'
  })

  return (
    <>
      <PageHead
        title="A small engineering company that says no to things."
        lede="Founded in 2023, in Kolkata. Most companies our age are still adding services to the list. We spent last year taking one off it, because the four that are left get better the more we do only them."
        aside={
          <dl className="ab-vitals">
            {[
              ['Founded', `${company.founded}, in Kolkata`],
              ['Services offered', 'Four. It was five.'],
              ['Working day', 'Moved, to overlap US Eastern'],
              ['Live overlap', 'Four hours, every working day']
            ].map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* ------------------------------------------------ story */}
      <section className="band">
        <div className="wrap">
          <div className="ab-story">
            <Reveal className="ab-story-copy">
              <p className="ab-bigp">
                We started by scanning paper. It turns out that the interesting problem is
                never the scanning — it is what happens to the information afterwards.
              </p>
              <p>
                Every digitization client eventually asked the same question: now that this
                is digital, where does it live and who is allowed to see it? Answering that
                honestly meant building software. Building software well meant hiring engineers,
                and hiring engineers meant deciding what we were not going to do.
              </p>
              <p>
                In 2026 we retired manpower supply entirely. What is left is four disciplines
                that reinforce each other: we build the system, we automate the work inside it,
                and we get your existing records into a state where both are possible.
              </p>
            </Reveal>

            <Reveal delay={110} as="ol" className="ab-timeline">
              {TIMELINE.map(t => (
                <li key={t.y}>
                  <span className="ab-year">{t.y}</span>
                  <div>
                    <h4>{t.t}</h4>
                    <p>{t.d}</p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ principles */}
      <section className="band band--sunk">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">How we work</p>
              <h2>Four commitments we will put in the contract.</h2>
            </div>
            <p className="lede">
              Anyone can write values on a wall. These are clauses — you can hold us to
              each one, and they are the reason most of our clients come back for a second project.
            </p>
          </Reveal>

          <div className="ab-prin">
            {principles.map((p, i) => (
              <Reveal key={p.num} delay={i * 70} className="ab-prin-item">
                <span className="numtag">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ US clients */}
      <section className="band" id="us-clients">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Working with US clients</p>
              <h2>Offshore, without the offshore experience.</h2>
            </div>
            <p className="lede">
              The usual complaint about an offshore team is not the code. It is waiting
              eighteen hours for an answer. We solved that the simple way: we moved our day.
            </p>
          </Reveal>

          <Reveal className="card ab-tz">
            <TimezoneOverlap />
          </Reveal>

          <div className="ab-us">
            {[
              { t: 'Four hours live, every working day', d: 'From 9am to 1pm US Eastern you can reach a named engineer, not a duty inbox. Calls, screen shares, decisions made while you are both awake.' },
              { t: 'A written handover before your morning', d: 'What moved, what is blocked, what we need from you. You start your day informed instead of asking for a status update.' },
              { t: 'USD contracts on US terms', d: 'Standard MSA and SOW, net-30, wire or ACH. Your NDA, signed by us, covering every named individual on the project.' },
              { t: 'Plain English, no jargon tax', d: 'Our documentation and our calls are in language a non-technical stakeholder can follow. If you need to forward it to your board, you can.' }
            ].map((u, i) => (
              <Reveal key={u.t} delay={i * 70} className="ab-us-item">
                <h4>{u.t}</h4>
                <p>{u.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ what we are not */}
      <section className="band band--slab on-slab">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <p className="eyebrow">Being straight with you</p>
              <h2>What we are not.</h2>
            </div>
            <p className="lede ab-not-lede">
              Knowing when a vendor is wrong for you saves more money than any discount.
              Here is where we are the wrong call.
            </p>
          </Reveal>

          <div className="ab-not">
            {NOT_US.map((n, i) => (
              <Reveal key={n.t} delay={i * 70} className="ab-not-item">
                <span className="ab-not-x"><X size={15} strokeWidth={2.6} /></span>
                <h4>{n.t}</h4>
                <p>{n.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ what we do now */}
      <section className="band band--tight">
        <div className="wrap">
          <Reveal className="ab-do">
            <p className="eyebrow">And what we are</p>
            <div className="ab-do-list">
              {services.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="ab-do-item">
                  <span className="numtag">{s.num}</span>
                  <strong>{s.title}</strong>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want to know if we are the right fit?"
        body="The fastest way to find out is a call where you describe the problem and we tell you what we would actually do about it — including recommending someone else if that is the honest answer."
        secondary={{ to: '/services', text: 'See the services' }}
      />
    </>
  )
}
