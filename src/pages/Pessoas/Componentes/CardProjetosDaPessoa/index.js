import React from 'react';

import { Container} from './styles';

function CardProjetosDaPessoa(Props) {
  return (
    <Container>
        <h3>{Props.titulo}</h3>
    </Container>
  );
}

export default CardProjetosDaPessoa;