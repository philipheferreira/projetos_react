import { useState } from 'react'
import './StylePrimeiroModal.css'

function PrimeiroModal() { 
    const [estaAberto, setEstaAberto] = useState(false)
    return(

        <div>
            {/* <!-- Botão para abrir Modal --> */}
            <button onClick={() => setEstaAberto(true)}>
                Abrir Modal
            </button>

            {/* <!-- O Modal --> */}
            {estaAberto && (
                <div className="modal">
                    <p>Este é o conteúdo do modal.</p>
                </div>
            )}

        </div>

    )

} 

export default PrimeiroModal