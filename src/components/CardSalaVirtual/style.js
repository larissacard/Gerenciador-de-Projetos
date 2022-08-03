import styled from "styled-components";

export const Title = styled.div`
    color: #280948;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-left: 0.5rem;
`;

export const Discord = styled.div`
    width: 100%;
    min-height: 5rem;
    border-radius: 20px;
    background-image: url("assets/discord.svg");
    background-repeat: no-repeat;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    button {
        width: 39px;
        height: 34px;
        background-color: white;
        border-radius: 10px;
    }
    a{
        text-decoration: none;
        color: #5765F2;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
    }
`;

export const Gather = styled.div`
    width: 100%;
    min-height: 5rem;
    border-radius: 20px;
    background-image: url("assets/gather.svg");
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    button {
        text-align: center;
        width: 39px;
        height: 34px;
        background-color: white;
        border-radius: 10px;
        
    }
    a{
        text-decoration: none;
        color: #7576D0;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
    }
`;
