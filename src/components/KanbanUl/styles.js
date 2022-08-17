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

    overflow-y: scroll;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonMore = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    width: 30px;
    font-size: 30px;
    border-radius: 50%;
    background-color: #667EEA;
    color: #fff;
    transition-duration: .2s;

    &:hover {
        transition-duration: .2s;
        background: #4B67E4;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;

    padding: 5px 15px;

    &:hover {
        transition-duration: .2s;
        background: #ddd;
    }
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
  background-image: url('assets/cancel.svg');
  cursor: pointer;
  transition: transform .3s ease-in-out;
 
  :hover {
    transform: rotate(360deg);
  }
`;