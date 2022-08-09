import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    border-radius: 10px;
    border: none;
    transition-duration: .2s;

    min-width: 16.50rem;
    height: 18.75rem;
    background: rgba(118, 75, 162, 0.2);
    border: 1px dashed rgba(40, 9, 72, 0.2);
    border-radius: 24px;
    
    img{
        width: 2.5rem;
        height: 2.5rem;
        align-self: center;
    }

    &:hover{
        transform: scale(1.04);
        transition-duration: .2s;
    }
`;

export const ContButtons = styled.div`
    display: flex;
`;

export const ButtonForm = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    transition-duration: .2s;

    background: #eee;
    padding: 2px 10px;

    &:hover {
        background: #ddd;
    }
`;

export const Name = styled.div`
    font-weight: 400;
    font-size: 23.8953px;
    line-height: 32px;
    color: #280948; 
    text-align: center;
    padding: 5px 20px;
`