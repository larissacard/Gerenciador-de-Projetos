import React from 'react';

import { Container, List } from './styles';

function Lista(Props) {
  return (
    <Container>
        <h3>{Props.titulo}</h3>
        <List>{Props.elementos}</List>
    </Container>  
  );
}

export default Lista;