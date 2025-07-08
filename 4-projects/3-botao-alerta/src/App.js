import './App.css';

function App() {

  const mostrarAlerta = () => {
    alert('Isso é uma mensagem de alerta');
  };
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
