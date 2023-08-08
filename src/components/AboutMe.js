import { Link } from "react-router-dom"
import "../index.css";
import React from 'react'
import Pic0fMe from "../assets/images/img2.jpg"
import Pic0fMe2 from "../assets/images/img1.jpg"

const AboutMe = () => {
  return (
    <div className="about-me">
     <div className="left-col">
        <h1> Who Am I ?</h1>
        <p> My name is Achraf, and I'm a passionate web developer who recently graduated from the University of Phoenix boot camp. I thrive on meeting new people and discovering ways to assist them in their technical needs. My friendly and courteous nature makes collaboration a breeze, whether I'm working independently or as part of a team. With a keen eye for detail, an outgoing personality, and an insatiable eagerness to learn, I'm poised to tackle challenges and contribute my web development skills to innovative projects.
</p>
        <Link to="/Contact">
        <button className="btn">CONTACT ME</button>
        </Link>
     </div>

     <div className="right-col">
        <div className="my-image">
            <div className="image1">
                <img src= {Pic0fMe} className="img" alt=" Achraf Chibane "/>
            </div>
            <div className="image2">
                <img src= {Pic0fMe2} className="img" alt=" Achraf Chibane"/>
            </div>
        </div>
     </div>
    </div>
  )
}

export default AboutMe
