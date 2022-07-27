import React from "react";
import CardInfoPessoa from "../../../components/CardInfoPessoa";
import CardProjetosDaPessoa from "../../../components/CardProjetosDaPessoa";
import CardTarefasDaPessoa from "../../../components/CardTarefasDaPessoa";
import Lista from "../../../components/Lista";
import { Container, Tarefas } from "./styles";

function Detalhes(Props) {
  return (
    <>
      <Container>
        {Props.dados.nome == "Ninguem selecionado"
        ? <>
          Nenhuma pessoa selecionada
        </>

        : <>
          <CardInfoPessoa nome={Props.dados.nome} profissao={Props.dados.profissao} />
          <Tarefas>
            <Lista titulo="Tarefas em Andamento" elementos={[
              <CardTarefasDaPessoa titulo="teste" prioridade="Alta" data="okjah"/>,
              <CardTarefasDaPessoa titulo="teste" prioridade="Média" data="okjah"/>,
              <CardTarefasDaPessoa titulo="teste" prioridade="Baixa" data="okjah"/>
            ]}/>
            <Lista titulo="Tarefas em Andamento" elementos={[
              <CardTarefasDaPessoa titulo="teste" prioridade="Alta" data="okjah"/>,
              <CardTarefasDaPessoa titulo="teste" prioridade="Média" data="okjah"/>,
              <CardTarefasDaPessoa titulo="teste" prioridade="Baixa" data="okjah"/>
            ]}/>
          </Tarefas>

          <Lista titulo="Projetos" elementos={[
            <CardProjetosDaPessoa titulo="Gp Inovação"/>
          ]}/>
        </>
        }
      </Container>
    </>
  );
}

export default Detalhes;
