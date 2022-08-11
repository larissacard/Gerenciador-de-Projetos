import React, { Component } from 'react';
import api from '../../../api';



class GetEquipe extends Component {
  state = {
    equipe: [],
  }

  async componentDidMount() {

    const path = window.location.pathname;
    const response = await api.get(path);
    console.log(path)

    this.setState({ equipe: response.data })
    
  }


  render() {
    const { equipe } = this.state;
    console.log(equipe)

    return (
      <div style={{overflowY:"scroll"}}>
        <div>

          {equipe.map(equipe => (
            <div key={equipe.eq_id}>
              <div>
                <div>{equipe.eq_nome}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default GetEquipe;