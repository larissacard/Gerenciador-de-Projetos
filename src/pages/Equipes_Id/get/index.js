import React, { Component, useEffect, useReducer, useState } from 'react';
import api from '../../../api';
import { Title, Person, Icon, Name, Job, TotalTask, Ellipse, Container, SubTitle, Card, CardIcon, ColunaUm, ColunaDois, Pontos, BigTaskCard, CardTask, Tasks, Delete, Editar, SmallInfo, SmallIcon, SmallCont } from './style';
import { render } from '@testing-library/react';
import { Equipes } from '../../../styles/Icons';
import { Progress } from 'rsuite';
import { Deletar } from '../../Projetos_Id/styles';
import { useNavigate } from 'react-router-dom'
import { Ranking } from '../grafico';
import PutEquipes from '../put';
import App from '../grafico';
import RANKING from '../grafico';

const style = {
  width: 125,
  marginRight: 10,
};

function GetEquipe() {
  const [equipe, setEquipe] = useState()
  const path = window.location.pathname;
  let navigate = useNavigate()



  useEffect(() => {
     api.get(path)
      .then((response) => {
        setEquipe(response.data)
        updateScreen();
       })
       .catch((e) => {
         console.log(e)
       })
  }, [])

  const deletarEquipe = (eq_id) => {
    api.delete(path)
    setTimeout(() => navigate('/equipes'), 1500);
  };

  function updateScreen() {
    api.get(path)
    .then((response) => {
      setEquipe(response.data)
      updateScreen();
     })
     .catch((e) => {
       console.log(e)
     })
}

  // console.log(qtBack)

  const TotalJob = (props) => {
    var qtd = equipe.pessoas.filter(cargo => cargo.pe_cargo === `${props.funcao}`).length
    return (
      <>{qtd}</>
    )
  }

  function Calculo (status) {
    var result = 0
    var total = equipe.tarefas.total;

    if(equipe.tarefas !== null){
      if (status === `Concluidos`) {
        var concluidos = equipe.tarefas.Concluidas;
        result = Math.round(( concluidos* 100) / total)
        return (
          result
        )
      }
  
      else if (status === `Não Iniciado`) {
        var NaoIniciadas = equipe.tarefas.NaoIniciadas;
        result = Math.round((NaoIniciadas * 100) / total)
        return (
          result
        )
      }
  
      else if (status === `Em Andamento`) {
        var EmAndamento = equipe.tarefas.EmAndamento;
        result = Math.round((EmAndamento * 100) / total)
        return (
          result
        )
      }
  
      else if ( status === 'Em Teste') {
        var EmTeste = equipe.tarefas.EmTestes;
        result = Math.round((EmTeste * 100) / total)
        return (
          result
        )
      }

      else{
        return(
          result
        )
      }

      
    }
    else{
      return(
        <p>Sem Informações</p>
      )
    }
  }

  
  return (
    <>
      {equipe ?
        <>
          <ColunaUm>
            <div className='d-flex'>
              <Title>{equipe.eq_nome}</Title>
              <Editar>
                  <PutEquipes dados={equipe} /> 
              </Editar>
              <Delete onClick={deletarEquipe}>Deletar</Delete>
            </div>
            <SubTitle>Todos os membros</SubTitle>
            <SmallCont>
              
              {equipe.pessoas.map((e) =>
                <Person key={e.pe_id}>
                  <Ellipse>
                    <Icon>{e.pe_foto}</Icon>
                  </Ellipse>
                  <Name>{e.pe_nome}</Name>
                  <Job>{e.pe_cargo}</Job>

                  <TotalTask>{e.tarefas.qtd} tasks</TotalTask>
                </Person>
              )}
            </SmallCont>

            <SubTitle>Estrutura da Equipe</SubTitle>
            <div className='d-flex justify-content-between mt-3'>
                <Card>
                <CardIcon>
                  <img src="../../../assets/cod.svg" />
                </CardIcon>
                <Pontos>
                  <h6>
                    <TotalJob funcao={'BackEnd Pleno'} />

                  </h6>
                  BackEnd
                </Pontos>
              </Card>
              <Card>
                <CardIcon style={{backgroundColor: "#667EEA"}}>
                  <img src='../../../assets/pincel.svg' />
                </CardIcon>
                <Pontos>
                  <h6><TotalJob funcao={'FrontEnd Junior'} /></h6>
                  FrontEnd
                </Pontos>
              </Card>

              <Card>
                <CardIcon style={{backgroundColor: "#E391EA"}}>
                  <img src='../../../assets/sqa.svg' />
                </CardIcon>
                <Pontos>
                  <h6>
                    <TotalJob funcao={'SqA'} />
                  </h6>
                  SqA
                </Pontos>
              </Card>
            </div>
          </ColunaUm>

          <ColunaDois>
            <SubTitle>RANKING</SubTitle>
             <RANKING/>

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
                    <img src='../../../assets/check.svg' />
                  </SmallIcon>
                  <p>Total Tasks Concluidas: {equipe.tarefas.Concluidas}</p>
                </SmallInfo>

              </BigTaskCard>
              <div style={{ marginTop: "-30px" }}>
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
              </div>
            </Tasks>



          </ColunaDois>
        </>

        : <p>Sem Informações</p>}
    </>
  )

}

export default GetEquipe;