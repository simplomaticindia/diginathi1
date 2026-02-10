import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, CheckCircle } from 'lucide-react'
import './ServiceDetail.css'

const ServiceDetail = () => {
  const { slug } = useParams()

  const servicesData = {
    'digitization-of-records': {
      title: 'Digitization of Records',
      icon: '📄',
      image: '/assets/generated/digitization_service_1770700574246.png',
      summary: 'Secure storage, easy retrieval, and long-term preservation of business records.',
      description: 'Diginathi is a trusted service provider specializing in the Digitization of Records, helping businesses, institutions, and organizations transform their physical documents into secure, accessible, and well-organized digital formats.',
      details: 'With a strong focus on accuracy, confidentiality, and efficiency, Diginathi ensures that valuable records are preserved and protected from damage, loss, or unauthorized access. By adopting advanced scanning technologies and systematic processes, the company enables clients to streamline information management, reduce storage costs, and improve data accessibility for decision-making and compliance needs.',
      highlights: [
        'Secure and searchable digital archives',
        'Bulk scanning and metadata indexing',
        'Role-based access and retention support',
        'Industry-ready compliance handling'
      ],
      brochure: '/brochures/digitization-of-records-brochure.pdf'
    },
    'data-entry-solution': {
      title: 'Data Entry Solution',
      icon: '⌨️',
      image: '/assets/generated/data_entry_service_1770700601105.png',
      summary: 'Accurate, efficient, and secure handling of structured and unstructured business data.',
      description: 'Diginathi Private Limited provides reliable and efficient Data Entry Solutions designed to help businesses streamline operations and maintain accurate records.',
      details: 'With a strong focus on precision, speed, and confidentiality, the company delivers high-quality data entry services across various domains, including financial records, customer databases, healthcare information, and business documentation. By leveraging skilled professionals and advanced tools, Diginathi ensures error-free data processing, reducing operational burdens and enabling clients to focus on their core business activities.',
      highlights: [
        'High-volume project handling',
        'Quality-controlled processing workflows',
        'Domain-specific data entry operations',
        'Scalable engagement models'
      ],
      brochure: '/brochures/data-entry-solution-brochure.pdf'
    },
    'manpower-outsourcing': {
      title: 'Manpower Outsourcing',
      icon: '👥',
      image: '/assets/generated/manpower_service_1770700616652.png',
      summary: 'Skilled and semi-skilled workforce support with compliance-aligned operations.',
      description: 'Diginathi Private Limited is a trusted partner in providing reliable and efficient Manpower Outsourcing solutions tailored to meet the diverse workforce needs of modern businesses.',
      details: 'With a focus on flexibility, quality, and cost-effectiveness, we specialize in supplying skilled and semi-skilled professionals across multiple industries to ensure seamless operations and enhanced productivity. Our outsourcing services allow organizations to concentrate on their core business activities while we handle recruitment, payroll, compliance, and workforce management with utmost professionalism.',
      highlights: [
        'Rapid deployment of skilled resources',
        'Recruitment, payroll, and compliance support',
        'Flexible workforce scaling',
        'Multi-industry staffing coverage'
      ],
      brochure: '/brochures/manpower-outsourcing-brochure.pdf'
    },

    'it-services': {
      title: 'IT Services',
      icon: '💻',
      image: '/assets/generated/digitization_service_1770700574246.png',
      summary: 'End-to-end IT setup, maintenance, and hardware supply under one roof.',
      description: 'Diginathi Private Limited offers comprehensive IT Services designed to meet the growing technological needs of businesses and organizations.',
      details: 'Our expertise covers a wide range of solutions, including professional CCTV camera setup for enhanced security, seamless LAN connectivity to ensure smooth communication, and reliable server setup and maintenance for uninterrupted operations. We also specialize in supplying high-quality hardware such as computers, laptops, hard disks, printers, scanners, shredders, and other essential IT equipment to support day-to-day business functions.',
      highlights: [
        'CCTV and surveillance deployment',
        'LAN and connectivity implementation',
        'Server setup and maintenance',
        'Hardware procurement and support'
      ],
      brochure: '/brochures/it-services-brochure.pdf'
    }
  }

  const service = servicesData[slug]

  if (!service) {
    return (
      <div className="service-detail-page">
        <section className="section">
          <div className="container">
            <h2>Service not found</h2>
            <Link to="/services" className="btn btn-primary">
              <ArrowLeft size={18} /> Back to Services
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="hero hero-page">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="back-link">
              <ArrowLeft size={18} /> Back to Services
            </Link>
            <div className="service-hero-icon">{service.icon}</div>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Content */}
      <section className="section">
        <div className="container">
          <div className="service-detail-content">
            <motion.div
              className="service-detail-image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={service.image} alt={service.title} />
            </motion.div>

            <motion.div
              className="service-main"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Overview</h2>
              <p className="large-text">{service.description}</p>
              <p>{service.details}</p>

              <h3>Key Highlights</h3>
              <ul className="highlights-list">
                {service.highlights.map((highlight, index) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="service-actions">
                <Link to="/contact" className="btn btn-primary">
                  Request Consultation
                </Link>
                <a href={service.brochure} download className="btn btn-outline">
                  <Download size={18} /> Download Brochure
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
