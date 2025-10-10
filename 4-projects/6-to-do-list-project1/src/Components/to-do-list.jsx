import React, { useState } from 'react';

function ToDoList() {

        const [tasks, setTasks] = useState(["Eat Breakfast", "Go to Gym", "Read a Book"]);
        const [newTask, setNewTask] = useState('');

        function handleInputChange(event) {
            setNewTask(event.target.value);
        }

        function addTask() {

        }

        function deleteTask(index) {
        
        }

        function moveTaskUp(index) {

        }

        function moveTaskDown(index) {

        }

    return(
    <div>
        <h1>To-Do List</h1>

        <div>
            <input
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className='addTask'
                onClick={addTask}
            >
                Add Task
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                        className='delete-button'
                        onClick={deleteTask(index)}
                    >
                        Delete
                    </button>
                    <button
                        className='move-button'
                        onClick={() => deleteTask(index)}
                    >
                        Up
                    </button>
                    <button
                        className='move-button'
                        onClick={() => moveTaskDown(index)}
                    >
                        Down
                    </button>
                </li>
            )}        
        </ol>
    </div>
    );
}
export default ToDoList;