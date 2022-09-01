import React from 'react';
import { Media } from 'reactstrap';

import { Container } from './styles';

function CardDetalhesList(Props) {
  return (
    <Container>
      {Props.keys.map((e, index) => 
        <li key={index}><strong>{e}:</strong> {Props.values[index]}</li>)}
    </Container>
  );
}

export default CardDetalhesList;