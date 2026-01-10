import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AnimatedBackground from './Components/AnimatedBackground/AnimatedBackground'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <div className="app">
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
    </ThemeProvider>
  )
}

export default App
