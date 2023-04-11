import "../index.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-container">
        <div className="pro-container">
            <div className="pro-card">
                <img src={props.imgsrc} alt="my project 1" />
                <h2 className="pro-title">{props.title}</h2>
                <div className="project-info">
                    <p> {props.text} </p>
                    <div className="project-btn">
                        <NavLink to={props.view} className="btn"> VIEW</NavLink>
                        <NavLink to={props.github} className="btn"> GITHUB</NavLink>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectCard
