import React from 'react'
import Wrapper from '../components/Wrapper';
// import Footer from '../components/Footer';

const Team = () => {
    return (
        // <div className='flex justify-center flex-col mast items-center '>
        //     <h1 className=' roboto text-[#A7101F]  text-6xl mt-8 text-center mb-3'>Meet Our Team</h1>
        //     <p className='  p-6  text-center text-slate-500 tracking-wider  '><span className='text-[30px]'>E</span>very member of the Youth Red Cross Club embodies a spirit of compassion, dedication, and selfless service. Their unwavering commitment to humanitarian values and their willingness to step up during times of need create an atmosphere of unity and empathy. It's their teamwork, resilience, and constant support for one another that make the Youth Red Cross Club not just a group, but a family devoted to making a meaningful difference in society.</p>
        //     <Wrapper />
        //     <br />
        //     {/* <Footer/> */}
        // </div>

        //  <div className='flex justify-center flex-col mast items-center px-4 sm:px-6 md:px-8'>
        //     <h1 className='roboto text-[#A7101F] text-3xl sm:text-4xl md:text-6xl mt-4 sm:mt-6 md:mt-8 text-center mb-2 sm:mb-3'>
        //         Meet Our Team
        //     </h1>
        //     <p className='p-4 sm:p-5 md:p-6 text-center text-slate-500 tracking-wide sm:tracking-wider text-sm sm:text-base md:text-lg max-w-4xl'>
        //         <span className='text-xl sm:text-2xl md:text-[30px]'>E</span>
        //         very member of the Youth Red Cross Club embodies a spirit of compassion, dedication, and selfless service. 
        //         Their unwavering commitment to humanitarian values and their willingness to step up during times of need 
        //         create an atmosphere of unity and empathy. It's their teamwork, resilience, and constant support for one 
        //         another that make the Youth Red Cross Club not just a group, but a family devoted to making a meaningful 
        //         difference in society.
        //     </p>
        //     <Wrapper />
        // </div>

         <div className='min-h-screen bg-gray-50'>
            <div className='flex flex-col mast items-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10'>
                <div className="max-w-7xl w-full mx-auto">
                    <h1 className='roboto text-[#A7101F] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8'>
                        Meet Our Team
                    </h1>
                    
                    <p className='text-center text-slate-500 tracking-wide sm:tracking-wider text-sm sm:text-base md:text-lg max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16'>
                        <span className='text-xl sm:text-2xl md:text-[30px]'>E</span>
                        very member of the Youth Red Cross Club embodies a spirit of compassion, dedication, and selfless service. 
                        Their unwavering commitment to humanitarian values and their willingness to step up during times of need 
                        create an atmosphere of unity and empathy. It's their teamwork, resilience, and constant support for one 
                        another that make the Youth Red Cross Club not just a group, but a family devoted to making a meaningful 
                        difference in society.
                    </p>

                    <Wrapper />
                </div>
            </div>
        </div>
    )
}

export default Team