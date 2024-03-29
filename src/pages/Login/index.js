import React, { useState, useEffect } from 'react';
import api from '../../api'
import ClipLoader from "react-spinners/ClipLoader"

import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

import { 
  Container,
  LoginInfo,
  Imagem,
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
    if(email !== ''){
      setTimeout(() => setOpenAlert(true), 200)
    }
  }

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  const login = async (e) => {
    e.preventDefault()
    await api.post('auth/login', {
      email: email,
      senha: senha
    })
    .then(res => {
      if (res.data.auth){
        setMensagem('Autenticação Concluída!')
        setEstado('success')
        localStorage.setItem('token', JSON.stringify(res.data.token))
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`
        setTimeout(() => window.location.href = '/projetos', 500)
      }
    })
    .catch(error => {
      setMensagem('Falha ao fazer Login!')
      setEstado('error')
    })
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000)
  }, [])
  
  return (
    <>
      <Snackbar open={openAlert} autoHideDuration={2200} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
        <Alert onClose={handleCloseAlert} severity={estado}>
            {mensagem}
        </Alert>
      </Snackbar>

      <Container>
        {/* <Logo></Logo> */}
       
        {loading ? 
          (
            <ClipLoader size={100}/>
          ):(
            <Content>
            <LoginInfo>
              <h1>Login</h1>
              <form onSubmit={(e) => {login(e); handleClickLogin()}}>
                  <h6>Email</h6>
                  <input data-cy="Email" onChange={e => setEmail(e.target.value)} type="text" placeholder='Digite seu Email' />
                  <h6>Senha</h6>
                  <input data-cy="Senha" onChange={e => setSenha(e.target.value)} type="password" placeholder='Digite sua Senha' />
                  <input type="submit" value="Entrar" style={{background: '#280948', width: '60%', borderRadius: '32px', color: 'white', height: '45px', marginLeft: '50px'}}/>
              </form>
              <a href="/registro">Ainda não tem Login? Registre-se</a>
            </LoginInfo>
            
            <Imagem />
          </Content>
          )}
      </Container>
    </>
  );
}

export default Login;