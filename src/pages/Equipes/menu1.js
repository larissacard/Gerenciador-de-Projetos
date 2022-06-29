import React from "react";
import ExibirEquipes from "./data";

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
                    <h1>Equipes</h1>
                    <button className="btn_primary">Novo</button>
                </div>
                
                <ExibirEquipes />
            </div>
        </div>
    );
}

export default Menu1;