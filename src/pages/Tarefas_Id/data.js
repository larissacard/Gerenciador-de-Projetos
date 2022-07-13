import React, { Component } from "react";
import api from "../../api";

const tarefasPath = window.location.pathname;
console.log(tarefasPath)

class ExibirDetalhesTarefas extends Component{
  state = {
    tarefas:[],
  }

  async componentDidMount(){
   

    fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + tarefasPath)
    .then((res) => res.json())
    .then((res) => {
      this.setState({ tarefas: res});
    });
}

  // deletarTarefa = (tr_id) => {
  //   fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath, {method: 'DELETE'})
  //   .then(resposta => {})
  // }

  render() {
    const { tarefas } = this.state;
    console.log(tarefas)

    return (
      <>
        <h2>Tarefas</h2>
        <ul>
          <li>Id: {tarefas?.tr_id}</li>
          <li>Nome: {tarefas?.tr_nome}</li>
        </ul>
        

        {/* {tarefas.map((t) => (
          <li key={t.tr_nome}>{t.tr_nome}</li>

        ))} */}
        <>
        </>
        {/* <button type="button" class="btn btn-danger" onClick={() =>this.deletarTarefa(tarefas.tr_id)}>Excluir</button> */}
      </>
    );
  }
}

export default ExibirDetalhesTarefas;
