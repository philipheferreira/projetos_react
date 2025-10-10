import React, { useState } from 'react';
import './to-do-list.css'

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Go to Gym", "Read a Book"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        // CORREÇÃO 1: A lógica foi invertida. Agora só adiciona se a tarefa NÃO estiver vazia.
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
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
                            // CORREÇÃO 2: Usar arrow function para chamar a função no clique
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className='move-button'
                            // CORREÇÃO 3: Chamar a função correta `moveTaskUp`
                            onClick={() => moveTaskUp(index)}
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