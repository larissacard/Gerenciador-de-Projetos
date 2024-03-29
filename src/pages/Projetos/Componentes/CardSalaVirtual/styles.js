import styled from "styled-components";

import discord from '../../../../assets/discord.svg'
import gather from '../../../../assets/gather.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    margin-top: -15px;

    @media (max-width: 1600px) {
        margin-top: -20px;
    }

    @media (min-height: 900) {
        
    }
`;

export const Title = styled.h3`
    color: var(--roxo);
    font-weight: 600;
    font-size: 18px;
    margin-left: 0.5rem;
    margin-top: 8px;
`;

export const ContBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;

    div + div {
        margin-top: 5px;
    }
`;

export const Box = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 20px;
    
    > div {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        border-radius: 20px;
    }

    a {
        background-color: white;
        border-radius: 10px;

        padding: 3px 16px;
        text-decoration: none;
        color: #5765F2;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
    }
`;

export const Discord = styled.div`
    background-image: url(${discord});
`;

export const Gather = styled.div`
    background-image: url(${gather});
`;