import React from 'react';
import ProgressBar from '../ProgressBar';
import { Container, Titulo, Descricao, Top, TopLeft, Prioridade, Body, Bottom, ProgressDesc, Avatar } from './styles';

function CardTarefa(Props) {
  return (
    <Container href={`tarefas/${Props.dados.tr_id}`}>
        <Top>
            <TopLeft>
              <Titulo>{Props.dados.tr_nome}</Titulo>
              <Descricao>{Props.dados.pr_nome}</Descricao>
            </TopLeft>

              <Prioridade title="Prioridade" style={{ backgroundColor: Props.dados.tr_prioridade === 1 ? "#67CB65" :
                                                    Props.dados.tr_prioridade === 2 ? "#FF9533" :
                                                    Props.dados.tr_prioridade === 3 ? "#E74444" : "gray"}}>
              {
                Props.dados.tr_prioridade === 1 ? "Baixa" :
                Props.dados.tr_prioridade === 2 ? "Média" :
                Props.dados.tr_prioridade === 3 ? "Alta" :
                Props.dados.tr_prioridade
              }
              </Prioridade>
        </Top>
        <Body>
          {Props.dados.pessoas.map((p, index) =>
            <Avatar key={index} title={p.pe_nome}>{p.pe_nome[0]}</Avatar>
          )}
        </Body>
        <Bottom>
            <ProgressDesc>
              <p>Progresso</p>
              <span>15%</span>
            </ProgressDesc>
            <ProgressBar width="100%" height="5px" porcentagem="15"/>
        </Bottom>
    </Container>
  );
}

export default CardTarefa;