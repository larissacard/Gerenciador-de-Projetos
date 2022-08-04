import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    width: 3.25rem;
    height: 3.25rem;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    border: none;
    transition-duration: .2s;
    
    img{
        width: 1.5rem;
        height: 1.5rem;
        align-self: center;
    }

    &:hover{
        transform: scale(1.1);
        transition-duration: .2s;
    }
`;

export const Editar = styled.button`
    background: #FF9533;
    border-radius: 14px;
    width: 82px;
    height: 20px;
    font-size: 14px;
    color: #FFFFFF;
    margin-right: 8px;
    
    &:hover{
        transform: scale(1.1);
        transition-duration: .2s;
    }
`;

