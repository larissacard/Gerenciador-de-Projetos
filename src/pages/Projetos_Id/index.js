import React, { useEffect, useState } from 'react'
import api from '../../api'
import CardDetalhesList from '../../components/CardDetalhesList';

import Header from '../../components/header'
import { Container, ContDados, Top, Buttons, Editar, Deletar, Titulo, Detalhamento, Trelo } from './styles'

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
    });

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
                    <CardDetalhesList width="23.29%" height="143px" keys={[
                       "Data de Criação" , "Data de Finalização", "Equipes"
                    ]} values={[dados.dados.pr_data_criacao, dados.dados.pr_data_finalizacao, "eq"]}/>

                    <CardDetalhesList width="58.32%" height="143px" keys={["Descrição"]} values={[dados.dados.pr_descricao]}/>

                    <CardDetalhesList width="15.32%" height="143px" keys={[""]} values={[""]}/>
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
