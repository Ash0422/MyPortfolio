import "../index.css";
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-container">
        <div className="left-col">
            <div className="info">
            <FaHome size={20} style={{ color:"#19A7CE", marginRight: "2rem"}}/>
                <div>
                    <p>Phoenix,AZ</p>
                </div>
            </div>
            <div className="mobile">
                <h4><FaPhone size={20} style={{ color:"#19A7CE", marginRight: "2rem"}}/>
            602-919-0599</h4>
            
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{ color:"#19A7CE", marginRight: "2rem"}}/>
            chibane.tkd04@gmail.com</h4>
            
            </div>
        </div>
        <div className="right-col">
            <p>ACHRAF CHIBANE</p>
            <div className="info2">
                <a className="face" href="https://www.facebook.com/achraf.chibane.52" target="_blank" rel="noreferrer">
                    <FaFacebook size={40} style={{ color:"#146C94", marginRight: "1rem"}}/>
                </a>
                <a href="https://github.com/Ash0422" target="_blank" rel="noreferrer">
                    <FaGithub size={40} style={{ color:"#146C94", marginRight: "1rem"}}/>
                </a>
                <a href="https://www.linkedin.com/in/achraf-chibane-536b32107" target="_blank" rel="noreferrer">
                    <FaLinkedin size={40} style={{ color:"#146C94", marginRight: "1rem"}}/>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
