import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <img src="/assets/Logo.png" alt="Diginathi" />
            <p>Transforming businesses through digital innovation and operational excellence. Your trusted partner for modern enterprise solutions.</p>
          </div>
          <div className="footer-newsletter">
            <h4>Subscribe to our newsletter</h4>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/contact">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/digitization-of-records">Digitization of Records</Link></li>
              <li><Link to="/services/data-entry-solution">Data Entry Solutions</Link></li>
              <li><Link to="/services/manpower-outsourcing">Manpower Outsourcing</Link></li>
              <li><Link to="/services/it-services">IT Services</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul className="footer-links">
              <li><Link to="/digidocsmart">DigiDocSmart (DMS)</Link></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@diginathi.in" className="contact-link">
                  <Mail size={16} />
                  info@diginathi.in
                </a>
              </li>
              <li>
                <a href="tel:+919147743251" className="contact-link">
                  <Phone size={16} />
                  +91 91477 43251
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Diginathi Private Limited. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
