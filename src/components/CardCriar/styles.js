import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    width: 100%;
    border-radius: 20px;

    background-image: url(/assets/create_background.svg);
    background-repeat: no-repeat;
    background-size: cover;
    transition-duration: .3s;

`;

export const Titulo = styled.div`
  h5 {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: var(--white);
  }

  p{
    color: var(--cinza);
    opacity: 0.3;
    font-weight: 400;
    font-size: 16px;
 }
`;
