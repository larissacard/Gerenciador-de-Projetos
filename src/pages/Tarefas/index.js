import React from "react";
import Header from "../../components/header";
import CardAgenda from "../../components/CardAgenda";
import { Agenda } from "../Projetos/styles";
import "./style.css";
import PostTarefas from "./modal"
import Cards from "./Cards/cards";

function Tarefas() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="container_maior">
        <Header />

        <div className="coluna_tarefas">
          <div className="info_search">
            <h5>Tarefas</h5>
            <Cards />
          </div>
        </div>

        <div className="coluna-tres">
          <div className="create_card d-flex flex-row justify-content-around">
              <div className="create">
                <h5>Criar Tarefa</h5>
                <p>Criar uma Nova Tarefa</p>
              </div>
              <div className="ms-5">
                  <PostTarefas />
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
