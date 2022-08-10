import React from 'react';

import { 
    Container,
    InfoPessoa,
    FotoPerfil,
    DadosTarefas,
    EditButton,
    DeleteButton,
    AllButtons,
} from './styles';

function CardPessoa(Props) {
  return (
    <Container>
        <FotoPerfil src={`https://api-brisa-nodejs-postgresql.herokuapp.com/uploads/${Props.dados.dados.pe_foto}`}/>
        <InfoPessoa>
            <h2>{Props.dados.dados.pe_nome}</h2>
            <p>{Props.dados.dados.pe_cargo}</p>
            <AllButtons>
              <EditButton>Editar</EditButton>
              <DeleteButton>Deletar</DeleteButton>
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