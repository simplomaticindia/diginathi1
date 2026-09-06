import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, Send, Check, AlertTriangle } from 'lucide-react'
import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { company, services, products } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './Contact.css'

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID
const ENDPOINT = FORM_ID ? `https://formspree.io/f/${FORM_ID}` : null

const TOPICS = [
  ...services.map(s => ({ value: s.title, label: s.title })),
  ...products.map(p => ({ value: p.name, label: `${p.name} (product)` })),
  { value: 'Something else', label: 'Something else / not sure yet' }
]

export default function Contact() {
  useSeo({
    title: 'Contact',
    description:
      'Talk to a Diginathi engineer about enterprise software, AI automation, digitization or DigiDocSmart. We answer within one business day.',
    path: '/contact'
  })

  const [state, setState] = useState('idle') // idle | sending | sent | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: 'onBlur' })

  const onSubmit = async (data) => {
    if (data._gotcha) return           // honeypot tripped — silently drop
    if (!ENDPOINT) { setState('error'); return }

    setState('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `Website enquiry — ${data.topic || 'General'} — ${data.company || data.name}`
        })
      })
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
      setState('sent')
      reset()
    } catch (err) {
      console.error('Contact form failed:', err)
      setState('error')
    }
  }

  return (
    <>
      <PageHead
        title="Tell us what is actually going wrong."
        lede="Not a polished brief — the messy version is more useful. Describe the process that costs you the most time and we will tell you honestly whether software can fix it, and roughly what that would take."
        aside={
          <ul className="ct-promise">
            <li><Check size={15} strokeWidth={2.5} /> A reply within one business day</li>
            <li><Check size={15} strokeWidth={2.5} /> You talk to an engineer, not a salesperson</li>
            <li><Check size={15} strokeWidth={2.5} /> We say no when it is not a fit</li>
          </ul>
        }
      />

      <section className="band ct-band">
        <div className="wrap ct-grid">

          {/* ------------------------------------------------ form */}
          <Reveal className="ct-formcol">
            {state === 'sent' ? (
              <div className="ct-done">
                <span className="ct-done-icon"><Check size={26} strokeWidth={2.2} /></span>
                <h2>Message received.</h2>
                <p>
                  It has landed in <strong>{company.email}</strong>. Someone who can actually
                  answer your question will reply within one business day — usually sooner if
                  you are in a US timezone.
                </p>
                <button className="btn btn--line" onClick={() => setState('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2 className="ct-form-h2">Start a conversation</h2>

                {state === 'error' && (
                  <div className="ct-alert" role="alert">
                    <AlertTriangle size={18} />
                    <div>
                      <strong>That did not send.</strong>
                      <span>
                        Please email us directly at{' '}
                        <a href={`mailto:${company.email}`}>{company.email}</a> — we will
                        get it either way.
                      </span>
                    </div>
                  </div>
                )}

                {/* honeypot — hidden from people, tempting to bots */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="ct-gotcha"
                  aria-hidden="true"
                  {...register('_gotcha')}
                />

                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="name">Your name <span aria-hidden="true">*</span></label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      {...register('name', { required: 'Please tell us your name' })}
                    />
                    {errors.name && <p className="ct-err">{errors.name.message}</p>}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" type="text" autoComplete="organization" {...register('company')} />
                  </div>
                </div>

                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="email">Work email <span aria-hidden="true">*</span></label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      aria-invalid={!!errors.email}
                      {...register('email', {
                        required: 'We need an email to reply to',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                          message: 'That does not look like a valid email address'
                        }
                      })}
                    />
                    {errors.email && <p className="ct-err">{errors.email.message}</p>}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="phone">Phone <span className="ct-opt">optional</span></label>
                    <input id="phone" type="tel" autoComplete="tel" inputMode="tel" {...register('phone')} />
                  </div>
                </div>

                <div className="ct-field">
                  <label htmlFor="topic">What is this about?</label>
                  <select id="topic" defaultValue="" {...register('topic')}>
                    <option value="" disabled>Choose the closest match</option>
                    {TOPICS.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div className="ct-field">
                  <label htmlFor="message">
                    What is the problem? <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="e.g. Two people spend every morning re-typing supplier invoices into our accounting system, and we still find mistakes at month end."
                    aria-invalid={!!errors.message}
                    {...register('message', {
                      required: 'Tell us a little about the problem',
                      minLength: { value: 20, message: 'A sentence or two, so we can give a useful reply' }
                    })}
                  />
                  {errors.message && <p className="ct-err">{errors.message.message}</p>}
                </div>

                <button type="submit" className="btn btn--primary ct-submit" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending…' : <>Send message <Send size={16} /></>}
                </button>

                <p className="ct-fine">
                  We use what you send here to reply to you. Nothing else, and we do not
                  pass it to anyone.
                </p>
              </form>
            )}
          </Reveal>

          {/* ------------------------------------------------ details */}
          <Reveal delay={110} as="aside" className="ct-side">
            <div className="ct-block">
              <h3>Reach us directly</h3>
              <ul className="ct-list">
                <li>
                  <Mail size={17} />
                  <div>
                    <span>Email</span>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </li>
                {company.phones.map(p => (
                  <li key={p.number}>
                    <Phone size={17} />
                    <div>
                      <span>{p.wa ? 'Phone & WhatsApp' : 'Phone'}</span>
                      <a href={`tel:${p.number.replace(/\s/g, '')}`}>{p.number}</a>
                    </div>
                  </li>
                ))}
                <li>
                  <MapPin size={17} />
                  <div>
                    <span>Office</span>
                    <p>{company.address.line1}<br />{company.address.line2}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="ct-block ct-hours">
              <h3><Clock size={16} /> When we are reachable</h3>
              <dl>
                <div>
                  <dt>India</dt>
                  <dd>{company.hours.ist}</dd>
                </div>
                <div>
                  <dt>US Eastern</dt>
                  <dd>{company.hours.us}</dd>
                </div>
              </dl>
              <p className="ct-hours-note">
                Outside those hours, email still reaches us — you will have a reply waiting
                when you next open your laptop.
              </p>
            </div>

            <div className="ct-map">
              <iframe
                src={`https://www.google.com/maps?q=${company.mapQuery}&z=15&output=embed`}
                title="Diginathi office location on a map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
