import Reveal from './Reveal'
import './PageHead.css'

/* standfirst: the one line that belongs only to this page — a service's own
   hero line, a product's promise. Sits between the title and the explanation. */
export default function PageHead({ eyebrow, title, standfirst, lede, aside, tone = 'paper' }) {
  return (
    <section className={`phead phead--${tone} ${tone === 'slab' ? 'on-slab' : ''}`}>
      <div className="wrap phead-in">
        <Reveal className="phead-main">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {standfirst && <p className="phead-stand">{standfirst}</p>}
          {lede && <p className="lede phead-lede">{lede}</p>}
        </Reveal>
        {aside && <Reveal delay={110} className="phead-aside">{aside}</Reveal>}
      </div>
    </section>
  )
}
