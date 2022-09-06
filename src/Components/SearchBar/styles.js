import styled from "styled-components";

import { Lupa } from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  border: 2px solid #764BA2;

  padding: 5px 15px;
  border-radius: 25px;
  background-color: #f9f9f9;
`;

export const SearchInput = styled.input`
  width: calc(100% - 25px);
  border: none;
  background-color: transparent;
  outline: none;
  color: #666;
`;

export const SearchIcon = styled(Lupa)`
  width: 25px;
  height: 25px;
  z-index: 2;

  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.05);
    transform: rotate(-7deg);
    transition-duration: 0.3s;

    cursor: pointer;
  }
`;