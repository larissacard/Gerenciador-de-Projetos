import styled from 'styled-components';

export const Container = styled.ul`
    background-color: white;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1);
    border-radius: 15px;
    list-style: none;
    padding: 15px 10px;
    overflow-y: auto;
    
    word-wrap: break-word;
    height: 130px;
    width: fit-content;

    margin-right: 10px;

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

    @media (max-width: 480px) {
        width: 125%;
        height: 50%;
    }
`;
