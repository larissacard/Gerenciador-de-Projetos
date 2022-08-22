import { Drawer, Box, Typography, TextField, Snackbar, Stack } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import {ButtonDrawer, ButtonCancel, Cadastrar, Cancelar } from './styles'
import api from '../../../api'
import EquipesProjeto from './equipes';

const CssTextField = styled(TextField)({
    '&:hover .MuiInputLabel-outlined': {
        color: '#6956E5',
        transition: '0.5s',
    },
    '& .MuiOutlinedInput-root': {
        color: '#764BA2',
        transition: '0.5s',
        '&:hover' :{
            color: '#6956E5',
            transition: '0.5s',
        },
        '&.Mui-focused': {
            borderColor: '#764BA2',
            color: '#280948',
            transition: '0.5s',
        },
        '& fieldset': {
            border: '2px solid #764BA2',
            transition: '0.5s',
        },
          '&:hover fieldset': {
            border: '2px solid #6956E5',
            transition: '0.5s',
          },
        '&.Mui-focused fieldset': {
            borderColor: '#280948',
            transition: '0.5s',
        },
    },
    '.MuiInputLabel-outlined': {
        color: '#764BA2',
        transition: '0.5s',
        '&.Mui-focused': {
            color: '#280948',
            transition: '0.5s',
        },
    },
})

export default function PostProjetos (Props) {
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
            setMensagem('Projeto Inserido com Sucesso!')
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

            <Drawer 
                anchor='right' 
                open={openDrawer} 
                onClose={handleClose} 
                PaperProps={{sx: {width: '600px',
                    padding: '30px 60px'}
                }}
            >
                <Box width='480px'
                        paddingBottom='20px' 
                        display='flex'
                        alignItems='center'
                        justifyContent='space-between'
                >                  
                    <Typography variant='h6' component='div' color='#280948' fontWeight='500'>
                        Cadastro de um novo Projeto
                    </Typography>
                    <ButtonCancel onClick={handleClose}/>
                </Box>

                <form onSubmit={handleClose}>
                    <Stack spacing={2.5}>
                        <CssTextField
                            autoComplete='off'
                            required
                            onChange={(e) => setNomeProjeto(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o nome do Projeto'
                            value={nomeProjeto}
                        />

                        <CssTextField
                            autoComplete='off'
                            onChange={(e) => setDescricaoProjeto(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Descrição'
                            placeholder='Digite a descrição do Projeto'
                            value={descricaoProjeto}
                        />

                        <EquipesProjeto dados={Props.dados} childToParent={childToParent}/>

                        <Box sx={{display: 'flex', justifyContent: 'end', gap: '10px'}}>
                            <Cancelar onClick={() => setOpenDrawer(false)}>
                                Cancelar
                            </Cancelar>
                            <Cadastrar onClick={(e)=> {cadastrar(e); handleClickCad()}} type='submit'>
                                Cadastrar
                            </Cadastrar >
                        </Box>
                    </Stack>
                </form>
            </Drawer>
            <div>
                <ButtonDrawer onClick={handleOpen}><img src='assets/btn_create.svg' /></ButtonDrawer>
            </div>
        </>
    )
}