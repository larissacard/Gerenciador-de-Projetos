import styled from "styled-components";

export const Container = styled.div`
  width: 46%;
  height: calc(100% - 48px);
  margin: 24px 0px;
  padding: 0 10px;
  border-radius: 20px;

  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;

  overflow-y: hidden;
`;

export const Tarefas = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
