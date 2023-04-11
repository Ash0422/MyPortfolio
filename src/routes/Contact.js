import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Allhero from '../components/Allhero'
import ContactMe from '../components/ContactMe'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Allhero heading="CONTACT ME" text="Let's work Together"/>
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Contact
