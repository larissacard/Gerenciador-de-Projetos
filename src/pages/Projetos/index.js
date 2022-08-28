import React, {useState} from 'react';
import api from '../../api';
import Grafico from './grafico';
import CardCriar from '../../components/CardCriar';
import SalaVirtual from '../../components/CardSalaVirtual';
import PostProjetos from './modal';
import Alert from '@mui/material/Alert';
import Container from "../../components/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import {
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
} from './styles';
import Reminders from './Reminder';

function Projetos() {
  const [updateScreen, setUpdate] = useState(true)
  const [projetos, setProjetos] = useState([])
  const [name, setName] = useState('');
  const [foundProjetos, setFoundProjetos] = useState();

  const getProjetos = async () => {
    api
      .get('/projetos')
      .then(response => {
        setProjetos(response.data);
        setFoundProjetos(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Faça o Login para visualizar a página");
          window.location.href = "/login";
        } else alert(err.message);
      });
  };
  
  const filter = (e, filtrosAtualizados) => {
    let keyword = ""
    if (e) keyword = e.target.value;
    if (keyword !== '') {
      const results = projetos.filter((projeto) => {
        return projeto.pr_nome.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundProjetos(results);
    } else {
      setFoundProjetos(projetos);
    }
    setName(keyword);

    const filtrosUsados = filtrosAtualizados ? filtrosAtualizados : filtros
    const filt = Object.entries(filtrosUsados).filter(filtro => !filtro[1])
    filt.forEach(f => {
      switch (f[0]) {
        case "NaoIniciados": setFoundProjetos(valorAntigo =>
          valorAntigo.filter(pr => pr.pr_status !== "Não Iniciado"));
          break;
        case "EmAndamento": setFoundProjetos(valorAntigo => 
          valorAntigo.filter(pr => pr.pr_status !== "Em Andamento"));
          break;
        case "Concluidos": setFoundProjetos(valorAntigo => 
          valorAntigo.filter(pr => pr.pr_status !== "Concluido"));
          break;
        default: break;
      }
    })
  };

  if (updateScreen) {
    getProjetos()
    setUpdate(false)
  }

  const [filtros, setFiltros] = useState({
    NaoIniciados: true,
    EmAndamento: true,
    Concluidos: true
  })

  const changeFiltro = async (e) => {
    const { name, checked } = e.target;
    const newFilter = {
        ...filtros,
        [name]: checked,
    }
    setFiltros(newFilter)
    filter(false, newFilter)
  }

  return (
    <Container>
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

              <Dropdown style={{fontSize: "6px"}}>
                <Dropdown.Toggle style={{background: "transparent", color: "#333", border: "0"}}>
                  Filtros
                </Dropdown.Toggle>
                <Dropdown.Menu style={{padding: "10px"}}>
                <Dropdown.Header>Filtrar pelo Status</Dropdown.Header>
                  <Form.Check 
                    name="NaoIniciados"
                    label="Não Iniciados" 
                    type="checkbox" 
                    checked={filtros.NaoIniciados}
                    onChange={e => changeFiltro(e)}
                  />
                  <Form.Check 
                    name="EmAndamento"
                    label="Em Andamento" 
                    type="checkbox" 
                    checked={filtros.EmAndamento}
                    onChange={e => changeFiltro(e)}
                  />
                  <Form.Check 
                    name="Concluidos"
                    label="Concluidos" 
                    type="checkbox" 
                    checked={filtros.Concluidos}
                    onChange={e => changeFiltro(e)}
                  />
                </Dropdown.Menu>
              </Dropdown>
              
              <Search>
                <input type='search' placeholder='Pesquise...' onChange={filter} value={name}></input>
                <SearchIcon/>
              </Search>
            </ContMais>
          </CabecalhoProjetos>

          <ContTabela>
            <ul> 
              {foundProjetos && foundProjetos.length > 0 ? (
                foundProjetos.map((projeto) => (
                <CardProjeto key={projeto.pr_id}>
                  <p> {projeto.pr_nome} </p>
                  <a href={'projetos/' + projeto.pr_id}>{'Detalhes >'}</a>
                </CardProjeto> 
                ))
                ) : (
                  <Alert variant='outlined' severity='warning'>
                    Projeto não encontrado!
                  </Alert>
                )}
            </ul>
          </ContTabela>
        </ContProjetos>
      </ColunaUm>

      <ColunaDois>
        <CardCalendar>
          <CardCriar
            titulo='Criar Projeto'
            descricao='Criar um novo projeto'
            button={<PostProjetos update={getProjetos}/>}
          />
           <Reminders/>
           <SalaVirtual/>
        </CardCalendar>
      </ColunaDois>
    </Container>
  );
}

export default Projetos;