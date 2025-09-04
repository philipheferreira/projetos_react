import React from "react";

function ComponenteComProps({ nome, idade }) {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
    </div>
  );
}

export default ComponenteComProps;