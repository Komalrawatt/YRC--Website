import React from 'react';
import { Button } from "@/components/ui/button";

const Pasteventelement = ({ eventName, image, date, venue }) => {
  return (
    <div className="mast p-4 sm:p-5 md:p-6 bg-white text-center flex flex-col items-center">
      <div className="mb-4 sm:mb-6 md:mb-8 w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">
          ⛑️ {eventName} ⛑️
        </h2>
      </div>

      <div className="relative w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
        <div className="aspect-video max-h-[600px] overflow-hidden rounded-lg">
          <img
            src={image}
            alt={eventName}
            className="w-full h-full object-cover rounded-lg 
                     shadow-[0_0_50px_rgba(255,0,0,0.6)] sm:shadow-[0_0_75px_rgba(255,0,0,0.7)] md:shadow-[0_0_100px_rgba(255,0,0,0.8)]
                     transition duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-4 sm:mt-6 md:mt-8 px-4 w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base md:text-lg text-gray-600">
          <div className="p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">📅 Date:</span> 
            <br />
            {date}
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">📍 Venue:</span>
            <br />
            {venue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pasteventelement;
