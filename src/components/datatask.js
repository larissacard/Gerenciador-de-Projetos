import React, { Component } from 'react';
import api from '../api'

const projetoPath = window.location.pathname;

class ExibirTarefa extends Component{
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
        <div className='alltasks' style={{overflowY:"scroll"}}>
            {tarefas.map(p => (
              <div key={p.tr_id} className="task_table" style={{border:"1px solid transparent"}}  >
                  <div className="inforcard">
                    <h6>{p.tr_nome}</h6>
                    <p style={{width:"96.5%"}}>{p.tr_descricao}</p>
                  </div>
                  <div className="people_tarefas">
                    <img src="assets/people.svg"/>
                    <img src="assets/people.svg"/>
                    <img src="assets/people.svg"/>
                    <img src="assets/people.svg"/>
                  </div>
                  <div className="pross mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                          <p>Progresso</p>
                          <p style={{color: "var(--roxo1)"}}>40%</p>
                      </div>
                      {/* <div className="progress" style={{height: "8px", borderRadius: "50px"}}> 
                        <div className="progress-bar barra" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{borderRadius: "50px", backgroundColor: "var(--roxo1)"}} ></div>
                      </div> */}
                      <div>
                      <a href={"tarefas/" + p.tr_id}>Detalhes</a>
                      </div>
                  </div> 
            </div>
            ))}
        </div>
      )
    }
  }

  export default ExibirTarefa;