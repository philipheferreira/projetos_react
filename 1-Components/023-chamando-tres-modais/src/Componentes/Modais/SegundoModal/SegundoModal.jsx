import { useState } from "react";
import './StyleSegundoModal.css'

function SegundoModal() {
    const [estaAberto, setEstaAberto] = useState(false)

    return (
        <div>
            {/* <!-- Botão para abrir Modal --> */}
            <button onClick={() => setEstaAberto(true)}>
                Abrir Modal
            </button>

            {/* <!-- O Modal --> */}
            {estaAberto && (
                <div className="modal">
                    <p>Este é o conteúdo do segundo modal.</p>
                </div>
            )}

        </div>
    )
}

export default SegundoModal