import styled from "styled-components";

export const Container = styled.div`
  width: min(1440px, 90vw);
  height: min(900px, 90vh);
  margin: 24px;

  background-color: #f5f5f7;
  display: flex;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;

export const ColunaDois = styled.div`
  width: 33%;
  height: calc(100% - 48px);
  margin: 24px 10px;

  padding: 10px;
  border-radius: 20px;
  background-color: white;

  display: flex;
  flex-direction: column;
`;

export const ContFiltros = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
