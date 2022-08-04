import React, { useState } from 'react'
import api from '../../api'
import CardDetalhesList from '../../components/CardDetalhesList';
import KanbanUl from '../../components/KanbanUl';
import Header from '../../components/header'
import { Container, ContDados, Top, Buttons, Titulo, Detalhamento, Trelo } from './styles'
import Edit from './put';
import ExibirDetalhesProjeto from './data';

export default function Index() {
    const path = window.location.pathname;
    const [dados, setDados] = useState()
    const [updateScrenn, setUpdateScreen] = useState(true)
    let string_equipes = ""
    let qtd_pessoas = 0

    const getDados = async () => {
        const response = await api.get(path)
        setDados(response.data);
    };

    if (updateScrenn) {
        getDados()
        setUpdateScreen(false)
    }
    
    return (
        <Container>
            <Header />

            {dados ?
                <ContDados>
                    <Top>
                        <Titulo>{dados.dados.pr_nome}</Titulo>
                        <Buttons>
                            <Edit dados={dados}/>
                            <ExibirDetalhesProjeto />
                        </Buttons>
                    </Top>
                    <Detalhamento>
                        {dados.equipes.forEach((e, index) => {
                            qtd_pessoas += e.pessoas.length
                            string_equipes += `${e.eq_nome} (#${e.eq_id})`
                            if (index !== dados.equipes.length - 1) {
                                string_equipes += ", "
                            }
                        })}

                        <CardDetalhesList width="23.29%" height="143px" keys={[
                            "Data de Criação", "Data de Finalização", "Equipes"
                        ]} values={[dados.dados.pr_data_criacao.substring(0,10), dados.dados.pr_data_finalizacao, string_equipes]} />

                        <CardDetalhesList width="58.32%" height="143px" keys={["Descrição"]} values={[dados.dados.pr_descricao]} />

                        <CardDetalhesList width="15.32%" height="143px" keys={[
                            "Total de Tarefas", "Total de Pessoas", "Status"
                            ]} values={[
                                dados.tarefas.EmDesenvolvimento.length + dados.tarefas.Concluidas.length + dados.tarefas.NaoIniciadas.length + dados.tarefas.Testes.length, qtd_pessoas, dados.dados.pr_status
                            ]} />
                    </Detalhamento>
                    <Trelo>
                        <KanbanUl func={getDados} status="Não Iniciado" titulo="To Do" elements={dados.tarefas.NaoIniciadas} />
                        <KanbanUl func={getDados} status="Em Desenvolvimento" titulo="In Progress" elements={dados.tarefas.EmDesenvolvimento} />
                        <KanbanUl func={getDados} status="Em Testes" titulo="Test" elements={dados.tarefas.Testes} />
                        <KanbanUl func={getDados} status="Concluido" titulo="Done" elements={dados.tarefas.Concluidas} />
                    </Trelo>
                </ContDados>
                : <>
                    Aguardando...
                </>
            }
        </Container>
    )
}
