import React from 'react'
import './Achievements.css';

const Achievements = () => {
  return (
    <>
    <div className="container mt-2 rounded" id='achievements'>
       <div className="container">
         <p className='h2 p-3 text-white'>Achievements</p>
       </div>
       <div className="container">
        <div className="row">
          <div className='col-lg-6 des rounded'>
             <div>
              <p className='text-white p-2 projects'>Projects</p>
             </div>
             <div className='text-white'>
               <dl>
                <dt>👨‍💻 E-Commerce Application ( Java, Servlet, Jsp)</dt>
                <dd>
                  Developed a e-commerce application using Java, Servlet and JSP involves designed a dynamic web application where users can able to add, update, remove their products. 
                </dd>

                <dt>👨‍💻 Event Management Application ( Java, Servlet, Jsp,MySql)</dt>
                <dd> 
                  Developed an event management CRUD  application which is allows to user can create, read, update and delete event record. The applicationis intented for use by event organizers to  efficiently manage event details, attendees, and schedules.
                </dd>

                <dt>👨‍💻 Interactive Web Applications ( HTML, CSS, JavaScript, Bootstrap)</dt>
                <dd>
                  Designed and build several small application such as to-do lists, 
                  Digital Clock, Calculator, length and temparature converter, login pages
                  and interactive forms.
                </dd>
               </dl>
             </div>
          </div>
          <div className='col-lg-5 des rounded'>
             <div>
              <p className='text-white p-2 certificates'>Certificates</p>
             </div>
             <div className='text-white'>
             <dl>
              <dt>Type Writting</dt>
              <dd> English Senior Grade with Distinction</dd>
              <dt>Salesforce</dt>
              <dd> Smart Internz Salesforce Internship Certificate</dd>
              <dt>Java</dt>
              <dd>Java Fullstack Developement course Certificate</dd>
            </dl>
             </div>
          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Achievements