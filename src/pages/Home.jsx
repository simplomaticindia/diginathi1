import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Rocket, Users, CheckCircle, ArrowRight,
  FileText, Keyboard, Users as UsersIcon, Monitor, Bot,
  TrendingUp, Star, Award, Globe, Lock, Zap
} from 'lucide-react'
import './Home.css'

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const heroTexts = [
    'Intelligent Digitization',
    'Precision Data Entry',
    'Reliable Manpower',
    'Enterprise IT Solutions',
    'AI-Powered Automation',
    'DigiDocSmart DMS'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: 'Digitization of Records',
      description: 'Transform physical documents into secure, searchable digital assets with OCR, metadata extraction, and compliance handling.',
      icon: <FileText size={26} />,
      highlights: ['File OCR & Metadata Mapping', 'Secure Digital Archival', 'Compliance Ready'],
      slug: 'digitization-of-records',
      color: '#635BFF'
    },
    {
      title: 'Data Entry Solutions',
      description: 'Accurate, high-volume data processing across financial, healthcare, and business domains — error-free and on-time.',
      icon: <Keyboard size={26} />,
      highlights: ['High-Volume Processing', 'Quality-Controlled Workflows', 'Multi-Domain Expertise'],
      slug: 'data-entry-solution',
      color: '#00D4FF'
    },
    {
      title: 'Manpower Outsourcing',
      description: 'Skilled professionals deployed across industries with full compliance, payroll, and workforce management.',
      icon: <UsersIcon size={26} />,
      highlights: ['Rapid Resource Deployment', 'Payroll & Compliance', 'Flexible Workforce Scaling'],
      slug: 'manpower-outsourcing',
      color: '#10B981'
    },
    {
      title: 'IT Solution',
      description: 'Custom application development, enterprise deployment, business tools, and complete IT supply chain management.',
      icon: <Monitor size={26} />,
      highlights: ['Custom App Development', 'Enterprise Deployment', 'IT Supplies & Support'],
      slug: 'it-services',
      color: '#F59E0B'
    },
    {
      title: 'AI Service',
      description: 'Intelligent automation with AI agents, document processing AI, custom applications, and enterprise chatbot integration.',
      icon: <Bot size={26} />,
      highlights: ['AI Agent Development', 'Document AI Processing', 'Enterprise Chatbots'],
      slug: 'ai-service',
      color: '#8B5CF6'
    }
  ]

  const industries = ['Hospitality', 'Healthcare', 'Real Estate', 'Construction', 'Manufacturing', 'Finance', 'Education', 'Government']

  return (
    <div className="home-page">

      {/* ===== HERO ===== */}
      <section className="hero-dark">
        <div className="hero-dark-mesh" aria-hidden="true"></div>
        <div className="container hero-dark-inner">
          <motion.div
            className="hero-content-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-pill">
              <Zap size={13} />
              Empowering Businesses with Digital Innovation
            </span>
            <h1 className="hero-headline">
              Future&#8209;Ready
              <span className="hero-rotating-wrapper">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -28 }}
                    transition={{ duration: 0.45 }}
                    className="hero-gradient-text"
                  >
                    {heroTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="hero-subtext">
              End-to-end solutions for Digitization, Data Entry, Manpower, IT, and AI.
              Diginathi empowers enterprises to operate smarter, faster, and more efficiently.
            </p>
            <div className="hero-actions">
              <Link to="/digidocsmart" className="btn btn-primary">
                Discover DigiDocSmart <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="hero-ghost-btn">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-glow" aria-hidden="true"></div>
            <img
              src="/assets/generated/hero_base_tech.png"
              alt="Diginathi Technology Platform"
              className="hero-img"
            />
            <motion.div className="float-badge float-tl" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}>
              <Bot size={15} /> AI Services
            </motion.div>
            <motion.div className="float-badge float-bl" animate={{ y: [0, -16, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}>
              <FileText size={15} /> Digitization
            </motion.div>
            <motion.div className="float-badge float-tr" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}>
              <Monitor size={15} /> IT Solutions
            </motion.div>
            <motion.div className="float-badge float-br" animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1.5 }}>
              <Keyboard size={15} /> Data Entry
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          className="hero-stats-strip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="container hero-stats-row">
            {[
              { number: '1M+', label: 'Records Digitized' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '5+', label: 'Industries Served' }
            ].map((s, i) => (
              <div key={i} className="hero-stat-item">
                <div className="hero-stat-num">{s.number}</div>
                <div className="hero-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== INDUSTRIES BAND ===== */}
      <section className="industries-band">
        <div className="container">
          <p className="ind-label">Trusted across industries</p>
          <div className="ind-pills">
            {industries.map(ind => (
              <span key={ind} className="ind-pill">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services-home-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Our Expertise</span>
            <h2>Comprehensive Business Services</h2>
            <p className="section-lead">End-to-end solutions designed to streamline operations, reduce costs, and drive growth.</p>
          </motion.div>

          <div className="services-home-grid">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                className="svc-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="svc-top-bar" style={{ background: s.color }}></div>
                <div className="svc-icon" style={{ color: s.color, background: `${s.color}18` }}>
                  {s.icon}
                </div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.description}</p>
                <ul className="svc-highlights">
                  {s.highlights.map((h, j) => (
                    <li key={j}>
                      <CheckCircle size={13} style={{ color: s.color, flexShrink: 0 }} />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${s.slug}`} className="svc-link" style={{ color: s.color }}>
                  Learn more <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="svc-card svc-cta-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <h3>Need a Custom Solution?</h3>
              <p>Let's discuss how we can tailor our services to your specific business requirements and budget.</p>
              <Link to="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginTop: 'auto' }}>
                Free Consultation <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section about-section-new">
        <div className="container">
          <div className="about-new-grid">
            <motion.div
              className="about-img-col"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-img-frame">
                <img src="/assets/generated/company_motto_innovation.png" alt="Diginathi Innovation" />
                <div className="about-badge">
                  <Award size={24} className="about-badge-icon" />
                  <div>
                    <div className="ab-label">Trusted Since</div>
                    <div className="ab-value">2023</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-content-col"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-eyebrow">Who We Are</span>
              <h2>Reliable Services.<br /><span className="gradient-text">Long-Term Partnership.</span></h2>
              <p className="about-lead">
                Diginathi Private Limited is a fast-growing service provider dedicated to helping businesses
                operate more efficiently through diverse professional solutions. Established with a vision to
                deliver excellence and reliability, we specialize in <strong>Digitization of Records</strong> and secure data management.
              </p>
              <p>
                We combine skilled professionals with modern technology to provide cost-effective solutions that meet industry standards.
                From Data Entry to AI-powered services &mdash; Diginathi is your trusted digital transformation partner.
              </p>
              <div className="about-checkgrid">
                {['Trusted Partner Since 2023', 'Cost-Effective Solutions', 'Compliance Focused', 'Experienced Team'].map(f => (
                  <div key={f} className="about-check-item">
                    <CheckCircle size={18} className="ab-check" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary about-cta-btn">
                Work with Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="stats-banner-section">
        <div className="container stats-banner-row">
          {[
            { icon: <TrendingUp size={22} />, number: '1M+', label: 'Records Digitized' },
            { icon: <Star size={22} />, number: '100%', label: 'Client Satisfaction' },
            { icon: <Award size={22} />, number: '50+', label: 'Projects Delivered' },
            { icon: <Globe size={22} />, number: '5+', label: 'Industries Served' }
          ].map((s, i) => (
            <motion.div
              key={i}
              className="stats-banner-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="sb-icon">{s.icon}</div>
              <div className="sb-num">{s.number}</div>
              <div className="sb-lbl">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== DIGIDOCSMART ===== */}
      <section className="dms-dark-section">
        <div className="dms-dark-glow" aria-hidden="true"></div>
        <div className="container dms-dark-inner">
          <motion.div
            className="dms-content-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="dms-eyebrow-badge">Flagship Product</span>
            <h2 className="dms-heading">DigiDocSmart (DMS)</h2>
            <p className="dms-subtext">
              Smart Document Management for the Digital Age. Automate workflows, ensure compliance,
              and secure your enterprise data &mdash; available as SaaS or On-Premises.
            </p>
            <div className="dms-feature-chips">
              {[
                { icon: <Lock size={14} />, text: '256-bit Encryption' },
                { icon: <Globe size={14} />, text: 'Cloud & On-Prem' },
                { icon: <Bot size={14} />, text: 'AI-Powered Search' },
                { icon: <Shield size={14} />, text: 'Tamper-Proof Audits' }
              ].map(c => (
                <div key={c.text} className="dms-chip">{c.icon}{c.text}</div>
              ))}
            </div>
            <div className="dms-action-row">
              <Link to="/digidocsmart" className="btn btn-primary">
                Explore DigiDocSmart <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn dms-ghost-btn">
                Schedule Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="dms-visual-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src="https://www.digidocsmart.com/assets/Dashbaord_dark-CVTbay_X.png"
              alt="DigiDocSmart Dashboard Interface"
              className="dms-dashboard-img"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== WHY DIGINATHI ===== */}
      <section className="section why-new-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Why Diginathi?</span>
            <h2>We Deliver Excellence</h2>
            <p className="section-lead">Our commitment to quality, compliance, and client satisfaction sets us apart from the rest.</p>
          </motion.div>

          <div className="why-new-grid">
            {[
              {
                icon: <Shield size={28} />,
                title: 'Secure & Compliant',
                description: 'Strict data security protocols and industry compliance standards ensure your information is always protected and accessible.',
                color: '#635BFF'
              },
              {
                icon: <Rocket size={28} />,
                title: 'Technology Driven',
                description: 'Leveraging the latest technology to deliver efficient, scalable, and future-proof solutions for businesses of all sizes.',
                color: '#00D4FF'
              },
              {
                icon: <Users size={28} />,
                title: 'Client Centric',
                description: "Your success is our priority. We work closely with you to understand and exceed your unique business requirements.",
                color: '#10B981'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="why-card-new"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="why-icon-new" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="why-title-new">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner-section">
        <div className="container">
          <motion.div
            className="cta-banner-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-banner-text">
              <h2>Ready to Transform Your Business?</h2>
              <p>Join organizations that trust Diginathi for their digital transformation journey.</p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn cta-primary-btn">
                Get Started Today <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn cta-outline-btn">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home
