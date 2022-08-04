import React from "react";
import Header from "../../components/header";
import App from "./filter";
import ExibirEquipes from "./get/data";
import PostEquipes from "./modal"
import { Title } from "./get/syle";
import { ColunaUm, Container } from "../Projetos/styles";
import { CardAdicionar, ContainerUnico } from "./style";


function Equipes() {
    return (
        <Container>
            <Header />
            <ContainerUnico>
            <Title>Equipes</Title>
                 <ExibirEquipes />
                {/* <div className="create_card d-flex flex-row justify-content-around">
                    <div className="create ms-4">
                        <h5>Adicionar Equipe</h5>
                        <p>Adicionar uma nova equipe</p>
                    </div>
                    <div className="ms-5">
                        <PostEquipes />
                    </div>
                </div> */}
            </ContainerUnico>
        </Container>
    );
}

export default Equipes;