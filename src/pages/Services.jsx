import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, FileText, Keyboard, Users, Monitor, Bot } from 'lucide-react'
import './Services.css'

const servicesList = [
  {
    title: 'Digitization of Records',
    description: 'Diginathi is a trusted service provider specializing in the Digitization of Records. We help businesses transform physical documents into secure, accessible, and well-organized digital formats using advanced scanning technologies and systematic processes.',
    icon: <FileText size={32} />,
    image: '/assets/generated/digitization_service_1770700574246.png',
    slug: 'digitization-of-records',
    color: '#E8792B',
    features: [
      'Data entry including tagging and annotation workflows',
      'File OCR with full-text indexing capabilities',
      'Metadata extraction and systematic mapping',
      'Form digitization and submission solutions',
      'Industry-ready compliance and audit handling',
      'Secure document archival and retrieval systems'
    ]
  },
  {
    title: 'Data Entry Solutions',
    description: 'Diginathi provides reliable and efficient Data Entry Solutions designed to help businesses streamline operations and maintain accurate records. With a focus on precision, speed, and confidentiality, we deliver high-quality data entry across all domains.',
    icon: <Keyboard size={32} />,
    image: '/assets/generated/data_entry_service_1770700601105.png',
    slug: 'data-entry-solution',
    color: '#F5A623',
    features: [
      'High-volume project handling with fast turnaround',
      'Multi-level quality control and validation workflows',
      'Domain-specific expertise: healthcare, finance, logistics',
      'Structured and unstructured data processing',
      'Error detection and correction processes',
      'Scalable engagement models tailored to your needs'
    ]
  },
  {
    title: 'Manpower Outsourcing',
    description: 'Diginathi is a trusted partner in providing reliable Manpower Outsourcing solutions. We specialize in supplying skilled and semi-skilled professionals across multiple industries, ensuring seamless operations and enhanced productivity.',
    icon: <Users size={32} />,
    image: '/assets/generated/manpower_service_1770700616652.png',
    slug: 'manpower-outsourcing',
    color: '#1B2D4F',
    features: [
      'Rapid deployment of skilled and semi-skilled resources',
      'Full recruitment, screening, and background verification',
      'Payroll processing and statutory compliance management',
      'Flexible workforce scaling up or down as needed',
      'Multi-industry staffing: hospitality, healthcare, logistics',
      'Dedicated relationship manager for ongoing support'
    ]
  },
  {
    title: 'IT Solution',
    description: 'Diginathi delivers comprehensive IT Solutions covering Business Application Development, custom tool creation, enterprise deployment, and IT supply chain management. We ensure seamless integration and smooth operational functionality.',
    icon: <Monitor size={32} />,
    image: '/assets/generated/hero_base_tech.png',
    slug: 'it-services',
    color: '#2A4270',
    features: [
      'Custom business application development',
      'Software customization and business tool creation',
      'Enterprise-grade deployment and system integration',
      'IT infrastructure planning and management',
      'Hardware and software procurement (IT Supplies)',
      'Ongoing technical support and maintenance'
    ]
  },
  {
    title: 'AI Service',
    description: 'Diginathi brings the future to your workspace with cutting-edge AI services. We develop intelligent automation solutions including AI agents, document processing AI, custom AI applications, and enterprise chatbot systems that integrate with your operations.',
    icon: <Bot size={32} />,
    image: '/assets/generated/ai_service_cover.png',
    slug: 'ai-service',
    color: '#E8792B',
    features: [
      'Custom AI Agent development for business automation',
      'AI-based document processing and data extraction',
      'Intelligent OCR powered by deep learning models',
      'Enterprise chatbot integration with database connectivity',
      'AI application development for industry-specific workflows',
      'Continuous model improvement and performance monitoring'
    ]
  }
]

const ServiceRow = ({ service, reverse }) => (
  <motion.div
    className={`service-row ${reverse ? 'service-row-reverse' : ''}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="srv-image-side">
      <div className="srv-img-frame" style={{ '--accent': service.color }}>
        <img src={service.image} alt={service.title} />
        <div className="srv-icon-badge" style={{ background: service.color }}>
          {service.icon}
        </div>
      </div>
    </div>

    <div className="srv-content-side">
      <h2 className="srv-row-title">{service.title}</h2>
      <p className="srv-row-desc">{service.description}</p>
      <ul className="srv-row-features">
        {service.features.map((f, i) => (
          <li key={i}>
            <CheckCircle size={15} style={{ color: service.color, flexShrink: 0 }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="srv-row-actions">
        <Link to={`/services/${service.slug}`} className="btn btn-primary">
          Learn More <ArrowRight size={16} />
        </Link>
        <Link to="/contact" className="btn btn-outline">
          Get a Quote
        </Link>
      </div>
    </div>
  </motion.div>
)

const Services = () => {
  return (
    <div className="services-page">

      {/* Page Hero */}
      <section className="services-pg-hero">
        <div className="spg-hero-bg" aria-hidden="true"></div>
        <div className="container">
          <motion.div
            className="spg-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="spg-pill">Expert Solutions</span>
            <h1>Our Services</h1>
            <p>Comprehensive, end-to-end business solutions designed to modernize operations, reduce costs, and drive sustainable growth.</p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Service Rows */}
      <section className="section services-rows-section">
        <div className="container">
          <div className="services-rows-stack">
            {servicesList.map((service, i) => (
              <ServiceRow key={service.slug} service={service} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-bottom-cta">
        <div className="container">
          <motion.div
            className="svc-cta-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="svc-cta-text">
              <h3>Ready to Get Started?</h3>
              <p>Contact us today to discuss your requirements and receive a customized solution proposal.</p>
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Request Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Services
