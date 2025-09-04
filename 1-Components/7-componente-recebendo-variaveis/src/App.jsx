import ComponenteComProps from './Componentes/primeiroComponente'
import './App.css'

function App() {

  return (
    <>
      <div>
      <h1>Exemplo com Props</h1>
      <ComponenteComProps nome="Philiphe" idade={27} />
    </div>
    </>
  )
}

export default App
