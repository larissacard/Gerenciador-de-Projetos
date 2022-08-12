import { width } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 34.313rem;
    max-height: 53.25rem;
    background-color: white;
`

export const ColunaUm = styled.div`
    width: 37%;
    height: calc(100% - 48px);
    margin: 24px 0px;
    padding: 0 10px;
    border-radius: 20px;

    background-color: white;
    display: flex;
    flex-direction: column;
`

export const ColunaDois = styled.div`
    width: 45%;
    height: calc(100% - 48px);
    margin: 24px 10px;
  
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;

    color: #280948;

    margin-top: 16px;
    margin-left: 17px;
`;

export const SubTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    color: #280948;
    margin-top: 18px;
    margin-bottom: 11px;
    margin-left: 17px;
`;

export const Members = styled.div`
    color: #280948;

    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    margin-top: 18px;
    margin-left: 17px;
`;

export const Person = styled.div`
    border: solid 1px #280948;
    width: 30%;
    height: 2.813rem;
    
    display:flex;
    justify-content: space-between;

    margin-left: 17px; 
    margin-bottom: 21px;
    border-radius: 20px;

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


`;

export const Ellipse = styled.div`
    border: solid 1px #280948;
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 20px;
    
    margin-left: 10px;
    display: flex;
    justify-content: center;



`

export const Icon = styled.div`
    border: 0.5px solid #280948;
    width: 1.9rem;
    height: 1.9rem;

    align-self: center;

    border-radius: 20px;

`;

export const Name = styled.div`
    color: #280948;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;

export const Job = styled.div`
    color: #280948;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;

export const TotalTask = styled.div`
    color: #280948;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-right: 33px;
`;

export const Card = styled.div`
    width: 10.813rem;
    height: 14.125rem;

    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CardIcon = styled.div`
    background-color: #764BA2;
    width: 40px;
    height: 40px;
    display:flex;
    justify-content: center;

    align-items: center;

    border-radius: 10px;
    
`;

export const Ranking = styled.div`

`