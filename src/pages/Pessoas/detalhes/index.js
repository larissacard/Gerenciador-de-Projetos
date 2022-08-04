import React, { useState, useEffect } from "react";
import CardInfoPessoa from "../../../components/CardInfoPessoa";
import CardProjetosDaPessoa from "../../../components/CardProjetosDaPessoa";
import CardTarefasDaPessoa from "../../../components/CardTarefasDaPessoa";
import Lista from "../../../components/Lista";
import api from "../../../api";
import { Container, Body, Tarefas } from "./styles";
import { Grafico } from "./grafico";

function Detalhes(Props) {
  console.log(Props)
  const [detalhes, setDetalhes] = useState(null)
  const [updateScreen, setUpdate] = useState(true)

    const getDetalhes = async () => {
      const response = await api.get(`/pessoas/${Props.dados.id}`);
      setDetalhes(response.data);
      setUpdate(false)
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
          Nenhuma pessoa selecionada  
        </>

        // Quando tem uma pessoa selecionada
        :detalhes &&
        <>
          <CardInfoPessoa dados={detalhes}/>
          <Body>
            <Grafico/>
            <Tarefas>

              <div>
                {/* Lista de Tarefas que estão com status "Não Iniciado"*/}
                <Lista titulo="Tarefas Não Iniciadas" func={getDetalhes} width="49%" height="220px" status="Não Iniciado">
                  {detalhes.tarefas.NaoIniciadas.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id}  dados={e}/>
                  )}
                </Lista>

                {/* Lista de Tarefas que estão com status "Em Andamento"*/}
                <Lista titulo="Tarefas em Andamento" func={getDetalhes} width="49%" height="220px" status="Em Desenvolvimento">
                  {detalhes.tarefas.EmDesenvolvimento.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id} dados={e}/>
                  )}
                </Lista>
              </div>

              <div>
                {/* Lista de Tarefas que estão com status "Concluido"*/}
                <Lista titulo="Tarefas Em Testes" func={getDetalhes} width="49%" height="220px" status="Em Testes">
                  {detalhes.tarefas.Testes.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id}  dados={e}/>
                  )}
                </Lista>

                {/* Lista de Tarefas que estão com status "Concluido"*/}
                <Lista titulo="Tarefas Concluidas" func={getDetalhes} width="49%" height="220px" status="Concluido">
                  {detalhes.tarefas.Concluidas.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id}  dados={e}/>
                  )}
                </Lista>
              </div>
            </Tarefas>
            
            {/* Lista de Projetos que a pessoa está*/}
            <Lista titulo="Projetos" width="100%" height="220px">
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
