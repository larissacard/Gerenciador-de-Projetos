import styled from 'styled-components';

export const Container = styled.div`
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
