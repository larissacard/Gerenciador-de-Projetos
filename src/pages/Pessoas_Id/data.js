import React, { Component } from "react";
import api from "../../api";

const pessoasPath = window.location.pathname;

class ExibirDetalhesPessoas extends Component {
    state = {
        dados: {},
    };

    componentDidMount() {
        fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + pessoasPath)
          .then((res) => res.json())
          .then((res) => {
            this.setState({ dados: res.dados });
        });
    }

    deletarPessoas = (pe_id) => {
        fetch("https://api-brisa-nodejs-postgresql.herokuapp.com" + pessoasPath, {method: 'DELETE'})
        .then(resposta => {})
    }

    render() {
        const { dados } = this.state;

        return (
            <>
                <button type="button" class="btn btn-danger" onClick={() =>this.deletarPessoas(dados.pe_id)}>Excluir</button>
            </>
        )
    }
  
}

export default ExibirDetalhesPessoas;