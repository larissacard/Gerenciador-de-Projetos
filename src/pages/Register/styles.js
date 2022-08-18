import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 50%;
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
