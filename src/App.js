import React, { useState } from 'react';
import { FaTrash, FaCheckSquare } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTask = (event) => {
    event.preventDefault();
    // adding new data with previous data
    setTasks((prevStat) => [{ task, isCompleted: false }, ...prevStat]);
    event.target.reset();
  };

  const taskCompleted = (index) => {
    [...tasks][index].isCompleted = true;
    setTask(tasks);
  };

  const removeData = (index) => {
    setTask(tasks.splice(index, 1));
  };

  return (
    <>
      <div className=" bg-gray-400 pt-5 text-5xl text-center font-serif animate-bounce">
        To-Do App
      </div>
      <div>
        <div className=" bg-gray-400 h-screen flex  justify-center pt-44 ">
          <div>
            <form onSubmit={handleTask} className="flex">
              <input
                placeholder="Write your task here !"
                required
                className="bg-gray-200  justify-center border-2 pl-2 pr-2 text-center border-red-900 w-80 h-10 rounded-lg "
                onChange={(e) => setTask(e.target.value)}
              ></input>
              <button
                type="submit"
                className=" bg-yellow-500 h-10 w-16 flex justify-center items-center rounded-lg border-2 border-black animate-bounce"
              >
                <MdAddCircle />
              </button>
            </form>
            <div className="py-10 ">
              {tasks.length > 0 &&
                tasks.map((t, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        t?.isCompleted
                          ? 'bg-green-500 flex justify-between border border-emerald-600 my-4 px-4 py-3 rounded-sm'
                          : 'flex justify-between border border-emerald-600 my-4 px-4 py-3 rounded-sm'
                      }`}
                    >
                      <p> {t?.task}</p>
                      <div className="flex gap-3">
                        <button onClick={() => removeData(index)}>
                          <FaTrash />
                        </button>
                        <button
                          className=" text-black "
                          onClick={() => taskCompleted(index)}
                        >
                          <FaCheckSquare />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
