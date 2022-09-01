import styled from "styled-components";

export const ColunaUm = styled.div`
    width: 37%;
    height: calc(100% - 48px);
    margin: 24px 0px;
    padding: 0 10px;
    border-radius: 20px;

    background-color: white;
    display: flex;
    flex-direction: column;

    padding-left: 17px;
    
    @media (max-width: 480px) {
        width: 100%;
        
        margin: 0;
        border-radius: 0px;
        padding-top: 10px;
    }
`;

export const ColunaDois = styled.div`
    width: 45%;
    height: calc(100% - 48px);
    margin: 24px 8px;

    padding-left: 17px;
  
    display: flex;
    flex-direction: column;
    background-color: white;

    border-radius: 20px;

    @media (max-width: 480px) {
        width: 100%;
        margin: 0;
        height: fit-content;
        border-radius: 0px;
        padding-top: 20px;
    }
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;

    color: var(--roxo);

    margin-top: 16px;
    


`;

export const Editar = styled.button`
    width: 82px;
    height: 20px;

    color: white;

    text-align: center;

    margin-right: 5px;

    background-color: #FF9533;
    border-radius: 14px;
`;

export const Delete = styled.button`
    width: 82px;
    height: 20px;

    text-align: center;

    margin-top: 31px;

    color: white;
    background-color: #E74444;
    border-radius: 14px;
`;

export const SubTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    color: var(--roxo);

    margin-top: 18px;
    margin-bottom: 15px;

`;

export const SmallCont = styled.div`
    height: 20rem;
    margin-bottom: 15px;
    

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
    color: var(--roxo);

    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    margin-top: 18px;

`;

export const Person = styled.div`
    border: solid 1px var(--roxo);
    width: 90%;
    height: fit-content;
    
    align-items: center;
    display:flex;
    justify-content: space-between;


    margin-bottom: 21px;
    border-radius: 20px;

    @media (max-width: 480px) {
        width: 100%;
    }

`;

export const Ellipse = styled.div`
    border: solid 1px var(--roxo);
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 20px;
    
    margin-left: 10px;

    display: flex;
    justify-content: center;
`;

export const Icon = styled.img`
    border: 0.5px solid var(--roxo);
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
    color: var(--roxo);

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    
`;

export const TotalTask = styled.div`
    color: var(--roxo);

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    
    margin-right: 33px;
`;

export const NoResults = styled.div`
    margin-left: 65px;
    background-image: url("../../../../assets/semmembros.svg");
    width: 19rem;
    height: 16rem;
    background-size: cover;
    
    @media (max-width: 480px) {
        width: 16rem;
        height: 14rem;
    }
`;

export const TitleNoResults = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    margin-top: 10px;
    text-align: center;

    color: #764BA2;

    @media (max-width: 480px) {
        width: 100%;
        margin: 0;
        text-align: center;
    }
`;

export const Card = styled.div`
    width: 9.9rem;
    height: 14.125rem;
    background-color: white;
    

    margin-left: -5px;
    margin-right: 10px;

    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;

    @media (max-width: 1280px) {
        width: 98%;
        height: 60px;
        margin-bottom: 10px;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;

        h4 {
            margin-left: 10px;
        }
    }
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

    @media (max-width: 480px) {
       margin-top: 0;

    }
    
`;

export const Pontos = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    gap: 10px;
    
    margin-top: 33px;
    margin-left: 13px;
    
    color: var(--roxo);
    
    h6{ 
        font-size: 20px;
        line-height: 28px;
        color: var(--roxo);
        font-weight: 400;
    }

    @media (max-width: 480px) {
        margin: 0;
    }
    
`;

export const Tasks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);


    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;

        align-items: center;
    }

    @media (max-width: 1280px){
        width:100%;
        display: flex;
        align-items: flex-start;
        /* display: flex;
        flex-direction: column;

        align-items: center;

        overflow-y: scroll;
        ::-webkit-scrollbar-thumb{
        display: none;
        }
        
        ::-webkit-scrollbar{
        display:none;
        } */
    }
`;

export const BigTaskCard = styled.div`
    width: 90%;
    height: 20.563rem;

    background: rgba(150, 178, 253, 0.3);
    border-radius: 10px;
    
    
    padding-top: 19px;
    padding-left: 22px;
    margin-top: 35px;

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
        color: var(--roxo);
    }

    @media (max-width: 480px) {
        margin: 0;  
    }

    @media (max-width: 1280px) {
        margin: 0;  
        width: 14.813rem;

        display: flex;
        align-self: center;
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

        color: var(--roxo);
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
    width: 90%;
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

        color: var(--roxo);
    }

    h6{
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;

        color: var(--roxo);
    }

    p{
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;

        color: rgba(118, 75, 162, 0.5);
    }

    @media (max-width: 1280px) {
        margin-left: 20px;
        margin-right: 10px;
        
        width: 85%;
        height: fit-content;
    }

`;

export const Imagem = styled.div`
    img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const OrganizeTasks = styled.div`
    margin-top: -40px;
    margin-bottom: 40px;

    @media (max-width: 480px){
        margin-top: 10px;
        margin-bottom: 0;

    }
    @media (max-width: 1280px){
        margin-top: 10px;
        margin-bottom: 0;

        display: flex;
        flex-direction: column;
        align-self: center;


    }
`;

export const OrganizeTeam = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1280px){
      display: flex;
      flex-direction: column;
      align-items: center;

      overflow-x: scroll;
      ::-webkit-scrollbar-thumb{
      display: none;
      }
      
      ::-webkit-scrollbar{
      display:none;
      }
    }
`;