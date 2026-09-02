import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import './CtaBand.css'

export default function CtaBand({
  eyebrow = 'Next step',
  title = "Tell us what the process costs you today.",
  body = "A 30-minute call, no deck. If software is the wrong answer for your problem, we will tell you that.",
  primary = { to: '/contact', text: 'Book a call' },
  secondary
}) {
  return (
    <section className="band band--slab on-slab ctab">
      <div className="wrap ctab-in">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="ctab-h2">{title}</h2>
          <p className="lede ctab-lede">{body}</p>
          <div className="btn-row ctab-btns">
            <Link to={primary.to} className="btn btn--accent">
              {primary.text} <ArrowRight size={17} />
            </Link>
            {secondary && (
              secondary.href
                ? <a href={secondary.href} target="_blank" rel="noopener noreferrer" className="btn btn--line">{secondary.text}</a>
                : <Link to={secondary.to} className="btn btn--line">{secondary.text}</Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
