import React, { useState } from 'react';
import api from '../../api'
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

import { 
  Container,
  LoginInfo,
  Imagem,
  Logo,
  Content,
 } from './styles';
 
function Login() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} severity={props.severity} variant='filled' {...props} />;
  });

  var [mensagem, setMensagem] = useState('')
  const [estado, setEstado] = useState();

  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpenAlert(false);
      setEstado()
  };

  const handleClickLogin = () => {
    if(usuario !== ''){
      setTimeout(() => setOpenAlert(true), 200)
    }
  }

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
        setMensagem('Autenticação Concluída!')
        setEstado('success')
        localStorage.setItem('token', JSON.stringify(res.data.token))
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`
        setTimeout(() => window.location.href = '/', 500)
      }
    })
    .catch(error => {
      setMensagem('Falha ao fazer Login!')
      setEstado('error')
    })
  }
  
  return (
    <>
      <Snackbar open={openAlert} autoHideDuration={2200} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
        <Alert onClose={handleCloseAlert} severity={estado}>
            {mensagem}
        </Alert>
      </Snackbar>

      <Container>
        {/* <Logo></Logo> */}
        <Content>
          <LoginInfo>
            <h1>Login</h1>
            <form onSubmit={(e) => {login(e); handleClickLogin()}}>
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
    </>
  );
}

export default Login;