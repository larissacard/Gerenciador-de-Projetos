import React from 'react';

import { Container} from './styles';

function CardProjetosDaPessoa(Props) {
  return (
    <Container>
      <h3>{Props.titulo[0].nome}</h3>
    </Container>
  );
}

export default CardProjetosDaPessoa;