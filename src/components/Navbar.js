import "../index.css";

import React, {useState} from 'react';
import { Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleclick =() => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >=100){
        setColor(true);
      }else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Achraf Chibane</h1>
      </Link>
      <ul className={click ? "nav-list active" : "nav-list"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About Me</Link>
        </li>
        <li>
            <Link to="/Project">Portfolio</Link>
        </li>
        <li>
            <Link to="/Resume">Resume</Link>
        </li>
        <li>
            <Link to="/Contact">Contact Me</Link>
        </li>
      </ul>
      <div className="hangmenu"onClick={handleclick}>
        {click ? (<FaTimes size={20} style={{ color: "#F6F1F1"}}/>) : (<FaBars size={20} style={{ color: "#F6F1F1"}}/>)
        }
      </div>
    </div>
  )
}

export default Navbar
