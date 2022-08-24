import React from "react";
import Header from "../../components/header";
import PostEquipes from "./modal"
import { Container, Search, SearchIcon } from "../Projetos/styles";
import {  ContainerUnico } from "./style";
import { useState } from "react";
import api from "../../api";
import { AllCards, Card, Name, Title, Retangulo, TeamLength, Elipse, SmallElipse } from "./style";


function Equipes() {
    const [updateScreen, setUpdate] = useState(true);
    const [equipes, setEquipes] = useState([]);
    const [nome, setNome] = useState('');
    const [foundEquipes, setFoundEquipes] = useState();

    const getEquipes = async () => {
        api
            .get('/equipes')
            .then(response => {
                setEquipes(response.data);
                setFoundEquipes(response.data);
            })
            .catch(err => {
                if(err.response.status === 401) {
                    alert("Faça o Login para visualizar a página")
                    window.location.href = '/login'
                }
                else alert(err.message)
            })
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
                    <PostEquipes update={getEquipes}/>
                    {foundEquipes && foundEquipes.length > 0 ? (
                        foundEquipes.map((equipes) => (
                            <Card key={equipes.eq_id} href={"equipes/" + equipes.eq_id}>
                                <Retangulo/>
                                {/* <Icon>a</Icon> */}
                                <Elipse>
                                    <SmallElipse src={equipes.eq_foto}/>
                                </Elipse>
                                <Name>{equipes.eq_nome}</Name>
                                <TeamLength>Quantidade de integrantes: {equipes.pessoas.length}</TeamLength>
                            </Card>
                        ))
                    ) : (
                        <div variant="outlined" severity="warning">
                            Nome não encontrado! ;-;
                        </div>
                    )}
                </AllCards>

            </ContainerUnico>
        </Container>
    );
}

export default Equipes;