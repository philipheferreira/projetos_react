import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={decrement}>−</button>
        <button onClick={reset}>Resetar</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
