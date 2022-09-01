import styled from 'styled-components';

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
      background-color: white;
    }
  }
`;

export const ButtonDrawer = styled.button`
  display: flex;
  width: 3.25rem;
  height: 3.25rem;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  border: none;
  transition-duration: .2s;
  
  img{
    width: 1.5rem;
    height: 1.5rem;
    align-self: center;
  }

  &:hover{
    transform: scale(1.1);
    transition-duration: .2s;
  }

  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;

export const Cancelar = styled.button`
  background: rgba(40, 9, 72, 0.5);
  color: white;
  width: 100px;
  height: 35px;
  font-size: 16px;
  border-radius: 20px;
  text-align: center;

  &:hover {
    background-color: white;
    color: rgba(40, 9, 72, 0.5);
    border: solid 1px rgba(40, 9, 72, 0.5);
  }
`;

export const Cadastrar = styled.button`
  background-color: #6956E5;
  color: white;

  width: 100px;
  height: 35px;
  font-size: 16px;
  border-radius: 20px;
  text-align: center;

  :hover{
    background-color: white;
    color: #6956E5;
    border: solid 1px #6956E5;
  }
`;

export const ButtonCancel = styled.div`
  width: 15px;
  height: 15px;
  background-image: url('./assets/cancel.svg');
  cursor: pointer;
  transition: transform .3s ease-in-out;
 
  :hover {
    transform: rotate(360deg);
  }`;

