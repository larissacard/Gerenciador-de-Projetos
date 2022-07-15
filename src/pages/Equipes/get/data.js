import React, { Component } from 'react';
import api from '../../../api';


class ExibirEquipes extends Component{
    state = {
      equipes: [],
    }
  
    async componentDidMount(){
     

      const response = await api.get('/equipes');
  
      this.setState({ equipes: response.data })
    }

  
    render() {
  
      const {equipes} = this.state;
  
      return(
        <div>
            {equipes.map(equipes => (
              <div key={equipes.eq_id}>
                <div>
                    <h6>{equipes.eq_nome}</h6>
                    <p style={{width:"96.5%"}}>{equipes.eq_descricao}</p>
                </div>
                <div>
                    <a href={"equipes/" + equipes.eq_id}>Detalhes</a>
                </div>
                </div> 
            ))}
        </div>
      )
    }
  }

  export default ExibirEquipes;