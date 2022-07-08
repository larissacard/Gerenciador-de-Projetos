import React from "react";
import { Dropdown } from 'react-bootstrap';

import Header from "../../components/header"
import Grafico from "../../components/grafico"
import Tabela from "./tabela";

import {
    ColunaUm,
    Titulo,
    ContGrafico,
    TopoGrafico,
    Legenda,
    Filtros,
} from './styles';

import MyApp from "./date";
import "./style.css"
import PostForm from "./modal";
import CardCriar from "../../components/CardCriar";

function Projetos() {
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}>

            <div className="container_maior">
                <Header/>

                <ColunaUm>
                    <Titulo>
                        <h1>Projetos</h1>   
                    </Titulo>

                    <ContGrafico>
                        <TopoGrafico>
                            <Legenda>
                                <span>Concluidos</span>
                                <span>Em Desenvolvimento</span>
                            </Legenda>
                            <Filtros>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        Filtros
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Ordem Alfabetica A-Z</Dropdown.Item>
                                        <Dropdown.Item href="#">Mais Recentes</Dropdown.Item>
                                        <Dropdown.Item href="#">Mais Antigos</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Filtros>
                        </TopoGrafico>

                        <Grafico/>
                    </ContGrafico>

                    <Tabela/>
                </ColunaUm>

                
                <div className="coluna-tres">
                    <CardCriar titulo="Criar Projeto" descricao="Criar um novo projeto" button={<PostForm/>}/>

                    {/* -=-=-=-=-=-=-=-=-=-=-=-=Ajuste do calendario=-=-=-=-=-=-=-=-=-=-=-=-=  */}
                    <div className="calendario">
                        {/* <img src="assets/calendario.svg"/> */}
                        <MyApp/>
                    </div>
                    <div className="scroll_agenda"
                        style={
                            {
                                overflowY: "scroll",
                                height: "43vh"
                            }
                    }>
                        <div className="agenda d-flex flex-row justify-content-around">
                            <div className="info_agenda">
                                <h5 style={
                                    {textAlign: "left"}
                                }>GP Inovação</h5>
                                <div className="people">
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                </div>
                            </div>
                            <div className="info_agenda2">
                                <h6 style={
                                    {textAlign: "right"}
                                }>9:00 AM</h6>
                                <div id="lado1"
                                    style={
                                        {
                                            display: "flex",
                                            justifyContent: "end"
                                        }
                                }>
                                    <button><img src="assets/btn_completed_white.svg"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="agenda d-flex flex-row justify-content-around">
                            <div className="info_agenda">
                                <h5 style={
                                    {textAlign: "left"}
                                }>Gerenciamento de Pousadas</h5>
                                <div className="people">
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                </div>
                            </div>
                            <div className="info_agenda2">
                                <h6 style={
                                    {textAlign: "right"}
                                }>11:00 AM</h6>
                                <div id="lado2"
                                    style={
                                        {
                                            display: "flex",
                                            justifyContent: "end"
                                        }
                                }>
                                    <button><img src="assets/btn_x.svg"/></button>
                                    <button><img src="assets/btn_completed.svg"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="agenda d-flex flex-row justify-content-around">
                            <div className="info_agenda">
                                <h5 style={
                                    {textAlign: "left"}
                                }>GP Inovação</h5>
                                <div className="people">
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                </div>
                            </div>
                            <div className="info_agenda2">
                                <h6 style={
                                    {textAlign: "right"}
                                }>9:00 AM</h6>
                                <div id="lado1"
                                    style={
                                        {
                                            display: "flex",
                                            justifyContent: "end"
                                        }
                                }>
                                    <button><img src="assets/btn_completed_white.svg"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="agenda d-flex flex-row justify-content-around">
                            <div className="info_agenda">
                                <h5 style={
                                    {textAlign: "left"}
                                }>GP Inovação</h5>
                                <div className="people">
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                    <img src="assets/people.svg"/>
                                </div>
                            </div>
                            <div className="info_agenda2">
                                <h6 style={
                                    {textAlign: "right"}
                                }>9:00 AM</h6>
                                <div id="lado1"
                                    style={
                                        {
                                            display: "flex",
                                            justifyContent: "end"
                                        }
                                }>
                                    <button><img src="assets/btn_completed_white.svg"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projetos;
