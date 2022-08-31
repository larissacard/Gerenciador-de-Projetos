import styled from 'styled-components';

export const ContDados = styled.div`
    height: calc(100% - 48px);
    width: 80%;
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
`;

export const Top = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
 align-items: flex-end;
`;

export const Detalhamento = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Trelo = styled.div`
    display: flex;
    justify-content: space-between;
    height: calc(100% - 245px);
    margin-top: 15px;
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

    >p {
        color: #280948;
        margin-left: 5px;
        margin-top: 10px;
    }
`;
