import React from 'react';
import KanbanLi from '../KanbanLi';
import { useDrop } from 'react-dnd'

import { Container, ContTarefas } from './styles';
import api from '../../api';

function KanbanUl(Props) {
  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item){
      if (item.status !== Props.status) {
        item.status = Props.status

        const updateStatus = async () => {
          const response = await api.put(`/tarefas/${item.id}/status/${Props.status}`)
          Props.func()
        }
        updateStatus()
      }
    }
  })

  return (
    <Container ref={dropRef}>
        <h2>{Props.titulo}</h2>
        <ContTarefas>
            {Props.elements.map((e, index) =>
                <KanbanLi key={index} index={index} dados={e}/>
            )}
        </ContTarefas>
    </Container>
  );
}

export default KanbanUl;