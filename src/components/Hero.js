import "../index.css";

import React from "react";
import backImage from "../assets/images/background.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="back">
        <img className="back-img" src={backImage} alt=" a person looking to the stars " />
      </div>
      <div className="content">
        <p> Hello, I'm Achraf Chibane</p>
        <h1>Full-Stack Web Developer</h1>
      </div>
      <div className="content1">
        <Link to="/Project" className="btn">
          My Projects
        </Link>
        <Link to="/Resume" className="btn btn-1">
          My Resume
        </Link>
      </div>
    </div>
  );
};

export default Hero;
