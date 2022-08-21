import styled from 'styled-components';
import { Lupa } from '../../styles/Icons';

export const Container = styled.div`
    width: min(1440px, 90vw);
    height: min(900px, 90vh);
    margin: 24px;

    background-color: #F5F5F7;
    display: flex;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 32px;

    @media (max-width: 480px) {
        display: flex;
        flex-wrap: wrap;
    }
    overflow: hidden;
`;

export const ColunaUm = styled.div`
    width: 46%;
    height: calc(100% - 48px);
    margin: 24px 0px;
    padding: 0 10px;
    border-radius: 20px;

    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const ContGrafico = styled.div`
    width: 100%;
    height: 40%;
`;

export const TopGrafico = styled.div`
    margin-top: 20px;

    h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        color: var(--roxo);
        padding-left: 15px;
        }
`;

export const ColunaDois = styled.div`
    width: 33%;
    height: calc(100% - 48px);
    margin: 24px 10px;
    background-color: #fff;
    padding: 0 10px;
    border-radius: 20px;
    
    display: flex;
    flex-direction: column;

    position: relative;
`;

export const CardCalendar = styled.div`
    width: 100%;
    height: auto;
    padding: 15px 20px;
    border-radius: 20px;

    background-color: white;
`;

export const Agenda = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10px;
    padding: 10px 5px;
    border-radius: 20px;

    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    overflow-y: auto;

    ::-webkit-scrollbar-thumb{
        background: #764BA2;
        border-radius: 10px;
        width: 5px;
    }
        
    ::-webkit-scrollbar{
        background-color: #F5F5F7;
        width: 5px;
        border-radius: 10px;
  }
`;

export const ContProjetos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContMais = styled.div`
    display: flex;
    align-items: center;
`;

export const CabecalhoProjetos = styled.div`
    display: flex;
    top: 0;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 2;

    padding-left: 15px;
    padding-right: 20px;
    padding-bottom: 10px;

    > h2 {
        color: #280948;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.87rem;
        width: 11.18rem;
    }

    @media (max-width: 767px) {
        h2{
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
        }
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
    margin-top: 10px;
    overflow-y: hidden;

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
        padding: 0px 10px;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 16.5%;
        transition-duration: .2s;
        
        @media (min-height: 750px) {
            height: 240px;
        }

        @media (min-height: 850px) {
            height: 280px;
        }

        @media (min-height: 920px) {
            height: 330px;
        }


        @media (min-height: 1000px) {
            height: 380px;
        }

    }
    
    ul::-webkit-scrollbar-thumb{
        background: #764BA2;
        border-radius: 10px;
        width: 5px;
    }
    
    ul::-webkit-scrollbar{
        background-color: #F5F5F7;
        width: 5px;
        border-radius: 10px;
    }

    @media (max-width: 767px) {
        height: 280px;
        overflow-y: hidden;

        p,a{
            font-weight: 600;
            font-size: 10px;
            line-height: 15px;
        }
    }
`;

export const Filtros = styled.div`
    z-index: 1;
    margin-right: 0.8rem;
`;

export const CardProjeto = styled.li`
    background: linear-gradient(90.24deg, #764BA2 9.3%, #667EEA 99.93%);

    height: 2.5rem;
    width: 100%;
    border-radius: 16px;

    padding: 10px;
    margin-bottom: 0.5rem;
    
    color: white;
    font-weight: 600;
    line-height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition-duration: .3s;
    
    &:nth-last-child(1) {
        margin-bottom: 2px;
    }

`; 
