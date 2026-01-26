import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ParticlesBackground from './Components/ParticlesBackground'
import IntroLanding from './Components/IntroLanding/IntroLanding'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if user has already seen intro in this session
    return !sessionStorage.getItem('introSeen')
  })

  const handleEnterPortfolio = () => {
    sessionStorage.setItem('introSeen', 'true')
    setShowIntro(false)
  }

  const handleExitPortfolio = () => {
    // Optionally close the window or redirect
    window.close()
  }

  return (
    <ThemeProvider>
      {/* Global particles background runs for entire app */}
      <ParticlesBackground />
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroLanding 
            key="intro"
            onEnter={handleEnterPortfolio}
            onExit={handleExitPortfolio}
          />
        ) : (
          <div key="portfolio" className="relative w-full min-h-screen overflow-x-hidden text-white">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container"
              >
                <Navbar/>
                <Hero/>
                <About/>
                <Services/>
                <MyWork/>
                <Contact/>
                <Footer/>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
