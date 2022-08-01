import React, {useState} from "react";
import Header from "../../components/header";
import SearchBar from "../../components/SearchBar"
import CardCriar from "../../components/CardCriar"

import CardAgenda from "../../components/CardAgenda";
import PostTarefas from "./modal";
import Cards from "./cards";
import { Container, ColunaUm, ColunaDois } from "./styles";


function Tarefas() {
  const [search, setSearch] = useState("")
  
  function handleChange(e) {
    setSearch(e);
  }

  return (
    <Container>
      <Header/>
      <ColunaUm>
        <h1>Tarefas</h1>
        <SearchBar placeholder="Pesquise uma tarefa aqui..." handleChange={handleChange}/>
        <Cards search={search}/>
      </ColunaUm>

      <ColunaDois>
        <CardCriar titulo="Criar Tarefa" descricao="Criar uma Nova Tarefa" button={<PostTarefas/>}/>
      </ColunaDois>
    </Container>

    // <div
    //       {/* -=-=-=-=-=-=-=-=-=-=-=-=Ajuste do calendario=-=-=-=-=-=-=-=-=-=-=-=-=  */}
    //       <div className="calendario">
    //         <img src="assets/calendario.svg" alt="calendario"/>
    //       </div>
    //       <Agenda>
    //         <CardAgenda titulo="Gp Inovação" hora="9:00 AM" />
    //         <CardAgenda titulo="Gerenciamento de Pousadas" hora="11:00 AM" />
    //         <CardAgenda titulo="Evento Tal" hora="15:00 PM" />
    //         <CardAgenda titulo="Bla Bla Bla" hora="22:00 PM" />
    //       </Agenda>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Tarefas;
