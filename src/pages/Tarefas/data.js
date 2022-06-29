import React, { Component } from 'react';
import api from '../../api'

class ExibirTarefas extends Component{
    state = {
      tarefas: [],
    }
  
    async componentDidMount(){
      const response = await api.get('/tarefas');
  
      this.setState({ tarefas: response.data })
    }
  
    render() {
  
      const {tarefas} = this.state;
  
      return(
        <div className="cont_table overflow-scroll">
          <div>
            <table className="table">
              <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Inicio</th>
                    <th></th>
                </tr>
              </thead>
              <tbody>
                {tarefas.map(t => (
                  <tr key={t.id}>
                    <td className='id_table'>{t.id}</td>
                    <td>{t.nome}</td>
                    <td>{t.data_criacao.substring(0,10)}</td>
                    <td>
                    <a href={"tarefas/"+t.id}><button>Detalhar</button></a>
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

  export default ExibirTarefas;