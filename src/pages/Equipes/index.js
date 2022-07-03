import React from "react";
import Header from "../../components/header";
import Menu1 from "./menu1";

function Equipes(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
            <Header>
                    <div>
                        <img src="assets/logo.svg"></img>
                    </div>
                    
                    <div className="btmenu">
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
                    </div>
                </Header>  

            </div>
        </div>
    );
}

export default Equipes;