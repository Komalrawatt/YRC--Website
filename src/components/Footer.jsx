import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='relative bg-[#111827] w-full min-h-screen mt-20'>
      <div className='text-center w-full py-10 md:py-20'>
        <p className='zen text-5xl md:text-9xl mt-10 md:mt-20 tracking-widest hover:scale-90 transition-transform duration-300'
          style={{
            color: 'white',
            textShadow: '0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00',
          }}
        >YRC JCBUST</p>
      </div>

      <div className='flex flex-wrap justify-center gap-4 md:gap-7 text-white items-center mt-2'>
        <div className='flex items-center'>
          <a href="mailto:yrc.jcbustofficials@gmail.com"> <IoIosMail className='text-3xl md:text-4xl hover:text-[#A7101F] hover:scale-90' />
          </a>

        </div>
        <div className='flex items-center'>
          <a href="https://www.instagram.com/yrc.jcbust/?hl=en"> <BsInstagram className='text-xl md:text-2xl hover:text-[#A7101F] hover:scale-90' />
          </a>
        </div>
        <div className='flex items-center'>
          <a href="tel:+9100000000000"> <FaPhone className='text-xl md:text-2xl hover:text-[#A7101F] hover:scale-90' />
          </a>

        </div>
      </div>

      <div className="mx-4 md:mx-10 mb-10 bg-gray-800 p-4 rounded-lg overflow-hidden mt-5">
        <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center">Find Us</h3>
        <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.7145120782916!2d77.31331997382446!3d28.367479596070623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71f6e9f557%3A0xeb301eec9ff18517!2sJ.C.%20Bose%20University%20of%20Science%20and%20Technology%2C%20YMCA%20(Formerly%20YMCA%20UST)!5e0!3m2!1sen!2sin!4v1747047335638!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="J.C. Bose University of Science & Technology Map"
          ></iframe>
        </div>
      </div>

      <div className='text-center mt-5 flex flex-col text-xs md:text-sm gap-2 text-slate-600 pb-4'>
        <div>© 2025 Youth Red Cross Club, J.C. Bose UST </div>
        <div>All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer