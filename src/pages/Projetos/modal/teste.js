import { Drawer, Box, Typography, Button, TextField, Snackbar  } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import React, { useState } from 'react'
import {ButtonDrawer } from './styles'
import api from '../../../api'
import EquipesProjeto from './equipes';

export default function TesteProjetos (Props) {
    const [equipeEscolhida, setEquipeEscolhida] = useState()
    const childToParent = (childdata) => {
        setEquipeEscolhida(childdata);
    }
    
    const [openDrawer, setOpenDrawer] = useState(false)
    
    const handleOpen = () => {
        setOpenDrawer(true);
    }
    const handleClose = () => {
        setOpenDrawer(false);
    }

    var [mensagem, setMensagem] = useState('')
    const [estado, setEstado] = useState();
    
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} severity={props.severity} variant='filled' {...props} />;
      });

    const [openAlert, setOpenAlert] = useState(false);
    
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
        setEstado()
    };

    const [nomeProjeto, setNomeProjeto] = useState('')
    const [descricaoProjeto, setDescricaoProjeto] = useState('')

    const handleClickCad = () => {
        if(nomeProjeto !== ''){
            setTimeout(() => setOpenAlert(true), 150)
        }
    }

    function cadastrar(e) {
        e.preventDefault()
        api.post('/projetos', {
            pr_nome: nomeProjeto,
            pr_descricao: descricaoProjeto,
            equipes: equipeEscolhida
        })
        .then(res=>{
            setMensagem('Deu Certo!')
            setEstado('success');
            setOpenDrawer(false)
            Props.update()
        })
        .catch(e => { 
            setMensagem(e.response.data);
            setOpenDrawer(true);
            setEstado('error');     
        })
    } 

    return (
    <>
        <Snackbar open={openAlert} autoHideDuration={2200} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
            <Alert onClose={handleCloseAlert} severity={estado}>
                {mensagem}
            </Alert>
        </Snackbar>

        <Drawer anchor='right' 
            open={openDrawer} 
            onClose={handleClose} 
            PaperProps={{sx: {width: '600px', padding: '30px 60px'}}}>
                <Box width='480px' paddingBottom='20px' textAlign='start'>
                    <Typography variant='h6' component='div'>
                        Cadastro de um novo Projeto
                    </Typography>
                </Box>
                <form onSubmit={handleClose}>
                    <TextField
                        required
                        onChange={(e) => setNomeProjeto(e.target.value)}
                        fullWidth
                        size='small'
                        id='outlined-required'
                        label='Nome'
                        placeholder='Digite o nome do Projeto'
                        margin='dense'
                    />

                    <TextField
                        onChange={(e) => setDescricaoProjeto(e.target.value)}
                        fullWidth
                        size='small'
                        id='outlined-required'
                        label='Descrição'
                        placeholder='Digite a descrição do Projeto'
                        margin='normal'
                    />

                    <EquipesProjeto childToParent={childToParent}/>

                <Box sx={{display: 'flex', justifyContent: 'end'}}>
                    <Button onClick={(e)=> {cadastrar(e); handleClickCad()}} variant='primary' type='submit'>
                        Cadastrar
                    </Button >
                    <Button onClick={() => setOpenDrawer(false)}>
                        Cancelar
                    </Button>
                </Box>
                </form>
        </Drawer>
        <div>
            <ButtonDrawer onClick={handleOpen}><img src='assets/btn_create.svg' /></ButtonDrawer>
        </div>
    </>
    )
}