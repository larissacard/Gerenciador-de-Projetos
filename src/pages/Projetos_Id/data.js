import React, { Component } from "react";
import { isEqual } from "rsuite/esm/utils/dateUtils";
import api from "../../api";

const projetoPath = window.location.pathname;
console.log(projetoPath);

class ExibirDetalhesProjeto extends Component{
    state = {
        projetos: [],
    }

    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                const response = await api.get(projetoPath);
                const data = await response.json();
                this.state({projetos: data.data})

            } catch (error) {
                console.log(error);
            }
        };
        fetchProjetos();
    }, []);


    render(){
        const { projetos } = this.state;
        console.log(projetos)
        

        return(
            <>
             {this.state.projetos.map((projetos) =>
                    <div>{projetos.pr_nome}</div>
                )};
            </>
        )
        console.log(projetos)
    }
    
}

export default ExibirDetalhesProjeto;