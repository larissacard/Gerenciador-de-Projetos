import React from "react";
import Header from "../../components/header";
import Menu1 from "./menu1";
import Data from "./data";
import ExibirTarefa from "../../components/datatask";
import CardAgenda from "../../components/CardAgenda";
import { Agenda } from "../Projetos/styles";
import "./style.css";
import PostForm from "./modal";

function Tarefas() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="container_maior">
        <Header />

        <div className="coluna-dois">
          <div className="info_search">
            <h5>Tarefas</h5>
            <div
              className="d-flex align-items-center"
              style={{ width: "38.1rem" }}
            >
              <input
                id="placeholder"
                type="search"
                placeholder="Pesquise aqui..."
                className="search2 px-3"
              ></input>
              <a>
                <img
                  style={{
                    marginLeft: "-2.5rem",
                    width: "25px",
                    height: "35px",
                  }}
                  src="assets/search.svg"
                ></img>
              </a>
            </div>
          </div>
          <ExibirTarefa />
        </div>

        <div className="decor">
          <img src="assets/decor.svg"></img>
        </div>
        <div className="coluna-tres">
          <div className="create_card d-flex flex-row justify-content-around">
              <div className="create">
                <h5>Criar Tarefa</h5>
                <p>Criar uma Nova Tarefa</p>
              </div>
              <div className="ms-5">
                  <PostForm />
              </div>
          </div>

          {/* -=-=-=-=-=-=-=-=-=-=-=-=Ajuste do calendario=-=-=-=-=-=-=-=-=-=-=-=-=  */}
          <div className="calendario">
            <img src="assets/calendario.svg" />
          </div>
          <Agenda>
            <CardAgenda titulo="Gp Inovação" hora="9:00 AM" />
            <CardAgenda titulo="Gerenciamento de Pousadas" hora="11:00 AM" />
            <CardAgenda titulo="Evento Tal" hora="15:00 PM" />
            <CardAgenda titulo="Bla Bla Bla" hora="22:00 PM" />
          </Agenda>
        </div>
      </div>
    </div>
  );
}
export default Tarefas;
