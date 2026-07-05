import React from 'react'
import { LuTarget } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

const Mission = () => {
    return (
        <div className="mast py-8 sm:py-12 md:py-16 bg-white mt-10 sm:mt-20 md:mt-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="roboto text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                        Our Mission & Values
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-500 sm:mt-4 px-4">
                        "Service to humanity is the greatest service in this world"
                    </p>
                </div>

                <div className="mt-10 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
                    {/* Our Mission */}
                    <div className="text-center h-auto sm:h-[350px] md:h-[400px] flex flex-col justify-center 
                                  shadow-[10px_10px_5px_rgba(0,0,0,0.2)] sm:shadow-[20px_20px_10px_rgba(0,0,0,0.2)] 
                                  rotate-[10deg] sm:rotate-[5deg] md:rotate-[10deg] 
                                  bg-[#F88379] p-6 rounded-lg transform transition-transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-3 rounded-full bg-red-100">
                                <LuTarget className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
                            </div>
                        </div>
                        <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900">Our Mission</h3>
                        <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500 p-2">
                            To provide relief to the vulnerable by mobilizing the power of humanity through youth volunteers.
                        </p>
                    </div>

                    {/* Our Vision */}
                    <div className="text-center h-auto sm:h-[350px] md:h-[450px] flex flex-col justify-center 
                                  shadow-[10px_10px_5px_rgba(0,0,0,0.2)] sm:shadow-[20px_20px_10px_rgba(0,0,0,0.2)] 
                                  rotate-[-10deg] sm:rotate-[-5deg] md:rotate-[-10deg] 
                                  bg-slate-300 p-6 rounded-lg transform transition-transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-3 rounded-full bg-red-100">
                                <FaRegHeart className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
                            </div>
                        </div>
                        <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900">Our Vision</h3>
                        <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500 p-2">
                            To inspire, encourage, and initiate humanitarian activities that help vulnerable people with complete impartiality.
                        </p>
                    </div>

                    {/* Our Values */}
                    <div className="text-center h-auto sm:h-[350px] md:h-[400px] flex flex-col justify-center 
                                  shadow-[10px_10px_5px_rgba(0,0,0,0.2)] sm:shadow-[20px_20px_10px_rgba(0,0,0,0.2)] 
                                  rotate-[10deg] sm:rotate-[5deg] md:rotate-[10deg] 
                                  bg-[#F88379] p-6 rounded-lg transform transition-transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-3 rounded-full bg-red-100">
                                <LuUsers className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
                            </div>
                        </div>
                        <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900">Our Values</h3>
                        <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500 p-2">
                            Humanity, impartiality, neutrality, independence, voluntary service, unity, and universality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission