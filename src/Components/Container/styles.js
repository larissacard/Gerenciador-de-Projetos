import styled from 'styled-components';

export const Cont = styled.div`
    width: min(1440px, 90vw);
    height: min(900px, 90vh);
    margin: 24px;

    background-color: #F5F5F7;
    display: flex;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 32px;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;

        width: 100vw;
        height: 100%;
        
        border-radius: 0;
        margin: 0;
        
        overflow: hidden;

        overflow-y: scroll;
            ::-webkit-scrollbar-thumb{
            display: none;
        }
        
        ::-webkit-scrollbar{
            display:none;
        }
    }
`;