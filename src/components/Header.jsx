import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  const services = [
    { name: 'Digitization of Records', slug: 'digitization-of-records' },
    { name: 'Data Entry Solutions', slug: 'data-entry-solution' },
    { name: 'Manpower Outsourcing', slug: 'manpower-outsourcing' },
    { name: 'IT Services', slug: 'it-services' }
  ]

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="/assets/Logo.png" alt="Diginathi Logo" />
        </Link>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/#about" className="nav-link">About Us</Link>
          
          <div 
            className="nav-item-dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className="nav-link dropdown-toggle">
              Services <ChevronDown size={16} />
            </span>
            <div className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
              <Link to="/services" className="dropdown-item dropdown-item-main">
                All Services
              </Link>
              <div className="dropdown-divider"></div>
              {services.map(service => (
                <Link 
                  key={service.slug}
                  to={`/services/${service.slug}`} 
                  className="dropdown-item"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link to="/digidocsmart" className="nav-link">DigiDocSmart (DMS)</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
