import React, { useState } from 'react';
import api from '../../api';

import Container from '../../Components/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import { 
    Search, 
    SearchIcon 
} from '../Projetos/styles';

import { 
    AllCards, 
    Card, 
    Name, 
    Title, 
    Retangulo, 
    TeamLength, 
    Elipse, 
    SmallElipse, 
    ContainerUnico,
    Footer
} from './styles';

import PostEquipes from './modal'
import SearchEmptyState from '../../Components/EmptyState';

function Equipes() {
    const [updateScreen, setUpdate] = useState(true);
    const [equipes, setEquipes] = useState([]);
    const [nome, setNome] = useState('');
    const [foundEquipes, setFoundEquipes] = useState();
    const [filtros, setFiltros] = useState()

    const getEquipes = async () => {
        api
            .get('/equipes')
            .then(response => {
                setEquipes(response.data.data);
                setFoundEquipes(response.data.data);
            })
            .catch(err => {
                if(err.response.status === 401) {
                    
                    alert('Faça o Login para visualizar a página')
                    window.location.href = '/login'
                }
                else console.log(err.message)
            })
    };

    const filter = (e, filt) => {
        let keyword = ''
        if (e) keyword = e.target.value;
        if (keyword !== '') {
            const results = equipes.filter((equipes) => {
                return equipes.nome.toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundEquipes(results);
        } else {
            setFoundEquipes(equipes);
        }
        setNome(keyword);

        switch (filt) {
            case 1:
                // Ordem Alfabética (A-Z)
                setFoundEquipes(valorAntigo => valorAntigo.sort((a,b) => {
                    return a.nome.toLowerCase() < b.nome.toLowerCase() ? -1 : a.nome.toLowerCase() > b.nome.toLowerCase() ? 1 : 0;
                }))
                break;
            
            case 2:
                // Ordem Alfabética (Z-A)
                setFoundEquipes(valorAntigo => valorAntigo.sort((a,b) => {
                    return a.nome.toLowerCase() > b.nome.toLowerCase() ? -1 : a.nome.toLowerCase() < b.nome.toLowerCase() ? 1 : 0;
                }))
                break;
                
                case 3:
                    // Mais Recentes
                    setFoundEquipes(valorAntigo => valorAntigo.sort((a,b) => {
                        return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
                    }))
                    break;
                    
                case 4:
                    // Mais Antigos
                    setFoundEquipes(valorAntigo => valorAntigo.sort((a,b) => {
                        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
                    }))
                    break;
            default:
                break;
        }
    };

    if (updateScreen) {
        getEquipes()
        setUpdate(false)
    }
    
    if (!filtros && foundEquipes){
        setFiltros(1)
        filter(null, 1)
    }

    return (
        <Container>
            <ContainerUnico>
                <div className='d-flex justify-content-between mt-4'>
                    <Title>Equipes</Title>

                    <div className='d-flex'>
                        <Dropdown>
                            <Dropdown.Toggle style={{background: 'transparent', color: '#333', border: '0'}}>
                            Filtros
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{padding: '10px', fontSize: '14px'}}>
                            <Dropdown.Header>Ordenar por:</Dropdown.Header>
                            <Form.Check
                                label='Ordem Alfabética (A-Z)'
                                type='radio'
                                checked={1 === filtros} 
                                onChange={() => {setFiltros(1); filter(null, 1)}}
                            />
                            <Form.Check
                                label='Ordem Alfabética (Z-A)'
                                type='radio'
                                checked={2 === filtros}
                                onChange={() => {setFiltros(2); filter(null, 2)}}
                            />
                            <Form.Check
                                label='Mais Recentes'
                                type='radio'
                                checked={3 === filtros}
                                onChange={() => {setFiltros(3); filter(null, 3)}}
                            />
                            <Form.Check
                                label='Mais Antigas'
                                type='radio'
                                checked={4 === filtros}
                                onChange={() => {setFiltros(4); filter(null, 4)}}
                            />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Search>
                            <input type='search' placeholder='Pesquise...' onChange={filter} value={nome}></input>
                            <SearchIcon/>
                        </Search>
                    </div>
                </div>
                <AllCards>
                    <PostEquipes update={getEquipes}/>
                    {foundEquipes && foundEquipes.length > 0 ? (
                        foundEquipes.map((equipes) => (
                            <Card key={equipes.id} href={'equipes/' + equipes.id}>
                                <Retangulo/>
    
                                <Elipse>
                                    {equipes.fotoPadrao
                                    ? <SmallElipse src={equipes.fotoPadrao.link}/>
                                    : <SmallElipse src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="/>}
                                </Elipse>
                                <Name>{equipes.nome}</Name>
                                <TeamLength>Quantidade de integrantes: {equipes.pessoas.length}</TeamLength>
                            </Card>
                        ))
                    ) : 
                        <SearchEmptyState titulo='Equipe não Encontrada! ;-;'/>
                    }
                </AllCards>
                <Footer/>
            </ContainerUnico>
        </Container>
    );
}

export default Equipes;