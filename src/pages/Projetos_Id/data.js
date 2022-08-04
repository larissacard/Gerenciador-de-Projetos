import React, { Component } from "react";
import api from "../../api";
import { Deletar } from './styles' 

const projetoPath = window.location.pathname;

class ExibirDetalhesProjeto extends Component {
  state = {
    dados: {},
  };
 
   
  componentDidMount() {
    api.get("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath)
      .then((res) => {
        this.setState({ dados: res.data.dados });
      });
  }

  deletarProjetos = (pr_id) => {
    api.delete("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath)
  }

  render() {
    const { dados } = this.state;
    
    return (
      <>
        <Deletar type="button" onClick={() =>this.deletarProjetos(dados.pr_id)}>Deletar</Deletar>
        
      </>
    );
  }
}

export default ExibirDetalhesProjeto;
