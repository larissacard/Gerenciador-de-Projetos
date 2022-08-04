import React, { useState, useEffect } from "react";
import CardInfoPessoa from "../../../components/CardInfoPessoa";
import CardProjetosDaPessoa from "../../../components/CardProjetosDaPessoa";
import CardTarefasDaPessoa from "../../../components/CardTarefasDaPessoa";
import Lista from "../../../components/Lista";
import api from "../../../api";
import { Container, Body, Tarefas } from "./styles";
import { Grafico } from "./grafico";

function Detalhes(Props) {
  const [detalhes, setDetalhes] = useState(null)

  useEffect(() => {
    const getDetalhes = async () => {
      const response = await api.get(`/pessoas/${Props.dados.id}`);
      setDetalhes(response.data);
    };
    if ((!detalhes || Props.dados.id !== detalhes.dados.pe_id) && Props.dados.id) {
      getDetalhes()
    }
  })

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
                <Lista titulo="Tarefas Não Iniciadas" width="49%" height="220px">
                  {detalhes.tarefas.NaoIniciadas.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id} titulo={e.tr_nome} prioridade={e.tr_prioridade} data={e.tr_data_criacao}z/>
                  )}
                </Lista>

                {/* Lista de Tarefas que estão com status "Em Andamento"*/}
                <Lista titulo="Tarefas em Andamento" width="49%" height="220px">
                  {detalhes.tarefas.EmDesenvolvimento.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id} titulo={e.tr_nome} prioridade={e.tr_prioridade} data={e.tr_data_criacao}/>
                  )}
                </Lista>
              </div>

              <div>
                {/* Lista de Tarefas que estão com status "Concluido"*/}
                <Lista titulo="Tarefas Em Testes" width="49%" height="220px">
                  {detalhes.tarefas.Testes.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id} titulo={e.tr_nome} prioridade={e.tr_prioridade} data={e.tr_data_criacao}z/>
                  )}
                </Lista>

                {/* Lista de Tarefas que estão com status "Concluido"*/}
                <Lista titulo="Tarefas Concluidas" width="49%" height="220px">
                  {detalhes.tarefas.Concluidas.map((e) =>
                    <CardTarefasDaPessoa key={e.tr_id} titulo={e.tr_nome} prioridade={e.tr_prioridade} data={e.tr_data_criacao}z/>
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
