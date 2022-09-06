import React from 'react';

import { 
  Container, 
  Preenchido, 
  NaoPreenchido 
} from './styles';

function ProgressBar(Props) {
  return (
    <Container style={{ width: Props.width, height: Props.height }}>
      <Preenchido style={{ width: `${Props.porcentagem}%` }}/>
      <NaoPreenchido style={{ width: `${100 - Props.porcentagem}%` }}/>
    </Container>
  );
}

export default ProgressBar;