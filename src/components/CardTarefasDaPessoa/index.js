import React from 'react';

import { Container, Top, Prioridade, Bottom } from './styles';

function CardTarefasDaPessoa(Props) {
  const status = ["Baixa", "Media", "Alta"]
  return (
    <Container>
        <Top>
          <h3>{Props.titulo}</h3>
          <Prioridade style={{backgroundColor: Props.prioridade === 3 ? "#E74444" : Props.prioridade === 2 ? "#FF9533" : Props.prioridade === 1 ? "#67CB65" : "#666"}}>
            {status[Props.prioridade - 1]}
          </Prioridade>
        </Top>
        <Bottom>
          <p>Data de Criação:</p>
          <span>{Props.data}</span>
        </Bottom>
    </Container>
  );
}

export default CardTarefasDaPessoa;