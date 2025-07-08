import React, { useState } from 'react';/* Importa a biblioteca principal React. 
O seState é um hook do React que permite adicionar estado ao componente. 
É o que permite guardar e atualizar valores (como o contador). */
import './App.css'; /* Importa o CSS com os estilos usados na página. */

function App() {
  const [contador, mudarValorContador] = useState(0); /*[
  count: é a variável de estado atual (número do contador).
  setCount: é a função para alterar o valor do contador.
  useState(0): define que o valor inicial do contador é 0.
  */

  const somar = () => mudarValorContador(contador + 1);
  const diminir = () => mudarValorContador(contador - 1);
  const resetar = () => mudarValorContador(0);

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={diminir}>−</button>
        <button onClick={resetar}>Resetar</button>
        <button onClick={somar}>+</button>
      </div>
    </div>
  );
}

export default App;
