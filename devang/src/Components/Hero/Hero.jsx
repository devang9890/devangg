import React from 'react'
import './Hero.css'
import dhruv from '../../assets/dhruv.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {

    
    return (
        <div id='home' className='hero'>
            <img src={dhruv} alt="" />
            <h1><span>I'm Devang Singh</span> </h1>
            <p>I'm  a FullStack Developer from India and A Btech CSE Student</p>
            <div className='hero-action'>
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
