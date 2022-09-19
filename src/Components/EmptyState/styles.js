import styled from "styled-components";
import searchImg from '../../assets/searchbar_emptystate.svg'

export const Search = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;

    span {
        color: #280948;
        margin-top: -30px;
    }
`;

export const EmptyState = styled.div `
    background-image: url(${searchImg});
    width: 290px;
    height: 290px;
`;