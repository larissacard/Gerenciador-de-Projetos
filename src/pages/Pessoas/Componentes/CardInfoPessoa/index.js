import React from 'react';

import { 
  Container,
  InfoPessoa,
  FotoPerfil,
  DadosTarefas,
  AllButtons,
} from './styles';

import AlertDeleteDialog from '../../../../Components/CardConfirmDelete';
import EditarPessoa from '../Put';

function CardPessoa(Props) {
  return (
    <Container>
        <FotoPerfil src={Props.dados.dados.pe_foto}/>
        <InfoPessoa>
            <h2>{Props.dados.dados.pe_nome}</h2>
            <p>{Props.dados.dados.pe_cargo}</p>
            <AllButtons>
              <EditarPessoa dados={Props.dados}/>
              <AlertDeleteDialog 
                path = {`/pessoas/${Props.dados.dados.pe_id}`}
                pathFinal = {`/pessoas`}
                alert= 'Pessoa apagada com Sucesso!'
                titulo= 'Excluir Pessoa Permanentemente?'
                descricao= 'Se você excluir esta Pessoa, não poderá recuperar os dados dela novamente. Deseja excluí-la?' />
            </AllButtons>
            <DadosTarefas>
              <li>
                <p>Tarefas Não Iniciadas</p>
                <span>{Props.dados.tarefas.NaoIniciadas.length}</span>
              </li>
              <li>
                <p>Tarefas Em Andamento</p>
                <span>{Props.dados.tarefas.EmDesenvolvimento.length}</span>
              </li>
              <li>
                <p>Tarefas Em Testes</p>
                <span>{Props.dados.tarefas.Testes.length}</span>
              </li>
              <li>
                <p>Tarefas Concluidas</p>
                <span>{Props.dados.tarefas.Concluidas.length}</span>
              </li>
            </DadosTarefas>
        </InfoPessoa>
    </Container>
  );
}

export default CardPessoa;