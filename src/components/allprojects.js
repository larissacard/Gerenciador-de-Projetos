import React, { useState, useEffect } from 'react';
import ExibirProjetos from "./data";

function AllProjects(){
    return(
        <div class="allpro" style={{overflowY:"scroll", overflowX:"hidden"}}>
            <div className='proj'>
                <h4>Todos os projetos</h4>
               <div className='bt'>
               <div class="dropdown me-5">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtros
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Ordem Alfabetica A-Z</a></li>
                            <li><a class="dropdown-item" href="#">Mais Recentes</a></li>
                            <li><a class="dropdown-item" href="#">Mais Antigos</a></li>
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