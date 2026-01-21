import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='services' className='services'>
      <div className="services-content">
        <motion.div
          className="services-title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="gradient-text">My Services</h1>
          <img src={theme_pattern} alt="Theme Pattern" />
        </motion.div>

        <motion.div
          className="services-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Services_Data.map((service, index) => {
            const isExpanded = expandedService === index;
            return (
              <motion.div
                key={index}
                className='services-format'
                variants={cardVariants}
              >
                {/* Service Card with Tilt */}
                <motion.div
                  className="service-inner"
                  whileHover={{ y: -8, rotateX: 4, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Glow Effect */}
                  <div className="service-glow"></div>

                  {/* Card Content */}
                  <div className="service-number">{service.s_no}</div>
                  <h2 className="service-name">{service.s_name}</h2>
                  <p className="service-desc">{service.s_desc}</p>

                  {/* Expanded Description */}
                  <motion.div
                    className="service-full-desc"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      height: isExpanded ? "auto" : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p>{service.s_full_desc}</p>
                  </motion.div>

                  {/* Read More Button */}
                  <motion.div
                    className='services-readmore'
                    onClick={() => toggleService(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p>{isExpanded ? 'Show Less' : 'Read More'}</p>
                    <motion.img
                      src={arrow_icon}
                      alt="arrow"
                      className={isExpanded ? 'arrow-rotated' : ''}
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
