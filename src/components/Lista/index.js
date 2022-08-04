import React from 'react';
import { useDrop } from 'react-dnd'
import { Container, List } from './styles';
import api from '../../api';

function Lista(Props) {
  console.log(Props)
  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item){
      if (item.status !== Props.status) {
        console.log(item)
        console.log(Props.status)
        item.status = Props.status

        const updateStatus = async () => {
          const response = await api.put(`/tarefas/${item.id}/status/${Props.status}`)
          console.log(response.data)
          Props.func()
        }
        updateStatus()
      }
    }
  })
  return (
    <Container style={{width: Props.width, height: Props.height}} ref={dropRef}>
      <h3>{Props.titulo}</h3>
      <List>{Props.children}</List>
    </Container>  
  );
}

export default Lista;