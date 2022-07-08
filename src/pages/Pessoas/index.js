import React from "react";
import Data from "./data"
import Header from "../../components/header";
import Menu1 from "./menu1";
import { GraficoP } from "../../components/grafico-p";
import ExibirPessoas from "./data";
import "./style.css"

function Pessoas(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header/> 

                <div className="coluna-um">
                    <div className="cardp d-flex ">
                        <div className="infopessoas">
                            <h2>Bianca Stormi</h2>
                            <p>Engenheira de Software</p>
                        </div>
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
                        <div className="d-flex justify-content-between">
                            <p style={{color: "var(--roxo)", fontWeight: "500"}}>Progresso</p>
                            <p style={{color: "var(--roxo1)"}}>40%</p>
                        </div>
                        <div className="progress" style={{height: "8px", borderRadius: "50px"}}>
                            <div className="progress-bar barra"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{borderRadius: "50px", backgroundColor: "var(--roxo1)"}}></div>
                        </div>
                    </div>
                    <div className="opcoes-pessoas d-flex justify-content-between">
                        <div className="d-flex op">
                            <h6>Desempenhos</h6>
                        </div>
                    
                        <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Semanal
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Anual</a></li>
                            <li><a className="dropdown-item" href="#">Mensal</a></li>
                        </ul>
                    </div>
                    </div>  
                    <div className="grafico-pessoas">
                        <GraficoP />
                    </div>    
                </div>
                
                <div className="coluna_pessoas">
                    <div className='bt'>
                    <div className="dropdown me-5">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtros
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Ordem Alfabetica A-Z</a></li>
                            <li><a className="dropdown-item" href="#">Mais Antigos</a></li>
                            <li><a className="dropdown-item" href="#">Mais Recentes</a></li>
                        </ul>
                    </div>
                        <input className='search_pessoas' id="placeholder" type="search" placeholder="Pesquise aqui..."></input>
                        <a className='lupa_pessoas'><img src="assets/search.svg"></img></a>
                    </div>
                    <div className="create_card_pessoas d-flex flex-row justify-content-around">
                        <div className="create_pessoas">
                            <h5>Adicionar Pessoa</h5>
                            <p>Adicionar uma nova pessoa</p>
                        </div>
                        <div className="btn_criar d-flex flex-row">
                            <button><img src="assets/btn_create.svg"/></button>
                        </div>
                    </div> 
                    <ExibirPessoas/>
                </div>        
            </div>    
        </div>
    );
}
export default Pessoas;