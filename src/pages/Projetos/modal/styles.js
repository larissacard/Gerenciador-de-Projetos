import styled from "styled-components";

export const ContButton = styled.div`
  button {
    display: flex;
    width: 3.25rem;
    height: 3.25rem;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    border: none;
    transition-duration: 0.2s;

    img {
      width: 1.5rem;
      height: 1.5rem;
      align-self: center;
    }

    &:hover {
      transform: scale(1.1);
      transition-duration: 0.2s;
    }
  }
`;
