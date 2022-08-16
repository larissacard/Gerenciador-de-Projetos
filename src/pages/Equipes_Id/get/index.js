import React, { Component, useEffect, useState } from 'react';
import api from '../../../api';
import { Title, Person, Icon, Name, Job, TotalTask, Ellipse, Container, SubTitle, Card, CardIcon, ColunaUm, ColunaDois, Pontos, BigTaskCard, CardTask, Tasks, Delete, Edit, SmallInfo, SmallIcon } from './style';
import { render } from '@testing-library/react';
import { Equipes } from '../../../styles/Icons';
import { Progress } from 'rsuite';
import { Deletar } from '../../Projetos_Id/styles';
import { useNavigate } from 'react-router-dom'

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
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const deletarEquipe = (eq_id) => {
    api.delete(path)
    setTimeout(() => navigate('/equipes'), 1500);
  };

  // console.log(qtBack)

  const TotalJob = (props) => {
    var qtd = equipe.pessoas.filter(cargo => cargo.pe_cargo === `${props.funcao}`).length
    return (
      <>{qtd}</>
    )
  }

  const Calculo = (props) => {
    var result = 0
    if (props.status === `Concluidos`) {
      result = Math.round((props.ConcluidosT * 100) / props.totalT)
      return (
        result
      )
    }

    else if (props.status === `Não Iniciado`) {
      result = Math.round((props.NaoIniciadas * 100) / props.totalT)
      return (
        result
      )
    }

    else if (props.status === `Em Andamento`) {
      result = Math.round((props.EmAndamento * 100) / props.totalT)
      return (
        result
      )
    }

    else {
      result = Math.round((props.EmTeste * 100) / props.totalT)
      return (
        result
      )
    }
  }

  const TKN = 0
  const TKA = 0
  // <Calculo status="Em Andamento" EmAndamento={equipe.tarefas.EmAndamento} totalT={equipe.tarefas.total}/>
  const TKT = 0
  const TKC = 0



  return (
    <>
      {equipe ?
        <>
          <ColunaUm>
            <div className='d-flex'>
              <Title>{equipe.eq_nome}</Title>
              <Edit>Editar</Edit>
              <Delete onClick={deletarEquipe}>Deletar</Delete>
            </div>
            <SubTitle>Todos os membros</SubTitle>
            {equipe.pessoas.map((e) =>
              <Person key={e.pe_id}>
                <Ellipse>
                  <Icon>{e.pe_foto}</Icon>
                </Ellipse>
                <Name>{e.pe_nome}</Name>
                <Job>{e.pe_cargo}</Job>

                <TotalTask>{e.tarefas.qtd}</TotalTask>
              </Person>
            )}

            <SubTitle>Estrutura da Equipe</SubTitle>
            <div className='d-flex justify-content-between'>
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
                <CardIcon>
                  <img src='../../../assets/pincel.svg' />
                </CardIcon>
                <Pontos>
                  <h6><TotalJob funcao={'FrontEnd Junior'} /></h6>
                  FrontEnd
                </Pontos>
              </Card>

              <Card>
                <CardIcon>
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
            <p>grafico</p>
            <p></p>

            <SubTitle>Tarefas da Equipe</SubTitle>

            <Tasks>
              <BigTaskCard>
                <h5>Tarefas Completas</h5>
                {/* <h6>{equipe.tarefas.Concluidas}</h6>
                <p>Tasks</p> */}
                <div style={style}>
                  <Progress.Circle percent={<Calculo status="Concluidos" ConcluidosT={equipe.tarefas.Concluidas} totalT={equipe.tarefas.total} />} strokeColor="#667EEA" strokeWidth="12" trailColor="white" trailWidth="10" />
                </div>
                <SmallInfo>
                  <SmallIcon>
                    <img src='../../../assets/check.svg' />
                  </SmallIcon>
                  <p>Tarefas Completas: {equipe.tarefas.Concluidas}</p>
                </SmallInfo>

              </BigTaskCard>
              <div style={{ marginTop: "-30px" }}>
                <CardTask>
                  <h5>Tarefas Não Iniciadas</h5>
                  <h6>{equipe.tarefas.NaoIniciadas}</h6>
                  <p>Tasks</p>
                  <div>
                    <Progress.Line percent={<Calculo status="Não Iniciado" NaoIniciadas={equipe.tarefas.NaoIniciadas} totalT={equipe.tarefas.total} />} strokeColor="#667EEA" trailColor="white" />
                  </div>
                </CardTask>
                <CardTask>
                  <h5>Tarefas em Desenvolvimento</h5>
                  <h6>{equipe.tarefas.EmAndamento}</h6>
                  <p>Tasks</p>
                  <div>
                    <Progress.Line percent={<Calculo status="Em Andamento" EmAndamento={equipe.tarefas.EmAndamento} totalT={equipe.tarefas.total} />} strokeColor="#764BA2" trailColor="white" />
                  </div>
                </CardTask>
                <CardTask>
                  <h5>Tarefas em Teste</h5>
                  <h6>{equipe.tarefas.EmTestes}</h6>
                  <p>Tasks</p>
                  <div>
                    <Progress.Line percent={<Calculo EmTeste={equipe.tarefas.EmTestes} totalT={equipe.tarefas.total} />} strokeColor="#E391EA" trailColor="white" />
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