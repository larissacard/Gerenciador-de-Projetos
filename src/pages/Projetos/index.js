import React from "react";
import Data from "../../components/data"
import Header from "../../components/header"
import Menu1 from "./menu1";
import Grafico from "../../components/grafico"
import AllProjects from "../../components/allprojects";
// import Cadastro from "./modal";
import MyApp from "./date";
import "./style.css"
import PostForm from "./PostForm";
import Projec from "./search";

function Projetos() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header>
                    <div className="mt-4">
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

                <div className="coluna-um">
                    <h5>Projetos</h5>
                    <div className="opcoes justify-content-between">
                        <div className="d-flex op">
                            <h6>Concluído</h6>
                            <h6 className="grey">Em desenvolvimento</h6>
                        </div>
                    
                        <div className="bttnsem ">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filtros
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Ordem Alfabetica A-Z</a></li>
                                    <li><a className="dropdown-item" href="#">Mais Recentes</a></li>
                                    <li><a className="dropdown-item" href="#">Mais Antigos</a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>   
        
                    <div className="grafico">
                        <Grafico/>
                    </div> 
                    <div>
                        <Projec/>
                    </div>      
                </div> 
                <div className="decor">
                    <img src="assets/decor.svg" ></img>
                </div>
                <div className="coluna-tres">
                    <div className="create_card d-flex justify-content-around align-items-center">
                        <div className="create">
                            <h5>Criar Projeto</h5>
                            <p>Criar um novo projeto</p>
                        </div>
                        <div className="btn_criar d-flex flex-row">
                            <PostForm />
                        </div>
                    </div>

                    {/* -=-=-=-=-=-=-=-=-=-=-=-=Ajuste do calendario=-=-=-=-=-=-=-=-=-=-=-=-=  */}
                    <div className="calendario">
                        {/* <img src="assets/calendario.svg"/> */}
                        <MyApp/>
                    </div>
                    <div className="scroll_agenda" style={{overflowY: "scroll", height: "43vh"}}>
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
                    </div>   
                </div>    
            </div>
        </div>
    );
}

export default Projetos;
