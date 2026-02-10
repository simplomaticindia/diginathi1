import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'Digitization of Records',
      description: 'Seamlessly convert physical documents into secure, easily accessible digital formats with our high-volume scanning and indexing services.',
      icon: '📄',
      image: '/assets/generated/digitization_service_1770700574246.png',
      slug: 'digitization-of-records'
    },
    {
      title: 'Data Entry Solutions',
      description: 'Enhance accuracy and productivity with our precise data entry services, enabling you to focus on your core business goals.',
      icon: '⌨️',
      image: '/assets/generated/data_entry_service_1770700601105.png',
      slug: 'data-entry-solution'
    },
    {
      title: 'Manpower Outsourcing',
      description: 'Access a pool of skilled professionals ready to support your administrative and operational needs with flexibility and efficiency.',
      icon: '👥',
      image: '/assets/generated/manpower_service_1770700616652.png',
      slug: 'manpower-outsourcing'
    },
    {
      title: 'IT Services',
      description: 'From infrastructure setup to ongoing support, our IT services ensure your technology backbone is robust, secure, and aligned with your business goals.',
      icon: '💻',
      image: '/assets/generated/digitization_service_1770700574246.png',
      slug: 'it-services',
      features: ['Network Solutions', 'Hardware Maintenance', 'Software Support']
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero hero-page">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-tag">Expert Solutions</span>
            <h1>Our Services</h1>
            <p>Delivering excellence through specialized services tailored to meet your business objectives.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid-page">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                className="service-card-page"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-card-content">
                  <div className="service-icon-badge">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  {service.features && (
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Link to={`/services/${service.slug}`} className="service-link-btn">
                    Learn more <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="services-cta-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="cta-content">
              <h3>Ready to Get Started?</h3>
              <p>Contact us today to discuss your requirements and get a customized quote.</p>
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
