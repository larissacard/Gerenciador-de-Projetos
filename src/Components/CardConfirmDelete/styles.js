import styled from "styled-components";

export const DeletarPermanente = styled.button`
    background: rgba(231, 68, 68, 1);
    border-radius: 5px;
    padding: 4px 10px;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 600;

    &:hover {
        background-color: rgba(238, 50, 70, 1);
    }
`;

export const Cancelar = styled.button`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 4px 10px;
    font-size: 14px;
    color: rgba(40, 9, 72, 0.35);
    border: 1px solid #ccc;
    font-weight: 600;

    &:hover {
        background-color: rgba(204, 204, 204, 0.2); 
        color: rgba(40, 9, 72, 0.5);
        border: solid 1px rgba(40, 9, 72, 0.5);       
    }
`;

export const Deletar = styled.button`
    background: rgba(231, 68, 68, 1);
    border-radius: 14px;
    width: 82px;
    height: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
    border: none;
    
    &:hover {  
        transform: scale(1.1);
        transition-duration: .2s;
        background-color: rgba(238, 50, 70, 1);
    }
`;