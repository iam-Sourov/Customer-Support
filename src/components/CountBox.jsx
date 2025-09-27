import React from 'react';
import vector1 from '../assets/icons/vector1.png'

const CountBox = ({ tasks,resolve }) => {
    
    
    return (
        <div>
            <div className=' md:flex md:flex-row md:justify-between flex flex-col gap-3 mb-10 p-1'>
                <div className="relative flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] md:w-[750px] md:h-[160px] w-[full] h-[fit] rounded-lg p-4 border-gray-500 ">
                    <div className='text-center text-white'>
                        <h1 className='text-2xl'>In-Progress</h1>
                        <span className='font-semibold text-6xl'>{tasks.length}</span>
                    </div>
                    <img className='w-[151px] absolute -top-0 -left-0  md:top-0 md:left-0   md:w-[195px] ' src={vector1} alt="" />
                    <img className='w-[151px] absolute -top-0 -right-0 md:top- md:right-0  md:w-[195px] transform scale-x-[-1] ' src={vector1} alt="" />
                </div>
                <div className=' relative flex justify-center items-center bg-gradient-to-r from-[#54CF68] to-[#00827A] md:w-[750px] md:h-[160px] rounded-lg p-4  border-gray-500 '>
                    <div className='text-center text-white'>
                        <h1 className='text-2xl'>Resolved</h1>
                        <span className='font-semibold text-6xl'>{resolve.length}</span>
                    </div>
                    <img className='w-[151px] absolute -top-0 -left-0  md:top-0 md:left-0   md:w-[195px] ' src={vector1} alt="" />
                    <img className='w-[151px] absolute -top-0 -right-0 md:top- md:right-0  md:w-[195px] transform scale-x-[-1] ' src={vector1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CountBox;