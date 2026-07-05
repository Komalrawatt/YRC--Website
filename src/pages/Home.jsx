import React from 'react'
import image1 from '../assets/whoarewe.jpg'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Mission from '../components/Mission'
import OnGoing from '../components/OnGoing'
import Mainpage from '../components/Mainpage'
// import About from './pages/About'

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';





const Home = () => {

  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className='' >
      <Mainpage />
      <Main />
      <Mission />
      {/* <div   ref={contactRef}   id="about"
            className='mast flex h-[500px] w-[100vw] justify-center items-center gap-12 mt-25 '>
               <div className='h-[60vh] w-[50wh]' >
                        <div  className='p-6'>
                        <p className='roboto text-[#A7101F] text-6xl text-center'>Who We Are</p> 
                        </div>
                        <div >
                            <p className='p-6 tracking-wider w-[700px] text-slate-700'>
                            <span className='text-5xl '>W</span>e are the Youth Red Cross Club of J.C. Bose University, a vibrant student-led community dedicated to humanity and service.
                            We conduct life-saving events like blood donation camps, first-aid training, and mental health drives, and proudly celebrate World Red Cross Day.
                            In collaboration with affiliated colleges, we unite a large network of passionate members driven by compassion and action.
                            Together, we strive to make a difference, one life at a time.
                            </p>
                        
                        </div>
                </div>
                <div className='relative h-[60vh] w-[50wh] '>
                   
                    <div className=' bg-[#E4002A] h-[400px] w-[400px] '>

                    </div>
                    <div className=' h-[400px] w-[400px] absolute   -top-4 right-6'>
                        <img  src={image1} alt=""  className='shadow-[0_0_100px_rgba(255,29,29,0.8)]'/>
                    </div>
                </div>
            </div> */}

      <div ref={contactRef} id="about"
        className="mast flex flex-col md:flex-row items-center justify-center gap-12 mt-8 px-4 py-10 w-full max-w-screen-xl mx-auto">


        {/* Text Section */}
        <div className="w-full md:w-1/2 h-auto ">
          <div className="p-4 sm:p-6 text-center md:text-left flex  items-center justify-center ">
            <p className="roboto text-[#A7101F]  text-4xl sm:text-5xl md:text-6xl">Who We Are</p>
          </div>
          <div className='flex ml-6 items-center justify-center '>
            <p className="p-4 sm:p-6 tracking-wide text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-full">
              <span className="text-3xl sm:text-4xl md:text-5xl">W</span>e are the Youth Red Cross Club of J.C. Bose University, a vibrant student-led community dedicated to humanity and service.
              We conduct life-saving events like blood donation camps, first-aid training, and mental health drives, and proudly celebrate World Red Cross Day.
              In collaboration with affiliated colleges, we unite a large network of passionate members driven by compassion and action.
              Together, we strive to make a difference, one life at a time.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-auto flex items-center justify-center">
          <div className="bg-[#E4002A] h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]"></div>
          <div className="absolute -top-2 right-10 sm:-top-4 sm:right-12 md:right-16">
            <img
              src={image1}
              alt=""
              className="shadow-[0_0_60px_rgba(255,29,29,0.8)] 
                 h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] 
                 object-cover"
            />
          </div>
        </div>
      </div>

      <OnGoing />
      {/* <About/> */}
      <Footer />
    </div >
  )
}

export default Home