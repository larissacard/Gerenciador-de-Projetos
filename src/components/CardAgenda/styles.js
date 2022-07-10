import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  width: 95%;
  min-height: 11rem;

  margin-top: 6px;
  margin-bottom: 6px;

  background-image: url("/assets/create_background2.svg");
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 20px;

  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.04);
    transition-duration: 0.3s;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    color: white;
    font-weight: 600;
    font-size: 22px;
    width: 70%;
  }

  p {
    color: white;
    font-weight: 500;
    font-size: 20px;
    margin-top: 8px;
  }
`;

export const Pessoas = styled.div`
  img {
    margin-right: -10%;
    position: relative;

    transition-duration: 0.3s;
    &:hover {
      z-index: 1;
      transform: scale(1.1);
      transition-duration: 0.3s;
    }
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  background-color: var(--azul);
  border-radius: 10px;
  border: none;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.3s;
  }
`;
