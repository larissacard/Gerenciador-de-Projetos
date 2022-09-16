import React, { useState } from "react";

import Container from "../../Components/Container";

import { 
  ColunaUm, 
  ColunaDois 
} from "./styles";

import SearchBar from "../../Components/SearchBar"
import CardCriar from "../../Components/CardCriar"
import PostTarefas from "./modal";
import Cards from "./cards";

function Tarefas() {
  const [search, setSearch] = useState("")
  
  function handleChange(e) {
    setSearch(e);
  }

  return (
    <Container>
      <ColunaUm>
        <h1>Tarefas</h1>
        <SearchBar placeholder="Pesquise uma tarefa aqui..." handleChange={handleChange}/>
        <Cards search={search}/>
      </ColunaUm>

      <ColunaDois>
        <CardCriar titulo="Criar Tarefa" descricao="Criar uma Nova Tarefa" button={<PostTarefas/>}/>
      </ColunaDois>
    </Container>
  );
}

export default Tarefas;