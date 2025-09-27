import circleIconYellow from '../assets/icons/yellow.svg'
import circleIconGreen from '../assets/icons/green.svg'
import React from 'react';
const Card = ({ data, handleTask }) => {

    return (
        <div className=''>
            <div className="card cursor-pointer  w-full h-full shadow-md">
                <div  onClick={() => handleTask(data)} className="card-body bg-white p-2 m-1 rounded-lg ">
                    <div className='flex justify-between items-center '>
                        <h2 className="card-title text-black">{data.title}</h2>
                        <div className={`font-semibold px-3 py-1.5 ${data.status === 'Open' ? 'bg-[#B9F8CF] text-[#0B5E06]' : 'bg-[#F8F3B9] text-[#9C7700]'} flex gap-2 justify-center items-center rounded-full`}>
                            <img src={data.status === 'Open' ? circleIconGreen : circleIconYellow}></img>
                            {data.status}
                        </div>
                    </div>
                    <p className='w-full text-[#627382]'>{data.description}</p>
                    <div className="flex justify-between items-center space-x-2 font-semibold text-xs">
                        <div className='flex justify-around items-center space-x-4'>
                            <p className='font-bold text-black'>{data.id}</p>
                            <h1 className={` font-semibold ${data.priority == 'HIGH PRIORITY' ? "text-[#F83044]" : data.priority == 'MEDIUM PRIORITY' ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}>{data.priority}</h1>
                        </div>
                        <div className='flex justify-around items-center space-x-4'>
                            <p className='text-[#627382] '>{data.customer}</p>
                            <p className='flex justify-center gap-1 items-center text-[#627382]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 1V3H15V1H17V3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="#627382" />
                                </svg><span>{data.createdAt}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;