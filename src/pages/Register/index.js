import React, { useState } from 'react';
import api from '../../api';
import { 
  Container, 
  Logo, 
  Content, 
  InputCadastro, 
  Imagem 
} from './styles';

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
      {/* <Logo></Logo> */}
      <Content>
        <InputCadastro> 
          <h1>Registro</h1>
          <form>
              <h6>Nome</h6>
              <input value={nome} type="text" placeholder='Digite seu Nome' onChange={e => setNome(e.target.value)} required/>
              <h6>Email</h6>
              <input value={email} type="email" placeholder='Digite seu Email' onChange={e => setEmail(e.target.value)} required/>
              <h6>Senha</h6>
              <input value={senha} type="password" placeholder='Digite sua Senha' onChange={e => setSenha(e.target.value)} required/>
              <h6>Confirmar Senha</h6>
              <input value={confirmacao} type="password" placeholder='Confime sua Senha' onChange={e => setConfirmacao(e.target.value)} required/>
          </form>
          <button onClick={cadastrar} 
            style={{
              background: '#280948', 
              width: '50%', 
              borderRadius: '32px', 
              color: 'white', 
              height: '45px', 
              marginLeft: '-30px'
            }}
          >
            Cadastrar
          </button>
          <a href="/login">Já Tem Cadastro? Faça Login</a>
        </InputCadastro>
        <Imagem></Imagem>
      </Content>
    </Container>
  );
}

export default Register;