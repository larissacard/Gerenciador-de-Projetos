import React from 'react';
import { Container, Top, Body, Prioridade } from './styles';
import { useDrag } from 'react-dnd'
import DetalheTarefa from './dialog';

function KanbanLi(Props) {
  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {'id': Props.dados.tr_id, "status": Props.dados.tr_status},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <Top>
        <h3 title={Props.dados.tr_nome}>{Props.dados.tr_nome} (#{Props.dados.tr_id})</h3>
      </Top>
      <Body>
          <Prioridade>
            <span style={{ backgroundColor: Props.dados.tr_prioridade === 1 ? "#67CB65" :
                                            Props.dados.tr_prioridade === 2 ? "#FF9533" : 
                                            Props.dados.tr_prioridade === 3 ? "#E74444" : "gray"}}>
              {
                Props.dados.tr_prioridade === 1 ? "Baixa" :
                Props.dados.tr_prioridade === 2 ? "Média" :
                Props.dados.tr_prioridade === 3 ? "Alta" :
                Props.dados.tr_prioridade
              }
            </span>
          </Prioridade>
          {/* <ul>
            <li>
              {Props.dados.tr_descricao.length > 100 ?
              <span><strong>Descricao:</strong> {`${Props.dados.tr_descricao.substring(0, 100)}...`}</span>
              : <span><strong>Descricao:</strong> {Props.dados.tr_descricao}</span>}
            </li>
            {Props.dados.tr_data_criacao &&
              <li>
                <p>Data de Criação:</p> 
                <span>{Props.dados.tr_data_criacao.substring(0,10)}</span>
              </li>
            }
            {Props.dados.tr_data_finalizacao &&
            <li style={{marginTop: "5px"}}>
              <p>Data de Finalização:</p> 
              <span>{Props.dados.tr_data_finalizacao.substring(0,10)}</span>
            </li>
            }
            <li> <strong>Data de Entrega:</strong> {Props.dados.tr_data_entrega}</li>
          </ul> */}
      </Body>
    </Container>
  );
}

export default KanbanLi;