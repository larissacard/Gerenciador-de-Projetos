import React from "react";
import ExibirTarefas from "./data";

function Menu1() {
    return (
        <div className="menu1">
            {/* Searchbar */}
            <div className="searchbar">
                <input type="search" placeholder="Pesquise aqui..."></input>
                <button><img src="assets/search.svg"></img></button>
            </div>

            { /* Projetos */}
            <div className="mostrarProjetos">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>TAREFAS</h1>
                    <button className="btn_primary">Novo</button>
                </div>
                
                <ExibirTarefas/>
            </div>
        </div>
    );
}

export default Menu1;