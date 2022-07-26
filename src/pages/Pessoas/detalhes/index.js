import React from "react";
import CardInfoPessoa from "../../../components/CardInfoPessoa";
import { Container } from "./styles";

function Detalhes(Props) {
  return (
    <>
      <Container>
        {Props.id.nome == "Ninguem selecionado"
        ? <>
          Nenhuma pessoa selecionada
        </>



        : <>
          <CardInfoPessoa nome={Props.id.nome} profissao={Props.id.profissao} />
        </>
        }
      </Container>
    </>
  );
}

export default Detalhes;
