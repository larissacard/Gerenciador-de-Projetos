import React from "react";
import Data from "./Titulo";

function Menu1() {
    return (
        <div style={{padding:"20px"}}>
            <div className="cont_tituloprojeto align-items-start">
                <a href="/equipes" className="btn_primary" style={{width:"108px"}}>
                    <img src="../assets/voltar.svg" width="20px"></img>
                    <p>Voltar</p>
                </a>

                <div className="title_projeto_id">
                    <Data/>
                </div>
            </div>

            <div className="cont_tarefasdoprojeto">
                <div className="Title_exibirTarefasProjeto">
                    <h3>###########</h3>
                    <button className="btn_primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Novo</button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cadastro de um novo projeto</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="cont_table">
                    {/* falta essa parte */}
                </div>
            </div>
        </div>
    );
}
export default Menu1;
