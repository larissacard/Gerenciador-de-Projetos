import React, { useState } from "react";
import Detalhes from "./detalhes";
import Cards from "./cards";
import PostPessoas from "./modal";

import Container from "../../components/Container";
import { ColunaDois, ContFiltros } from "./styles";
import CardCriar from "../../components/CardCriar";
import SearchBar from "../../components/SearchBar";

function Pessoas() {
  const [data, setData] = useState({nome: "Ninguem selecionado"});
  const [search, setSearch] = useState("")

  const childToParent = (childdata) => {
    setData(childdata);
  };

  function handleChange(e) {
    setSearch(e);
  }

  return (
    <Container>
      <Detalhes dados={data}/>
      <ColunaDois>
        <CardCriar titulo="Adicionar Pessoa" descricao="Cadastre uma nova pessoa" button={<PostPessoas/>}/>
        <ContFiltros>
          <SearchBar placeholder="Pesquise Aqui..." handleChange={handleChange}/>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Filtros</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="/pessoas">Ordem Alfabetica A-Z</a></li>
              <li><a className="dropdown-item" href="/pessoas">Mais Antigos</a></li>
              <li><a className="dropdown-item" href="/pessoas">Mais Recentes</a></li>
            </ul>
          </div>
        </ContFiltros>
        <Cards childToParent={childToParent} search={search}/>
      </ColunaDois>
    </Container>
  );
}
export default Pessoas;
