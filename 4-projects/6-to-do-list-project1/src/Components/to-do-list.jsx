import React, { useState } from 'react';

function ToDoList() {
    
        const [task, newTasks] = useState([]);
        const [newTask, setNewTask] = useState('');

        function handleInputChange(event) {

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
        <p className="read-the-docs">
            Eu sou um componente que está funcionando
        </p>
    </div>
    );
}
export default ToDoList;