import React from 'react';

import { Container} from './styles';

function CardProjetosDaPessoa(Props) {
  return (
    <a href={`projetos/${Props.id}`} style={{textDecoration: "none"}}>
      <Container>
          <h3>{Props.titulo}</h3>
      </Container>
    </a>
  );
}

export default CardProjetosDaPessoa;