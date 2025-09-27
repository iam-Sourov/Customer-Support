import React from 'react';

const Task = ({ tasks, handleResolve }) => {


    return (
        <div className="p-3  rounded-md">
            <h2 className="font-semibold text-xl md:text-left text-center mb-1">Tasks</h2>
            {tasks.length === 0 ?
                <p className="md:text-left text-center text-sm text-gray-500">No tasks selected</p> :
                tasks.map(card => <div key={card.id} className='flex flex-col gap-3 shadow-md rounded-lg text-black'>
                    <div className="card flex flex-col gap-3  w-full h-full shadow-md">
                        <div className="card-body w-full bg-white rounded-xl p1 m-1">
                            <h2 className="card-title text-lg ">{card.title}</h2>
                            <div className=" card-actions flex flex-col">
                                <button onClick={() => handleResolve(card.id)} className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full rounded-lg py-2.5 text-lg text-center  text-white font-semibold">Complete</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Task;