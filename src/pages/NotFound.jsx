import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services, products } from '../data/site'
import { useSeo } from '../lib/useSeo'
import './NotFound.css'

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'That page does not exist.' })

  return (
    <section className="band nf">
      <div className="wrap wrap--narrow">
        <h1 className="nf-h1">That page is not here.</h1>
        <p className="lede nf-lede">
          Either the link was wrong or we moved it. Rather than guess which,
          here is the whole site on one screen.
        </p>

        <div className="nf-cols">
          <div>
            <p className="eyebrow eyebrow--plain">Services</p>
            <ul className="nf-list">
              {services.map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>
                    <span className="numtag">{s.num}</span> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow eyebrow--plain">Products & company</p>
            <ul className="nf-list">
              {products.map(p => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <Link to="/" className="btn btn--primary nf-btn">
          Back to the homepage <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  )
}
