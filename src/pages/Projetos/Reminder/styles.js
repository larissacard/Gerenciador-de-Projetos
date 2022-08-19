import styled from "styled-components"

export const Nota = styled.div`
    background: rgba(226, 228, 233, 0.1);
    border: 1px solid rgba(118, 75, 162, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;    

    height: 25%;

    background-image: url("assets/fundo.svg");
    background-repeat: no-repeat;
    background-position-x: right;

    margin-bottom: 12px;

    &:nth-last-child(1) {
        margin-bottom: 3px;
    }

`;

export const Save = styled.button`
    background-color: #6956E5;
    color: white;

    width: 82px;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 20px ;
    text-align: center;

    :hover{
        background-color: white;
        color: #6956E5;
        border: solid 1px #6956E5;
    }
`;

export const Name = styled.div`
    color: #280948;

    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    margin-top: 12px;

    img{
        margin-left: 17px;
        margin-right: 6px;
    }
`;

export const Descricao = styled.div`
    color: #280948;

    margin-left: 40px;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    opacity: 0.8;
`;

export const Container = styled.div`
    height: 320px;
    
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar-thumb{
        background: #764BA2;
        border-radius: 10px;
        width: 5px;
    }
        
    ::-webkit-scrollbar{
        background-color: #F5F5F7;
        width: 5px;
        border-radius: 10px;
    }

    @media (max-width: 1380px) {
        height: 260px;
    }

    @media (max-width: 767px) {
        height: 180px;
    }
`;

export const Lembretes = styled.div`
    height: 300px;
    width: 100%;
    padding-top: 0px;
    padding-right: 10px;
    margin-top: 16px;

    

`;

export const Datetime = styled.div`
    color: #280948;
    margin-right: 55px;
    margin-top: 6px;

    img{
        margin-right: 3px;
    }

`;

export const Delete = styled.div`
    margin-top: 7px;
    margin-right: 9px;
    margin-bottom: -10px;

    width: 15px;
    height: 15px;
    background-image: url('assets/cancel.svg');
    cursor: pointer;
    transition: transform .3s ease-in-out;
    
    :hover {
        transform: rotate(360deg);
    }
`;