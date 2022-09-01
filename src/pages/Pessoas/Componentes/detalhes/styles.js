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
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0px 10px 0px 0px;

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
