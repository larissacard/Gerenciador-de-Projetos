import React from 'react';

import {
    Container,
    Titulo, 
} from './styles';

// São os cards que tem o botão de inserir elementos
function CardCriar(props) {
  return (
    <Container>
        <Titulo>
            <h5>{props.titulo}</h5>
            <p>{props.descricao}</p>
        </Titulo>
        {props.button}
    </Container>
  );
}

export default CardCriar;