import styled from 'styled-components';

export const Container = styled.ul`
  width: 23.29%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 15px;

  h2 {
    font-weight: 600;
    font-size: 20px;
    color: #280948;

    font-weight: 600;
    font-size: 20px;
    color: var(--roxo);
  }

  @media (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 450px;
  }
`;

export const ContTarefas = styled.ul`
  margin-top: 20px;
  list-style: none;
  padding: 0;
  height: calc(100% - 70px);
  overflow-y: auto;

  li+li {
    margin-top: 21px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #764BA2;
    border-radius: 10px;
    width: 5px;
  }
      
  ::-webkit-scrollbar {
    background-color: #F5F5F7;
    width: 5px;
    border-radius: 10px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContButtons = styled.div`
  display: flex;
  margin-top: 10px;

  > button + button {
    margin-left: 10px;
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

  :hover{
    background-color: rgba(105, 68, 229, 1);
  }
`;

export const ButtonCancel = styled.div`
  width: 15px;
  height: 15px;
  background-image: url('../assets/cancel.svg');
  cursor: pointer;
  transition: transform .3s ease-in-out;
 
  :hover {
    transform: rotate(360deg);
  }
`;