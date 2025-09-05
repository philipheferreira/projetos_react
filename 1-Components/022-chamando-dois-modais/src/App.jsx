import { useState } from 'react'
import './App.css'
import PrimeiroModal from './Componentes/Modais/PrimeiroModal/PrimeiroModal'
import SegundoModal from './Componentes/Modais/SegundoModal/SegundoModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <PrimeiroModal />
        <SegundoModal />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
