import styled from 'styled-components';

export const Container = styled.div`
    width: min(1440px, 90vw);
    height: min(900px, 90vh);
    margin: 24px;

    background-color: #F5F5F7;
    display: flex;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
`;

export const ContDados = styled.div`
    height: calc(100% - 48px);
    width: 80%;
    border: 1px solid red;
    margin: 24px 0px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
`;


export const Titulo = styled.h1`
    height: auto;
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 32px;
    color: #280948;
`;

export const Buttons = styled.div`
    height: 20px;
    display: flex;

    > button {
        border-radius: 14px;
        width: 82px;
        height: 20px;
        font-size: 14px;
        color: #FFFFFF;

        &+button {
            margin-left: 5px;
        }
    }
`;

export const Top = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
 align-items: flex-end;
`;

export const Editar = styled.button`
    background: #FF9533;
`;

export const Deletar = styled.button`
    background: #E74444;
`;

export const Detalhamento = styled.div``;

export const Dados = styled.div``;

export const Descricao = styled.div``;

export const StatusTarefas = styled.div``;

export const Trelo = styled.div``; 