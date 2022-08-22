import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 4px 4px 4px rgba(0,0,0,.2);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }

  button {
    width: 97%;
    padding: 3px 10px;
    margin: 20px 0px 10px;
    border-radius: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > input {
      padding: 5px;
      
    }

    > input + input {
      margin-top: 20px;
    }

  }
`;
