import React from "react";

import Header from "../../components/header";
import Grafico from "./grafico";
import Tabela from "./tabela";
import CardCriar from "../../components/CardCriar";
import SalaVirtual from "../../components/CardSalaVirtual";
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit'
import Index from "../Projetos/reminder/index";

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
import Reminder from "./reminder/reminder";

 const store = createStore(Index);

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
           <Provider store={store}> 
            <Reminder/>
           </Provider> 
        </CardCalendar>
        
        <SalaVirtual/>
      </ColunaDois>
    </Container>
  );
}

export default Projetos;
