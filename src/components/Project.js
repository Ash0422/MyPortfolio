import "../index.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";
import React from 'react';


const Project = () => {
  return (
    <div className="project-container">
        <h1 className="pro-heading"> Projects </h1>
        <div className="pro-container">
          {ProjectCardData.map((val, index) =>{
            return (
                <ProjectCard 
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                github={val.github}/>
            )
          })}
        </div>
      
    </div>
  )
}

export default Project