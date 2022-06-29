import React, { Component } from 'react';
import api from '../../api'

class ExibirPessoas extends Component{
    state = {
      pessoas: [],
    }
  
    async componentDidMount(){
      const response = await api.get('/pessoas');
  
      this.setState({ pessoas: response.data })
    }
  
    render() {
  
      const {pessoas} = this.state;
  
      return(
        <div className="cont_table overflow-scroll">
          <div>
            <table className="table">
              <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Profissão</th>
                    <th></th>
                </tr>
              </thead>
              <tbody>
                {pessoas.map(p => (
                  <tr key={p.id}>
                    <td className='id_table col-1'>{p.id}</td>
                    <td className='col-7'>{p.nome}</td>
                    <td className='col-7'>{p.profissao}</td>
                    <td>
                    <a className='col-2' href={"pessoas/"+p.id}><button>Detalhar</button></a>
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

  export default ExibirPessoas;