import React from 'react'
import pic from './../Pictures/mypic.png';
import './Home.css';

const Home = () => {
  return (
   <>
    <div className="container rounded con-div mt-1" id='home'>
      <div className='container txt-div col-lg-7 text-white'>
         <h4 className='h3'>Hi, 
         <h2 className='h1'>I'm Praveen
         <h4 className='h3'> A Fullstack Developer</h4></h2></h4>
      </div>
      <div className='pic-div col-lg-4' >
        <img src={pic} alt="" className='pics rounded-circle' />
      </div>
    </div>
   </>
  )
}

export default Home;