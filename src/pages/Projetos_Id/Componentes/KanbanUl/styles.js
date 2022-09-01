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
`;

export const ContTarefas = styled.ul`
  margin-top: 20px;
  list-style: none;
  padding: 0;
  height: calc(100% - 70px);

  li+li {
    margin-top: 21px;
  }

  overflow-y: auto;
  
  ::-webkit-scrollbar-thumb{
    background: #764BA2;
    border-radius: 10px;
    width: 5px;
  }
      
  ::-webkit-scrollbar{
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
  background-image: url('../assets/cancel.svg');
  cursor: pointer;
  transition: transform .3s ease-in-out;
 
  :hover {
    transform: rotate(360deg);
  }
`;