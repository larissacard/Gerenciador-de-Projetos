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

`;

export const Logo = styled.div`
  background-image: url('../../assets/logo.svg');
  width: 217px;
  height: 123px;
  border: 1px solid black;

  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--roxo);
  border-radius: 32px;
  width: fit-content;
`;

export const LoginInfo = styled.div`
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
  }

  h6 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #764BA2;
  }

  a {
    text-decoration: none;
    color: #764BA2;
    margin-top: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    > input {
      padding: 5px;
      margin-bottom: 30px;
      width: 90%;
      border-style:none none solid none;
      /* border: 1px solid #280948; */
      border-color: #280948;

    }

   
  }
`;

export const Imagem = styled.div`
  width: 735px;
  height: 859px;
  border-radius: 20px;

  background-image: url('../../assets/register.svg');
  background-position: center;
`;