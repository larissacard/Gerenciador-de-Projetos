import React, { useEffect, useState } from "react";
import api from "../../api";

import CardTarefa from "../../Components/CardTarefa";

function Cards(Props) {
  const [initialTarefas, setInitialTarefas] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [search, setSearch] = useState(Props.search);

  useEffect(() => {
    api
      .get("/tarefas")
      .then((response) => {
        setInitialTarefas(response.data.data.dados);
        setTarefas(response.data.data.dados);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          alert("Faça o Login para visualizar a página");
          window.location.href = "/login";
        } else console.log(err.message);
      });
  }, []);

  const handleChange = () => {
    if (!Props.search) {
      setTarefas(initialTarefas);
      return;
    }
    const filterTarefas = tarefas.filter((tarefas) =>
      tarefas.nome.toUpperCase().includes(Props.search.toUpperCase())
    );
    setTarefas(filterTarefas);
  };

  // Verifica se a barra de pesquisa teve alguma mudança
  if (Props.search !== search) {
    setSearch(Props.search);
    handleChange();
  }

  return (
    <ul style={{ overflowY: "scroll" }}>
      {tarefas.map((t) => (
        <CardTarefa key={t.id} dados={t} />
      ))}
    </ul>
  );
}

export default Cards;