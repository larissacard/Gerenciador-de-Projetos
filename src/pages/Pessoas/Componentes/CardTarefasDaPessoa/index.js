import React from 'react';

import { useDrag } from 'react-dnd'

import { 
  Container, 
  Top, 
  Prioridade, 
  Bottom 
} from './styles';

function CardTarefasDaPessoa(Props) {
  const status = ["Baixa", "Media", "Alta"]
  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {'id': Props.dados.id, "status": Props.dados.status},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <Top>
        <h3 title={Props.dados.nome}>{Props.dados.nome}</h3>
        <Prioridade style={{backgroundColor: Props.dados.tr_prioridade === 3 ? "#E74444" : Props.dados.prioridade === 2 ? "#FF9533" : Props.dados.prioridade === 1 ? "#67CB65" : "#666"}}>
          {status[Props.dados.prioridade - 1]}
        </Prioridade>
      </Top>
      <Bottom>
        <div>
          <p>Data Criação:</p>
          <span>{Props.dados.createdAt.substring(0,10)}</span>
        </div>
        
        {Props.dados.status === "Concluido" &&
        <div>
          <p>Data Finalização:</p>
          <span>{Props.dados.updatedAt.substring(0,10)}</span>
        </div>
        }
      </Bottom>
    </Container>
  );
}

export default CardTarefasDaPessoa;