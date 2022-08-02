import React from 'react';

import { Container } from './styles';

function CardDetalhesList(Props) {
  return (
    <Container style={{ width: Props.width, height: Props.height }}>
      {Props.keys.map((e, index) => 
        <li key={index}><strong>{e}:</strong> {Props.values[index]}</li>)}
    </Container>
  );
}

export default CardDetalhesList;