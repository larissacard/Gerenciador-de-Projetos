import styled from "styled-components";

export const ContainerUnico = styled.div`
    width: 80%;
    height: calc(100% - 48px);
    margin: 24px 0px;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    padding: 0 25px;
`;

export const CardAdicionar = styled.button`
    height: 18.75rem;
    width: 15.60rem;
    background: rgba(118, 75, 162, 0.2);
    border: 1px dashed rgba(40, 9, 72, 0.2);
    border-radius: 24px;
`;

export const AllCards = styled.div`
    height: 46rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 21px;

    overflow-y: auto;

    padding: 10px 20px 40px 10px;

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

export const Title = styled.div`
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #280948;
    margin-bottom: 31px;
    margin-top: none;
`;

export const Card = styled.a`
    min-height: 18.75rem;
    min-width: 15.60rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    text-decoration: none;
    color: #444;

    background-color: white;
    border-radius: 24px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);

    &:hover {
        text-decoration: none;
        color: #444;
        background: rgba(118, 75, 162, .05);
    }
`;

export const Name = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 30px; 
    color: #280948;
    text-align: center;
`;

export const FooterCard = styled.div`

    a{
        text-decoration: none;
        color: #280948;
    }
    &:hover{
        background-color: #280948;
        border-radius: 7px;
        width: 57%;
        text-align: center;
        font-weight: 400;

        a{
            color: white;
        }
    }
`;
export const Icon = styled.div`
    background-color: white;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    align-self: center;
    text-align: center;
`;

export const Retangulo = styled.div`
    width: 4.813rem;
    height: 11.063rem;
    position: absolute;
    top: 0px;
    right: 0px;

    background: rgba(220, 211, 230, 0.6);
    border-radius: 0px 24px 0px 80px;
    
`;

export const TeamLength = styled.div`
    background: rgba(220, 211, 230, 0.6);
    border-radius: 10px;
    padding: 2px 10px;
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

export const Elipse = styled.div`
    border-radius: 90%;
    border: 3px solid #280948;
    width: 118px;
    height: 119px;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const SmallElipse = styled.div`
    border-radius: 90%;
    width: 108px;
    height: 110px;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: url("assets/gatoruivo.svg");
    
`;