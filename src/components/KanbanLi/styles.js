import styled from 'styled-components';

export const Container = styled.li`
    background: rgba(150, 178, 253, 0.3);
    border-radius: 20px;

    width: calc(100%-28px);
    min-height: 133px;

    padding: 10px;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;

    h3 {
        font-weight: 600;
        font-size: 15px;
        color: #280948;
        width: calc(100% - 75px);
        line-height: 22px;
    }

    span {
        border-radius: 20px;
        padding: 0px 10px;
        color: #fff;
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
    }
    
    strong {
        font-size: 12px;
        font-weight: 600;
        color: #280948;
    }
`;
