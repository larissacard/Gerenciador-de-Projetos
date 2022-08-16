import React from "react";
import Header from "../../components/header"
import GetEquipe from "./get";

function EquipesId(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header/>
                {/*<Menu1 />*/}
                <GetEquipe/>
               
            </div>
        </div>
    );
}

export default EquipesId;