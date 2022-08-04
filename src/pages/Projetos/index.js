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
    const [projetos, setProjetos] = useState([])
    const [updateScreen, setUpdate] = useState(true)
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState();

    const getProjetos = async () => {
      const response = await api.get('/projetos');
      setProjetos(response.data);
      setFoundUsers(response.data);
    };

    
    const filter = (e) => {
      const keyword = e.target.value;
      if (keyword !== '') {
        const results = projetos.filter((projeto) => {
          return projeto.pr_nome.toLowerCase().startsWith(keyword.toLowerCase());
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(projetos);
      }
  
      setName(keyword);
    };

    if (updateScreen) {
        getProjetos()
        setUpdate(false)
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
                        <input type="search" placeholder="Pesquise..." onChange={filter} value={name}></input>
                        <SearchIcon/>
                    </Search>
                </ContMais>
            </CabecalhoProjetos>

            <ContTabela>
                <ul> 
                  {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((projeto) => (
                    <CardProjeto key={projeto.pr_id}>
                        <p> {projeto.pr_nome} </p>
                        <a href={"projetos/" + projeto.pr_id}>{'Detalhes >'}</a>
                    </CardProjeto> 
                    ))
                    ) : (
                      <h4>Projeto não encontrado! ;-;</h4>
                    )}
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
