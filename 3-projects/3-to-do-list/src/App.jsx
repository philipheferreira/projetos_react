import { useState } from 'react'

 function TodoList() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    const nova = {
      id: Date.now(),
      texto: novaTarefa,
      concluida: false,
    };
    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1>📝 Lista de Tarefas</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          style={styles.input}
        />
        <button onClick={adicionarTarefa} style={styles.button}>
          Adicionar
        </button>
      </div>

      <ul style={styles.lista}>
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            style={{
              ...styles.item,
              textDecoration: tarefa.concluida ? "line-through" : "none",
              color: tarefa.concluida ? "gray" : "black",
            }}
          >
            <span onClick={() => alternarConclusao(tarefa.id)} style={{ cursor: "pointer" }}>
              {tarefa.texto}
            </span>
            <button onClick={() => removerTarefa(tarefa.id)} style={styles.remover}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos inline
const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    marginLeft: "10px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  lista: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    padding: "10px",
    marginBottom: "5px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  remover: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "red",
  },
};

export default TodoList

