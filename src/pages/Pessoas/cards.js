import CardPessoa from "../../components/CardPessoa";
import api from "../../api";
import { useEffect, useState } from "react";

function Cards(Props) {
  const [initialPessoas, setInitialPessoas] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [pessoaSelecionada, setPessoaSelecionada] = useState(0);
  const [search, setSearch] = useState(Props.search);
  const [filtros, setFiltros] = useState(Props.filtros)

  // buscando todas as pessoas na API
  useEffect(() => {
    const getPessoas = async () => {
      api
        .get("/pessoas")
        .then((response) => {
          setInitialPessoas(response.data);
          setPessoas(response.data);
        })
        .catch((err) => {
          if (err.response.status == 401) {
            alert("Faça o Login para visualizar a página");
            window.location.href = "/login";
          } else alert(err.message);
        });
    };
    getPessoas();
  }, []);

  // Filtrando as pessoas de acordo com a barra de pesquisa
  const filter = () => {
    setPessoas(initialPessoas);
    let keyword = ''
    if (Props.search) keyword = Props.search;
    if (keyword !== '') {
      const results = initialPessoas.filter((pessoa) => {
        return pessoa.pe_nome.toUpperCase().includes(keyword.toUpperCase());
      });
      setPessoas(results);
    } else {
      setPessoas(initialPessoas);
    }
    // setNome(keyword);
  }

  // Verifica se a barra de pesquisa teve alguma mudança
  if (Props.search !== search || Props.filtros !== filtros) {
    setSearch(Props.search);
    setFiltros(Props.filtros)
    filter()
    // handleChange();
  }

  // Envia as informações do card selecionado para o componente pai (index)
  const childToParent = (childdata) => {
    setPessoaSelecionada(childdata.id);
    Props.childToParent(childdata);
  };

  return (
    <ul style={{ overflowY: "scroll" }}>
      {pessoas.map((p) => (
        <CardPessoa
          key={p.pe_id}
          id={p.pe_id}
          nome={p.pe_nome}
          profissao={p.pe_cargo}
          foto={p.pe_foto}
          childToParent={childToParent}
          pessoaSelecionada={pessoaSelecionada}
        />
      ))}
    </ul>
  );
}

export default Cards;
