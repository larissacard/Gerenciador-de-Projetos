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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border-radius: 10px;
  border-radius: 24px;
  border: 1px dashed rgba(40, 9, 72, 0.2);
  
  width: 100%;
  height: 18.75rem;
  
  background: rgba(118, 75, 162, 0.2);
  transition-duration: .2s;
  
  img {
    width: 2.5rem;
    height: 2.5rem;
    align-self: center;
  }
  &:hover {
    transform: scale(1.04);
    transition-duration: .2s;
  }
`;

export const Name = styled.div`
  font-weight: 400;
  font-size: 23.8953px;
  line-height: 32px;
  color: var(--roxo); 
  text-align: center;
  padding: 5px 20px;
`

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

  :hover{
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