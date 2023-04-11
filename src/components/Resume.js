
import "../index.css";

import { Link } from 'react-router-dom';

import resumePdf from '../assets/Resume.pdf';
const Resumepage = () => {
  return (
    <div className='resume'>
      <div className='card-resume'>
        <div className='card'>
            <h3>My Full Stack development</h3>
            <span className='bar'>Front-End Developer</span>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>JQuery</p>
            <p>React</p>
            <p>NPM</p>
            <p>VS Code</p>
            <p>Chrome Dev Tool</p>
            <p>bootstrap</p>
            <p>Responsive design</p>
            <Link to={resumePdf} target="_blank" download className='btn'>Download Resume</Link> 
        </div>
        <div className='card'>
            <h3>My Full Stack development</h3>
            <span className='bar'>Front-End Proficiencies</span>
            <p>APIs</p>
            <p>Node</p>
            <p>Express</p>
            <p>MySQL, Squelize</p>
            <p>MongoDb, Mongoose</p>
            <p>Rest</p>
            <p>GraphQl</p>
            
            
        </div>
        <div className='card'>
            <h3>My Certificates</h3>
            <span className='bar'>Certificates</span>
            <p>Full Stack Web Developer Certificate of completion</p>
            <p>Technician in Computing Operator Diploma</p>
            <p>IT Help Desk Certificate of Completion</p>
            <p>Google Certificate</p>
          
        </div>
      </div>
    </div>
  )
}

export default Resumepage
