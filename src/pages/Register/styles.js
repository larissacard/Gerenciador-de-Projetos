import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
  box-shadow: 4px 4px 4px rgba(0,0,0,.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--roxo);
  border-radius: 32px;
  width: fit-content;

  @media (max-width: 1280px) {
    max-width: 70%;
    max-height: 70%;
  }

  @media (max-width: 1600px) {
    max-width: 85vw;
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  
  position: absolute;
`;

export const InputCadastro = styled.div`
  border-radius: 32px;
  width: 531px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
    color: #280948;
    margin-left: -135px;
  }

  h6 {
    font-weight: 500;
    font-size: 14px;
    color: #764BA2;
  }

  a {
    text-decoration: none;
    color: #764BA2;
    margin-top: 5px;
    margin-left: -30px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-weight: 400;
    font-size: 16px;

    > input {
      padding: 5px;
      margin-bottom: 30px;
      width: 90%;
      border-style: none none solid none;
      border-color: #280948;
    }
  }

  @media (max-width: 480px) {
    width: 400px;

    h1 {
      margin-bottom: -80px;
      margin-left: -4px;
    }

    button {
      margin-left: -4px!important;
    }

    a {
      margin-left: -6px;
    }

    form{
      margin-left: 24px;
      width: 70%;
      margin-top: 100px;
    }
  }
`;

export const Imagem = styled.div`
  width: 735px;
  height: 859px;
  border-radius: 20px;

  background-image: url('../../assets/register.svg');
  background-position: center;

  @media (max-width: 1280px) {
    display: none;
  }

  @media (max-width: 1600px) {
    max-height: 85vh;
    margin-right: -3px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;