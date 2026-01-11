import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const displayedProjects = showAllProjects ? mywork_data : mywork_data.slice(0, 6);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
       {displayedProjects.map((work,index)=>{
        return (
          <div key={index} className="project-card">
            <img src={work.w_img} alt={work.w_name} />
            <div className="project-info">
              <h3>{work.w_name}</h3>
              <p className="project-description">{work.w_desc}</p>
              <div className="project-buttons">
                <a 
                  href={work.live_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn live-demo"
                >
                  Live Demo
                </a>
                <a 
                  href={work.github_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn code"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        )
       })}
      </div>
      {mywork_data.length > 6 && (
        <div className="mywork-showmore" onClick={() => setShowAllProjects(!showAllProjects)}>
          <p>{showAllProjects ? 'Show Less' : 'Show More'}</p>
          <img src={arrow_icon} alt="" className={showAllProjects ? 'arrow-rotated' : ''} />
        </div>
      )}
    </div>
  )
}

export default MyWork
