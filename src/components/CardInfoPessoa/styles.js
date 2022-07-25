import styled from "styled-components";

export const Container = styled.div`
  height: 160px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(118, 75, 162, 0.5);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const InfoPessoa = styled.div`
  text-align: left;
  > h2 {
    font-weight: 500;
    font-size: 32px;
    color: #280948;
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;

export const FotoPerfil = styled.div`
  height: 80px;
  width: 80px;

  background-color: #f1f1f1;
  border-radius: 15px;
`;
