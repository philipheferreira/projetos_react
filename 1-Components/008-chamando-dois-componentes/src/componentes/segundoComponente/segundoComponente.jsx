import './syleSegundoComponente.css';

function SegundoComponente() {
  return (
    <div>
      <h2 style={{ color: 'white' }}>Olá, eu sou o Segundo componente!</h2>
      <p>Esse é um texto vindo de um componente React.</p>
      <SegundoComponente />
    </div>
  );
}

export default SegundoComponente;