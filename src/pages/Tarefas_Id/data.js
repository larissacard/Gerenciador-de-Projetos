import React, { Component } from "react";
import api from "../../api";

const tarefasPath = window.location.pathname;
console.log(tarefasPath)

class ExibirDetalhesTarefas extends Component{
  state = {
    tarefas:[],
  }

  async componentDidMount(){
    api.get("/" + tarefasPath)
    .then((res) => {
      this.setState({ tarefas: res.data});
    });
}

   deletarTarefa = (tr_id) => {
     fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + tarefasPath, {method: 'DELETE'})
     .then(res => {})
   }

  render() {
    const { tarefas } = this.state;
    console.log(tarefas)

    return (
      <>
        <h2>Tarefas</h2>
        <div className="">
        <ul>
          <li>Id: {tarefas?.tr_id}</li>
          <li>Nome: {tarefas?.tr_nome}</li>
          <li>Descrição: {tarefas?.tr_descricao}</li>
        </ul>
        <button type="button" class="btn btn-danger" onClick={() =>this.deletarTarefa(tarefas.tr_id)}>Excluir</button>
        </div>
        

        {/* {tarefas.map((t) => (
          <li key={t.tr_nome}>{t.tr_nome}</li>

        ))} */}
        <>
        </>
         
      </>
    );
  }
}

export default ExibirDetalhesTarefas;
