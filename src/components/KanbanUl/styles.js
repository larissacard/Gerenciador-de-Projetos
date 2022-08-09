import styled from 'styled-components';

export const Container = styled.ul`
    width: 23.29%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 15px;

    h2 {
        font-weight: 600;
        font-size: 20px;
        color: #280948;
    }
`;

export const ContTarefas = styled.ul`
    margin-top: 20px;
    list-style: none;
    padding: 0;
    height: calc(100% - 70px);

    li+li {
        margin-top: 21px;
    }

    overflow-y: scroll;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonMore = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    width: 30px;
    font-size: 30px;
    border-radius: 50%;
    background-color: #667EEA;
    color: #fff;
    transition-duration: .2s;

    &:hover {
        transition-duration: .2s;
        background: #4B67E4;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;

    padding: 5px 15px;

    &:hover {
        transition-duration: .2s;
        background: #ddd;
    }
`;

export const ContButtons = styled.div`
    display: flex;
    margin-top: 10px;

    > button + button {
        margin-left: 10px;
    }
`;