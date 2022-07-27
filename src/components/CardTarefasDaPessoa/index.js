import React from 'react';

import { Container, Top, Prioridade, Bottom } from './styles';

function CardTarefasDaPessoa(Props) {
  return (
    <Container>
        <Top>
          <h3>{Props.titulo}</h3>
          <Prioridade style={{backgroundColor: Props.prioridade == "Alta" ? "#E74444" : Props.prioridade == "Média" ? "#FF9533" : Props.prioridade == "Baixa" ? "#67CB65" : "#666"}}>
            {Props.prioridade}
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