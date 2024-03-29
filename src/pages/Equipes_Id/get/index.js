import React, { useEffect, useState } from 'react';
import api from '../../../api';

import { Progress } from 'rsuite';
import AlertDeleteDialog from '../../../Components/CardConfirmDelete';
import check from '../../../assets/check.svg'
import cod from '../../../assets/cod.svg'
import pincel from '../../../assets/pincel.svg'
import sqa from '../../../assets/sqa.svg'

import { 
  Title, 
  Person, 
  Icon, 
  Name, 
  Job,
  TotalTask,
  Ellipse, 
  SubTitle, 
  Card, 
  CardIcon, 
  ColunaUm, 
  ColunaDois, 
  Pontos, 
  BigTaskCard, 
  CardTask, 
  Tasks, 
  SmallInfo, 
  SmallIcon, 
  SmallCont, 
  NoResults, 
  TitleNoResults,
  Imagem, 
  OrganizeTasks, 
  OrganizeTeam, 
  EmptyState, 
  TeamInfo 
} from './styles';

import PutEquipes from '../put';
import RANKING from '../grafico';
import NaoAutorizado from '../../../Components/NaoAutorizado';

const style = {
  width: 125,
  marginRight: 10,
};

function GetEquipe() {
  const [equipe, setEquipe] = useState()
  const path = window.location.pathname;
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  useEffect(() => {
    api
      .get(path)
      .then((response) => {
        setEquipe(response.data.data)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsAlertVisible(true)
          setTimeout(() => window.location.href = "/login", 2000)
        } else console.log(err.message);
      });
  }, [])

  function updateScreen() {
    api
      .get(path)
      .then((response) => {
        setEquipe(response.data.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const TotalJob = (props) => {
    return equipe.pessoas.filter(cargo => cargo.cargo === `${props.funcao}`).length
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
      { equipe ?
      <>
      {equipe?.pessoas.length > 0 ?
        <>
          <ColunaUm>
            <div className='d-flex mt-2 ml-4' >
              {equipe.fotoPadrao 
              ? <Imagem>
                  <img src={equipe.fotoPadrao.link} alt="equipe" />
                </Imagem>
              : <Imagem>
                  <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" alt="equipe" />
                </Imagem>
              }
              <div style={{ marginLeft: '20px', maxWidth: '350px', overflow: 'hidden' }}>
                <Title>{equipe.nome}</Title>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <PutEquipes dados={equipe} update={updateScreen} />
                  
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
                  <Person key={e.id}>
                    <Ellipse>
                      <Icon src={e.foto} />
                    </Ellipse>
                    <Name>{e.nome}</Name>
                    <Job>{e.cargo}</Job>

                    <TotalTask>{e.tarefas.length} tasks</TotalTask>
                  </Person>)}
            </SmallCont>

            <SubTitle>Estrutura da Equipe</SubTitle>
            <OrganizeTeam>
              <Card>
                <CardIcon>
                  <img src={cod} alt="cod"/>
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
                  <img src={pincel} alt="pincel icon"/>
                </CardIcon>
                <Pontos>
                  <h4><TotalJob funcao={'FrontEnd Junior'} /></h4>
                  FrontEnd
                </Pontos>
              </Card>

              <Card>
                <CardIcon style={{ backgroundColor: "#E391EA" }}>
                  <img src={sqa} alt="sqa icon"/>
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
                <div style={style}>
                  <Progress.Circle percent={Calculo("Concluidos")} strokeColor="#667EEA" strokeWidth="12" trailColor="white" trailWidth="10" />
                </div>
                <SmallInfo>
                  <SmallIcon>
                    <img src={check} alt="check icon"/>
                  </SmallIcon>
                  <p>Total Tasks Concluidas: {equipe.tarefas.Concluidas}</p>
                </SmallInfo>

              </BigTaskCard>
              <OrganizeTasks>
                <CardTask>
                  <h5>Tarefas Não Iniciadas</h5>
                  <h6>{equipe.tarefas.NaoIniciadas} <span>Tasks</span></h6>
                  <div style={{marginLeft:"-10px"}}>
                    <Progress.Line percent={Calculo("Não Iniciado")} strokeColor="#667EEA" trailColor="white" />
                  </div>
                </CardTask>
                <CardTask>
                  <h5>Tarefas em Desenvolvimento</h5>
                  <h6>{equipe.tarefas.EmAndamento} <span>Tasks</span></h6>
                  <div style={{marginLeft:"-10px"}}>
                    <Progress.Line percent={Calculo("Em Andamento")} strokeColor="#764BA2" trailColor="white" />
                  </div>
                </CardTask>
                <CardTask>
                  <h5>Tarefas em Teste</h5>
                  <h6>{equipe.tarefas.EmTestes} <span>Tasks</span></h6>
                  <div style={{marginLeft:"-10px"}}>
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
          {equipe.fotoPadrao 
              ? <Imagem><img src={equipe.fotoPadrao.link} alt="equipe" /></Imagem>
              : <Imagem><img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" alt="equipe" /></Imagem>
              }
              <div style={{ marginLeft: '20px', maxWidth: '350px', overflow: 'hidden' }}>
                <Title>{equipe?.nome}</Title>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <PutEquipes dados={equipe} update={updateScreen} />
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
      : isAlertVisible && <NaoAutorizado />}
    </>
  )
}

export default GetEquipe;