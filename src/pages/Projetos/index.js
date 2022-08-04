import React, {useState} from "react";
import api from "../../api";
import Header from "../../components/header";
import Grafico from "./grafico";
import CardCriar from "../../components/CardCriar";
import SalaVirtual from "../../components/CardSalaVirtual";
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit'
import Index from "../Projetos/reminder/index";
import PostProjetos from "./modal";

import {
  Container,
  ColunaUm,
  ContGrafico,
  TopGrafico,
  ContTabela,
  ColunaDois,
  CardCalendar,
  ContProjetos,
  CabecalhoProjetos,
  Search,
  SearchIcon,
  CardProjeto,
  ContMais
} from "./styles";


import Reminder from "./reminder/reminder";

const store = createStore(Index);

function Projetos() {
  const [initialProjetos, setInitialProjetos] = useState([])
    const [projetos, setProjetos] = useState([])
    const [updateScreen, setUpdate] = useState(true)

    const getProjetos = async () => {
      const response = await api.get('/projetos');
      setInitialProjetos(response.data);
      setProjetos(response.data);
    };

    if (updateScreen) {
        getProjetos()
        setUpdate(false)
    }

    const handleChange = ({target}) => {
        if (!target.value) {
            setProjetos(initialProjetos)
            return;
        }
        const filterProjetos = projetos.filter((projetos) => 
        projetos.pr_nome.toLowerCase().includes(target.value.toLowerCase()))
        setProjetos(filterProjetos)
    }
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
          <ContProjetos>
            <CabecalhoProjetos>
                <h2>Todos os Projetos</h2>

                <ContMais>
                    <Search>
                        <input type="search" placeholder="Pesquise..." onChange={handleChange}></input>
                        <SearchIcon/>
                    </Search>
                </ContMais>
            </CabecalhoProjetos>

            <ContTabela>
                <ul> 
                    {projetos.map((projetos, index) => 
                    <CardProjeto key={projetos.pr_id}>
                        <p> {projetos.pr_nome} </p>
                        <a href={"projetos/" + projetos.pr_id}>{'Detalhes >'}</a>
                    </CardProjeto>)} 
                </ul>
            </ContTabela>
        </ContProjetos>
      </ColunaUm>

      <ColunaDois>
        <CardCalendar>
          <CardCriar
            titulo="Criar Projeto"
            descricao="Criar um novo projeto"
            button=
            {<PostProjetos update={getProjetos} />}
            
          />
           
           <Provider store={store}> 
            <Reminder/>
           </Provider> 
           <SalaVirtual/>
        </CardCalendar>
        
       
      </ColunaDois>
    </Container>
  );
}

export default Projetos;
