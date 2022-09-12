import styled from 'styled-components';

export const ButtonPost = styled.button`
  display: flex;
  width: 3.25rem;
  height: 3.25rem;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  border: none;
  outline: none;
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
`;

export const Cancelar = styled.button`
  background: #FFFFFF;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 14px;
  color: rgba(40, 9, 72, 0.35);
  border: 1px solid #ccc;
  font-weight: 600;

  &:hover {
    background-color: rgba(204, 204, 204, 0.2); 
    color: rgba(40, 9, 72, 0.5);
    border: solid 1px rgba(40, 9, 72, 0.5);   
  }
`;

export const Cadastrar = styled.button`
  background-color: #6956E5;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;

  :hover {
    background-color: rgba(105, 68, 229, 1);
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
  }
`;

export const ButtonCargo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 40px;
  background: none;
  font-size: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px; 
  background: #FFFFFF;
  color: rgba(40, 9, 72, 0.35);
  
  p {
    margin-top: 18px;
  }

  &:hover {
    background-color: rgba(204, 204, 204, 0.2); 
    color: rgba(40, 9, 72, 0.5);
    border: 1px solid rgba(40, 9, 72, 0.5);   
  }
`;

export const Salario = styled.h6`
  color: #764BA2; 
  font-weight: 400;
  
  &:hover {
    color: #6956E5;
  } 
  
  &:focus {
    color: var(--roxo);
  }
`;