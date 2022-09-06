import React from 'react';

import { 
  Container, 
  SearchInput, 
  SearchIcon 
} from './styles';

function SearchBar(Props) {
  return (
    <Container>
      <SearchInput placeholder={Props.placeholder} onChange={(e) => Props.handleChange(e.target.value)}/>
      <SearchIcon/>
    </Container>
  );
}

export default SearchBar;