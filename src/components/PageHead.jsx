import Reveal from './Reveal'
import './PageHead.css'

export default function PageHead({ eyebrow, title, lede, aside, tone = 'paper' }) {
  return (
    <section className={`phead phead--${tone} ${tone === 'slab' ? 'on-slab' : ''}`}>
      <div className="wrap phead-in">
        <Reveal className="phead-main">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {lede && <p className="lede phead-lede">{lede}</p>}
        </Reveal>
        {aside && <Reveal delay={110} className="phead-aside">{aside}</Reveal>}
      </div>
    </section>
  )
}
