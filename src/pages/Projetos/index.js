import React from "react";

import Header from "../../components/header";
import Grafico from "./grafico";
import Tabela from "./tabela";
import CardCriar from "../../components/CardCriar";
import CardAgenda from "../../components/CardAgenda";

import {
  Container,
  ColunaUm,
  ContGrafico,
  TopGrafico,
  ContTabela,
  ColunaDois,
  CardCalendar,
  Agenda,
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
        <Agenda>
          <CardAgenda titulo="Gp Inovação" hora="9:00 AM" />
          <CardAgenda titulo="Gerenciamento de Pousadas" hora="11:00 AM" />
          <CardAgenda titulo="Evento Tal" hora="15:00 PM" />
          <CardAgenda titulo="Bla Bla Bla" hora="22:00 PM" />
        </Agenda>
      </ColunaDois>
    </Container>
  );
}

export default Projetos;
