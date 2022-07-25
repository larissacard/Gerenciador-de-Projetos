import React, { useState } from 'react';

import { 
    Container,
    InfoPessoa,
    FotoPerfil,
} from './styles';

function CardPessoa(Props) {
  return (
    <Container>
        <InfoPessoa>
            <h2>{Props.nome}</h2>
            <p>{Props.profissao}</p>
        </InfoPessoa>
        <FotoPerfil/>
    </Container>
  );
}

export default CardPessoa;