import styled from "styled-components";

export const Container = styled.div`
  width: 46%;
  height: calc(100% - 48px);
  margin: 24px 0px;
  padding: 0 10px;
  border-radius: 20px;

  background-color:white;

  display: flex;
  flex-direction: column;
  
  padding: 20px;

  overflow-y: hidden;

  @media (max-width: 480px ) {
    margin: 0;

    width: 100%;

    border-radius: 0;
    overflow-y: visible;


  }
`;

export const Body = styled.div`
  overflow-y: scroll;

`;

export const Tarefas = styled.div`
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
 
  @media (max-width: 480px) {
    div {
      display: flex;
      flex-direction: column;

      align-items: center;
    }
  }
`;
