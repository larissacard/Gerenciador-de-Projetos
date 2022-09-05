import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { Title, Person, Icon, Name, Job, TotalTask, Ellipse, SubTitle, Card, CardIcon, ColunaUm, ColunaDois, Pontos, BigTaskCard, CardTask, Tasks, Editar, SmallInfo, SmallIcon, SmallCont, NoResults, TitleNoResults, Imagem, OrganizeTasks, OrganizeTeam, EmptyState, TeamInfo } from './style';
import { Progress } from 'rsuite';
import PutEquipes from '../put';
import RANKING from '../grafico';
import AlertDeleteDialog from '../../../Components/CardConfirmDelete';

// import { render } from '@testing-library/react';
// import { Equipes } from '../../../styles/Icons';
// import { Deletar } from '../../Projetos_Id/styles';
// import { useNavigate } from 'react-router-dom'
// import { Ranking } from '../grafico';
// import App from '../grafico';
// import { Cont } from '../../../components/Container/styles';

const style = {
  width: 125,
  marginRight: 10,
};

function GetEquipe() {
  const [equipe, setEquipe] = useState()
  const path = window.location.pathname;

  useEffect(() => {
    api.get(path)
      .then((response) => {
        setEquipe(response.data)
      })
      .catch(err => {
        if (err.response.status === 401) window.location.href = '/login'
        else alert(err.message)
      })
  }, [])

  function updateScreen() {
    api.get(path)
      .then((response) => {
        setEquipe(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const TotalJob = (props) => {
    return equipe.pessoas.filter(cargo => cargo.pe_cargo === `${props.funcao}`).length
  }

  function Calculo(status) {
    let desejado = 0

    if (equipe.tarefas) {
      if (status === `Concluidos`) desejado = equipe.tarefas.Concluidas;
      else if (status === `Não Iniciado`) desejado = equipe.tarefas.NaoIniciadas;
      else if (status === `Em Andamento`) desejado = equipe.tarefas.EmAndamento;
      else if (status === 'Em Teste') desejado = equipe.tarefas.EmTestes;

      if (desejado === 0) return 0 
      return Math.round((desejado * 100) / equipe.tarefas.total)
    }
    else return <p>Sem Informações</p>
  }


  return (
    <>
      {equipe?.pessoas.length > 0 ?
        <>
          <ColunaUm>
            <div className='d-flex mt-2 ml-4' >
              <Imagem><img src={equipe.eq_foto} alt="equipe" /></Imagem>
              <div style={{ marginLeft: '20px', maxWidth: '350px', overflow: 'hidden' }}>
                <Title>{equipe.eq_nome}</Title>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Editar>
                    <PutEquipes dados={equipe} update={updateScreen} />
                  </Editar>
                  <AlertDeleteDialog
                    pathFinal='/equipes'
                    path={window.location.pathname}
                    alert='Equipe excluida com sucesso!'
                    titulo='Excluir Equipe Permanentemente?'
                    descricao='Se você excluir esta equipe, não poderá recuperá-lo. Deseja excluí-lo?'
                  />

                </div>
              </div>
            </div>
            <SubTitle>Todos os membros</SubTitle>
            <SmallCont>
                {equipe.pessoas.map((e) =>
                  <Person key={e.pe_id}>
                    <Ellipse>
                      <Icon src={e.pe_foto} />
                    </Ellipse>
                    <Name>{e.pe_nome}</Name>
                    <Job>{e.pe_cargo}</Job>

                    <TotalTask>{e.tarefas.qtd} tasks</TotalTask>
                  </Person>)}
            </SmallCont>

            <SubTitle>Estrutura da Equipe</SubTitle>
            <OrganizeTeam>
              <Card>
                <CardIcon>
                  <img src="../../../assets/cod.svg" alt="cod"/>
                </CardIcon>
                <Pontos>
                  <h4>
                    <TotalJob funcao={'BackEnd Pleno'} />
                  </h4>
                  BackEnd
                </Pontos>
              </Card>
              <Card>
                <CardIcon style={{ backgroundColor: "#667EEA" }}>
                  <img src='../../../assets/pincel.svg' alt="pincel icon"/>
                </CardIcon>
                <Pontos>
                  <h4><TotalJob funcao={'FrontEnd Junior'} /></h4>
                  FrontEnd
                </Pontos>
              </Card>

              <Card>
                <CardIcon style={{ backgroundColor: "#E391EA" }}>
                  <img src='../../../assets/sqa.svg' alt="sqa icon"/>
                </CardIcon>
                <Pontos>
                  <h4>
                    <TotalJob funcao={'SqA'} />
                  </h4>
                  SqA
                </Pontos>
              </Card>
            </OrganizeTeam>
          </ColunaUm>

          <ColunaDois>
            <SubTitle>RANKING</SubTitle>
            <RANKING />

            <SubTitle>Tarefas da Equipe</SubTitle>
            <Tasks>
              <BigTaskCard>
                <h5>Tarefas Completas</h5>
                {/* <h6>{equipe.tarefas.Concluidas}</h6>
                <p>Tasks</p> */}
                <div style={style}>
                  <Progress.Circle percent={Calculo("Concluidos")} strokeColor="#667EEA" strokeWidth="12" trailColor="white" trailWidth="10" />
                </div>
                <SmallInfo>
                  <SmallIcon>
                    <img src='../../../assets/check.svg' alt="check icon"/>
                  </SmallIcon>
                  <p>Total Tasks Concluidas: {equipe.tarefas.Concluidas}</p>
                </SmallInfo>

              </BigTaskCard>
              <OrganizeTasks>
                <CardTask>
                  <h5>Tarefas Não Iniciadas</h5>
                  <h6>{equipe.tarefas.NaoIniciadas}</h6>
                  <p>Tasks</p>
                  <div>
                    <Progress.Line percent={Calculo("Não Iniciado")} strokeColor="#667EEA" trailColor="white" />
                  </div>
                </CardTask>
                <CardTask>
                  <h5>Tarefas em Desenvolvimento</h5>
                  <h6>{equipe.tarefas.EmAndamento}</h6>
                  <p>Tasks</p>
                  <div>
                    <Progress.Line percent={Calculo("Em Andamento")} strokeColor="#764BA2" trailColor="white" />
                  </div>
                </CardTask>
                <CardTask>
                  <h5>Tarefas em Teste</h5>
                  <h6>{equipe.tarefas.EmTestes}</h6>
                  <p>Tasks</p>
                  <div>
                    <Progress.Line percent={Calculo("Em Teste")} strokeColor="#E391EA" trailColor="white" />
                  </div>
                </CardTask>
              </OrganizeTasks>
            </Tasks>
          </ColunaDois>
        </>

        : equipe &&
        <TeamInfo>
          <div className='d-flex mt-2 ml-4' >
              <Imagem><img src={equipe?.eq_foto} alt="equipe" /></Imagem>
              <div style={{ marginLeft: '20px', maxWidth: '350px', overflow: 'hidden' }}>
                <Title>{equipe?.eq_nome}</Title>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Editar>
                    <PutEquipes dados={equipe} update={updateScreen} />
                  </Editar>
                  <AlertDeleteDialog
                    pathFinal='/equipes'
                    path={window.location.pathname}
                    alert='Equipe excluida com sucesso!'
                    titulo='Excluir Equipe Permanentemente?'
                    descricao='Se você excluir esta equipe, não poderá recuperá-lo. Deseja excluí-lo?'
                  />
                </div>
              </div>
            </div>
            <EmptyState>  
                <NoResults />
                <TitleNoResults>Não há membros nessa equipe</TitleNoResults>
            </EmptyState>
          
        </TeamInfo>
      }
    </>
  )

}

export default GetEquipe;