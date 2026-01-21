import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dd79311e-9da0-4ffd-8b33-896ec1961bc1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitMessage('Message sent successfully!')
        event.target.reset()
        setTimeout(() => setSubmitMessage(''), 5000)
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.')
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div id='contact' className='contact'>
      <div className="contact-content-wrapper">
        <motion.div 
          className="contact-title"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1>Get In Touch</h1>
          <img src={theme_pattern} alt="" className="theme-pattern" />
        </motion.div>

        <motion.div 
          className="contact-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-left" variants={itemVariants}>
            <h1>Let's Talk</h1>
            <p>I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out. I'm always excited to connect with talented individuals and discuss new opportunities.</p>
            <div className="contact-details">
              <motion.div 
                className="contact-detail"
                whileHover={{ y: -5 }}
              >
                <img src={mail_icon} alt="email" className="detail-icon" /> 
                <p>devang9890@gmail.com</p>
              </motion.div>
              <motion.div 
                className="contact-detail"
                whileHover={{ y: -5 }}
              >
                <img src={call_icon} alt="phone" className="detail-icon" /> 
                <p>+91 9958368093</p>
              </motion.div>
              <motion.div 
                className="contact-detail"
                whileHover={{ y: -5 }}
              >
                <img src={location_icon} alt="location" className="detail-icon" /> 
                <p>Delhi, India</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.form onSubmit={onSubmit} className="contact-right" variants={itemVariants}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name"
                placeholder='Enter Your Name' 
                name='name'
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email"
                placeholder='Enter your Email' 
                name='email'
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Write your message here</label>
              <textarea 
                id="message"
                name="message" 
                rows="6" 
                placeholder='Enter your Message'
                required
              ></textarea>
            </div>

            <motion.button 
              type='submit' 
              className="contact-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>

            {submitMessage && (
              <motion.p 
                className={`submit-message ${submitMessage.includes('success') ? 'success' : 'error'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {submitMessage}
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
