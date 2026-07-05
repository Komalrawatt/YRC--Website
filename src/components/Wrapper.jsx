import React from 'react';
import { teamData } from '../../gallerydata';
import Photowrap from './Photowrap';

const Wrapper = () => {
    return (
    
<div className=' space-y-8 sm:space-y-12 md:space-y-16'>
            {Object.keys(teamData).map((key) => (
                <div key={key} className='bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-md'>
                    <h2 className='roboto text-2xl sm:text-3xl md:text-4xl font-bold text-[#E4002A] text-center mb-6 sm:mb-8 md:mb-10'>
                        {key}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
                        {teamData[key].map((member, index) => (
                            <Photowrap key={index} values={member} role={member.role} />
                        ))}
                    </div>
                </div>
            ))}
        </div>

        
    );
};

export default Wrapper;
