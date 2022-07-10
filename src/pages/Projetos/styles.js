import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  max-height: 900px;
  margin: 24px;

  background-color: white;
  display: flex;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;

export const ColunaUm = styled.div`
  width: 45%;
  height: calc(100% - 48px);
  margin: 24px;
`;

export const Titulo = styled.div`
    margin-top: 20px;
    height: 60px;

    h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        color: var(--roxo);
    }
`;

export const ContGrafico = styled.div`
    width: 100%;
    height: 44%;
    margin-top: 20px;
    margin-bottom: 15px;
`;

export const Filtros = styled.div`
    z-index: 1;
    float: right;
    margin-bottom: -100%;
    position: relative;
`;

export const ColunaDois = styled.div`
  width: 30.56%;
  height: calc(100% - 48px);
  margin: 24px;

  display: flex;
  flex-direction: column;
`;

export const Agenda = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  margin-top: 30px;
`;

