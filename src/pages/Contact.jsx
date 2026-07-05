import React from 'react'
// import Contactwrap from '../components/Contactwrap'
import BloodDropForm from "../components/BloodDropForm";
import { Droplet, HeartPulse, Bandage, Syringe, Ambulance } from "lucide-react";

const Contact = () => {
  return (
     <div className=" min-h-screen bg-gray-50 flex flex-col overflow-hidden ">
      <div className="container mx-auto px-4 py-6 relative mt-5">

        <div className="text-center ">
          <h1 className="roboto text-5xl font-bold text-gray-900 mb-2">Get in Touch</h1>
         
        </div>

        {/* Original Icons */}
        <div className="absolute top-10 left-10 animate-float">
          <Bandage size={48} className="text-red-500 opacity-30 animate-fast-spin" />
        </div>
        <div className="absolute top-[35%] left-5 animate-float" style={{ animationDelay: "1.5s" }}>
          <HeartPulse size={38} className="text-red-600 opacity-30" />
        </div>
        <div className="absolute bottom-[30%] left-16 animate-float" style={{ animationDelay: "0.8s" }}>
          <Syringe size={42} className="text-red-500 opacity-30 animate-fast-spin" />
        </div>
        <div className="absolute bottom-10 left-[5%] animate-float" style={{ animationDelay: "1.2s" }}>
          <Ambulance size={36} className="text-red-600 opacity-30" />
        </div>

        {/* Right side */}
        <div className="absolute top-[20%] right-[5%] animate-float" style={{ animationDelay: "0.7s" }}>
          <HeartPulse size={42} className="text-red-600 opacity-30" />
        </div>
        <div className="absolute top-[5%] right-10 animate-float" style={{ animationDelay: "1.9s" }}>
          <Bandage size={36} className="text-red-500 opacity-30 animate-fast-spin" />
        </div>
        <div className="absolute top-[50%] right-[8%] animate-float" style={{ animationDelay: "0.4s" }}>
          <Syringe size={30} className="text-red-600 opacity-30" />
        </div>
        <div className="absolute bottom-[20%] right-[10%] animate-float" style={{ animationDelay: "0.9s" }}>
          <Ambulance size={38} className="text-red-600 opacity-30 animate-fast-spin" />
        </div>

        {/* Center falling droplets */}
        <div className="absolute top-[15%] left-[40%] animate-fall" style={{ animationDelay: "0.5s" }}>
          <Droplet size={28} className="text-red-600 opacity-30" />
        </div>
        <div className="absolute top-[30%] right-[40%] animate-fall" style={{ animationDelay: "1.1s" }}>
          <Droplet size={22} className="text-red-600 opacity-30" />
        </div>
        <div className="absolute top-[50%] right-[25%] animate-fall" style={{ animationDelay: "1.4s" }}>
          <Droplet size={20} className="text-red-600 opacity-30" />
        </div>
        <div className="absolute top-[10%] left-[25%] animate-fall" style={{ animationDelay: "1.8s" }}>
          <Droplet size={24} className="text-red-600 opacity-30" />
        </div>
        <div className="absolute bottom-[25%] left-[30%] animate-fall" style={{ animationDelay: "0.3s" }}>
          <Droplet size={26} className="text-red-600 opacity-30" />
        </div>
        <div className="absolute bottom-[35%] right-[30%] animate-fall" style={{ animationDelay: "2.0s" }}>
          <Droplet size={18} className="text-red-600 opacity-30" />
        </div>

        {/* ✨ Additional Background Icons */}
        <div className="absolute top-[25%] left-[15%] animate-float" style={{ animationDelay: "0.6s" }}>
          <Bandage size={34} className="text-red-500 opacity-20 animate-fast-spin" />
        </div>
        <div className="absolute top-[40%] left-[60%] animate-float" style={{ animationDelay: "1.2s" }}>
          <Syringe size={28} className="text-red-600 opacity-25 animate-fast-spin" />
        </div>
        <div className="absolute top-[60%] left-[70%] animate-float" style={{ animationDelay: "0.9s" }}>
          <Droplet size={20} className="text-red-600 opacity-20" />
        </div>
        <div className="absolute top-[70%] right-[15%] animate-fall" style={{ animationDelay: "0.7s" }}>
          <HeartPulse size={24} className="text-red-500 opacity-25" />
        </div>
        <div className="absolute top-[75%] left-[10%] animate-fall" style={{ animationDelay: "1.5s" }}>
          <Ambulance size={30} className="text-red-600 opacity-25 animate-fast-spin" />
        </div>
        <div className="absolute top-[85%] right-[20%] animate-fall" style={{ animationDelay: "1.8s" }}>
          <Droplet size={18} className="text-red-500 opacity-20 animate-fast-spin" />
        </div>
        <div className="absolute top-[45%] right-[45%] animate-float" style={{ animationDelay: "2s" }}>
          <Syringe size={22} className="text-red-600 opacity-25 animate-fast-spin" />
        </div>

        {/* Form */}
        <div className="flex justify-center w-full mb-12 relative">
          <BloodDropForm />
        </div>

        {/* Footer Text */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4 text-red-600">
            <Droplet size={24} className="mr-2" />
            <span className="mast text-lg font-medium">Donate Blood, Save Lives</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact