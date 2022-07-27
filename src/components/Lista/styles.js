import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: auto;
  background-color: #f5f5f7;
  border-radius: 17px;
  padding: 15px;

  > h3 {
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    height: 45px;
  }
`;

export const List = styled.ul`
    height: calc(100% - 45px);
    overflow-y: scroll;
    width: 100%;

    padding: 0;
    margin: 0;
`;

