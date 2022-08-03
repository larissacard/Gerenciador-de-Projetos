import styled from "styled-components";

export const Container = styled.li`
  background: rgba(118, 75, 162, 0.19);
  border-radius: 17px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 95px;

  padding: 5px 15px 10px;

  &+li {
    margin-top: 18px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-weight: 600;
    font-size: 16px;
    color: #280948;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 180px;
  }
`;

export const Prioridade = styled.div`
    border-radius: 14px;
    height: 20px;
    padding: 0px 10px;
    font-size: 14px;
    color: #fff;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > p {
    font-weight: 600;
    font-size: 14px;
    color: #280948;
    width: 200px;
  }
  
  > span {
    font-weight: 600;
    font-size: 14px;
    color: rgba(40, 9, 72, 0.5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: none;
    padding-right: 3px;
  }
`;
