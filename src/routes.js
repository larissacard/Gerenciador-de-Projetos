import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Projetos from './pages/Projetos'
import ProjetosId from './pages/Projetos_Id'
import Equipes from './pages/Equipes'
import EquipesId from './pages/Equipes_Id'
import Tarefas from './pages/Tarefas'
import TarefasId from './pages/Tarefas_Id'
import Pessoas from './pages/Pessoas'
import PessoasId from './pages/Pessoas_Id'




function Rout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Projetos/>} />
                <Route exact path="/projetos" element={<Projetos/>} />
                <Route exact path="/projetos/:id" element={<ProjetosId/>} />
                <Route exact path="/equipes" element={<Equipes/>} />
                <Route exact path="/equipes/:id" element={<EquipesId/>} />
                <Route exact path="/pessoas" element={<Pessoas/>} />
                <Route exact path="/pessoas/:id" element={<PessoasId/>} />
                <Route exact path="/tarefas" element={<Tarefas/>} />
                <Route exact path="/tarefas/:id" element={<TarefasId/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;