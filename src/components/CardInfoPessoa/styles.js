import styled, { css } from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;

  background: white;
  margin-bottom: 20px;
  border-radius: 20px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;

    align-items: center;

    
  }
`;

export const InfoPessoa = styled.div`
  text-align: left; 
  width: 378px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h2 {
    font-weight: 500;
    font-size: 28px;
    color: #280948;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    margin-bottom: -10px;
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    color: #764BA2;
  }

  @media (max-width: 480px) {
    align-items: center;
    
  }
`;

export const FotoPerfil = styled.img`
  height: 225px;
  width: 225px;

  border: 10px solid #28094885;
  margin-right: 15px;
  background-color: #f1f1f1;
  border-radius: 15px;
`;

export const DadosTarefas = styled.ul`
  width: 100%;
  height: 128px;
  background: #F5F5F7;
  border-radius: 17px;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  > li {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;

    > p {
      font-weight: 500;
      font-size: 16px;
      color: #280948;
    }

    > span {
      font-style: italic;
      font-weight: 600;
      font-size: 16px;
      color: #764BA2;
    }
  }
`;

export const AllButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 171px;
  margin: 5px 0px;

  @media (max-width: 480px) {
    margin-top: 10px;
    margin-bottom: 10px;
    
  }
`;