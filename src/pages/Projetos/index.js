import React from "react";
import Data from "../../components/data"
import Header from "../../components/header"
import Menu1 from "./menu1";
import Grafico from "../../components/grafico"
import AllProjects from "../../components/allprojects";
import Date from "../../components/date"

function Projetos() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header>
                    <div>
                        <img src="assets/logo.svg"></img>
                    </div>
                    <a href="/projetos">
                        <div className="btn1">
                            <div className="btn1_p1">
                                <img width="30px" height="30px" src="assets/projetos_active.svg"></img>
                                <h5>Projetos</h5>
                            </div>
                            <div className="btn1_p2"></div>
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
                </Header>  

                <div className="charts">
                    <h5>Projetos</h5>
                    <div className="opcoes justify-content-between">
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
        
                    <div className="grafico">
                        <Grafico/> 
                    </div>
                    <div>
                        <AllProjects/>
                    </div>      
                </div> 
                <div className="calendario">
                        <Date/>
                    </div>        
            </div>
        </div>
    );
}

export default Projetos;
