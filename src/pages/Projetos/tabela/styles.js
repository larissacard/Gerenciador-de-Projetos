import styled from 'styled-components';
import { Lupa } from '../../../styles/Icons';

export const ContProjetos = styled.div`
    width: 100%;
`;

export const ContMais = styled.div`
    display: flex;
    align-items: center;
`;

export const CabecalhoProjetos = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    > h2 {
        color: #280948;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.87rem;
        width: 11.18rem;
    }
`;

export const Search = styled.div`
    border: 2px solid #280948;
    border-radius: 20px;
    height: 36px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 5px;
    
    > input {
        z-index: 2;
        outline: none;
        border: none;
        background-color: transparent;
        width: calc(100% - 50px);
        margin: 10px;
    }
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

export const ContTabela = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    overflow-y: scroll !important;
    height: 360px !important; 
    padding: 10px;

    a {
        color: white;
        text-decoration: none;
        background-color: transparent;
        border: none;
        font-weight: 600;
        line-height: 1.7rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    &::-webkit-scrollbar-thumb{
        background: #764BA2;
        border-radius: 10px;
        width: 5px;
        height: 1.8rem;
}

    &::-webkit-scrollbar{
        background-color: #F5F5F7;
        width: 5px;
        height: 1.8rem;
        border-radius: 10px;
    }
`;

export const Filtros = styled.div`
    z-index: 1;
`;

export const CardProjeto = styled.div`
    background: linear-gradient(90.24deg, #764BA2 9.3%, #667EEA 99.93%);

    height: 2.5rem;
    width: 100%;
    border-radius: 16px;

    padding: 10px;
    margin-bottom: 0.5rem;
    
    color: white;
    font-weight: 600;
    line-height: 1.7rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition-duration: .3s;

    &:hover {
        transform: scale(1.02);
        transition-duration: .3s;
    }
`;
