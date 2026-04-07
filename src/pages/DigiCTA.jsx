import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, ClipboardCheck, Clock, Sparkles, ArrowRight, BarChart3, Bell, Calendar } from 'lucide-react'
import './DigiDocuIQ.css'
import './DigiCTA.css'

const DigiCTA = () => {
  return (
    <div className="product-coming-soon-page">
      <section className="cs-hero digicta-hero">
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
            <h1>DigiCTA</h1>
            <p className="cs-tagline">CRM + Task Management + Attendance</p>
            <p className="cs-description">
              An all-in-one platform to manage customer relationships, track team tasks, and monitor attendance.
              Built for growing teams that need clarity, accountability, and performance insights.
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
              <div className="cs-icon-card"><Users size={40} /></div>
              <div className="cs-icon-card"><ClipboardCheck size={40} /></div>
              <div className="cs-icon-card"><Clock size={40} /></div>
              <div className="cs-icon-card"><Calendar size={40} /></div>
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
            <p className="section-lead">Three powerful modules in one unified platform</p>
          </motion.div>

          <div className="cs-features-grid">
            {[
              { icon: <Users size={28} />, title: 'CRM Module', desc: 'Manage leads, contacts, deals, and customer interactions with pipeline visualization and follow-up automation.' },
              { icon: <ClipboardCheck size={28} />, title: 'Task Management', desc: 'Create, assign, and track tasks with priorities, deadlines, dependencies, and team collaboration tools.' },
              { icon: <Clock size={28} />, title: 'Attendance Tracking', desc: 'GPS-enabled check-in/out, leave management, shift scheduling, and automated attendance reports.' },
              { icon: <BarChart3 size={28} />, title: 'Performance Analytics', desc: 'Real-time dashboards for team productivity, sales metrics, attendance patterns, and custom KPIs.' },
              { icon: <Bell size={28} />, title: 'Smart Notifications', desc: 'Automated reminders for follow-ups, task deadlines, attendance anomalies, and escalation alerts.' },
              { icon: <Calendar size={28} />, title: 'Calendar Integration', desc: 'Unified calendar view across CRM meetings, task deadlines, and team schedules.' }
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
            <h2>Be the First to Experience DigiCTA</h2>
            <p>Unify your CRM, task management, and attendance tracking in one powerful platform.</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Join Early Access <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DigiCTA
