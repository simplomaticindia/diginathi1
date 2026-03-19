import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import {
  CheckCircle, FileText, Keyboard, Users, Monitor, Bot, ArrowRight,
  Phone, Mail, Download
} from 'lucide-react'
import './ServiceDetail.css'

const servicesData = {
  'digitization-of-records': {
    title: 'Digitization of Records',
    accentColor: '#635BFF',
    icon: <FileText size={40} />,
    image: '/assets/generated/digitization_service_1770700574246.png',
    summary: 'Secure storage, easy retrieval, and long-term preservation of business records.',
    description: 'Diginathi is a trusted service provider specializing in the Digitization of Records, helping businesses, institutions, and organizations transform their physical documents into secure, accessible, and well-organized digital formats.',
    details: 'With a strong focus on accuracy, confidentiality, and efficiency, Diginathi ensures that valuable records are preserved and protected from damage, loss, or unauthorized access. By adopting advanced scanning technologies and systematic processes, we enable clients to streamline information management, reduce storage costs, and improve data accessibility for decision-making and compliance needs.',
    processSteps: [
      { step: '01', title: 'Document Assessment', desc: 'We evaluate document types, physical condition, volume, and specific digitization requirements to plan the optimal workflow.' },
      { step: '02', title: 'Scanning & Capture', desc: 'High-resolution scanning with automated quality checks ensures every document is captured clearly and completely.' },
      { step: '03', title: 'OCR & Data Extraction', desc: 'AI-powered optical character recognition extracts text, metadata, and structured data from scanned documents.' },
      { step: '04', title: 'QC Review & Archival', desc: 'Multi-level quality assurance followed by secure digital archival with proper indexing for easy retrieval.' }
    ],
    highlights: [
      'Data entry including tagging and annotation workflows',
      'File OCR with full-text indexing',
      'Metadata extraction and systematic mapping',
      'Form digitization and submission solutions',
      'Industry-ready compliance and audit handling',
      'Secure document archival and retrieval'
    ],
    stats: [
      { value: '99.9%', label: 'OCR Accuracy' },
      { value: '1M+', label: 'Pages Processed' },
      { value: '100%', label: 'Data Security' },
      { value: '48hr', label: 'Turnaround' }
    ],
    brochure: '/brochures/digitization-of-records-brochure.pdf',
    relatedServices: [
      { slug: 'data-entry-solution', title: 'Data Entry Solutions', icon: <Keyboard size={16} /> },
      { slug: 'ai-service', title: 'AI Service', icon: <Bot size={16} /> }
    ]
  },
  'data-entry-solution': {
    title: 'Data Entry Solutions',
    accentColor: '#00C4EF',
    icon: <Keyboard size={40} />,
    image: '/assets/generated/data_entry_service_1770700601105.png',
    summary: 'Accurate, efficient, and secure handling of structured and unstructured business data.',
    description: 'Diginathi Private Limited provides reliable and efficient Data Entry Solutions designed to help businesses streamline operations and maintain accurate records.',
    details: 'With a strong focus on precision, speed, and confidentiality, we deliver high-quality data entry services across various domains, including financial records, customer databases, healthcare information, and business documentation. By leveraging skilled professionals and advanced tools, Diginathi ensures error-free data processing, reducing operational burdens and enabling clients to focus on their core business activities.',
    processSteps: [
      { step: '01', title: 'Data Assessment', desc: 'We analyze your data sources, formats, volume, and specific requirements to define the optimal processing workflow.' },
      { step: '02', title: 'Team Assignment', desc: 'A dedicated team of trained data entry professionals is assigned based on domain expertise and project requirements.' },
      { step: '03', title: 'Processing & Validation', desc: 'Data is entered with multi-level accuracy checks, error correction, and real-time validation at every stage.' },
      { step: '04', title: 'Delivery & Reporting', desc: 'Structured output delivered in your preferred format with detailed quality and accuracy reports.' }
    ],
    highlights: [
      'High-volume project handling with fast turnaround',
      'Multi-level quality control and validation',
      'Domain expertise: healthcare, finance, logistics',
      'Structured and unstructured data processing',
      'Error detection and correction workflows',
      'Scalable engagement models'
    ],
    stats: [
      { value: '99.5%+', label: 'Accuracy Rate' },
      { value: '24hr', label: 'Quick Start' },
      { value: '50+', label: 'Formats Supported' },
      { value: 'High', label: 'Volume Capacity' }
    ],
    brochure: '/brochures/data-entry-solution-brochure.pdf',
    relatedServices: [
      { slug: 'digitization-of-records', title: 'Digitization', icon: <FileText size={16} /> },
      { slug: 'ai-service', title: 'AI Service', icon: <Bot size={16} /> }
    ]
  },
  'manpower-outsourcing': {
    title: 'Manpower Outsourcing',
    accentColor: '#10B981',
    icon: <Users size={40} />,
    image: '/assets/generated/manpower_service_1770700616652.png',
    summary: 'Skilled and semi-skilled workforce support with compliance-aligned operations.',
    description: 'Diginathi Private Limited is a trusted partner in providing reliable and efficient Manpower Outsourcing solutions tailored to meet the diverse workforce needs of modern businesses.',
    details: 'With a focus on flexibility, quality, and cost-effectiveness, we specialize in supplying skilled and semi-skilled professionals across multiple industries to ensure seamless operations and enhanced productivity. Our outsourcing services allow organizations to concentrate on their core business activities while we handle recruitment, payroll, compliance, and workforce management.',
    processSteps: [
      { step: '01', title: 'Requirement Analysis', desc: 'We understand your workforce needs, required skill sets, timelines, and industry-specific compliance requirements.' },
      { step: '02', title: 'Talent Sourcing & Vetting', desc: 'Rigorous recruitment process with background verification, skills assessment, and reference checks.' },
      { step: '03', title: 'Onboarding & Compliance', desc: 'Seamless onboarding with payroll setup, legal documentation, statutory compliance, and employee induction.' },
      { step: '04', title: 'Ongoing Management', desc: 'Continuous performance tracking, HR support, and flexible workforce scaling based on your evolving needs.' }
    ],
    highlights: [
      'Rapid deployment of skilled and semi-skilled resources',
      'Full recruitment and background verification',
      'Payroll processing and statutory compliance',
      'Flexible workforce scaling up or down',
      'Multi-industry staffing coverage',
      'Dedicated relationship manager'
    ],
    stats: [
      { value: '100+', label: 'Professionals Placed' },
      { value: 'Fast', label: 'Deployment' },
      { value: '100%', label: 'Compliance Rate' },
      { value: '5+', label: 'Industries Covered' }
    ],
    brochure: '/brochures/manpower-outsourcing-brochure.pdf',
    relatedServices: [
      { slug: 'it-services', title: 'IT Solution', icon: <Monitor size={16} /> },
      { slug: 'digitization-of-records', title: 'Digitization', icon: <FileText size={16} /> }
    ]
  },
  'it-services': {
    title: 'IT Solution',
    accentColor: '#F59E0B',
    icon: <Monitor size={40} />,
    image: '/assets/generated/hero_base_tech.png',
    summary: 'Business Application Development, Customization, Enterprise Deployment, and IT Supplies.',
    description: 'Diginathi Private Limited delivers comprehensive IT Solutions designed to meet the growing technological needs of businesses and organizations.',
    details: 'Our expertise covers Business Application Development, custom tool creation, and tailored solutions built to your specifications. We ensure seamless Enterprise Deployment and offer comprehensive Business tools to support smooth operational functionality. We also specialize in IT Supplies, procuring high-quality hardware and software essential for day-to-day business functions.',
    processSteps: [
      { step: '01', title: 'Discovery & Planning', desc: 'Requirements gathering, technology stack selection, project scoping, and feasibility assessment.' },
      { step: '02', title: 'Design & Architecture', desc: 'System architecture design, UI/UX planning, database design, and infrastructure planning.' },
      { step: '03', title: 'Development & Testing', desc: 'Agile development with iterative builds, rigorous QA testing, and performance optimization.' },
      { step: '04', title: 'Deployment & Support', desc: 'Enterprise-grade deployment with staff training, documentation, and ongoing technical support.' }
    ],
    highlights: [
      'Custom business application development',
      'Software customization and business tools',
      'Enterprise-grade deployment and integration',
      'IT infrastructure planning and management',
      'Hardware and software procurement',
      'Ongoing technical support and maintenance'
    ],
    stats: [
      { value: 'Custom', label: 'Built Solutions' },
      { value: 'Enterprise', label: 'Grade Architecture' },
      { value: '24/7', label: 'Support Available' },
      { value: 'Full', label: 'IT Supply Chain' }
    ],
    brochure: '/brochures/it-services-brochure.pdf',
    relatedServices: [
      { slug: 'ai-service', title: 'AI Service', icon: <Bot size={16} /> },
      { slug: 'digitization-of-records', title: 'Digitization', icon: <FileText size={16} /> }
    ]
  },
  'ai-service': {
    title: 'AI Service',
    accentColor: '#8B5CF6',
    icon: <Bot size={40} />,
    image: '/assets/generated/ai_service_cover.png',
    summary: 'Empowering enterprises with intelligent automation, custom AI agents, and document AI.',
    description: 'Diginathi brings the future to your workspace with cutting-edge AI services designed to enhance operational intelligence and streamline repetitive tasks.',
    details: 'We specialize in AI Agent Development to act as autonomous assistants, advanced AI-based Document Processing for unstructured data extraction, scalable AI Applications tailored to your specific industry constraints, and intelligent Enterprise Chatbots that integrate directly with your databases to resolve queries dynamically.',
    processSteps: [
      { step: '01', title: 'Use Case Analysis', desc: 'Identifying automation opportunities, defining AI requirements, and assessing feasibility for your specific business context.' },
      { step: '02', title: 'Model Development', desc: 'Training and fine-tuning AI models using your domain data for maximum accuracy and relevance.' },
      { step: '03', title: 'Integration & Testing', desc: 'Seamless integration with your existing systems, workflows, and databases with thorough testing.' },
      { step: '04', title: 'Deployment & Monitoring', desc: 'Live deployment with real-time performance monitoring, retraining, and continuous improvement.' }
    ],
    highlights: [
      'Custom AI Agent development for automation',
      'AI-based document processing and extraction',
      'Intelligent OCR with deep learning models',
      'Enterprise chatbot with database integration',
      'Custom AI application engineering',
      'Continuous model improvement and monitoring'
    ],
    stats: [
      { value: 'Custom', label: 'AI Agents' },
      { value: '95%+', label: 'Automation Rate' },
      { value: 'Real-time', label: 'Processing' },
      { value: '24/7', label: 'AI Availability' }
    ],
    brochure: '/brochures/ai-services-brochure.pdf',
    relatedServices: [
      { slug: 'it-services', title: 'IT Solution', icon: <Monitor size={16} /> },
      { slug: 'digitization-of-records', title: 'Digitization', icon: <FileText size={16} /> }
    ]
  }
}

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = servicesData[slug]

  if (!service) {
    return (
      <div className="sd-page">
        <section className="section">
          <div className="container">
            <div className="sd-not-found">
              <h2>Service Not Found</h2>
              <p>The service you&apos;re looking for doesn&apos;t exist.</p>
              <Link to="/services" className="btn btn-primary">
                <ArrowLeft size={18} /> Back to Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="sd-page">

      {/* Hero */}
      <section className="sd-hero" style={{ '--sd-accent': service.accentColor }}>
        <div className="sd-hero-bg" aria-hidden="true"></div>
        <div className="container">
          <motion.div
            className="sd-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="spg-pill">Our Services</span>
            <h1>{service.title}</h1>
            <p className="sd-summary">{service.summary}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Layout */}
      <section className="section">
        <div className="container">
          <div className="sd-layout">

            {/* Main Content */}
            <main className="sd-main">

              {/* Image */}
              <motion.div
                className="sd-image-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src={service.image} alt={service.title} />
              </motion.div>

              {/* Overview */}
              <motion.div
                className="sd-section-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2>Overview</h2>
                <p className="sd-lead">{service.description}</p>
                <p>{service.details}</p>
              </motion.div>

              {/* Process */}
              <motion.div
                className="sd-section-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2>Our Process</h2>
                <div className="sd-steps">
                  {service.processSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      className="sd-step"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="sd-step-num" style={{ background: service.accentColor }}>
                        {step.step}
                      </div>
                      <div className="sd-step-body">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                className="sd-section-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2>Key Highlights</h2>
                <ul className="sd-highlights">
                  {service.highlights.map((h, i) => (
                    <li key={i}>
                      <CheckCircle size={20} style={{ color: service.accentColor, flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Actions */}
              <div className="sd-actions">
                <Link to="/contact" className="btn btn-primary">
                  Request Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Explore Other Services
                </Link>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="sd-sidebar">

              {/* Contact Card */}
              <motion.div
                className="sd-card sd-contact-card"
                style={{ borderTopColor: service.accentColor }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <h4>Get a Free Consultation</h4>
                <p>Ready to streamline your operations? Talk to our experts today.</p>
                <Link
                  to="/contact"
                  className="btn"
                  style={{ background: service.accentColor, color: 'white', width: '100%', justifyContent: 'center', border: 'none' }}
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
                <div className="sd-contact-links">
                  <a href="tel:+919147743251" className="sd-contact-link">
                    <Phone size={15} /> +91 91477 43251
                  </a>
                  <a href="mailto:info@diginathi.in" className="sd-contact-link">
                    <Mail size={15} /> info@diginathi.in
                  </a>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                className="sd-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <h4>By the Numbers</h4>
                <div className="sd-stats-grid">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="sd-stat">
                      <div className="sd-stat-val" style={{ color: service.accentColor }}>{stat.value}</div>
                      <div className="sd-stat-lbl">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Download */}
              {service.brochure && (
                <motion.div
                  className="sd-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  <h4>Download Brochure</h4>
                  <p>Get detailed information about this service in our brochure.</p>
                  <a href={service.brochure} className="sd-download" download>
                    <Download size={15} /> Download PDF
                  </a>
                </motion.div>
              )}

              {/* Related */}
              {service.relatedServices && (
                <motion.div
                  className="sd-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <h4>Related Services</h4>
                  <div className="sd-related">
                    {service.relatedServices.map(rs => (
                      <Link key={rs.slug} to={`/services/${rs.slug}`} className="sd-related-item">
                        <span className="sd-rel-icon">{rs.icon}</span>
                        <span>{rs.title}</span>
                        <ArrowRight size={14} className="sd-rel-arrow" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
