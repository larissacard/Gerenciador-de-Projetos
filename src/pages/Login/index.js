import React, { useState } from 'react';
import { Container } from './styles';
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
      <h1>Login</h1>
      <form onSubmit={(e) => login(e)}>
          <input onChange={e => setUsuario(e.target.value)} type="text" placeholder='Usuario' value={usuario}/>
          <input onChange={e => setSenha(e.target.value)} type="password" placeholder='Senha' value={senha}/>
          <input type="submit" value="Entrar"/>
      </form>
      <a href="/registro">Ainda não tem Login? Registre-se</a>
    </Container>
  );
}

export default Login;