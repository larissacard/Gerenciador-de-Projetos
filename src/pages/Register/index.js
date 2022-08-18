import React, { useState } from 'react';
import api from '../../api';
import { Container } from './styles';

function Register() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacao, setConfirmacao] = useState("")

  const cadastrar = () => {
    api.post('/registro', {
      nome: nome,
      email: email,
      senha: senha,
      confirmacao: confirmacao
    }).then(e => {
        alert("Funcionou")
        setNome("")
        setEmail("")
        setSenha("")
        setConfirmacao("")
    }).catch(e => {
      alert(e.response.data)
    })
  }
  
  return (
    <Container>
      <h1>Registro</h1>
      <form>
          <input value={nome} type="text" placeholder='Nome' onChange={e => setNome(e.target.value)} required/>
          <input value={email} type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} required/>
          <input value={senha} type="password" placeholder='Senha' onChange={e => setSenha(e.target.value)} required/>
          <input value={confirmacao} type="password" placeholder='Confime sua Senha' onChange={e => setConfirmacao(e.target.value)} required/>
      </form>
      <button onClick={cadastrar}>Cadastrar</button>
      <a href="/login">Já Tem Cadastro? Faça Login</a>
    </Container>
  );
}

export default Register;