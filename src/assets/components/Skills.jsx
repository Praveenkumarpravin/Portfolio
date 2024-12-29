import React from 'react'
import './Skills.css'
import java from './../Pictures/java.png';
import sql from './../Pictures/database.png';
import html from './../Pictures/html.png';
import css from './../Pictures/css-3.png';
import js from './../Pictures/js.png';
import bootstrap from './../Pictures/bootstrap.png';
import react from './../Pictures/react.png';
import resume from './../Pictures/Praveen Resume-6.pdf';

const Skills = () => {
  return (
    <>
      <div className="container con mt-2 rounded" id='skills'>
        <div className="container">
            <p className='h2 text-white p-3'>Skills & Resume</p>
        </div>
        <div className="container">
         <div className="row">
           <div className="col-lg-6 text-white rounded des">
             <ul className='ulist' type="none">
              <li className='list'>
                <img src={java} alt="" className='img'/>
                <a href="java.com">Java</a>
              </li>
              <li className='list'>
                <img src={sql} alt="" className='img'/>
                <a href="sql.com">SQL</a>
              </li>
              <li className='list'>
                <img src={html} alt="" className='img'/>
                <a href="html.com">HTML</a>
              </li>
              <li className='list'>
                <img src={css} alt="" className='img'/>
                <a href="css.com">CSS</a>
              </li>
              <li className='list'>
                <img src={js} alt="" className='img'/>
                <a href="javascript.com">JavaScript</a>
              </li>
              <li className='list'>
                <img src={bootstrap} alt="" className='img bg-white rounded-circle'/>
                <a href="bootstrap.com">BootStrap</a>
              </li>
              <li className='list'>
                <img src={react} alt="" className='img'/>
                <a href="www.react.com">React</a>
              </li>
             </ul>
           </div>
           <div className="col-lg-5 rounded des text-white" id='resume-div'>
             <div className="resume">
              <p className='fs-5'>Click to Download Resume</p>
                 <a href={resume}className='download rounded text-dark fs-5 px-2 py-1'  download ><span className='icon'></span>Download</a>
             </div>
           </div>
        </div>
       </div>
      </div>
    </>
  )
}
export default Skills