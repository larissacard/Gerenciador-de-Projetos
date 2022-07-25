import styled from "styled-components";

export const Container = styled.div`
  width: min(1440px, 90vw);
  height: min(900px, 90vh);
  margin: 24px;

  background-color: #F5F5F7;
  display: flex;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;


export const ColunaDois = styled.div`
  width: 33%;
  height: calc(100% - 48px);
  margin: 24px 10px;
  
  display: flex;
  flex-direction: column;
`;

