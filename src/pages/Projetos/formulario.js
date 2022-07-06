import React, { Component, useEffect, useState } from "react"
import { Button, Form } from 'react-bootstrap';
import api from '../../api'

function ProjetosFormulario() {
    const [pr_nome, setpr_nome]=useState("");
    const [pr_descricao, setpr_descricao]=useState("")

    function Cadastrar() {
        console.warn({pr_nome, pr_descricao});
        let projetos={pr_nome, pr_descricao}
        fetch("https://api-brisa-nodejs-postgresql.herokuapp.com/projetos", {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(projetos)
        }).then((result) => {
            console.warn("result",result)
        })
    }

        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o nome do projeto" value={pr_nome} onChange={(e) => {setpr_nome(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text" placeholder="Digite a descrição do projeto" value={pr_descricao} onChange={(e) => {setpr_descricao(e.target.value)}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={Cadastrar}>
                        Cadastrar
                    </Button>
                </Form>
            </div>
        )
}

export default ProjetosFormulario;