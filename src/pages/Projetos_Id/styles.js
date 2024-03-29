import styled from 'styled-components';

export const ContDados = styled.div`
    height: calc(100% - 48px);
    width: 80%;
    margin: 24px 0px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) {
        height: fit-content;
    }
`;

export const Titulo = styled.h1`
    height: auto;
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 32px;
    color: var(--roxo);
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

    @media (max-width: 1280px) {
        padding-right: 15px;
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;

     @media (max-width: 480px) {
        display: flex;
        flex-direction: column;

        margin-left: 67px;
    } 
`;

export const Detalhamento = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Trelo = styled.div`
    display: flex;
    justify-content: space-between;
    height: calc(100% - 240px);
    margin-top: 10px;

    @media (max-width: 1280px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        padding-left: 20px;
    }

    @media (max-width: 480px) {
        overflow-x: scroll;
        overflow-y: hidden;

        margin: 0;

        width: 125%;
        gap: 15px;
    }
`; 

export const Main = styled.div`
    display: flex;
    align-items: center;

    > span {
        margin-top: 10px;
        margin-left: 5px;

        padding: 0px 10px;
        color: white;
        background-color: #667EEA;
        border-radius: 15px;
    }

    > p {
        color: #280948;
        margin-left: 5px;
        margin-top: 10px;
    }
`;