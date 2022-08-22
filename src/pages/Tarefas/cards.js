import React, { useEffect, useState } from "react";
import api from "../../api";
import CardTarefa from "../../components/CardTarefa";

function Cards(Props) {
  const [initialTarefas, setInitialTarefas] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [search, setSearch] = useState(Props.search);

  useEffect(() => {
    api
      .get("/tarefas")
      .then((response) => {
        setInitialTarefas(response.data.dados);
        setTarefas(response.data.dados);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          alert("Faça o Login para visualizar a página");
          window.location.href = "/login";
        } else alert(err.message);
      });
  }, []);

  const handleChange = () => {
    if (!Props.search) {
      setTarefas(initialTarefas);
      return;
    }
    const filterTarefas = tarefas.filter((tarefas) =>
      tarefas.tr_nome.toUpperCase().includes(Props.search.toUpperCase())
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
        <CardTarefa key={t.tr_id} dados={t} />
      ))}
    </ul>
  );
}

export default Cards;
