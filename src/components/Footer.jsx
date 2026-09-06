import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react'
import { company, services, products } from '../data/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ftr on-slab">
      <div className="wrap">
        <div className="ftr-top">
          <div className="ftr-brand">
            <p className="ftr-wordmark">Diginathi</p>
            <p className="ftr-tag">{company.tagline}</p>
            <p className="ftr-blurb">
              We build enterprise software and AI automation, and turn paper archives
              into data. Engineering in Kolkata, working your hours.
            </p>
            <a
              href="https://www.linkedin.com/company/diginathi"
              className="ftr-social"
              aria-label="Diginathi on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} />
            </a>
          </div>

          <div className="ftr-cols">
            <nav className="ftr-col" aria-label="Services">
              <h4>Services</h4>
              <ul>
                {services.map(s => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="ftr-col" aria-label="Products">
              <h4>Products</h4>
              <ul>
                {products.map(p => (
                  <li key={p.slug}>
                    <Link to={`/products/${p.slug}`}>
                      {p.name}
                      {p.status === 'soon' && <span className="ftr-soon">soon</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="ftr-col" aria-label="Company">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/about#us-clients">Working with US clients</Link></li>
                <li><Link to="/services">All services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>

            <div className="ftr-col">
              <h4>Reach us</h4>
              <ul className="ftr-contact">
                <li>
                  <a href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a>
                </li>
                {company.phones.map(p => (
                  <li key={p.number}>
                    <a href={`tel:${p.number.replace(/\s/g, '')}`}>
                      <Phone size={15} />
                      <span className="ftr-num">{p.number}</span>
                      {p.wa && <span className="ftr-wa">WhatsApp</span>}
                    </a>
                  </li>
                ))}
                <li className="ftr-addr">
                  <MapPin size={15} />
                  <span>{company.address.line1}<br />{company.address.line2}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ftr-hours">
          <span className="ftr-hours-lbl">US client hours</span>
          <span className="ftr-hours-val">{company.hours.us}</span>
          <Link to="/contact" className="tlink">
            Book a call <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="ftr-base">
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <p className="ftr-base-note">
            Registered in India · Serving clients in the United States and India
          </p>
        </div>
      </div>
    </footer>
  )
}
