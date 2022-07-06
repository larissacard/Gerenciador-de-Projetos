import React, { useState, useEffect } from 'react';
import ExibirProjetos from "./data";

function AllProjects(){
    return(
        <div className="allpro" style={{overflowY:"scroll", overflowX:"hidden"}}>
            <div className='proj'>
                <h4>Todos os projetos</h4>
               <div className='bt'>
               <div className="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtros
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Ordem Alfabetica A-Z</a></li>
                            <li><a className="dropdown-item" href="#">Mais Antigos</a></li>
                            <li><a className="dropdown-item" href="#">Mais Recentes</a></li>
                        </ul>
                    </div>
                    <input id="placeholder" type="search" placeholder="Pesquise aqui..." className='search'></input>
                    <a className='lupa'><img src="assets/search.svg"></img></a>
               </div>
            </div>

            <div className="title_projeto_id">
                <ExibirProjetos/>
            </div>
        </div>
    )
}

export default AllProjects;