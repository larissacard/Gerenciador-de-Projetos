import React from "react";
import ExibirDetalhesProjeto from "./data";

function Menu1() {
    return (
        <div style={{padding:"20px"}}>
            <div className="cont_tituloprojeto align-items-start">
                <a href="/projetos" className="btn_primary" style={{width:"108px"}}>
                    <img src="../assets/voltar.svg" width="20px"></img>
                    <p>Voltar</p>
                </a>

                <div className="title_projeto_id">
                    <ExibirDetalhesProjeto/>
                </div>
            </div>
{/* 
            <div className="cont_tarefasdoprojeto">
                <div className="Title_exibirTarefasProjeto">
                    <h3>Tarefas do Projeto</h3>
                    <button className="btn_primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Novo</button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cadastro de um novo projeto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}

            
                {/* <div className="cont_table">
                    <Tarefas />
                </div> */}
            </div>
    );
}
export default Menu1;
