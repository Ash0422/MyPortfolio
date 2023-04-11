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
        <p> My Name is Achraf, I enjoy meeting new people and finding ways to help them. I am always friendly and 
courteous, Self-directed and able to work independently as well as a team player. Pay attention to detail, 
outgoing and always eager to learn more.</p>
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
