import React from 'react';

import { 
  Container, 
  Titulo, 
  Descricao, 
  Top, 
  TopLeft, 
  Prioridade, 
  Body, 
  Avatar 
} from './styles';

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
                Props.dados.tr_prioridade === 3 ? "Alta"  :
                Props.dados.tr_prioridade
              }
              </Prioridade>
        </Top>
        <Body>
          {Props.dados.pessoas.map((p, index) =>
            <div style={{background: "#c5a6e4", borderRadius: "50%"}}>
              <Avatar style={{ background: `#${Math.floor(Math.random()*16777215).toString(16)}57` }} key={index} title={p.pe_nome}>{p.pe_nome[0]}</Avatar>
            </div>
          )}
        </Body>
    </Container>
  );
}

export default CardTarefa;