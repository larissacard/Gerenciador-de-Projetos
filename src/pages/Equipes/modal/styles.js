import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    border-radius: 10px;
    border: none;
    transition-duration: .2s;
    
    img{
        width: 2.5rem;
        height: 2.5rem;
        align-self: center;
    }

    &:hover{
        transform: scale(1.1);
        transition-duration: .2s;
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