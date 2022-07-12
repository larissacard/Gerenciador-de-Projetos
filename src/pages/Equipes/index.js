import React from "react";
import Header from "../../components/header";
import PostEquipes from "./modal"


function Equipes(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header/>
                    
                {/* <Show/> */}
                <div className="create_card d-flex flex-row justify-content-around">
                <div className="create ms-4">
                    <h5>Adicionar Equipe</h5>
                    <p>Adicionar uma nova equipe</p>
                </div>
                <div className="ms-5">
                    <PostEquipes />
                </div>
            </div> 
            </div>
        </div>
    );
}

export default Equipes;