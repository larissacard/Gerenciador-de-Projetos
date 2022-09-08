import React, { useState } from "react";
import api from "../../../../api";

import { TitleNoResults } from "../../../Equipes_Id/get/styles";

import { 
  Container, 
  Body, 
  Tarefas 
} from "./styles";

import CardInfoPessoa from "../CardInfoPessoa";
import CardProjetosDaPessoa from "../CardProjetosDaPessoa";
import CardTarefasDaPessoa from "../CardTarefasDaPessoa";
import Lista from "../Lista";
import { Grafico } from "../grafico";

function Detalhes(Props) {
  const [detalhes, setDetalhes] = useState()

  const getDetalhes = async () => {
    api
      .get(`/pessoas/${Props.dados.id}`)
      .then(response => {
        setDetalhes(response.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          alert("Faça o Login para visualizar a página");
          window.location.href = "/login";
        } else alert(err.message);
      });
  };

  if ((!detalhes || Props.dados.id !== detalhes.dados.pe_id) && Props.dados.id) {
    getDetalhes()
  }

  return (
    <>
      <Container>
        {Props.dados.nome === "Ninguem selecionado" ?

        // Quando não tem pessoas para serem exibidas
        <>
          <img src="./assets/ninguem.svg" style={{height: '21rem', width: '18rem', display: 'flex', alignSelf: 'center'}}/>
          <TitleNoResults>Ninguém selecionado :(</TitleNoResults>
        </>

        // Quando tem uma pessoa selecionada
        :detalhes &&
        <>
          <CardInfoPessoa dados={detalhes}/>
          <Body>
            <Grafico dados={detalhes}/>
            <Tarefas>

              <div>
                {/* Lista de Tarefas que estão com status "Não Iniciado"*/}
                <Lista titulo="Tarefas Não Iniciadas" func={getDetalhes} status="Não Iniciado">
                  {detalhes.tarefas.NaoIniciadas.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id}  dados={e}/>
                  )}
                </Lista>

                {/* Lista de Tarefas que estão com status "Em Andamento"*/}
                <Lista titulo="Tarefas em Andamento" func={getDetalhes} status="Em Desenvolvimento">
                  {detalhes.tarefas.EmDesenvolvimento.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id} dados={e}/>
                  )}
                </Lista>
              </div>

              <div>
                {/* Lista de Tarefas que estão com status "Concluido"*/}
                <Lista titulo="Tarefas Em Testes" func={getDetalhes} status="Em Testes">
                  {detalhes.tarefas.Testes.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id} dados={e}/>
                  )}
                </Lista>

                {/* Lista de Tarefas que estão com status "Concluido"*/}
                <Lista titulo="Tarefas Concluidas" func={getDetalhes} status="Concluido">
                  {detalhes.tarefas.Concluidas.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id} dados={e}/>
                  )}
                </Lista>
              </div>
            </Tarefas>
            
            {/* Lista de Projetos que a pessoa está*/}
            <Lista titulo="Projetos">
              {detalhes.projetos.map((e) =>
                <CardProjetosDaPessoa key={e.pr_id} titulo={e.pr_nome}/>
                )}
            </Lista>
          </Body>
        </>
        }
      </Container>
    </>
  );
}

export default Detalhes;
