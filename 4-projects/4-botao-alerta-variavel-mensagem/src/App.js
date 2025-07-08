import './App.css';

function App() {

  const mensagemAlerta = 'mensagem de alerta' 

  const mostrarAlerta = () => {
    alert(mensagemAlerta);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Projeto de Botão Alerta</h1>
        <button onClick={mostrarAlerta}>Clique Aqui</button>
      </header>
    </div>
  );
}

export default App;
