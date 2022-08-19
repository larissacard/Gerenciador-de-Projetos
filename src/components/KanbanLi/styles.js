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
