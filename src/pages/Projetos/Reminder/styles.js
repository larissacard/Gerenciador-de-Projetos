import styled from "styled-components"
import { TextField } from '@mui/material';

export const Nota = styled.div`
    background: rgba(226, 228, 233, 0.1);
    border: 1px solid rgba(118, 75, 162, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;    


    height: 32%;

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
    width: 100%;
    padding-top: 0px;
    padding-right: 10px;
    margin-top: 16px;

    @media (min-width: 750px){
        height: 100px;
    }

    @media (min-width: 100px){
        height: 200px;
    }
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

export const CssTextField = styled(TextField)({
    '&:hover .MuiInputLabel-outlined': {
        color: '#6956E5',
        transition: '0.5s',
    },
    '& .MuiOutlinedInput-root': {
        color: '#764BA2',
        transition: '0.5s',
        '&:hover' :{
            color: '#6956E5',
            transition: '0.5s',
        },
        '&.Mui-focused': {
            borderColor: '#764BA2',
            color: '#280948',
            transition: '0.5s',
        },
        '& fieldset': {
            borderRadius: 20,
            border: '2px solid #764BA2',
            transition: '0.5s',
        },
          '&:hover fieldset': {
            border: '2px solid #6956E5',
            transition: '0.5s',
          },
        '&.Mui-focused fieldset': {
            borderColor: '#280948',
            transition: '0.5s',
        },
    },
    '.MuiInputLabel-outlined': {
        color: '#764BA2',
        transition: '0.5s',
        '&.Mui-focused': {
            color: '#280948',
            transition: '0.5s',
        },
    },
})