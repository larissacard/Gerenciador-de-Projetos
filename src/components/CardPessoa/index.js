import React, { useState } from "react";

import { Container, InfoPessoa, FotoPerfil } from "./styles";

function CardPessoa(Props) {
  return (
    <div>
      <Container
        style={{ backgroundColor: Props.pessoaSelecionada == Props.id ? "rgba(118, 75, 162, 0.5)" : "white"}}
        onClick={() => {
          Props.childToParent(Props);
        }}>
        <InfoPessoa>
          <h3>{Props.nome}</h3>
          <p>{Props.profissao}</p>
        </InfoPessoa>
        <FotoPerfil />
      </Container>
    </div>
  );
}

export default CardPessoa;
