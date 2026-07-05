import React from 'react'

export const Photowrap = (props) => {
   const item = props.values;
   
   return (
    <div className='group flex flex-col items-center p-2 sm:p-3 md:p-4 transition-transform duration-300 hover:scale-105'>
        {/* Image Container - Using aspect-square ensures perfect circle */}
        <div className='relative w-[120px] sm:w-[140px] md:w-[160px] aspect-square overflow-hidden rounded-full shadow-[0_0_30px_rgba(12,34,34,0.5)]'>
            <img 
                className='w-full h-full rounded-full object-cover 
                         shadow-[0_0_20px_rgba(12,34,34,0.3)] 
                         group-hover:shadow-[0_0_30px_rgba(12,34,34,0.5)]
                         transition-shadow duration-300' 
                src={item.photo} 
                alt={item.name}
                loading="lazy"
            />
        </div>
        
        <div className='flex flex-col items-center justify-center text-center mt-3 sm:mt-4'>
            <h3 className='text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1'>
                {item.name}
            </h3>
            <p className='text-xs sm:text-sm text-slate-600'>
                {item.role}
            </p>
        </div>
    </div>
   )
}

export default Photowrap