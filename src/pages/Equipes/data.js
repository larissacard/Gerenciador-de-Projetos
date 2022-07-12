import React, { Component } from 'react';
import api from '../../api'

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
        <div className="cont_table">
          <div>
            <table className="table">
              <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th></th>
                </tr>
              </thead>
              <tbody>
                {equipes.map(equipes => (
                  <tr key={quipes.eq_id}>
                    <td className='id_table col-1'>{equipes.eq_id}</td>
                    <td className='col-9'>{equipes.eq_nome}</td>
                    <td>
                    <a className='col-2' href={"equipes/"+equipes.eq_id}><button>Detalhar</button></a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </div>
      )
    }
  }

  export default ExibirEquipes;