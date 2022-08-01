import React, {useEffect, useState} from "react";
import {Dropdown} from 'react-bootstrap';
import api from "../../../api";

import {
    ContProjetos,
    CabecalhoProjetos,
    Filtros,
    Search,
    SearchIcon,
    ContTabela,
    CardProjeto,
    ContMais,
} from './styles';

function Tabela() {
    const [initialProjetos, setInitialProjetos] = useState([])
    const [projetos, setProjetos] = useState([])

    useEffect(() => {
        const getProjetos = async () => {
            try {
                const response = await api.get('/projetos');
                setInitialProjetos(response.data);
                setProjetos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProjetos();
    }, [projetos]);

    const handleChange = ({target}) => {
        if (!target.value) {
            setProjetos(initialProjetos)
            return;
        }
        const filterProjetos = projetos.filter((projetos, pr_nome) => projetos.pr_nome.toUpperCase().includes(target.value.toUpperCase()))
        setProjetos(filterProjetos)
    }

    return (
        <ContProjetos>
            <CabecalhoProjetos>
                <h2>Todos os Projetos</h2>

                <ContMais>
                    {/* <Filtros>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">Filtros</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Ordem Alfabetica A-Z</Dropdown.Item>
                                <Dropdown.Item href="#">Mais Recentes</Dropdown.Item>
                                <Dropdown.Item href="#">Mais Antigos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Filtros> */}
                    <Search>
                        <input type="search" placeholder="Pesquise..." onChange={handleChange}></input>
                        <SearchIcon/>
                    </Search>
                </ContMais>
            </CabecalhoProjetos>

            <ContTabela>
                <ul> 
                    {projetos.map((projetos, index) => 
                    <CardProjeto key={projetos.pr_id}>
                        <p> {projetos.pr_nome} </p>
                        <a href={"projetos/" + projetos.pr_id}>{'Detalhes >'}</a>
                    </CardProjeto>)} 
                </ul>
            </ContTabela>

        </ContProjetos>
    )
}

export default Tabela;
