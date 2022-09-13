import React, { useEffect, useState } from 'react';
import api from '../../../api';

import { Organizer } from '../styles';

import CardPessoa from './CardPessoa';
import SearchEmptyState from '../../../Components/EmptyState';

function Cards(Props) {
  const [pessoaSelecionada, setPessoaSelecionada] = useState(0);
  const [search, setSearch] = useState(Props.search);
  const [filtros, setFiltros] = useState(Props.filtros)

  // Filtrando as pessoas de acordo com a barra de pesquisa
  const filter = () => {
    Props.setPessoas(Props.pessoas);
    let keyword = ''
    if (Props.search) keyword = Props.search;
    if (keyword !== '') {
      const results = Props.pessoas.filter((pessoa) => {
        return pessoa.nome.toUpperCase().includes(keyword.toUpperCase());
      });
      Props.setPessoas(results);
    } else {
      Props.setPessoas(Props.pessoas);
    }
    // setNome(keyword);
    const filt = Object.entries(Props.filtros).filter(f => !f[1])
    filt.forEach(f => {
      Props.setPessoas(valorAntigo => valorAntigo.filter(p => p.cargo !== f[0]))
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
      {Props.pessoas.length > 0 ?
        Props.pessoas.map((p) => (
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