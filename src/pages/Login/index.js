import React, { useState } from 'react';
import { 
  Container,
  LoginInfo,
  Imagem,
  Logo,
  Content,
 } from './styles';
import api from '../../api'

function Login() {
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()

  const login = async (e) => {
    e.preventDefault()
    await api.post('/login', {
      usuario: usuario,
      senha: senha
    })
    .then(res => {
      if (res.data.auth){
        alert("Autenticação Concluida")
        localStorage.setItem('token', JSON.stringify(res.data.token))
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`
        window.location.href = '/'
      }
    })
    .catch(error => {
      alert("Falha ao fazer login!")
    })
  }
  
  return (
    <Container>
      {/* <Logo></Logo> */}
      <Content>
        <LoginInfo>
          <h1>Login</h1>
          <form onSubmit={(e) => login(e)}>
              <h6>Nome</h6>
              <input onChange={e => setUsuario(e.target.value)} type="text" placeholder='Digite seu nome' value={usuario}/>
              <h6>Senha</h6>
              <input onChange={e => setSenha(e.target.value)} type="password" placeholder='Digite sua senha' value={senha}/>
              <input type="submit" value="Entrar" style={{background: '#280948', width: '60%', borderRadius: '32px', color: 'white', height: '45px', marginLeft: '50px'}}/>
          </form>
          <a href="/registro">Ainda não tem Login? Registre-se</a>
        </LoginInfo>
        <Imagem>
        </Imagem>
      </Content>
    </Container>
  );
}

export default Login;