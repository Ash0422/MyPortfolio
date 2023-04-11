import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Allhero from '../components/Allhero';
import Project from '../components/Project';

const Projectcard = () => {
  return (
    <div>
      <Navbar />
      <Allhero heading="MY PROJECTS" text="Some of my recent Projects"/>
      <Project />
      <Footer />
    </div>
  )
}

export default Projectcard;

