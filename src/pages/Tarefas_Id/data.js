import React, { Component } from "react";
import api from "../../api";

const projetoPath = window.location.pathname;

class ExibirDetalhesTarefas extends Component {
  state = {
    tarefas: [],
  }

  async componentDidMount(){
   

    const response = await api.get('/tarefas/' +projetoPath);

    this.setState({ tarefas: response.data })
  

  }

  deletarTarefa = (tr_id) => {
    fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath, {method: 'DELETE'})
    .then(resposta => {})
  }

  render() {
    const { tarefas } = this.state;
    console.log(tarefas)

    return (
      <>
        <h2>Tarefas</h2>
        {tarefas.map((t) => (
          <li key={t.tr_id}>{t.tr_nome}</li>

        ))}
        <>
        </>
        {/* <button type="button" class="btn btn-danger" onClick={() =>this.deletarTarefa(tarefas.tr_id)}>Excluir</button> */}
      </>
    );
  }
}

export default ExibirDetalhesTarefas;
