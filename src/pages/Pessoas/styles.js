import styled from "styled-components";

export const ColunaDois = styled.div`
  width: 33%;
  height: calc(100% - 48px);
  margin: 24px 10px;

  padding: 10px;
  border-radius: 20px;
  background-color: white;

  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    margin: 0;

    border-radius: 0;
  }
`;

export const ContFiltros = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Organizer = styled.div`
  display: flex;
  flex-direction: column;

  overflow: scroll;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;

    overflow-x: scroll;
    
  }
`;