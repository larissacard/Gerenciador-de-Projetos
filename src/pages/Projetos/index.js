import React from "react";
import { Dropdown } from "react-bootstrap";

import Header from "../../components/header";
import Grafico from "../../components/grafico";
import Tabela from "./tabela";
import CardCriar from "../../components/CardCriar";
import CardAgenda from "../../components/CardAgenda";

import {
  Container,
  ColunaUm,
  ColunaUm_bg,
  Titulo,
  ContGrafico,
  TopGrafico,
  ContTabela,
  Filtros,
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
            <Filtros>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  Filtros
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Ordem Alfabetica A-Z</Dropdown.Item>
                  <Dropdown.Item href="#">Mais Recentes</Dropdown.Item>
                  <Dropdown.Item href="#">Mais Antigos</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Filtros>
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
