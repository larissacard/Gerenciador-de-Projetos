import React from "react";
import Data from "./data"
import Header from "../../components/header";
import Menu1 from "./menu1";

function Pessoas(){
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
                            <div className="btn1">
                                <div className="btn1_p1">
                                    <img width="30px" height="30px" src="assets/pessoas_active.svg"></img>
                                    <h5>Pessoas</h5>
                                </div>
                                <div className="btn1_p2"></div>
                            </div>
                        </a>
                        <a href="/tarefas">
                            <div className="btn2">
                                <div className="btn2_p1">
                                    <img width="30px" height="30px" src="assets/tarefas.svg"></img>
                                    <h5>Tarefas</h5>
                                </div>
                                <div className="btn2_p2"></div>
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
                    <div className="cardp d-flex ">
                        <div className="infopessoas"><h2>Bianca Stormi</h2>
                        <p>Engenheira de Software</p></div>
                        <div>
                            <img src="assets/profile.svg"></img>
                        </div>
                    </div>

                <div className="progresso-p">
                    <div className="nome-icon d-flex">
                        <h6>Status da Equipe</h6>
                        <div className="d-flex pessoas-equipe">
                            <img src="assets/people.svg"/>
                            <img src="assets/people.svg"/>
                            <img src="assets/people.svg"/>
                            <img src="assets/people.svg"/>
                        </div>
                    </div>
                    <p>Progresso</p>
                    <div class="progress" style={{height: "8px", borderRadius: "50px"}}>
                        <div class="progress-bar barra"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{borderRadius: "50px"}}></div>
                    </div>
                </div>
                <div className="opcoes-pessoas d-flex justify-content-between">
                    <div className="d-flex op">
                        <h6>Concluido</h6>
                        <h6 className="grey">Em desenvolvimento</h6>
                    </div>
                
                    <div className="bttnsem">
                        <button className="opbttn">Semanal
                            <img src="assets/seta.svg"/>
                        </button>
                    </div> 
                </div>     
            </div>
                
            </div>
        </div>
    );
}
export default Pessoas;