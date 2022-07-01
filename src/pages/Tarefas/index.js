import React from "react";
import Header from "../../components/header";
import Menu1 from "./menu1";
import Data from "./data"
import Date from "../../components/date"

function Tarefas(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header>
                    <div className="mt-4"> 
                        <img src="assets/logo.svg"></img>
                    </div>
                    
                    <div className="btmenu">
                        <a href="/projetos">
                            <div className="btn2">
                                <div className="btn2_p1">
                                    <img width="30px" height="30px" src="assets/projetos.svg"></img>
                                    <h5>Projetos</h5>
                                </div>
                                <div className="btn2_p2"></div>
                            </div>
                        </a>
                        <a href="/equipes">
                            <div className="btn2">
                                <div className="btn2_p1">
                                    <img width="30px" height="30px" src="assets/equipes.svg"></img>
                                    <h5>Equipes</h5>
                                </div>
                                <div className="btn2_p2"></div>
                            </div>
                        </a>
                        <a href="/pessoas">
                            <div className="btn2">
                                <div className="btn2_p1">
                                    <img width="30px" height="30px" src="assets/pessoas.svg"></img>
                                    <h5>Pessoas</h5>
                                </div>
                                <div className="btn2_p2"></div>
                            </div>
                        </a>
                        <a href="/tarefas">
                            <div className="btn1">
                                <div className="btn1_p1">
                                    <img width="30px" height="30px" src="assets/tarefas_active.svg"></img>
                                    <h5>Tarefas</h5>
                                </div>
                                <div className="btn1_p2"></div>
                            </div>
                        </a>
                        <a href="/configuracoes">
                            <div className="btn2">
                                <div className="btn2_p1">
                                    <img width="30px" height="30px" src="assets/settings.svg"></img>
                                    <h5>Configurações</h5>
                                </div>
                                <div className="btn2_p2"></div>
                            </div>
                        </a>
                    </div>
                </Header>  

                <div className="coluna-dois">
                    <div className="info_search">
                        <h5>Tarefas</h5>
                        <input id="placeholder" type="search" placeholder="Pesquise aqui..." className='search2'></input>
                        <a className='lupa'><img src="assets/search.svg"></img></a>
                    </div>
                    <div className="taskscard">
                        <div class="inforcard">
                            <h6>Front-End da API</h6>
                            <p>Projeto - API de Gerencimanto</p>
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
                                    <div class="progress-bar barra" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{borderRadius: "50px"}} ></div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="taskscard">
                        <div class="inforcard">
                            <h6>Banco de Dados da API</h6>
                            <p>Projeto -  API de Gerenciamento</p>
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
                                    <div class="progress-bar barra"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{borderRadius: "50px"}}></div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="scrollbar">
                    <img src="assets/scroll.png"></img>
                </div>
                <div class="decor">
                    <img src="assets/decor.svg" ></img>
                </div>
                <div className="coluna-tres">
                    <div className="create_card d-flex flex-row justify-content-around">
                        <div className="create">
                            <h5>Criar Tarefa</h5>
                            <p>Criar uma Nova Tarefa</p>
                        </div>
                        <div className="btn_criar d-flex flex-row">
                            <button><img src="assets/btn_create.svg"/></button>
                        </div>
                    </div> 

                    {/* -=-=-=-=-=-=-=-=-=-=-=-=Ajuste do calendario=-=-=-=-=-=-=-=-=-=-=-=-=  */}
                    <div className="calendario">
                        <img src="assets/calendario.svg"/>
                    </div>
                    <div className="agenda d-flex flex-row justify-content-around">
                        <div className="info_agenda">
                            <h5 style={{textAlign:"left"}}>GP Inovação</h5>
                            <div className="people">
                                <img src="assets/people.svg"/>
                                <img src="assets/people.svg"/>
                                <img src="assets/people.svg"/>
                                <img src="assets/people.svg"/>
                            </div>
                        </div>
                        <div className="info_agenda2">
                            <h6 style={{textAlign:"right"}}>9:00 AM</h6>
                            <div id="lado1" style={{display:"flex", justifyContent: "end"}}>
                                <button><img src="assets/btn_completed_white.svg"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="agenda d-flex flex-row justify-content-around">
                        <div className="info_agenda">
                            <h5 style={{textAlign:"left"}}>Gerenciamento de Pousadas</h5>
                            <div className="people">
                                <img src="assets/people.svg"/>
                                <img src="assets/people.svg"/>
                                <img src="assets/people.svg"/>
                                <img src="assets/people.svg"/>
                            </div>
                        </div>
                        <div className="info_agenda2">
                            <h6 style={{textAlign:"right"}}>11:00 AM</h6>
                            <div id="lado2" style={{display:"flex", justifyContent: "end"}}>
                                <button><img src="assets/btn_x.svg"/></button>
                                <button><img src="assets/btn_completed.svg"/></button>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}
export default Tarefas;