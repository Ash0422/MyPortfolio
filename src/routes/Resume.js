import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Allhero from '../components/Allhero'
import Resume from "../components/Resume"
const Resumepage = () => {
  return (
    <div>
      <Navbar />
      <Allhero heading="MY RESUME" text="My experiences "/>
      <Resume />
      <Footer />
    </div>
  )
}

export default Resumepage
