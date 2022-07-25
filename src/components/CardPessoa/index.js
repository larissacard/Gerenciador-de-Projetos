import React, { useState } from 'react';

import { 
    Container,
    InfoPessoa,
    FotoPerfil,
} from './styles';

function CardPessoa(Props) {
  return (
    <Container onClick={() => {
      Props.childToParent(Props)
    }}>
        <InfoPessoa>
            <h3>{Props.nome}</h3>
            <p>{Props.profissao}</p>
        </InfoPessoa>
        <FotoPerfil/>
    </Container>
  );
}

export default CardPessoa;