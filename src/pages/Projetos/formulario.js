import React, { Component } from "react"
import axios from "axios";
import { Button, Form } from 'react-bootstrap';

class ProjetosFormulario extends Component {
    state = {
        pr_nome: '',
        pr_descricao: '',
        projetos: [],
    }

    cadastrarProjeto = (projetos) => {
        fetch("https://api-brisa-nodejs-postgresql.herokuapp.com/projetos", { 
            method: 'POST', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(projetos)
        })
        .then(resposta => {
            if(resposta.ok){
                this.atualizarNome();
                this.atualizarDescricao()
                this.cadastrar()
                }else{
                    alert("nao add")
        }
        })
    }

    atualizarNome = (e) => {
        this.setState(
            {
                pr_nome: e.target.value
            }
        )
    }

    atualizarDescricao = (e) => {
        this.setState(
            {
                pr_descricao: e.target.value
            }
        )
    }

    cadastrar() {
        const projetos = {
            pr_nome: this.state.pr_nome,
            pr_descricao: this.state.pr_descricao
        }
        this.cadastrarProjeto(projetos);
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o nome do projeto" value={this.state.pr_nome} onChange={this.atualizarNome}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text" placeholder="Digite a descrição do projeto" value={this.state.pr_descricao} onChange={this.atualizarDescricao}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.cadastrar}>
                        Cadastrar
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ProjetosFormulario;