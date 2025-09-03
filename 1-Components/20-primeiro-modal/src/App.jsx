import { useState } from 'react'
import './App.css'

function App() {
  const [estaAberto, setEstaAberto] = useState(false)

  return (
    <>
      <div>
        {/* Botão para abrir modal */}
        <button onClick={() => setEstaAberto(true)}>
          Abrir Modal
        </button>

        {/* Modal */}
        {estaAberto && (
        <div className="modal-overlay" onClick={() => setEstaAberto(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Título do Modal</h2>
            <p>Esse é um exemplo simples de modal em React com CSS puro.</p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setEstaAberto(false)}>
                Cancelar
              </button>
              <button className="confirm-btn" onClick={() => alert("Confirmado!")}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default App
