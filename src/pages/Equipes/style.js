import styled from "styled-components";

export const ContainerUnico = styled.div`
    width: 80%;
    height: calc(100% - 48px);
    margin: 24px 0px;
    background-color: white;
    border-radius: 20px;

    padding: 0 19px;
`

export const CardAdicionar = styled.button`
    height: 18.75rem;
    width: 15.60rem;
    background: rgba(118, 75, 162, 0.2);
    border: 1px dashed rgba(40, 9, 72, 0.2);
    border-radius: 24px;

`
export const AllCards = styled.div`
    height: 46rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 21px;

    overflow-y: auto;

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

`

export const Title = styled.div`
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #280948;
    margin-bottom: 31px;
    margin-top: none;
`

export const Card = styled.div`
    height: 18.75rem;
    width: 15.60rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: rgba(118, 75, 162, 0.2);
    border: 1px solid #764BA2;
    border-radius: 24px;

`

export const Name = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;  
    color: #280948;
    text-align: center;
`

export const FooterCard = styled.div`
    text-align: center;
    background: rgba(118, 75, 162, 0.5);
    border-radius: 0px 0px 24px 24px;

    a{
        text-decoration: none;
        color: #280948;
    }
    &:hover{
        background-color: #280948;
        font-weight: 500;

        a{
            color: white;
        }
    }
`
export const Icon = styled.div`
    background-color: white;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    align-self: center;
    text-align: center;
`