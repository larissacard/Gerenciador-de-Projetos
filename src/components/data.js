import React, { Component } from 'react';
import api from '../api'

class ExibirProjetos extends Component{
    state = {
      projetos: [],
    }
  
    async componentDidMount(){
      const response = await api.get('/projetos');
  
      this.setState({ projetos: response.data })
    }
  
    render() {
  
      const {projetos} = this.state;
  
      return(
        <div className="cont_table">
            {projetos.map(p => (
              <div key={p.pr_id} className="cont_table d-flex justify-content-between">
                <p className='text'>{p.pr_nome}</p>
                <p>
                <a href={"projetos/"+p.pr_id}><button className='bttn'>Detalhes</button></a>
                </p>
              </div>
            ))}
        </div>
      )
    }
  }

  export default ExibirProjetos;