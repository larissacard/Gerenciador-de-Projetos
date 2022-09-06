import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  border-radius: 20px;

  background-image: url(/assets/create_background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  transition-duration: .3s;

  @media (max-width: 480px) {
    height: 70px;
  }
`;

export const Titulo = styled.div`
  h5 {
    margin-top: 16px;
    font-weight: 600;
    font-size: 20px;
    color: var(--white);
  }

  p {
    color: var(--cinza);
    opacity: 0.3;
    font-weight: 400;
    font-size: 16px;
 }
`;