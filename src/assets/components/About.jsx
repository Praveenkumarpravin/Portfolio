import React from 'react'
import './About.css'

const About = () => {
  return (
  <>
    <div className="container mainc mt-2 rounded"id='about'>
      <div className="container">
        <p className='p-3 h2 text-white'>About</p>
      </div>
      <div className="container text-white">
       <div className="row">
        <div className="rounded pt-2 px-4 col-12 col-lg-6 des">
          <p className='h3'>Description</p>
          <p className='fs-5 mt-3'>Motivated and detail-oriented Java Full Stack Developer with a strong foundation in both front-end and back-end development. Recently completed a comprehensive software development program and eager to apply technical skills to real-world projects. Proficient in Java, JavaScript, HTML, CSS, and related technologies, with hands-on experience in building dynamic and responsive web applications. Excellent problem-solving abilities and a strong desire to learn and grow in a collaborative team environment.</p>
        </div>
        <div className="rounded pt-2 px-4 col-12 col-lg-5 des">
           <p className='h3'>Details</p>
           <p className='fs-5 mt-2 '>
              <table>
              <tr>
                <td>Email </td>
                <td>ppalraj361@gmail.com</td>
              </tr>
              <tr>
              <td>Contact</td>
              <td>9361463897</td>
              </tr>
              <tr>
              <td>Address</td>
              <td>Perungondanviduthi, Pudukkottai</td>
              </tr>
              <tr>
                <td>Current <br />Location</td>
                <td>Chennai</td>
              </tr>
              <tr>
              <td>Linkedin</td>
              <td></td>
              </tr>
              <tr>
              <td>Git Hub</td>
              <td></td>
              </tr>
              </table>
           </p>
        </div>
       </div>
      </div>
    </div>
  </>
  )
}

export default About;