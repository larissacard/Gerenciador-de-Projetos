import styled from "styled-components";

export const Container = styled.div`
  width: min(1440px, 90vw);
  height: min(900px, 90vh);
  margin: 24px;

  background-color: #f5f5f7;
  display: flex;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  ul {
    list-style: none;
    padding: 0;
    margin-top: 15px;
    padding: 5px;
    padding-right: 15px;

    display: flex;
    flex-direction: column;

    li+li {
      margin-top: 17px;
    }
  }
`;

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
    color: #280948;
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
