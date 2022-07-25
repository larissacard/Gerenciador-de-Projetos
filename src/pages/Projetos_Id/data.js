import axios from "axios";
import React, { Component } from "react";
import api from "../../api";
import Edit from "./put";
import './style.css'

const projetoPath = window.location.pathname;

class ExibirDetalhesProjeto extends Component {
  state = {
    dados: {},
    equipes: [],
    tarefas: [],
  };

  componentDidMount() {
    api.get("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath)
      .then((res) => {
        this.setState({ dados: res.data.dados });
        this.setState({ equipes: res.data.equipes });
        this.setState({ tarefas: res.data.tarefas });
      });
  }

  deletarProjetos = (pr_id) => {
    api.delete("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath)
  }

  render() {
    const { dados } = this.state;
    const { equipes } = this.state;
    const { tarefas } = this.state;

    return (
      <>
        <h1 style={{color: "#280948", width:"12.813rem", fontSize:"2rem", lineHeight:"3rem", fontWeight:"600"}}>{dados?.pr_nome}</h1>
        <div className="box-one">
          <ul>
            {/* <li>Id: {dados?.pr_id}</li> */}
            {/* <li>Descrição: {dados?.pr_descricao}</li> */}
            {/* <li>Status: {dados?.pr_status}</li> */}
            <li>Data de Criação: {dados?.pr_data_criacao}</li>
            <li>Data de Finalização: {dados?.pr_data_finalizacao}</li>
          </ul>
        </div>

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
        <button type="button" className="btn btn-danger" onClick={() =>this.deletarProjetos(dados.pr_id)}>Excluir</button>
        <Edit/> 
        </>
      </>
    );
  }
}

export default ExibirDetalhesProjeto;
