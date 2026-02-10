import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cloud, Lock, ArrowRight, Play, FileText, GitBranch, Shield, Activity, Search, Share2 } from 'lucide-react'
import './DigiDocSmart.css'

const DigiDocSmart = () => {
  return (
    <div className="dms-page">
      {/* Hero Section */}
      <section className="dms-hero-new">
        <div className="container">
          <div className="grid-2 hero-grid-new">
            <motion.div 
              className="hero-content-new"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero-badge-new">
                <span className="pulse-dot"></span>
                Available as SaaS & On-Premises
              </div>
              <h1>Smart Document Management for the Digital Age</h1>
              <p className="hero-subtext">
                DigiDocSmart gives your enterprise complete control over documents — from creation to archival. Secure storage, automated workflows, granular access control, and full audit trails. Deploy on our cloud or your own servers.
              </p>
              <div className="hero-cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Start Free Trial
                </Link>
                <button className="btn btn-ghost">
                  <Play size={18} /> Watch Demo
                </button>
              </div>
              <div className="hero-stats-row">
                <div className="stat-item">
                  <div className="stat-value">35+</div>
                  <div className="stat-label">Features</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">99.9%</div>
                  <div className="stat-label">Uptime SLA</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">256-bit</div>
                  <div className="stat-label">Encryption</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">6-Tier</div>
                  <div className="stat-label">Access Control</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="hero-visual-new"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/assets/generated/dms_dashboard_hero.png" alt="DigiDocSmart Dashboard" className="dashboard-mockup" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="trusted-content"
          >
            <p className="trusted-text">Trusted by enterprises across Hospitality, Healthcare, Real Estate, Construction, Manufacturing & more</p>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="section features-highlight-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Powerful Features for Modern Enterprises</h2>
            <p>Everything you need to manage documents at scale</p>
          </motion.div>

          <div className="features-grid-3x2">
            <motion.div
              className="feature-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="feature-icon-new"><FileText size={28} /></div>
              <h3>Document Management</h3>
              <p>Hierarchical folders, drag-and-drop upload, bulk operations, custom metadata, tags, and favorites.</p>
            </motion.div>

            <motion.div
              className="feature-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="feature-icon-new"><GitBranch size={28} /></div>
              <h3>Workflow Automation</h3>
              <p>Multi-step approval workflows with templates, automatic routing, timeout handling, and priority levels.</p>
            </motion.div>

            <motion.div
              className="feature-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="feature-icon-new"><Shield size={28} /></div>
              <h3>Enterprise Security</h3>
              <p>Classification-based access (Public, Internal, Confidential, Restricted), 2FA, session fingerprinting, CSRF protection.</p>
            </motion.div>

            <motion.div
              className="feature-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="feature-icon-new"><Activity size={28} /></div>
              <h3>Audit & Compliance</h3>
              <p>Tamper-proof audit trails with hash-chain integrity, geolocation tracking, device fingerprinting, exportable logs.</p>
            </motion.div>

            <motion.div
              className="feature-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="feature-icon-new"><Search size={28} /></div>
              <h3>Advanced Search</h3>
              <p>Full-text search with filters by type, date, classification, tags, owner, department. Saved searches and history.</p>
            </motion.div>

            <motion.div
              className="feature-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="feature-icon-new"><Share2 size={28} /></div>
              <h3>Collaboration & Sharing</h3>
              <p>Internal and external sharing with password protection, download limits, expiration dates, and share analytics.</p>
            </motion.div>
          </div>

          <motion.div
            className="features-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact" className="link-arrow">
              See All 35+ Features <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="section deployment-brief-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Choose Your Deployment</h2>
            <p>Flexible options to match your infrastructure strategy</p>
          </motion.div>

          <div className="deployment-brief-grid">
            <motion.div
              className="deployment-brief-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="deployment-icon">
                <Cloud size={32} />
              </div>
              <h3>SaaS / Cloud</h3>
              <p>Get started in minutes. We handle infrastructure, updates, and security.</p>
              <Link to="/contact" className="btn btn-primary btn-full">
                Start Free Trial
              </Link>
            </motion.div>

            <motion.div
              className="deployment-brief-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="deployment-icon">
                <Lock size={32} />
              </div>
              <h3>On-Premises</h3>
              <p>Full data sovereignty. Deploy on your servers with complete control.</p>
              <Link to="/contact" className="btn btn-outline btn-full">
                Contact Sales
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="deployment-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact" className="link-arrow">
              Compare deployment options <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industry Use Cases Section */}
      <section className="section industries-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Built for industries where documents matter most</h2>
          </motion.div>

          <div className="industries-grid">
            <motion.div
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="industry-emoji">🏨</div>
              <h3>Hospitality</h3>
              <p>SOPs, vendor contracts, compliance certificates across properties</p>
              <Link to="/contact" className="link-arrow-small">
                Read Case Study <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="industry-emoji">🏥</div>
              <h3>Hospital & Healthcare</h3>
              <p>Patient records, clinical SOPs, accreditation documents, regulatory compliance</p>
              <Link to="/contact" className="link-arrow-small">
                Read Case Study <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="industry-emoji">🏘️</div>
              <h3>Real Estate</h3>
              <p>Title deeds, lease agreements, regulatory approvals, buyer documents</p>
              <Link to="/contact" className="link-arrow-small">
                Read Case Study <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="industry-emoji">🔨</div>
              <h3>Construction & Railway</h3>
              <p>Blueprints, permits, inspection reports, change orders</p>
              <Link to="/contact" className="link-arrow-small">
                Read Case Study <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="industry-emoji">🏭</div>
              <h3>Manufacturing</h3>
              <p>ISO document control, SOPs, quality reports, specifications</p>
              <Link to="/contact" className="link-arrow-small">
                Read Case Study <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="industry-emoji">🏢</div>
              <h3>Enterprise</h3>
              <p>Multi-department, multi-location document governance at scale</p>
              <Link to="/contact" className="link-arrow-small">
                Read Case Study <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why DigiDocSmart Section */}
      <section className="section why-dms-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why enterprises choose DigiDocSmart</h2>
          </motion.div>

          <div className="advantages-grid">
            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="advantage-number">01</div>
              <h3>Deploy Your Way</h3>
              <p>Same platform, SaaS or On-Premises. Switch as your needs evolve.</p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="advantage-number">02</div>
              <h3>Bank-Grade Security</h3>
              <p>2FA, classification-based access, session fingerprinting, tamper-proof audit trails.</p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="advantage-number">03</div>
              <h3>Zero Learning Curve</h3>
              <p>Modern, intuitive UI. Productive from day one.</p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="advantage-number">04</div>
              <h3>Powerful Workflow Engine</h3>
              <p>Visual workflow builder with multi-step, multi-approver, timeout, and escalation support.</p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="advantage-number">05</div>
              <h3>Compliance Ready</h3>
              <p>Retention policies, hash-chain audit trails, classification enforcement, exportable compliance reports.</p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="advantage-number">06</div>
              <h3>Scales With You</h3>
              <p>10 users to 10,000. Multi-department, multi-storage, feature flags for gradual rollout.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section final-cta-section">
        <div className="container">
          <motion.div 
            className="final-cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to take control of your documents?</h2>
            <p>Start your free trial or schedule a personalized demo with our team.</p>
            <div className="final-cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start Free Trial
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DigiDocSmart
