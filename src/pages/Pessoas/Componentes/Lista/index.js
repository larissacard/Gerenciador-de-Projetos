import React from 'react';
import api from '../../../../api';

import { useDrop } from 'react-dnd'

import { 
  Container, 
  List 
} from './styles';

function Lista(Props) {
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
      <h3>{Props.titulo}</h3>
      <List>{Props.children}</List>
    </Container>  
  );
}

export default Lista;