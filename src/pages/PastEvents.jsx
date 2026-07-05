import React from 'react'
import Pasteventelement from "../components/Pasteventelement";
import firstAid from "../../public/past-events/first-aid.jpg"; 
import bloodDonation from "../../public/past-events/bloodDonation.jpg";

const PastEvents = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 sm:px-6 md:px-8'>
      <div className="w-full max-w-7xl mx-auto text-center mt-8 sm:mt-10 md:mt-12">
        <h1 className="roboto text-3xl sm:text-4xl md:text-6xl font-bold text-[#A7101F] mb-4 sm:mb-6 md:mb-8">
          Past Events
        </h1>
      </div>
      
      <div className="w-full max-w-7xl space-y-8 sm:space-y-12 md:space-y-16">
        <Pasteventelement 
          eventName="First-Aid & Disaster Management Event" 
          image={firstAid} 
          date="15th March 2025"
          venue="Auditorium, YMCA"
        />
        <Pasteventelement 
          eventName="Blood Donation Event" 
          image={bloodDonation} 
          date="8 May 2025"
          venue="Shakuntalam Hall, YMCA"
        />
      </div>
    </div>
  )
}

export default PastEvents