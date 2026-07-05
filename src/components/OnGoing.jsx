import React, { useEffect, useRef } from 'react';
import ongoing from "../assets/ongoing.jpg";
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';

const OnGoing = () => {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#Ongoing') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div
      ref={contactRef}
      id="Ongoing"
      className="mast p-4 sm:p-5 md:p-6 bg-white text-center flex flex-col mt-8 sm:mt-12 md:mt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="roboto text-3xl sm:text-4xl md:text-6xl font-bold text-[#A7101F] mb-3 sm:mb-4">
          OnGoing Events
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-6">
          ⛑️ Life Saving Event ⛑️
        </p>

        <div className="mt-8 sm:mt-10 md:mt-16 flex flex-col lg:flex-row w-full justify-center items-center gap-6 sm:gap-8 md:gap-16">
          {/* Event Image */}
          <div className="w-full lg:w-1/2 max-w-[600px]">
            <img
              src={ongoing}
              alt="Ongoing Event"
              className="w-full h-[400px] sm:h-[550px] md:h-[600px] lg:h-[650px] object-cover rounded-lg 
                       shadow-[0_0_50px_rgba(255,0,0,0.6)] sm:shadow-[0_0_75px_rgba(255,0,0,0.7)] md:shadow-[0_0_100px_rgba(255,0,0,0.8)] 
                       transition duration-300 hover:scale-105"
            />
          </div>

          {/* Event Details */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-[80%] sm:w-[65%] md:w-[60%] lg:w-1/2 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Event Details Box */}
              <div className="p-4 sm:p-5 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <strong className="text-lg sm:text-xl md:text-2xl">📝 Event Details:</strong>
                <br /> Life Saving Workshop
              </div>
              {/* Venue Box */}
              <div className="p-4 sm:p-5 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <strong className="text-lg sm:text-xl md:text-2xl">📍 Venue:</strong>
                <br /> Shakuntalam Hall, YMCA
              </div>
              {/* Perks Box */}
              <div className="p-4 sm:p-5 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <strong className="text-lg sm:text-xl md:text-2xl">🎁 Perks:</strong>
                <br /> Certificate, Free Kit, Snacks
              </div>
              {/* Contact Box */}
              <div className="p-4 sm:p-5 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <strong className="text-lg sm:text-xl md:text-2xl">📞 Contact:</strong>
                <br /> 0000000000
              </div>
            </div>
            
            <Button className="bg-[#A7101F] text-lg sm:text-xl hover:bg-[#E4002A] w-[80%] md:w-auto mx-auto
                             cursor-pointer transition duration-100 ease-out hover:scale-95 
                             shadow-[0_0_30px_rgba(255,0,0,0.4)] sm:shadow-[0_0_60px_rgba(255,0,0,0.5)] md:shadow-[0_0_90px_rgba(255,0,0,0.6)]">
              Registration
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnGoing;
