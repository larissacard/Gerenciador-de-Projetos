import styled from 'styled-components';

export const Container = styled.div`
  max-width: min(1440px, 90vw);
  max-height: min(900px, 90vh);
  margin: 24px;

  background-color: #F5F5F7;
  display: flex;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;

export const ColunaUm = styled.div`
  width: 46%;
  height: calc(100% - 48px);
  margin: 24px 0px;
  padding: 0 10px;
  border-radius: 20px;

  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ContGrafico = styled.div`
    width: 100%;
    height: 40%;
`;

export const TopGrafico = styled.div`
  margin-top: 20px;

  h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        color: var(--roxo);
        padding-left: 15px;
    }
`;

export const Filtros = styled.div`
    z-index: 1;
    float: right;
    margin-bottom: -100%;
    position: relative;
`;

export const ContTabela = styled.div`
  margin-top: 10px;
`;

export const ColunaDois = styled.div`
  width: 33%;
  height: calc(100% - 48px);
  margin: 24px 10px;
  
  display: flex;
  flex-direction: column;
`;

export const CardCalendar = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 20px;
  border-radius: 20px;

  background-color: white;
`;

export const Agenda = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 20px;

  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  overflow-y: scroll;
`;

