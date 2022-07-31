import React from "react";

import Header from "../../components/header";
import Grafico from "./grafico";
import Tabela from "./tabela";
import CardCriar from "../../components/CardCriar";
import SalaVirtual from "../../components/CardSalaVirtual";

import {
  Container,
  ColunaUm,
  ContGrafico,
  TopGrafico,
  ContTabela,
  ColunaDois,
  CardCalendar,

} from "./styles";



import MyApp from "./date";
import "./style.css";
import PostProjetos from "./modal";

function Projetos() {
  return (
    <Container>
      <Header />

      <ColunaUm>
          <TopGrafico>
            <h1>Projetos</h1>
          </TopGrafico>
          <ContGrafico>
            <Grafico />
          </ContGrafico>
          <ContTabela>
            <Tabela />
          </ContTabela>
      </ColunaUm>

      <ColunaDois>
        <CardCalendar>
          <CardCriar
            titulo="Criar Projeto"
            descricao="Criar um novo projeto"
            button={<PostProjetos />}
          />
          <MyApp />
        </CardCalendar>
        <SalaVirtual/>
      </ColunaDois>
    </Container>
  );
}

export default Projetos;
