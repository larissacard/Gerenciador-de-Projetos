import styled from "styled-components";

export const Container = styled.button`
  height: 120px;
  width: 90%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;

  cursor: pointer;
  z-index: 1;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  transition-duration: .2s;

  @media (max-width: 480px) {
    margin-left: 20px;

    width: 110%;
    height: fit-content;  
  }
`;

export const InfoPessoa = styled.div`
  text-align: left;
  > h3 {
    font-weight: 500;
    font-size: 20px;
    color: var(--roxo);
  }

  > p {
    font-weight: 400;
    font-size: 10px;
    color: #764ba2;
  }

  @media (max-width: 480px) {
    h3 {
      word-wrap: break-word;
      width: 120px;
    }
    
  }
`;

export const FotoPerfil = styled.img`
    height: 80px;
    width: 80px;

    background-color: white;
    margin: 0px 5px;
    border-radius: 15px;
`;
