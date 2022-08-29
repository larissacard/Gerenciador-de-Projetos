// substitui o cards.js

import CardPessoa from "../../components/CardPessoa";
import api from "../../api";
import { useEffect, useState } from "react";

function Cards(Props) {
  const [foundPessoas, setFoundPessoas] = useState();
  const [pessoas, setPessoas] = useState([]);
  const [pessoaSelecionada, setPessoaSelecionada] = useState(0);
  const [nome, setNome] = useState('')
  // const [search, setSearch] = useState(Props.search);
  // const [filtros, setFiltros] = useState(Props.filtros)

  // buscando todas as pessoas na API
  useEffect(() => {
    const getPessoas = async () => {
      api
        .get("/pessoas")
        .then((response) => {
          setPessoas(response.data);
          setFoundPessoas(response.data);
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

  const filter = (e) => {
    let keyword = ''
    if (e) keyword = e.target.value;
    if (keyword !== '') {
      const results = pessoas.filter((pessoa) => {
        return pessoa.pe_nome.toUpperCase().includes(keyword.toUpperCase());
      });
      setFoundPessoas(results);
    } else {
      setFoundPessoas(pessoas);
    }
    setNome(keyword);
  }
  // Filtrando as pessoas de acordo com a barra de pesquisa
  // const handleChange = () => {
  //   setPessoas(initialPessoas);
  //   if (Props.search) {
  //     const filterPessoas = pessoas.filter((pessoas) =>
  //     pessoas.pe_nome.toUpperCase().includes(Props.search.toUpperCase())
  //     );
  //     setPessoas(filterPessoas);
  //   }

  //   const filt = Object.entries(Props.filtros).filter(f => !f[1])
  //   filt.forEach(f => {
  //     setPessoas(valorAntigo => valorAntigo.filter(p => p.pe_cargo !== f[0]))
  //   })

  // };

  // Verifica se a barra de pesquisa teve alguma mudança
  // if (Props.search !== search || Props.filtros !== filtros) {
  //   setSearch(Props.search);
  //   setFiltros(Props.filtros)
  //   handleChange();
  // }

  // Envia as informações do card selecionado para o componente pai (index)
  const childToParent = (childdata) => {
    setPessoaSelecionada(childdata.id);
    Props.childToParent(childdata);
  };

  return (
    <>
    <input type='search' placeholder='Pesquise...' onChange={filter} value={nome}></input>
      <ul style={{ overflowY: "scroll" }}>
        {foundPessoas && foundPessoas.length > 0 ? (
          foundPessoas.map((pessoa) => (
            <CardPessoa
              key={pessoa.pe_id}
              id={pessoa.pe_id}
              nome={pessoa.pe_nome}
              profissao={pessoa.pe_cargo}
              foto={pessoa.pe_foto}
              childToParent={childToParent}
              pessoaSelecionada={pessoaSelecionada}
            />
          ))
        ) : (
          <h4>Pessoa não encontrada!</h4>
        )}
      </ul>
    </>
  )
}

export default Cards;
