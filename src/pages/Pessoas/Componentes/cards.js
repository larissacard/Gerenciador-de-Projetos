import React, { useEffect, useState } from 'react';
import api from '../../../api';

import { Organizer } from '../styles';

import CardPessoa from './CardPessoa';
import SearchEmptyState from '../../../Components/EmptyState';

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
        .get('/pessoas')
        .then((response) => {
          setInitialPessoas(response.data.data);
          setPessoas(response.data.data);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert('Faça o Login para visualizar a página');
            window.location.href = '/login';
          } else console.log(err.message);
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
        return pessoa.nome.toUpperCase().includes(keyword.toUpperCase());
      });
      setPessoas(results);
    } else {
      setPessoas(initialPessoas);
    }
    // setNome(keyword);
    const filt = Object.entries(Props.filtros).filter(f => !f[1])
    filt.forEach(f => {
      setPessoas(valorAntigo => valorAntigo.filter(p => p.cargo !== f[0]))
    })
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
    <Organizer style={{ overflowY: 'scroll' }}>
      {pessoas.length > 0 ?
        pessoas.map((p) => (
          <CardPessoa
          key={p.id}
          id={p.id}
          nome={p.nome}
          profissao={p.cargo}
          foto={p.foto}
          childToParent={childToParent}
          pessoaSelecionada={pessoaSelecionada}
          />
        ))
      : <SearchEmptyState titulo='Pessoa não Encontrada! ;-;' />}
    </Organizer>
  );
}

export default Cards;