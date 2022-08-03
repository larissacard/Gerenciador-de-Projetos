import React, { useRef } from 'react';
import { Container, Top, Body } from './styles';
import { useDrag, useDrop } from 'react-dnd'

function KanbanLi(Props) {
  const ref = useRef();

  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {'id': Props.dados.tr_id, "index": Props.index},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      const draggedIndex = item.index;
      const targetIndex = Props.index;

      if (draggedIndex === targetIndex) {
        return;
      }
      
      // tamanho do card que eu vou arrastar
      const targetSize = ref.current.getBoundingClientRect();
      // Ponto central do card que eu vou arrastar (para calcular se ele está mais para cima ou para baixo)
      const targetCenter =  (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;
      
      // Só não passa do if quando eu arrasto um card para baixo de outro card
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      // se o card alvo já estiver em cima, não faz nada
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      console.log("teste")
    }
  }) 

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging}>
      <Top>
        <h3>{Props.dados.tr_nome} (#{Props.dados.tr_id})</h3>
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
      </Top>
      <Body>
          <ul>
            <li>
              {Props.dados.tr_descricao.length > 100 ?
              <span><strong>Descricao:</strong> {`${Props.dados.tr_descricao.substring(0, 100)}...`}</span>
              : <span><strong>Descricao:</strong> {Props.dados.tr_descricao}</span>}
            </li>
            <li>
              <p>Data de Criação:</p> 
              <span>{Props.dados.tr_data_criacao.substring(0,10)}</span>
            </li>
            {/* <li> <strong>Data de Entrega:</strong> {Props.dados.tr_data_entrega}</li> */}
          </ul>
      </Body>
    </Container>
  );
}

export default KanbanLi;