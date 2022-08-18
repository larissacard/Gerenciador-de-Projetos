import React from 'react';

import { Container } from './styles';

function Login() {
  return (
    <Container>
      <h1>Login</h1>
      <form>
          <input type="email" placeholder='Email' id="email" required/>
          <input type="password" placeholder='Senha' id="senha" required/>
          <input type="submit" value="Login"/>
      </form>
      <a href="/registro">Ainda não tem Login? Registre-se</a>
    </Container>
  );
}

export default Login;