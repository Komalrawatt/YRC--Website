import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
//  import logo from '../assets/mainlogo.jpg'
const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 md:px-0'>
      {/* logo
      <div className='logo  h-55 w-55 rounded-full m-10'>  
          <img src={logo} alt=""
          className=' rounded-full shadow-[0_0_120px_rgba(255,0,0,0.6)]  transition-transform duration-300 hover:scale-90  '
          />
      </div> */}
      <div className='mt-10 md:mt-20 text-center'>
        {/* title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl roboto font-bold mb-4 md:mb-6 bg-[#A7101F] bg-clip-text text-transparent">
          Youth Red Cross Club
        </h1>
      </div>

      {/* welcome */}
      <div className="relative h-12 md:h-16 mb-6 md:mb-8 flex items-center justify-center overflow-hidden">
        <h2 className="typewriter mast text-lg md:text-2xl lg:text-3xl font-medium text-gray-700">
          Welcome to our humanitarian community!
        </h2>
      </div>

      <div className='text-center mb-8 md:mb-10'>
        <p className='mast text-xs md:text-sm text-slate-600 tracking-widest px-4'>
          Empowering young people to serve their communities through leadership, service, and education
        </p>
      </div>

      <div className='mast flex flex-wrap justify-center gap-6 md:gap-12'>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className='hover:cursor-pointer hover:text-[#A7101F] hover:scale-125 transtion-transform duration-200 '> ❤️  Health</TooltipTrigger>
                <TooltipContent > 
                    <p >A healthy body builds a strong mind</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className='hover:cursor-pointer hover:text-[#A7101F] hover:scale-125 transtion-transform duration-200'>🤝  Service</TooltipTrigger>
                <TooltipContent>
                    <p>Helping others is the rent we pay for living on this planet</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className='hover:cursor-pointer hover:text-[#A7101F] hover:scale-125 transtion-transform duration-200'>👬  Friendship</TooltipTrigger>
                <TooltipContent>
                    <p>Friends are the family we choose</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

      </div>
    </div>
  )
}

export default Main