import React, { Component } from 'react';
import api from '../../../api';

import { CardAdicionar } from '../styles';
import { 
  Card, 
  AllCards, 
  FooterCard, 
  Name 
} from './styles';

import PostEquipes from '../modal';

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
      <div style={{overflowY:"scroll"}}>
        <AllCards>
        <CardAdicionar><PostEquipes /></CardAdicionar>

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
        </AllCards>
      </div>
    )
  }
}

export default ExibirEquipes;