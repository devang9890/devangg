import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AnimatedBackground from './Components/AnimatedBackground/AnimatedBackground'
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="container"
          >
            <AnimatedBackground />
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <MyWork/>
            <Contact/>
            <Footer/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
