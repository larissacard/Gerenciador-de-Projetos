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
                {equipes.map(e => (
                  <tr key={e.id}>
                    <td className='id_table col-1'>{e.id}</td>
                    <td className='col-9'>{e.nome}</td>
                    <td>
                    <a className='col-2' href={"equipes/"+e.id}><button>Detalhar</button></a>
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