import React, { Component } from 'react';
import api from '../../../api';
import { Card, Container, FooterCard, Name, Title } from './syle';


class ExibirEquipes extends Component {
  state = {
    equipes: [],
  }

  async componentDidMount() {


    const response = await api.get('/equipes');

    this.setState({ equipes: response.data })
  }


  render() {

    const { equipes } = this.state;

    return (
      <div>
        <Title>Equipes</Title>
        <Container>


          {equipes.map(equipes => (
            <Card key={equipes.eq_id}>
              <div>
                <Name>{equipes.eq_nome}</Name>
                <p style={{ width: "96.5%" }}>{equipes.eq_descricao}</p>
              </div>
              <FooterCard>
                <a href={"equipes/" + equipes.eq_id}>Inspecionar Equipes</a>
              </FooterCard>
            </Card>
          ))}
        </Container>
      </div>
    )
  }
}

export default ExibirEquipes;