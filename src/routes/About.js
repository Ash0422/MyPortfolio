import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Allhero from '../components/Allhero'
import AboutMe from '../components/AboutMe'

const About = () => {
  return (
    <div>
      <Navbar />
      <Allhero heading="ABOUT ME" text="Full Stack Web Developer"/>
      <AboutMe />
      <Footer />
    </div>
  )
}

export default About
