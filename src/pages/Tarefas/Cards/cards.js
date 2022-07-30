import React, { useEffect, useState } from "react";
import api from "../../../api";

function Cards() {
    const [initialTarefas, setInitialTarefas] = useState([])
    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        const getTarefas = async () => {
            try {
                const response =await api.get('/tarefas');
                setInitialTarefas(response.data);
                setTarefas(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getTarefas();
    }, []);

    const handleChange = ({target}) => {
        if (!target.value) {
            setTarefas(initialTarefas)
            return;
        }
        const filterTarefas = tarefas.filter((tarefas, tr_nome) => tarefas.tr_nome.toUpperCase().includes(target.value.toUpperCase()))
        setTarefas(filterTarefas)
    };

    return(
        <>
        <div className="d-flex align-items-center">
            <input type="search" placeholder="Pesquise aqui..." onChange={handleChange} className="search_tarefas px-3"></input>
            <img src="assets/search.svg" alt="search icon" style={{marginLeft: "-2.5rem", width: "25px", height: "35px",}} ></img>
        </div>

        <div className='alltasks' style={{overflowY:"scroll"}}>
            {tarefas.map((t, index) => (
                <div className="task_table" key={t.tr_id} style={{border:"1px solid transparent"}}>
                    <a href={"tarefas/" + t.tr_id} key={t.tr_id} style={{ border: "none", textDecoration: "none" }}>
                        <div className="inforcard">
                            <h6>{t.tr_nome}</h6>
                            <p style={{width:"96.5%"}}>{t.tr_descricao}</p>
                        </div>
                        <div className="people_tarefas">
                            <img src="assets/people.svg" alt="member photo1"/>
                            <img src="assets/people.svg" alt="member photo2"/>
                            <img src="assets/people.svg" alt="member photo3"/>
                            <img src="assets/people.svg" alt="member photo4"/>
                        </div>
                        <div className="pross mb-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <p>Progresso</p>
                                <p style={{color: "var(--roxo1)"}}>40%</p>
                            </div>
                            {/* <div className="progress" style={{height: "8px", borderRadius: "50px"}}>
                            <div className="progress-bar barra" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{borderRadius: "50px", backgroundColor: "var(--roxo1)"}} ></div>
                            </div> */}
                        </div>
                    </a>
                </div>
            ))}
        </div>
        </>
    )
}

export default Cards;