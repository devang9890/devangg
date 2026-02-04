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
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  const [showLoader, setShowLoader] = useState(() => {
    // Check if user has already seen loader in this session
    return !sessionStorage.getItem('loaderSeen')
  })

  const handleLoadComplete = () => {
    sessionStorage.setItem('loaderSeen', 'true')
    setShowLoader(false)
  }

  return (
    <ThemeProvider>
      {/* Global particles background - hidden during loader */}
      <div style={{ opacity: showLoader ? 0 : 1, transition: 'opacity 0.8s ease-out' }}>
        <ParticlesBackground />
      </div>

      <AnimatePresence mode="wait">
        {showLoader ? (
          <LoadingScreen 
            key="loader"
            onLoadComplete={handleLoadComplete}
          />
        ) : (
          <motion.div 
            key="portfolio" 
            className="relative w-full min-h-screen overflow-x-hidden text-white"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative z-10">
              <div className="container">
                <Navbar/>
                <Hero/>
                <About/>
                <Services/>
                <MyWork/>
                <Contact/>
                <Footer/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
