import { useState } from 'react'
import './App.css'
import ToDoList from './Components/toDoList/to-do-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoList />
    </>
  )
}

export default App
