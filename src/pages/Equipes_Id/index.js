import React from "react";
import Header from "../../components/header"
import Data from "./Titulo"
import Menu1 from "./menu1";

function EquipesId(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>

            <div className="container_maior">
                <Header/>
                {/*<Menu1 />*/}
            </div>
        </div>
    );
}

export default EquipesId;