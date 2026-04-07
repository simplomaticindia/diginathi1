import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, FileSearch, Cpu, Sparkles, ArrowRight, Zap, BarChart3, Shield } from 'lucide-react'
import './DigiDocuIQ.css'

const DigiDocuIQ = () => {
  return (
    <div className="product-coming-soon-page">
      <section className="cs-hero">
        <div className="cs-hero-mesh" aria-hidden="true"></div>
        <div className="container cs-hero-inner">
          <motion.div
            className="cs-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="cs-badge">
              <Sparkles size={14} />
              Coming Soon
            </div>
            <h1>DigiDocuIQ</h1>
            <p className="cs-tagline">Intelligent Document Processor</p>
            <p className="cs-description">
              AI-powered document intelligence that reads, understands, and extracts data from any document format.
              Automate classification, extraction, and validation with enterprise-grade accuracy.
            </p>
            <div className="cs-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get Early Access <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-ghost-cs">
                Request Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="cs-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="cs-icon-grid">
              <div className="cs-icon-card"><Brain size={40} /></div>
              <div className="cs-icon-card"><FileSearch size={40} /></div>
              <div className="cs-icon-card"><Cpu size={40} /></div>
              <div className="cs-icon-card"><Zap size={40} /></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section cs-features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>What to Expect</h2>
            <p className="section-lead">Powerful AI capabilities designed for enterprise document workflows</p>
          </motion.div>

          <div className="cs-features-grid">
            {[
              { icon: <Brain size={28} />, title: 'AI Classification', desc: 'Automatically classify documents by type, category, and priority using advanced ML models.' },
              { icon: <FileSearch size={28} />, title: 'Smart Extraction', desc: 'Extract structured data from invoices, contracts, forms, and unstructured documents.' },
              { icon: <BarChart3 size={28} />, title: 'Analytics Dashboard', desc: 'Real-time insights into document processing volumes, accuracy rates, and bottlenecks.' },
              { icon: <Shield size={28} />, title: 'Enterprise Security', desc: 'On-premises deployment option with end-to-end encryption and compliance controls.' },
              { icon: <Zap size={28} />, title: 'Batch Processing', desc: 'Process thousands of documents simultaneously with intelligent queue management.' },
              { icon: <Cpu size={28} />, title: 'API Integration', desc: 'RESTful APIs and webhooks for seamless integration with your existing systems.' }
            ].map((f, i) => (
              <motion.div
                key={i}
                className="cs-feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="cs-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-cta-section">
        <div className="container">
          <motion.div
            className="cs-cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Be the First to Experience DigiDocuIQ</h2>
            <p>Join our early access program and transform your document processing workflows.</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Join Early Access <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DigiDocuIQ
