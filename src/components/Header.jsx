import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import { services, products } from '../data/site'
import './Header.css'

const PANELS = {
  services: {
    label: 'Services',
    to: '/services',
    intro: 'Four things we do, in the order we are best at them.',
    items: services.map(s => ({
      to: `/services/${s.slug}`,
      num: s.num,
      name: s.title,
      note: s.kicker
    })),
    footLink: { to: '/services', text: 'Compare all services' }
  },
  products: {
    label: 'Products',
    to: '/products/digidocsmart',
    intro: 'Software we built, licensed to you.',
    items: products.map(p => ({
      to: `/products/${p.slug}`,
      num: p.abbr,
      name: p.name,
      note: p.status === 'soon' ? 'In development' : p.tagline
    })),
    footLink: { to: '/contact', text: 'Book a product walkthrough' }
  }
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [panel, setPanel] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const location = useLocation()
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setPanel(null)
    setMobileSection(null)
  }, [location])

  // Lock body scroll behind the mobile drawer
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      setPanel(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const hoverOpen = (key) => {
    clearTimeout(closeTimer.current)
    setPanel(key)
  }
  const hoverClose = () => {
    closeTimer.current = setTimeout(() => setPanel(null), 140)
  }

  return (
    <header className={`hdr ${scrolled ? 'is-stuck' : ''} ${panel ? 'is-open' : ''}`}>
      <div className="wrap hdr-bar">
        <Link to="/" className="hdr-logo" aria-label="Diginathi, home">
          <img src="/assets/Logo.png" alt="Diginathi" width="1309" height="359" />
        </Link>

        <nav className="hdr-nav" aria-label="Main">
          {Object.entries(PANELS).map(([key, p]) => (
            <div
              key={key}
              className="hdr-drop"
              onMouseEnter={() => hoverOpen(key)}
              onMouseLeave={hoverClose}
            >
              <button
                className={`hdr-link hdr-link--btn ${panel === key ? 'is-active' : ''}`}
                aria-expanded={panel === key}
                onClick={() => setPanel(panel === key ? null : key)}
              >
                {p.label}
                <ChevronDown size={14} strokeWidth={2} />
              </button>
            </div>
          ))}
          <NavLink to="/about" className="hdr-link">About</NavLink>
          <NavLink to="/contact" className="hdr-link">Contact</NavLink>
        </nav>

        <div className="hdr-right">
          <Link to="/contact" className="btn btn--primary hdr-cta">Talk to an engineer</Link>
          <button
            className="hdr-burger"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Desktop mega panel */}
      {panel && (
        <div
          className="hdr-panel"
          onMouseEnter={() => hoverOpen(panel)}
          onMouseLeave={hoverClose}
        >
          <div className="wrap hdr-panel-in">
            <div className="hdr-panel-aside">
              <p className="eyebrow eyebrow--plain">{PANELS[panel].label}</p>
              <p className="hdr-panel-intro">{PANELS[panel].intro}</p>
              <Link to={PANELS[panel].footLink.to} className="tlink">
                {PANELS[panel].footLink.text} <ArrowUpRight size={15} />
              </Link>
            </div>
            <ul className="hdr-panel-list">
              {PANELS[panel].items.map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="hdr-panel-item">
                    <span className="numtag">{item.num}</span>
                    <span className="hdr-panel-name">{item.name}</span>
                    <span className="hdr-panel-note">{item.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      <div className={`hdr-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="hdr-drawer-in">
          <Link to="/" className="hdr-drawer-home">Home</Link>

          {Object.entries(PANELS).map(([key, p]) => (
            <div key={key} className="hdr-acc">
              <button
                className="hdr-acc-head"
                onClick={() => setMobileSection(mobileSection === key ? null : key)}
                aria-expanded={mobileSection === key}
              >
                {p.label}
                <ChevronDown size={20} className={mobileSection === key ? 'is-turned' : ''} />
              </button>
              {mobileSection === key && (
                <ul className="hdr-acc-body">
                  {p.items.map(item => (
                    <li key={item.to}>
                      <Link to={item.to}>
                        <span className="numtag">{item.num}</span> {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to={p.footLink.to} className="hdr-acc-all">{p.footLink.text}</Link>
                  </li>
                </ul>
              )}
            </div>
          ))}

          <Link to="/about" className="hdr-drawer-home">About</Link>
          <Link to="/contact" className="hdr-drawer-home">Contact</Link>

          <Link to="/contact" className="btn btn--accent hdr-drawer-cta">
            Talk to an engineer
          </Link>
          <p className="hdr-drawer-foot">
            <a href="mailto:info@diginathi.in">info@diginathi.in</a><br />
            <a href="tel:+919147743251">+91 91477 43251</a>
          </p>
        </div>
      </div>
    </header>
  )
}
