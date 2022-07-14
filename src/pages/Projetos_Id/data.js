import React, { Component } from "react";
import api from "../../api";

const projetoPath = window.location.pathname;

class ExibirDetalhesProjeto extends Component {
  state = {
    dados: {},
    equipes: [],
    tarefas: [],
  };

  componentDidMount() {
    fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ dados: res.dados });
        this.setState({ equipes: res.equipes });
        this.setState({ tarefas: res.tarefas });
      });
  }

  deletarProjetos = (pr_id) => {
    fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath, {method: 'DELETE'})
    .then(resposta => {})
  }

  render() {
    const { dados } = this.state;
    const { equipes } = this.state;
    const { tarefas } = this.state;

    return (
      <>
        <h1>Projeto:</h1>
        <ul>
          <li>Id: {dados?.pr_id}</li>
          <li>{dados?.pr_nome}</li>
          <li>{dados?.pr_descricao}</li>
          <li>Status: {dados?.pr_status}</li>
          <li>Data de Criação: {dados?.pr_data_criacao}</li>
          <li>Data de Finalização: {dados?.pr_data_finalizacao}</li>
        </ul>

        <h2>Equipes</h2>
        {equipes.map((e) => (
          <ul key={e.eq_id}>
            <li>
              {e.eq_id} - {e.eq_nome}
            </li>

            <ul>
              {e.pessoas.map((p, index) => (
                <li key={index}>
                  {p.pe_id} - {p.pe_nome}
                </li>
              ))}
            </ul>
          </ul>
        ))}

        <h2>Tarefas</h2>
        {tarefas.map((t) => (
          <ul key={t.tr_id}>
            <li>
              {t.tr_id} - {t.tr_nome}
            </li>
          </ul>
        ))}

        <>
        <button type="button" class="btn btn-danger" onClick={() =>this.deletarProjetos(dados.pr_id)}>Excluir</button>
        </>
      </>
    );
  }
}

export default ExibirDetalhesProjeto;
