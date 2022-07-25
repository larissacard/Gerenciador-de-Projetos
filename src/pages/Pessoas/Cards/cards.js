import React, { useEffect, useState } from "react";
import api from "../../../api";
// import {Dropdown} from 'react-bootstrap';
import PostPessoas from "../modal";

function Cards () {
    const [initialPessoas, setInitialPessoas] = useState([])
    const [pessoas, setPessoas] = useState([])

    useEffect(() => {
        const getPessoas = async () => {
            try {
                const response =await api.get('/pessoas');
                setInitialPessoas(response.data);
                setPessoas(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getPessoas();
    }, []);

    const handleChange = ({target}) => {
        if (!target.value) {
            setPessoas(initialPessoas)
            return;
        }
        const filterPessoas = pessoas.filter((pessoas, pe_nome) => pessoas.pe_nome.toUpperCase().includes(target.value.toUpperCase()))
        setPessoas(filterPessoas)
    };

    return (
        <>
        <div className="coluna_pessoas">
            <div className='bt'>
                <div className="dropdown me-5">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Filtros
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Ordem Alfabetica A-Z</a></li>
                        <li><a className="dropdown-item" href="#">Mais Antigos</a></li>
                        <li><a className="dropdown-item" href="#">Mais Recentes</a></li>
                    </ul>
                </div>
                <input className='search_pessoas' id="placeholder" type="search" placeholder="Pesquise aqui..." onChange={handleChange}></input>
                <a className='lupa_pessoas'><img src="assets/search.svg"></img></a>
            </div>
            <div className="create_card_pessoas d-flex flex-row justify-content-around">
                <div className="create_pessoas ms-4">
                    <h5>Adicionar Pessoa</h5>
                    <p>Adicionar uma nova pessoa</p>
                </div>
                <div className="ms-5">
                    <PostPessoas />
                </div>
            </div>

            <div className="all_cards" style={{ overflowY: "scroll" }}>
                {pessoas.map((p, index) => (
                    <a href={"pessoas/" + p.pe_id} key={p.pe_id} style={{ border: "none", textDecoration: "none" }}>
                        <div className="card_pessoas d-flex mb-4">
                            <div className="info_pessoas mt-3" style={{ width: "10vw" }}>
                                <h2>{p.pe_nome}</h2>
                                <p>{p.ca_cargo}</p>
                            </div>
                            <div>
                                <img className="profile" src="assets/profile.svg"></img>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>

        
        </>
    );
}

export default Cards;