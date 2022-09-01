import styled from "styled-components";

export const Container = styled.div`
  width: 49%;
  height: 260px;
  background-color: #f5f5f7;
  border-radius: 17px;
  padding: 15px;

  > h3 {
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    height: 45px;
  }

  @media (max-width: 480px) {
      margin-top: 10px;
      
      width: 100%;
    }
`;

export const List = styled.ul`
  height: calc(100% - 45px);
  overflow-y: auto;
  padding-right: 10px;

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

  width: 100%;

  
  margin: 0;
`;