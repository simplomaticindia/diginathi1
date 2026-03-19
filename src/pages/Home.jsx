import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Rocket, Users, CheckCircle, ArrowRight, FileText, Keyboard, Users as UsersIcon, Monitor, Bot } from 'lucide-react'
import './Home.css'

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const aiTexts = [
    "Intelligent Digitization",
    "Advanced Data Entry",
    "Reliable Manpower",
    "Comprehensive IT Solutions",
    "Enterprise AI Agents",
    "DigiDocSmart DMS Platform"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % aiTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const services = [
    {
      title: 'Digitization of Records',
      description: 'Comprehensive digitization including Data entry like tagging, File OCR, Meta data extraction, and complete Form submission solutions.',
      icon: <FileText size={36} className="text-primary" />,
      slug: 'digitization-of-records'
    },
    {
      title: 'Data Entry Solutions',
      description: 'Enhance accuracy and productivity with our precise data entry services, enabling you to focus on your core business goals.',
      icon: <Keyboard size={36} className="text-primary" />,
      slug: 'data-entry-solution'
    },
    {
      title: 'Manpower Outsourcing',
      description: 'Access a pool of skilled professionals ready to support your administrative and operational needs with flexibility and efficiency.',
      icon: <UsersIcon size={36} className="text-primary" />,
      slug: 'manpower-outsourcing'
    },
    {
      title: 'IT Solution',
      description: 'Business Application Development, Customization, Business tools, Enterprise Deployment, and IT Supplies.',
      icon: <Monitor size={36} className="text-primary" />,
      slug: 'it-services'
    },
    {
      title: 'AI Service',
      description: 'AI Agent Development, AI Document Processing, AI Applications, and Chatbot for Enterprises.',
      icon: <Bot size={36} className="text-primary" />,
      slug: 'ai-service'
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="grid-2 hero-grid">
            <motion.div className="hero-content" {...fadeInUp}>
              <span className="hero-tag">Empowering the Future with Artificial Intelligence</span>
              <h1>
                Future-Ready <br />
                <div style={{ minHeight: '3em', display: 'flex', alignItems: 'center' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="gradient-text"
                      style={{ display: 'inline-block', lineHeight: '1.2' }}
                    >
                      {aiTexts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
              <p className="hero-description" style={{ marginTop: '0.8rem' }}>
                Empowering businesses with seamless Digitization, AI Automation, and IT Solutions. Experience ultra-efficient operations with our flagship Intelligent Document Management System.
              </p>
              <div className="hero-buttons">
                <Link to="/digidocsmart" className="btn btn-primary">
                  Discover DigiDocSmart <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>
            <div className="hero-visual" style={{ position: 'relative', marginTop: '2rem' }}>
              <motion.img 
                src="/assets/generated/hero_base_tech.png" 
                alt="Diginathi Tech Solutions"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ borderRadius: 'var(--radius-lg)', width: '100%', boxShadow: 'var(--shadow-xl)' }}
              />
              
              {/* Floating Verticals */}
              <motion.div
                className="floating-vertical"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{ top: '10%', left: '-5%', position: 'absolute' }}
              >
                <div className="glass-badge">
                  <Bot size={20} className="text-secondary" /> AI Services
                </div>
              </motion.div>

              <motion.div
                className="floating-vertical"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                style={{ bottom: '20%', left: '-10%', position: 'absolute' }}
              >
                <div className="glass-badge">
                  <FileText size={20} className="text-primary" /> Digitization
                </div>
              </motion.div>

              <motion.div
                className="floating-vertical"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                style={{ top: '25%', right: '-5%', position: 'absolute' }}
              >
                <div className="glass-badge">
                  <Monitor size={20} className="text-secondary" /> IT Solutions
                </div>
              </motion.div>

              <motion.div
                className="floating-vertical"
                animate={{ y: [0, -18, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
                style={{ bottom: '15%', right: '5%', position: 'absolute' }}
              >
                <div className="glass-badge">
                  <Keyboard size={20} className="text-primary" /> Data Entry
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/assets/generated/company_motto_innovation.png" 
                alt="Transforming businesses through digital innovation"
                className="about-image"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-content"
            >
              <span className="section-tag">Who We Are</span>
              <h2>
                Reliable Services.<br />
                <span className="gradient-text">Long-Term Partnership.</span>
              </h2>
              <p className="large-text">
                Diginathi Private Limited is a fast-growing service provider dedicated to helping businesses operate more efficiently through diverse professional solutions. Established with a vision to deliver excellence and reliability, we specialize in <strong>Digitization of Records</strong> and secure data management.
              </p>
              <p>
                We combine skilled professionals with modern technology to provide cost-effective solutions that meet industry standards. Whether it's Data Entry, Manpower Outsourcing, or Facility Management, Diginathi is your trusted partner.
              </p>
              <div className="feature-grid">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Trusted Partner Since 2023</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Cost-Effective Solutions</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Compliance Focused</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Experienced Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="section-subtitle">Our Expertise</h3>
            <h2>Comprehensive Business Services</h2>
            <p>End-to-end solutions tailored to streamline your operations and enhance productivity.</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${service.slug}`} className="service-link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta-bottom"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="cta-content">
              <h3>Need a Custom Solution?</h3>
              <p>Let's discuss how we can tailor our services to your specific requirements.</p>
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* DigiDocSmart Section */}
      <section className="section dms-section">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="product-badge">Flagship Product</span>
              <h2 className="dms-title">DigiDocSmart (DMS)</h2>
              <p className="dms-description">
                Smart Document Management for the Digital Age. Automate workflows, ensure compliance, and secure your enterprise data.
              </p>
              <div className="dms-features">
                <div className="dms-feature">
                  <h4>☁️ Cloud & On-Prem</h4>
                  <p>Flexible deployment to suit your infrastructure needs.</p>
                </div>
                <div className="dms-feature">
                  <h4>🤖 AI-Powered</h4>
                  <p>Advanced indexing and full-text search capabilities.</p>
                </div>
              </div>
              <Link to="/digidocsmart" className="btn btn-primary">
                Explore DigiDocSmart <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://www.digidocsmart.com/assets/Dashbaord_dark-CVTbay_X.png" 
                alt="DigiDocSmart Interface"
                className="dms-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-section">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="section-subtitle">Why Diginathi?</h3>
              <h2>We Deliver Excellence.</h2>
              <p>Our commitment to quality, compliance, and client satisfaction sets us apart.</p>

              <div className="why-items">
                <div className="why-item">
                  <div className="why-icon">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4>Secure & Compliant</h4>
                    <p>We adhere to strict data security protocols to ensure your information is always protected.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4>Technology Driven</h4>
                    <p>Leveraging the latest tech to provide efficient, scalable, and future-proof solutions.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4>Client Centric</h4>
                    <p>Your success is our priority. We work closely with you to understand and meet your unique needs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="stats-card"
            >
              <div className="stat">
                <div className="stat-number">1M+</div>
                <p>Records Digitized</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <p>Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
