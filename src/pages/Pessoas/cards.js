import CardPessoa from "../../components/CardPessoa";
import api from "../../api";
import { useEffect, useState } from "react";

function Cards(Props) {
  const [initialPessoas, setInitialPessoas] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [pessoaSelecionada, setPessoaSelecionada] = useState(0)
  const [search, setSearch] = useState(Props.search)

  // buscando todas as pessoas na API
  useEffect(() => {
    const getPessoas = async () => {
      try {
        const response = await api.get("/pessoas");
        setInitialPessoas(response.data);
        setPessoas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPessoas();
  }, []);

  // Filtrando as pessoas de acordo com a barra de pesquisa
  const handleChange = () => {
    if (!Props.search) {
      setPessoas(initialPessoas);
      return;
    }
    const filterPessoas = pessoas.filter((pessoas) =>
      pessoas.pe_nome.toUpperCase().includes(Props.search.toUpperCase())
    );
    setPessoas(filterPessoas);
  };

  // Verifica se a barra de pesquisa teve alguma mudança
  if (Props.search != search) {
    setSearch(Props.search)
    handleChange()
  }

  // Envia as informações do card selecionado para o componente pai (index)
  const childToParent = (childdata) => {
    setPessoaSelecionada(childdata.id)
    Props.childToParent(childdata)
  }

  return (
      <ul style={{overflowY:"scroll"}}>
        {pessoas.map((p) => (
          <CardPessoa key={p.pe_id} id={p.pe_id} nome={p.pe_nome} profissao={p.pe_cargo} childToParent={childToParent} pessoaSelecionada={pessoaSelecionada}/>
        ))}
      </ul>
  );
}

export default Cards;