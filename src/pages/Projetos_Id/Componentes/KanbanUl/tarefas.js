import React, { useState } from 'react';
import { Drawer, Box, Typography, TextField, Snackbar, Stack, MenuItem, Icon } from '@mui/material'
import { blue } from '@mui/material/colors';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import PessoasTarefa from './pessoas';
import { Cadastrar, Cancelar, ButtonCancel } from './styles'

import api from '../../../../api';

const CssTextField = styled(TextField)({
    '&:hover .MuiInputLabel-outlined': {
        color: '#6956E5',
        transition: '0.5s',
      },
      '& .MuiOutlinedInput-root': {
        color: '#764BA2',
        transition: '0.5s',
        svg: {color: '#764BA2'},

        '&:hover' :{
            color: '#6956E5',
            transition: '0.5s',
            svg: {color: '#6956E5'},
        },
        '&.Mui-focused': {
            borderColor: '#764BA2',
            color: '#280948',
            transition: '0.5s',
            svg: {color: '#280948'},
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

export default function TarefasProjeto(Props) {
    const path = window.location.pathname;

    const [pessoaEscolhida, setPessoaEscolhida] = useState()
    const childToParent = (childdata) => {
        setPessoaEscolhida(childdata);
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
    
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [descricaoTarefa, setDescricaoTarefa] = useState('')
    const [prioridade, setPrioridade] = useState([]);
    
    const handleChange = (e) => {
        setPrioridade(e.target.value);
    };

    const handleClick = () => {
        if (nomeTarefa !== '') {
            setTimeout(() => setOpenAlert(true), 150)
        }
    }

    function cadastrar(){
        api.post('/tarefas', {
            tr_nome: nomeTarefa,
            tr_descricao: descricaoTarefa,
            tr_prioridade: prioridade, 
            pr_id: path.substring(10,), 
            pessoas: pessoaEscolhida
        })
        .then(res=>{
            setMensagem('Tarefa Inserida com Sucesso!')
            setEstado('success');
            setOpenDrawer(false)
            Props.func()
         
        })
        .catch (e => {
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
                        Cadastro de uma Nova Tarefa
                    </Typography>
                    <ButtonCancel onClick={handleClose}/>
                </Box>

                <form onSubmit={handleClose}>
                    <Stack spacing={2.5}>
                        <CssTextField
                            autoComplete='off'
                            required
                            onChange={(e) => setNomeTarefa(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o nome da Tarefa'
                            value={nomeTarefa}
                        />

                        <CssTextField
                            autoComplete='off'
                            onChange={(e) => setDescricaoTarefa(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Descrição'
                            placeholder='Digite a descrição da Tarefa'
                            value={descricaoTarefa}
                        />

                        <CssTextField
                            select
                            fullWidth
                            label='Prioridade'
                            size='small'
                            onChange={(e)=> handleChange(e)}
                            placeholder='Selecione a Prioridade'
                            required
                            defaultValue=''
                            >
                            <MenuItem value={1}>Baixa</MenuItem>
                            <MenuItem value={2}>Média</MenuItem>
                            <MenuItem value={3}>Alta</MenuItem>
                        </CssTextField>

                        <PessoasTarefa dados={Props.dados} childToParent={childToParent}/>

                        <Box sx={{display: 'flex', justifyContent: 'end', gap: '10px'}}>
                            <Cancelar onClick={() => setOpenDrawer(false)}>
                                Cancelar
                            </Cancelar>
                            <Cadastrar onClick={(e)=> {cadastrar(e); handleClick()}} type='submit'>
                                Cadastrar
                            </Cadastrar >
                        </Box>
                    </Stack>
                </form>
            </Drawer>
            <Box
                onClick={handleOpen}
                cursor='pointer'
                sx={{
                    '& > :not(style)': {
                    marginRight: '0px',
                    cursor: 'pointer',
                    fontSize: 35
                    },
                }}
            >
                <Icon sx={{ color: blue[600] }}>add_circle</Icon>
            </Box> 
               
        </>
    );
}

