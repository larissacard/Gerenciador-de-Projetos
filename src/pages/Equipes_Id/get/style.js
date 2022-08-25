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
    font-size: 30px;
    line-height: 48px;

    color: #280948;

    margin-top: 16px;
    margin-left: 17px;

`;

export const Editar = styled.button`
    width: 82px;
    height: 20px;

    color: white;

    text-align: center;

    margin-right: 5px;

    background-color: #FF9533;
    border-radius: 14px;
`

export const Delete = styled.button`
    width: 82px;
    height: 20px;

    text-align: center;

    margin-top: 31px;

    color: white;
    background-color: #E74444;
    border-radius: 14px;
`

export const SubTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    color: #280948;

    margin-top: 18px;
    margin-bottom: 11px;
    margin-left: 17px;
`;

export const SmallCont = styled.div`
    height: 43%;
    margin-bottom: 30px;

    overflow-y: scroll;
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
    width: 90%;
    height: 2.813rem;
    
    align-items: center;
    display:flex;
    justify-content: space-between;

    margin-left: 17px; 
    margin-bottom: 21px;
    border-radius: 20px;

`;

export const Ellipse = styled.div`
    border: solid 1px #280948;
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 20px;
    
    margin-left: 10px;

    display: flex;
    justify-content: center;
`;

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

export const NoResults = styled.div`
    margin-left: 65px;
    background-image: url("../../../../assets/noresults.svg");
    width: 21rem;
    height: 18rem;
    background-size: contain;
`;

export const TitleNoResults = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    margin-top: 10px;
    margin-left: 50px;

    color: #764BA2;
`;

export const Card = styled.div`
    width: 9.9rem;
    height: 14.125rem;
    background-color: white;

    margin-left: -5px;
    margin-right: 10px;

    box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const CardIcon = styled.div`
    background-color: #764BA2;
    width: 40px;
    height: 40px;
    display:flex;
    justify-content: center;

    align-items: center;

    border-radius: 10px;

    margin-top: 24px;
    margin-left: 13px;
    
`;

export const Pontos = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    gap: 10px;
    
    margin-top: 33px;
    margin-left: 13px;
    
    color: #280948;
    
    h6{ 
        font-size: 20px;
        line-height: 28px;
        color: #280948;
        font-weight: 400;
    }
    
`;

export const Tasks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 17px;
`;

export const BigTaskCard = styled.div`
    width: 16.813rem;
    height: 20.563rem;

    background: rgba(150, 178, 253, 0.3);
    border-radius: 10px;
    
    padding-top: 19px;
    padding-left: 22px;
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    

    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.2);

    h5{
        margin-top: -20px;
        font-weight: 500;
        font-size: 17px;
        line-height: 26px;

        align-self: flex-start;
        color: #280948;
    }
`;

export const SmallInfo = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;

    p{
        margin-left: 3px;
        font-weight: 500;
        font-size: 13px;
        line-height: 15px;

        color: #280948;
    }
`;

export const SmallIcon = styled.div`
    width: 36px;
    height: 36px;

    background: #96B3FD;
    border-radius: 8px;

    display: flex;

    justify-content: center;
    align-items: center;
    
`;

export const CardTask = styled.div`
    width: 16.813rem;
    height: 7.75rem;

    background: rgba(150, 178, 253, 0.3);
    border-radius: 10px;

    padding-top: 15px;
    padding-left: 15px;
    margin-bottom: 10px;

    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.2);

    h5{
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;

        color: #280948;
    }

    h6{
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;

        color: #280948;
    }

    p{
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;

        color: rgba(118, 75, 162, 0.5);
    }
`;

export const Imagem = styled.div`
    img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
    }
`;

