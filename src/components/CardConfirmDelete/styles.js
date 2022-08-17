import styled from "styled-components";

export const DeletarPermanente = styled.button`
    background: #E74444;
    border-radius: 14px;
    width: 82px;
    height: 20px;
    font-size: 14px;
    color: #FFFFFF;

    &:hover {
        background-color: white;
        color: #E74444;
        border: solid 1px #E74444;
    }
`;

export const Cancelar = styled.button`
    background: rgba(40, 9, 72, 0.5);
    border-radius: 14px;
    width: 82px;
    height: 20px;
    font-size: 14px;
    color: #FFFFFF;

    &:hover {
        background-color: white;
        color: rgba(40, 9, 72, 0.5);
        border: solid 1px rgba(40, 9, 72, 0.5);
    }
`;

export const Deletar = styled.button`
    background: #E74444;
    border-radius: 14px;
    width: 82px;
    height: 20px;
    font-size: 14px;
    color: #FFFFFF;

    &:hover{
        transform: scale(1.1);
        transition-duration: .2s;
    }
`;
