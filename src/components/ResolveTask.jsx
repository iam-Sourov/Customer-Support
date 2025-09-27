import React from 'react';

const ResolveTask = ({ resolved, handleRemoveResolve }) => {
    return (
        <div className="p-3 rounded-md ">
            <h2 className="font-semibold text-xl md:text-left text-center mb-1">Resolved Tasks</h2>
            {resolved.length === 0 ? <p className="md:text-left text-center text-sm text-gray-500">No resolved tasks yet</p> :
                resolved.map(resolve => <div key={resolve.id} className='flex flex-col gap-2 shadow-md rounded-lg text-black'>
                    <div className=" cursor-pointer card flex flex-col gap-3  w-full h-full shadow-md">
                        <div className="card-body w-full bg-white rounded-xl p1 m-1">
                            <h2 className="card-title text-lg">{resolve.title}</h2>
                            <div className="">
                                <button onClick={()=> handleRemoveResolve(resolve.id)} className="bg-red-600 w-full rounded-lg py-2.5 text-lg text-center text-white font-semibold">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default ResolveTask;