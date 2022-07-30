import React from "react";
import Header from "../../components/header"
import ExibirDetalhesTarefas from "./data";


function TarefasId(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header/>
                
                <ExibirDetalhesTarefas/>
            </div>
        </div>
    );
}

export default TarefasId;