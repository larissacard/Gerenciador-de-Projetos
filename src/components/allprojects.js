import React, { useState, useEffect } from 'react';
import ExibirProjetos from "./data";


function AllProjects(){
    return(
        <div>
            <div className='proj'>
                <h4>Todos os projetos</h4>
               <div className='bt'>
                    <button  className='opbttn'>Filtros
                        <img src="assets/seta.svg"></img>
                    </button>
                    <input type="search" placeholder="Pesquise aqui..." className='search'></input>
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