import React from 'react';

import { Container } from './styles.js';

function NaoAutorizado() {
  return (
    <Container>
      <div/>
      <h5>Você não possui autorização para acessar isso!</h5>
      <h5>Faça Login para visualizar a página.</h5>
    </Container>
  )
}

export default NaoAutorizado;