import React from "react";

import { Container, InfoPessoa, FotoPerfil } from "./styles";

function CardPessoa(Props) {
  // console.log(Props)
  return (
    <Container
      style={{ backgroundColor: Props.pessoaSelecionada === Props.id ? "rgba(118, 75, 162, 0.4)" : "#f5f5f5"}}
      onClick={() => {
        Props.childToParent(Props);
      }}>
      <InfoPessoa>
        <h3>{Props.nome}</h3>
        <p>{Props.profissao}</p>
      </InfoPessoa>
      {Props.foto &&
        <FotoPerfil src={`https://api-brisa-nodejs-postgresql.herokuapp.com/uploads/${Props.foto}`}/>
      }
    </Container>
  );
}

export default CardPessoa;
