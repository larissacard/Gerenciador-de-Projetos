import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f5f7;
  border-radius: 17px;
  padding: 15px;

  > h3 {
    font-weight: 500;
    font-size: 20px;
    color: #000000;
  }

  &+div {
    margin-left: 10px;
  }
`;

export const List = styled.ul`
    height: auto;
    max-height: 248px;
    overflow-y: scroll;
    width: 100%;

    padding: 0;
    margin: 0;
`;

