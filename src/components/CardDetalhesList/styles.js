import styled from 'styled-components';

export const Container = styled.ul`
    background-color: white;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1);
    border-radius: 15px;
    list-style: none;
    padding: 15px 10px;
    overflow-y: auto;
 
    width: 50px;

    strong {
        font-weight: 600;
        font-size: 14px;
        color: var(--roxo);
    }

    li {
        font-weight: 600;
        font-size: 14px;
        color: rgba(40, 9, 72, 0.5);
    }
`;
