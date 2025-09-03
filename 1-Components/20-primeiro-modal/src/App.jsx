import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [estaAberto, setEstaAberto] = useState(false)

  return (
    <>
      <div>
        {/* Botão para abrir modal */}
        <button onClick={() => setEstaAberto(true)}>
          Abrir Modal
        </button>

        {/* Modal */}
        {
          
        }
      </div>
    </>
  )
}

export default App
