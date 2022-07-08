import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 20px;
    padding-right: 20px;

    height: 6rem;
    border-radius: 20px;

    background-image: url(/assets/create_background.svg);
    transition-duration: .3s;

    &:hover {
        transform: scale(1.03);
        transition-duration: .3s;
    }
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
