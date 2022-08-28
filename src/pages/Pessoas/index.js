import React, { useState } from "react";
import Detalhes from "./detalhes";
import Cards from "./cards";
import PostPessoas from "./modal";

import Container from "../../components/Container";
import { ColunaDois, ContFiltros } from "./styles";
import CardCriar from "../../components/CardCriar";
import SearchBar from "../../components/SearchBar";

import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import api from "../../api";

function Pessoas() {
  const [data, setData] = useState({nome: "Ninguem selecionado"});
  const [search, setSearch] = useState("")
  const [cargos, setCargos] = useState()
  const [filtros, setFiltros] = useState()

  const getCargos = () => {
    api
      .get('/cargos')
      .then((response) => {
        setCargos(response.data)
        let objFilter = {}
        response.data.forEach(c => objFilter[c.cargo] = true)
        setFiltros(objFilter)
      })
      .catch((error) => alert(error))
  }

  if (!cargos) getCargos()

  const childToParent = (childdata) => {
    setData(childdata);
  };

  function handleChange(e) {
    setSearch(e);
  }

  const changeFiltro = async (e) => {
    const { name, checked } = e.target;
    const newFilter = {
        ...filtros,
        [name]: checked,
    }
    setFiltros(newFilter)
  }

  return (
    <Container>
      <Detalhes dados={data}/>
      <ColunaDois>
        <CardCriar titulo="Adicionar Pessoa" descricao="Cadastre uma nova pessoa" button={<PostPessoas/>}/>
        <ContFiltros>
          <SearchBar placeholder="Pesquise Aqui..." handleChange={handleChange}/>
          { cargos &&
          <Dropdown style={{fontSize: "6px"}}>
            <Dropdown.Toggle style={{background: "transparent", color: "#333", border: "0"}}>
              Filtros
            </Dropdown.Toggle>
            <Dropdown.Menu style={{padding: "10px"}}>
              <Dropdown.Header>Filtrar pela Profissão</Dropdown.Header>
              { cargos.map((c, index) => 
                <Form.Check
                  key={index}
                  name={c.cargo}
                  label={c.cargo}
                  type="checkbox" 
                  checked={filtros[c.cargo]}
                  onChange={e => changeFiltro(e)}
                />
              )}
            </Dropdown.Menu>
          </Dropdown>
          }
        </ContFiltros>
        <Cards childToParent={childToParent} search={search} filtros={filtros}/>
      </ColunaDois>
    </Container>
  );
}
export default Pessoas;
