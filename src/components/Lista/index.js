import React from 'react';

import { Container, List } from './styles';

function Lista(Props) {
  return (
    <Container style={{width: Props.width, height: Props.height}}>
      <h3>{Props.titulo}</h3>
      <List>{Props.children}</List>
    </Container>  
  );
}

export default Lista;