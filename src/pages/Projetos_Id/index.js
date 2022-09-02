import React, { useState } from 'react'
import api from '../../api'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { 
    ContDados, 
    Top, 
    Buttons, 
    Titulo, 
    Detalhamento, 
    Trelo, 
    Main 
} from './styles'

import AlertDeleteDialog from '../../Components/CardConfirmDelete';
import CardDetalhesList from '../../Components/CardDetalhesList';
import KanbanUl from './Componentes/KanbanUl';
import Container from "../../Components/Container";
import Edit from './Componentes/put';

export default function Index() {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
    });
    
    const [openAlert, setOpenAlert] = useState(false);
    
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenAlert(false);
    } 

    const path = window.location.pathname;
    const [dados, setDados] = useState()
    const [updateScreen, setUpdateScreen] = useState(true)
    let string_equipes = ''
    let qtd_pessoas = 0

    const getDados = async () => {
        api
            .get(path)
            .then(response => {
                setDados(response.data);
            })
            .catch((err) => {
                if (err.response.status === 401) {
                  alert("Faça o Login para visualizar a página");
                  window.location.href = "/login";
                } else alert(err.message);
            });
    };

    if (updateScreen) {
        getDados()
        setUpdateScreen(false)
    };

    return (
        <>
            <Snackbar open={openAlert} autoHideDuration={1500} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left',}}>
                <Alert onClose={handleCloseAlert} severity='warning'>
                    Projeto apagado com sucesso!
                </Alert>
            </Snackbar>
            
            <Container>
                {dados ?
                    <ContDados>
                        <Top>
                            <Main>
                                <Titulo>{dados.dados.pr_nome}</Titulo>
                                <p>(#{dados.dados.pr_id})</p>
                                <span>{dados.dados.pr_status}</span>
                            </Main>
                            <Buttons>
                                <Edit dados={dados} update={getDados}/>
                                <AlertDeleteDialog path = {`/projetos/${dados.dados.pr_id}`}
                                pathFinal="/projetos"
                                alert="Projeto apagado com Sucesso!"
                                titulo='Excluir Projeto Permanentemente?'
                                descricao='Se você excluir este projeto, não poderá recuperá-lo. Deseja excluí-lo?' />
                            </Buttons>
                        </Top>
                        <Detalhamento>
                            {dados.equipes.forEach((e, index) => {
                                qtd_pessoas += e.pessoas.length
                                string_equipes += `${e.eq_nome} (#${e.eq_id})`
                                if (index !== dados.equipes.length - 1) {
                                    string_equipes += ', '
                                }
                            })}

                            <CardDetalhesList
                                keys={[
                                'Data de Criação', 'Data de Finalização', 'Equipes'
                            ]} values={[dados.dados.pr_data_criacao.substring(0,10), dados.dados.pr_data_finalizacao, string_equipes]} />

                            <CardDetalhesList keys={['Descrição']} values={[dados.dados.pr_descricao]} />

                            <CardDetalhesList keys={[
                                'Total de Tarefas', 'Total de Pessoas'
                                ]} values={[
                                    dados.tarefas.EmDesenvolvimento.length + dados.tarefas.Concluidas.length + dados.tarefas.NaoIniciadas.length + dados.tarefas.Testes.length, qtd_pessoas
                                ]} />
                        </Detalhamento>
                        <Trelo>
                            <KanbanUl func={getDados} index={1} status='Não Iniciado' titulo='To Do' elements={dados.tarefas.NaoIniciadas} dados={dados}/>
                            <KanbanUl func={getDados} index={2} status='Em Desenvolvimento' titulo='In Progress' elements={dados.tarefas.EmDesenvolvimento} />
                            <KanbanUl func={getDados} index={3} status='Em Testes' titulo='Test' elements={dados.tarefas.Testes} />
                            <KanbanUl func={getDados} index={4} status='Concluido' titulo='Done' elements={dados.tarefas.Concluidas} />
                        </Trelo>
                    </ContDados>
                    : <>
                        Aguardando...
                    </>
                }
            </Container>
        </>    
    )
}
