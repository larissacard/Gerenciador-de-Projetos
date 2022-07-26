import React, { useState } from 'react';

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
        <FotoPerfil/>
        <InfoPessoa>
            <h2>{Props.nome}</h2>
            <p>{Props.profissao}</p>
            <AllButtons>
              <EditButton>Editar</EditButton>
              <DeleteButton>Deletar</DeleteButton>
            </AllButtons>
            <DadosTarefas>
              <li>
                <p>Tarefas Não Iniciadas</p>
                <span>35</span>
              </li>
              <li>
                <p>Tarefas Em Desenvolvimento</p>
                <span>35</span>
              </li>
              <li>
                <p>Tarefas Canceladas</p>
                <span>35</span>
              </li>
              <li>
                <p>Tarefas Concluidas</p>
                <span>35</span>
              </li>
            </DadosTarefas>
        </InfoPessoa>
    </Container>
  );
}

export default CardPessoa;