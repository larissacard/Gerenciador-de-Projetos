import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  min-height: 170px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Titulo = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: #280948;
  line-height: 25px;
`;

export const Descricao = styled.h3`
  font-weight: 400;
  line-height: 20px;
  font-size: 15px;
  color: #764ba2;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Prioridade = styled.span`
  font-size: 14px;
  height: 20px;
  padding: 0px 10px;
  color: #fff;
  border-radius: 10px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgressDesc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;

  p {
    font-weight: 300;
    font-size: 15px;
    color: #280948;
  }

  span {
    font-size: 15px;
    color: #764ba2;
  }
`;

export const Body = styled.div`
  display: flex;

  > div + div {
    margin-left: -12px;
  }
`;

export const Avatar = styled.span`
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;

  width: 30px;
  height: 30px;
  background-color: #ddd;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,.2);
`;
