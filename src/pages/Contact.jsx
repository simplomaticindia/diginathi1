import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      // Using Web3Forms API for form submission
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your Web3Forms access key
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: 'Diginathi Website Contact Form'
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        alert('There was an error submitting the form. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero hero-page">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-tag">Get In Touch</span>
            <h1>We're Here to Help</h1>
            <p>Have a question about our services or ready to start your digital transformation journey? Reach out to us today.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="grid-2 contact-grid">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Contact Information</h3>
              <p className="contact-intro">Feel free to reach out to us directly via phone or email, or visit our office.</p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>74/10/B Satyen Roy Road<br />Kolkata - 700034</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>
                      <a href="tel:+919147743251">+91 91477 43251</a><br />
                      <a href="tel:+919147743253">+91 91477 43253</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p><a href="mailto:info@diginathi.in">info@diginathi.in</a></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-form-card">
                <h3>Send a Message</h3>
                
                {submitSuccess && (
                  <div className="success-banner">
                    <CheckCircle size={20} />
                    <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      placeholder="Tell us about your project..."
                      {...register('message', { required: 'Message is required' })}
                    />
                    {errors.message && <span className="error-message">{errors.message.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="map-container"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.827299386348!2d88.3340576!3d22.514578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270a4837508df%3A0xc6c7d420f8c3c78d!2sSatyen%20Roy%20Rd%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1708412345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diginathi Office Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
