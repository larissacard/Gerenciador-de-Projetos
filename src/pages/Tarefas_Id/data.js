import React, { Component } from "react";
import api from "../../api";

const projetoPath = window.location.pathname;

class ExibirDetalhesTarefas extends Component {
  state = {
    tarefas: [],
  };

  componentDidMount() {
    fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ tarefas: res.tarefas });
      });
  }

  deletarTarefa = (tr_id) => {
    fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath, {method: 'DELETE'})
    .then(resposta => {})
  }

  render() {
    const { tarefas } = this.state;

    return (
        <>
        <h2>Tarefas</h2>
        {tarefas.map(t => (
          <ul key={t.tr_id}>
            <li>
              {t.tr_id} - {t.tr_nome}
            </li>
          </ul>
        ))}
        <>
        <button type="button" class="btn btn-danger" onClick={() =>this.deletarTarefa(tarefas.tr_id)}>Excluir</button>
        </>
      </>
    );
  }
}

export default ExibirDetalhesTarefas;
