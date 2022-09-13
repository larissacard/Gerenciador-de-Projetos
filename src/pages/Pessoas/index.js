import React, { useState } from 'react';
import api from '../../api';

import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Container from '../../Components/Container';

import { 
  ColunaDois, 
  ContFiltros 
} from './styles';

import Detalhes from './Componentes/detalhes';
import Cards from './Componentes/cards';
import PostPessoas from './Componentes/modal';
import CardCriar from '../../Components/CardCriar';
import SearchBar from '../../Components/SearchBar';

function Pessoas() {
  const [data, setData] = useState({nome: 'Ninguem selecionado'});
  const [search, setSearch] = useState('')
  const [cargos, setCargos] = useState()
  const [filtros, setFiltros] = useState()
  const [pessoas, setPessoas] = useState()

  const getCargos = () => {
    api
      .get('/pessoas/cargos')
      .then((response) => {
        setCargos(response.data.data)
        let objFilter = {}
        response.data.data.forEach(c => objFilter[c.cargo] = true)
        setFiltros(objFilter)
      })
      .catch((error) => console.log(error))
  }
  if (!cargos) getCargos()

  const getPessoas = () => {
    api
      .get("/pessoas")
      .then(response => setPessoas(response.data.data))
      .catch(err => console.log(err))
  }
  if (!pessoas) getPessoas()

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
    pessoas &&
    <Container>
      <Detalhes dados={data}/>
      <ColunaDois>
        <CardCriar titulo='Adicionar Pessoa' descricao='Cadastre uma nova pessoa' button={<PostPessoas update={getPessoas}/>}/>
        <ContFiltros>
          <SearchBar placeholder='Pesquise Aqui...' handleChange={handleChange}/>
          { cargos &&
          <Dropdown style={{fontSize: '6px'}}>
            <Dropdown.Toggle style={{background: 'transparent', color: '#333', border: '0'}}>
              Filtros
            </Dropdown.Toggle>
            <Dropdown.Menu style={{padding: '10px'}}>
              <Dropdown.Header>Filtrar pela Profissão</Dropdown.Header>
              { cargos.map((c, index) => 
                <Form.Check
                  key={index}
                  name={c.cargo}
                  label={c.cargo}
                  type='checkbox' 
                  checked={filtros[c.cargo]}
                  onChange={e => changeFiltro(e)}
                />
              )}
            </Dropdown.Menu>
          </Dropdown>
          }
        </ContFiltros>
        <Cards childToParent={childToParent} search={search} filtros={filtros} pessoas={pessoas} setPessoas={getPessoas}/>
      </ColunaDois>
    </Container>
  );
}
export default Pessoas;