import React from "react";
import Header from "../../components/header";
import App from "./filter";
import PostEquipes from "./modal"
import { Container, Search, SearchIcon } from "../Projetos/styles";
import { CardAdicionar, ContainerUnico } from "./style";
import { useState } from "react";
import api from "../../api";
import { AllCards, Card, FooterCard, Name, Title, Icon, Retangulo, TeamLength, Elipse, SmallElipse } from "./style";


function Equipes() {
    const [updateScreen, setUpdate] = useState(true);
    const [equipes, setEquipes] = useState([]);
    const [nome, setNome] = useState('');
    const [foundEquipes, setFoundEquipes] = useState();

    const getEquipes = async () => {
        const response = await api.get('/equipes');
        setEquipes(response.data);
        setFoundEquipes(response.data);
    };

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = equipes.filter((equipes) => {
                return equipes.eq_nome.toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundEquipes(results);
        } else {
            setFoundEquipes(equipes);
        }
        setNome(keyword);
    };

    if (updateScreen) {
        getEquipes()
        setUpdate(false)
    }
    
    return (
        <Container>
            <Header />
            <ContainerUnico>
                <div className="d-flex justify-content-between mt-4">
                    <Title>Equipes</Title>
                    <Search>
                        <input type="search" placeholder="Pesquise..." onChange={filter} value={nome}></input>
                        <SearchIcon/>   
                    </Search>
                </div>
                <AllCards>
                    <CardAdicionar><PostEquipes update={getEquipes}/></CardAdicionar>
                    {foundEquipes && foundEquipes.length > 0 ? (
                        foundEquipes.map((equipes) => (
                            <Card key={equipes.eq_id}>
                                <Retangulo/>
                                {/* <Icon>a</Icon> */}
                                <Elipse>
                                    <SmallElipse></SmallElipse>
                                </Elipse>
                                <Name>{equipes.eq_nome}</Name>
                                <TeamLength>Quantidade de integrantes: </TeamLength>
                                <FooterCard>
                                    <a href={"equipes/" + equipes.eq_id}>Inspecionar Equipes</a>
                                </FooterCard> 
                            </Card>
                        ))
                    ) : (
                        <div variant="outlined" severity="warning">
                            e não encontrado! ;-;
                        </div>
                    )}
                </AllCards>

            </ContainerUnico>
        </Container>
    );
}

export default Equipes;