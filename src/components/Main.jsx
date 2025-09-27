import React, { use, useState } from 'react';
import Card from './Card';
import Task from './Task';
import ResolveTask from './ResolveTask';
import CountBox from './CountBox';
import { toast } from 'react-toastify';


const Main = ({ fetchPromise }) => {
    const fetchData = use(fetchPromise);
    const [data, setData] = useState(fetchData);

    const [tasks, setTasks] = useState([]);

    const handleTask = (card) => {
        setTasks([...tasks, card]);
        toast("Added Into Task Section")
        const filteredSelectedCard = data.filter(filteredData => filteredData.id !== card.id)
        setData(filteredSelectedCard);
        console.log(data);

    };

    const [resolve, setResolve] = useState([]);

    const handleResolve = (id) => {
        const resolveTask = tasks.find(task => task.id === id);
        setResolve([...resolve, resolveTask]);
        const filteredResolveTask = tasks.filter(task => task.id !== id);
        setTasks(filteredResolveTask);
        toast("Added Into Resolved Section")
    };
    const handleRemoveResolve = (id) => {
        setResolve(resolve.filter(task => task.id !== id));
        toast('Removed From Resolve Section')
    }
    return (
        <div className="container mx-auto mb-15">
            <CountBox data={data} tasks={tasks} resolve={resolve}></CountBox>
            <div className="md:flex md:flex-row flex flex-col gap-5 ">
                <div className="md:w-[70%] w-full ">
                    <h1 className="font-semibold text-xl md:text-left text-center mb-1">Customer Tickets</h1>
                    <div className="md:grid md:grid-cols-2 grid grid-cols-1 gap-2 ">
                        {
                            data.map(data => <Card key={data.id} data={data} setData={setData} handleTask={handleTask}></Card>)
                        }
                    </div>
                </div>
                <div className="md:w-[30%] w-full flex flex-col gap-3 ">
                    <Task tasks={tasks} handleResolve={handleResolve}></Task>
                    <ResolveTask resolved={resolve} handleRemoveResolve={handleRemoveResolve} ></ResolveTask>
                </div>
            </div>
        </div>
    );
};

export default Main;
