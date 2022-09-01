import styled, {css} from "styled-components";

export const Container = styled.li`
  background: rgba(118, 75, 162, 0.19);
  border-radius: 17px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 95px;

  padding: 5px 15px 10px;
  cursor: grab;

  &+li {
    margin-top: 18px;
  }

  ${props => props.isDragging && css`
        border: 2px dashed rgba(0,0,0,.2);
        box-shadow: none;
        background: transparent;

        * {
            opacity: 0;
        }
    `}

    @media (max-width: 480px) {
      height: fit-content;
      width: 100%;

    }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-weight: 600;
    font-size: 16px;
    color: var(--roxo);
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
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    position: relative;

    > p {
      font-weight: 600;
      font-size: 14px;
      color: var(--roxo);
      width: 200px;
    }
    
    > span {
      font-weight: 600;
      font-size: 14px;
      color: rgba(40, 9, 72, 0.5);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: none;

      position: absolute;
      right: 0;
    }
  }

`;
