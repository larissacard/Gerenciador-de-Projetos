import React, { Component } from 'react';
import api from '../api'

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
        <div>
            {tarefas.map(p => (
              <div key={p.pr_id} className="task_table">
                  <div class="inforcard">
                    <h6>{p.tr_nome}</h6>
                    <p>{p.tr_descricao}</p>
                  </div>
                  <div class="people_tarefas">
                    <img src="assets/people.svg"/>
                    <img src="assets/people.svg"/>
                    <img src="assets/people.svg"/>
                    <img src="assets/people.svg"/>
                  </div>
                  <div class="pross">
                      <div className="d-flex align-items-center justify-content-between">
                          <p>Progresso</p>
                          <p style={{color: "var(--roxo1)"}}>40%</p>
                      </div>
                      <div class="progress" style={{height: "8px", borderRadius: "50px"}}> 
                        <div class="progress-bar barra" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{borderRadius: "50px", backgroundColor: "var(--roxo1)"}} ></div>
                      </div>
                  </div> 
              </div>
            ))}
        </div>
      )
    }
  }

  export default ExibirTarefas;