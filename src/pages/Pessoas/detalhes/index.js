import React, { useEffect, useState } from 'react';
import CardInfoPessoa from "../../../components/CardInfoPessoa";
import { GraficoP } from "../../../components/grafico-p";
import { Container } from './styles';
import api from '../../../api';

function Detalhes(Props) {
  console.log(Props)
  return (
    <Container>
        <CardInfoPessoa nome={Props.id.nome} profissao={Props.id.profissao} />
        <div className="progresso-p">
          <div className="nome-icon d-flex">
            <h6>Status da Equipe</h6>
            <div className="d-flex pessoas-equipe">
              <img src="assets/people.svg" />
              <img src="assets/people.svg" />
              <img src="assets/people.svg" />
              <img src="assets/people.svg" />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p style={{ color: "var(--roxo)", fontWeight: "500" }}>Progresso</p>
            <p style={{ color: "var(--roxo1)" }}>40%</p>
          </div>
          <div
            className="progress"
            style={{ height: "8px", borderRadius: "50px" }}
          >
            <div
              className="progress-bar barra"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                borderRadius: "50px",
                backgroundColor: "var(--roxo1)",
              }}
            ></div>
          </div>
        </div>

        <div className="opcoes-pessoas d-flex justify-content-between">
          <div className="d-flex op">
            <h6>Desempenhos</h6>
          </div>

          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Semanal
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Anual
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mensal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <GraficoP />
      </Container>
  );
}

export default Detalhes;