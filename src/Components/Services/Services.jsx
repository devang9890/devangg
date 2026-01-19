import React, { useState } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div id='services' className='services'>
        <div className="servies-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                const isExpanded = expandedService === index;
                return <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    {isExpanded && (
                        <div className="service-full-desc">
                            <p>{service.s_full_desc}</p>
                        </div>
                    )}
                    <div className='services-readmore' onClick={() => toggleService(index)}>
                        <p>{isExpanded ? 'Read Less' : 'Read More'}</p>
                        <img src={arrow_icon} alt="" className={isExpanded ? 'arrow-rotated' : ''} />
                    </div>
                </div>
            })}
        </div>
      
    </div>
  )
}

export default Services
