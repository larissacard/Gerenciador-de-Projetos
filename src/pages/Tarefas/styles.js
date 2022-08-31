import styled from "styled-components";

export const ColunaUm = styled.div`
  width: 46%;
  height: calc(100% - 48px);
  margin: 24px 0px;
  padding: 10px 20px 10px;
  border-radius: 20px;

  background-color: white;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: var(--roxo);
    margin-bottom: 5px;
  }
`;

export const ColunaDois = styled.div`
  width: 33%;
  height: calc(100% - 48px);
  margin: 24px 10px;
  
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 20px;

  padding: 15px;
`;
