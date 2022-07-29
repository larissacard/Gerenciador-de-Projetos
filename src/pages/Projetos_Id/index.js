import React, { useEffect, useState } from 'react'
import api from '../../api'

import Header from '../../components/header'
import { Container, ContDados, Top, Buttons, Editar, Deletar, Titulo, Detalhamento, Dados, Descricao, StatusTarefas, Trelo } from './styles'

export default function Index() {
    const path = window.location.pathname;
    const [dados, setDados] = useState()

    useEffect(() => {
        const getDados = async () => {
            try {
                const response = await api.get(path)
                setDados(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getDados();
    }, []);

  return (
    <Container>
        <Header/>

        {dados ?
        <ContDados>
            <Top>
                <Titulo>{dados.dados.pr_nome}</Titulo>
                <Buttons>
                    <Editar>Editar</Editar>
                    <Deletar>Deletar</Deletar>
                </Buttons>
            </Top>
            <Detalhamento>
                <Dados>
                    <p>Data de Criação: {dados.dados.pr_data_criacao}</p>
                    <p>Data de Finalização: {dados.dados.pr_data_finalizacao}</p>
                    <p>Equipes: {JSON.stringify(dados.equipes)}</p>
                </Dados>
                <Descricao>
                    <p>Descrição: {dados.dados.pr_descricao}</p>
                </Descricao>
                <StatusTarefas>
                </StatusTarefas>
            </Detalhamento>
            <Trelo></Trelo>
        </ContDados>
        : <>
            Aguardando...
        </>
        }
    </Container>
  )
}
