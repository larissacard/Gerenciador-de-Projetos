import React, { Component, useEffect, useState } from 'react';
import api from '../../../api';
import { Title, Person, Icon, Name, Job, TotalTask, Ellipse, Container, SubTitle } from './style';
import { ColunaUm } from '../../Projetos/styles';
import { render } from '@testing-library/react';
import { Equipes } from '../../../styles/Icons';


function GetEquipe() {
  const [equipe, setEquipe] = useState()
  const path = window.location.pathname;

  useEffect(() => {
    api.get(path)
      .then((response) => {
        setEquipe(response.data)
        console.log(response.data)

      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <>
    {equipe ?
    <Container>
      <Title>{equipe.eq_nome}</Title>
      <SubTitle>Todos os membros</SubTitle>
      {equipe.pessoas.map((e) => 
        <Person key={e.pe_id}>
          <Ellipse>
            <Icon></Icon>
          </Ellipse>
          <Name>{e.pe_nome}</Name>
          <Job>{e.pe_cargo}</Job>
          <TotalTask>a</TotalTask>
        </Person>
      )} 

      <SubTitle>Pontos Fortes da Equipe</SubTitle>
    </Container>

    : <p>Sem Informações</p>}
    </>
  )

}

export default GetEquipe;









// export default class GetEquipe extends Component {
//   state = {
//     equipe: [],
//   }

//   async componentDidMount() {
//     const path = window.location.pathname;
//     const response = await api.get(path);

//     console.log(response);

//     this.setState({ equipe: response.data })

//   }11

//   render() {
//     const { equipe } = this.state;

//     return (
//       <ColunaUm>
//         <div key={equipe.eq_id}>
//           <Title>{equipe.eq_nome}</Title>
//           {equipe.pessoas.map(p => (
//             <Person key={p.pe_id}>
//               <Ellipse>
//                 <Icon>{p.pe_foto}</Icon>
//               </Ellipse>
//               <Name>{p.pe_nome}</Name>
//               <Job>{p.pe_cargo}</Job>
//             </Person>
//           ))}



//         </div>
//       </ColunaUm>
//     )
//   }
// }