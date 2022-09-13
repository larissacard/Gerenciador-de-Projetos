import React, {useState} from 'react';
import api from '../../api';

import Container from "../../Components/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import {
  ContainerAlert,
  ColunaUm,
  ContGrafico,
  TopGrafico,
  ContTabela,
  ColunaDois,
  ContProjetos,
  CabecalhoProjetos,
  Search,
  SearchIcon,
  CardProjeto,
  ContMais
} from './styles';

import Grafico from './Componentes/grafico';
import CardCriar from '../../Components/CardCriar';
import SalaVirtual from './Componentes/CardSalaVirtual';
import PostProjetos from './Componentes/modal';
import Reminders from './Componentes/Reminder';
import SearchEmptyState from '../../Components/EmptyState';

function Projetos () {
  const [updateScreen, setUpdate] = useState(true)
  const [projetos, setProjetos] = useState()
  const [name, setName] = useState('');
  const [foundProjetos, setFoundProjetos] = useState();
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  const getProjetos = async () => {
    api
      .get('/projetos')
      .then(response => {
        setProjetos(response.data.data);
        setFoundProjetos(response.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsAlertVisible(true)
          setTimeout(() => window.location.href = "/login", 2000)
        } else console.log(err.message);
      });
  };
  
  const filter = (e, filtrosAtualizados) => {
    let keyword = ""
    if (e) keyword = e.target.value;
    if (keyword !== '') {
      const results = projetos.filter((projeto) => {
        return projeto.nome.toLowerCase().includes(keyword.toLowerCase());
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
          valorAntigo.filter(pr => pr.status !== "Não Iniciado"));
          break;
        case "EmAndamento": setFoundProjetos(valorAntigo => 
          valorAntigo.filter(pr => pr.status !== "Em Andamento"));
          break;
        case "Concluidos": setFoundProjetos(valorAntigo => 
          valorAntigo.filter(pr => pr.status !== "Concluido"));
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
    <> { projetos ?
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

              <Dropdown style={{fontSize: "6px", width: '25%', marginLeft: '8px'}}>
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
                <input data-cy="Search-Projetos" type='search' placeholder='Pesquise...' onChange={filter} value={name}></input>
                <SearchIcon/>
              </Search>
            </ContMais>
          </CabecalhoProjetos>

          <ContTabela>
            <ul> 
              {foundProjetos && foundProjetos.length > 0 ? (
                foundProjetos.map((projeto) => (
                  <CardProjeto key={projeto.id}>
                  <p> {projeto.nome} </p>
                  <a href={'projetos/' + projeto.id}>{'Detalhes >'}</a>
                </CardProjeto> 
                ))
                ) :
                <SearchEmptyState titulo='Projeto não Encontrado! ;-; '/>
              }
            </ul>
          </ContTabela>
        </ContProjetos>
      </ColunaUm>

      <ColunaDois>
          <CardCriar
            titulo='Criar Projeto'
            descricao='Criar um novo projeto'
            button={<PostProjetos update={getProjetos}/>}
          />
           <Reminders/>
           <SalaVirtual/>
      </ColunaDois>
    </Container>
    : isAlertVisible && 
      <ContainerAlert style={{display: isAlertVisible ? "block" : "none"}}>
        <div/>
        <h5>Você não tem permissão para acessar isso!</h5>
        <h5>Faça Login para visualizar a página.</h5>
      </ContainerAlert>
    }
    </>
  );
}

export default Projetos;