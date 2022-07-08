import styled from 'styled-components';

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
    height: 450px;
`;

export const TopoGrafico = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
`;

export const Legenda = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    span {
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        flex-wrap: nowrap;
        margin-right: 15px;
    }
`;

export const Filtros = styled.div`
    z-index: 1;
`;
