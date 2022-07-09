import React, { useState, useEffect } from "react";
import api from "../../api";

const projetoPath = window.location.pathname;
console.log(projetoPath);

function ExibirDetalhesProjeto(){
    const [projeto, setProjeto] = useState({});

    useEffect(() => {
        api
            .get(projetoPath)
            .then((response => setProjeto(response.data)))
            .catch((error) => {
                console.log("Eita bixo, um erro ó: " + error)
            })
    }, []);

    const dados = projeto.dados
    const equipes = projeto.equipes
    console.log(equipes)
    return(
        <>
            <h1>Projeto: </h1>
            <ul>
                <li>{dados?.pr_id}</li>
                <li>{dados?.pr_nome}</li>
                <li>{dados?.pr_descricao}</li>
                <li>{dados?.pr_status}</li>
                <li>{dados?.pr_data_criacao}</li>
                <li>{dados?.pr_data_finalizacao}</li>
            </ul>

            <h2>Equipes</h2>
            <ul>
            </ul>
        </>
    )    
}

export default ExibirDetalhesProjeto;