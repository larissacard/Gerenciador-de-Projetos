import styled, { css } from 'styled-components';

export const Container = styled.li`
    background: rgba(150, 178, 253, 0.3);
    border: 2px solid rgba(150, 178, 253, 0);
    border-radius: 20px;
    width: calc(100%-28px);
    min-height: 75px;
    cursor: grab;
    padding: 10px;
    overflow-x: hidden;
    cursor: pointer;
    margin-bottom: 20px;
    
    ${props => props.isDragging && css`
    border: 2px dashed rgba(0,0,0,.2);
    box-shadow: none;
    background: transparent;
    
    * {
        opacity: 0;
    }
    `}
    `;


export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    
    h3 {
        font-weight: 600;
        font-size: 16px;
        color: #280948;
        width:100%;
        line-height: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    `;

export const Body = styled.div`
    ul {
        list-style: none;
        padding: 0;
    }
    
    li {
        font-weight: 600;
        font-size: 12px;
        color: rgba(40, 9, 72, 0.5);
        display: flex;
        justify-content: space-between;
    }
    
    p, strong {
        font-size: 12px;
        font-weight: 600;
        color: #280948;
    }
`;

export const Prioridade = styled.div`
    display: flex;
    
    span {
        border-radius: 20px;
        padding: 0px 10px;
        color: #fff;
    }
`;

export const ButtonCancel = styled.div`
    width: 15px;
    height: 15px;
    background-image: url('assets/cancel.svg');
    cursor: pointer;
    transition: transform .3s ease-in-out;
    
    :hover {
        transform: rotate(360deg);
    }
`;

export const StatusTarefa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    font-weight: 600;
    font-size: 16px;
    background: #667EEA;
    border-radius: 20px;
    color: #ffffff;
    padding: 5px 10px;
`;

export const PrioridadeTarefa = styled.div`
   
`;

export const Input = styled.input`
    border: 0;
    width: 100%;
    background-color: transparent;

    border: none;
`;

export const TituloSubtarefas = styled.h1`
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    color: #280948;
    margin-left: 2px;
`;

export const FormSubtarefas = styled.form`
    margin-top: -10px;
    `;

export const FormDiv = styled.div`
    display: flex;
    `;

export const LabelCheckbox = styled.label`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 6px;
    padding-left: 12px;
`;

export const CheckboxSubtarefas = styled.input`
    width: 18px;
    height: 18px;
    background-color: #280948;
    cursor: pointer;
`;

export const SpanCheckbox = styled.span`

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