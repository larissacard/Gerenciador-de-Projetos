import React, { useEffect, useState } from 'react'
import api from '../../api'
import CardDetalhesList from '../../components/CardDetalhesList';
import KanbanUl from '../../components/KanbanUl';
import Header from '../../components/header'
import { Container, ContDados, Top, Buttons, Editar, Deletar, Titulo, Detalhamento, Trelo } from './styles'

export default function Index() {
    const path = window.location.pathname;
    const [dados, setDados] = useState()
    let string_equipes = ""
    let qtd_pessoas = 0

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
    }, [path]);

    return (
        <Container>
            <Header />

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
                        {dados.equipes.forEach((e, index) => {
                            qtd_pessoas += e.pessoas.length
                            string_equipes += `${e.eq_nome} (#${e.eq_id})`
                            if (index !== dados.equipes.length - 1) {
                                string_equipes += ", "
                            }
                        })}

                        <CardDetalhesList width="23.29%" height="143px" keys={[
                            "Data de Criação", "Data de Finalização", "Equipes"
                        ]} values={[dados.dados.pr_data_criacao, dados.dados.pr_data_finalizacao, string_equipes]} />

                        <CardDetalhesList width="58.32%" height="143px" keys={["Descrição"]} values={[dados.dados.pr_descricao]} />

                        <CardDetalhesList width="15.32%" height="143px" keys={[
                            "Total de Tarefas", "Total de Pessoas"
                            ]} values={[
                                dados.tarefas.EmDesenvolvimento.length + dados.tarefas.Concluidas.length + dados.tarefas.NaoIniciadas.length,
                                qtd_pessoas
                            ]} />
                    </Detalhamento>
                    <Trelo>
                        <KanbanUl titulo="To Do" elements={dados.tarefas.NaoIniciadas} />
                        <KanbanUl titulo="In Progress" elements={dados.tarefas.EmDesenvolvimento} />
                        <KanbanUl titulo="Frozen" elements={[]} />
                        <KanbanUl titulo="Done" elements={dados.tarefas.Concluidas} />
                    </Trelo>
                </ContDados>
                : <>
                    Aguardando...
                </>
            }
        </Container>
    )
}
