import React, { Component, useEffect, useState } from 'react';
import api from '../../../api';
import { Title, Person, Icon, Name, Job, TotalTask, Ellipse, Container, SubTitle, Card, CardIcon, ColunaUm, ColunaDois, Pontos, BigTaskCard, CardTask, Tasks } from './style';
import { render } from '@testing-library/react';
import { Equipes } from '../../../styles/Icons';



function GetEquipe() {
  const [equipe, setEquipe] = useState()
  const path = window.location.pathname;

  useEffect(() => {
    api.get(path)
      .then((response) => {
        setEquipe(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  // console.log(qtBack)

  const TotalJob = (props) => {
    var qtd = equipe.pessoas.filter(cargo => cargo.pe_cargo === `${props.funcao}`).length
    return (
      <>{qtd}</>
    )
  }

  // const TotalTask = () => {
  //   var qtdtask = equipe.tarefas.NaoIniciadas(task => task.tr)  
  // }
  return (
    <>
      {equipe ?
        <>
          <ColunaUm>
            <Title>{equipe.eq_nome}</Title>
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
                  <img src='../../../assets/check.svg' />
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
                <h6>Tarefas Completas</h6>
                {equipe.qtd_tarefas}
              </BigTaskCard>
              <div>
                <CardTask>
                  <h6>Tarefas Não Iniciadas</h6>
                </CardTask>
                <CardTask>
                  <h6>Tarefas em Desenvolvimento</h6>
                </CardTask>
                <CardTask>
                  <h6>Tarefas em Teste</h6>
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