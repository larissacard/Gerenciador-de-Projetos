import React from 'react';

import { 
  Container,
  Image
} from './styles';

function NotFound() {
  return (
    <Container> 
      <Image />
      <h5>Página "{window.location.pathname}" indisponível. Lamentamos o transtorno.</h5>
      <h5>Tente pesquisar algo diferente.</h5>
    </Container>

  );
}

export default NotFound;