import styled from "styled-components";

export const Container = styled.li`
  background: rgba(118, 75, 162, 0.19);
  border-radius: 17px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 52px;

  padding: 5px 15px 10px;

  & + li {
    margin-top: 18px;
  }

  > h3 {
    font-weight: 600;
    font-size: 18px;
    color: var(--roxo);
  }
`;
