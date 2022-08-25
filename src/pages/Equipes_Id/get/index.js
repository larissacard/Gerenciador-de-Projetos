import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { Progress } from 'rsuite';
import PutEquipes from '../put';
import RANKING from '../grafico';
import AlertDeleteDialog from '../../../components/CardConfirmDelete';

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
    Editar,
    SmallInfo,
    SmallIcon,
    SmallCont,
    NoResults,
    TitleNoResults
} from './style';

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
        if(err.response.status === 401) {
            alert("Faça o Login para visualizar a página")
            window.location.href = '/login'
        }
        else alert(err.message)
    })
  })

  function updateScreen() {
    api.get(path)
    .then((response) => {
      setEquipe(response.data)
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
                  <PutEquipes dados={equipe} update={updateScreen} /> 
              </Editar>
              <div style={{marginTop: "31px"}}>
                <AlertDeleteDialog
                  path = '/equipes'
                  alert = 'Equipe excluida com sucesso!'
                  titulo='Excluir Equipe Permanentemente?'
                  descricao='Se você excluir esta equipe, não poderá recuperá-lo. Deseja excluí-lo?' />

              </div>
            </div>
            <SubTitle>Todos os membros</SubTitle>
            <SmallCont>
              
              {equipe.pessoas.length > 0 ? (
                equipe.pessoas.map((e) =>
                  <Person key={e.pe_id}>
                    <Ellipse>
                      <Icon src={e.pe_foto}/>
                    </Ellipse>
                    <Name>{e.pe_nome}</Name>
                    <Job>{e.pe_cargo}</Job>
  
                    <TotalTask>{e.tarefas.qtd} tasks</TotalTask>
                  </Person>
                )

                ) : (
                <>
                <NoResults/>
                <TitleNoResults>Não há membros nessa equipe</TitleNoResults>
                </>
              )}
            </SmallCont>

            <SubTitle>Estrutura da Equipe</SubTitle>
            <div className='d-flex justify-content-between mt-3'>
                <Card>
                <CardIcon>
                  <img src="../../../assets/cod.svg" alt="cod.svg"/>
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
                  <img src='../../../assets/pincel.svg' alt="pincel icon"/>
                </CardIcon>
                <Pontos>
                  <h6><TotalJob funcao={'FrontEnd Junior'} /></h6>
                  FrontEnd
                </Pontos>
              </Card>

              <Card>
                <CardIcon style={{backgroundColor: "#E391EA"}}>
                  <img src='../../../assets/sqa.svg' alt="sqa icon"/>
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
                    <img src='../../../assets/check.svg' alt="check icon"/>
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

        : 
        <>
        <p>Sem Informações</p>
        </>
        }
    </>
  )

}

export default GetEquipe;