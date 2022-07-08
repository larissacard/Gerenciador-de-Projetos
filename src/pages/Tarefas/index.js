import React from "react";
import Header from "../../components/header";
import Menu1 from "./menu1";
import Data from "./data"
import ExibirTarefa from "../../components/datatask"
import "./style.css"


function Tarefas(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header/> 

                <div className="coluna-dois">
                    <div className="info_search">
                        <h5>Tarefas</h5>
                        <div className="d-flex align-items-center" style={{width: "38.1rem"}}>
                            <input id="placeholder" type="search" placeholder="Pesquise aqui..." className='search2 px-3'></input>
                            <a><img style={{marginLeft: "-2.5rem", width: "25px", height: "35px"}} src="assets/search.svg"></img></a>
                        </div>
                    </div>
                    <ExibirTarefa/>
                </div>
                
                <div className="decor">
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