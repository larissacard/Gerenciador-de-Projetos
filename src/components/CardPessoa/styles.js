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
`;

export const InfoPessoa = styled.div`
  text-align: left;
  > h3 {
    font-weight: 500;
    font-size: 20px;
    color: #280948;
  }

  > p {
    font-weight: 400;
    font-size: 10px;
    color: #764ba2;
  }
`;

export const FotoPerfil = styled.div`
    height: 80px;
    width: 80px;

    background-color: white;
    border-radius: 15px;
`;
