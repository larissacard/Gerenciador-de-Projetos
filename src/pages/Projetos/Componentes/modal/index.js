import React, { useState } from 'react'
import api from '../../../../api';

import MuiAlert from '@mui/material/Alert';

import { 
    ButtonDrawer, 
    ButtonCancel, 
    Cadastrar, 
    Cancelar 
} from './styles'

import { 
    Drawer, 
    Box, 
    Typography, 
    TextField, 
    Snackbar, 
    Stack, 
    styled 
} from '@mui/material'

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
        setNomeProjeto('')
        setDescricaoProjeto('') 
        // setError('')
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
    // const [error, setError] = useState('')
    
    const handleClickCad = () => {
        if(nomeProjeto !== '' && EquipesProjeto !== ''){
            setTimeout(() => setOpenAlert(true), 150)
        }
        // if (!nomeProjeto) {
        //     setError('Digite um nome primeiro...');
        //     return;
        // }
    }

    function cadastrar() {
        
        api.post('/projetos', {
            nome: nomeProjeto,
            descricao: descricaoProjeto,
            equipes: equipeEscolhida
        })
        .then(res => {
            setNomeProjeto('')
            setDescricaoProjeto('')    
            setMensagem(res.data.message)
            setEstado('success');
            setOpenDrawer(false)
            Props.update()
        })
        .catch(err => { 
            setMensagem(err.response.data.message);
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
                PaperProps={{
                    sx: {
                        width: '600px',
                        padding: '30px 60px'
                    }
                }}
            >
                <Box width='480px'
                    paddingBottom='20px' 
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >                  
                    <Typography variant='h6' component='div' color='#280948' fontWeight='500' fontSize='1.25rem'>
                        Cadastro de um novo Projeto
                    </Typography>
                    <ButtonCancel onClick={handleClose}/>
                </Box>

                <form onSubmit={handleClose}>
                    <Stack spacing={2.5}>
                        <CssTextField
                            data-cy="nome"
                            required
                            autoComplete='off'
                            onChange={(e) => setNomeProjeto(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o Nome do Projeto'
                            value={nomeProjeto}
                            inputProps={{
                                maxLength: 50,
                            }}
                        />
                        
                        <CssTextField
                            data-cy="Descricao"
                            autoComplete='off'
                            onChange={(e) => setDescricaoProjeto(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Descrição'
                            placeholder='Digite a descrição do Projeto'
                            value={descricaoProjeto}
                            inputProps={{
                                maxLength: 400,
                            }}
                        />

                        <EquipesProjeto dados={Props.dados} childToParent={childToParent}/>

                        <Box sx={{display: 'flex', justifyContent: 'end', gap: '10px'}}>
                            <Cancelar onClick={() => setOpenDrawer(false)}>
                                Cancelar
                            </Cancelar>
                            <Cadastrar type='submit' onClick={(e)=> {cadastrar(); handleClickCad()}}>
                                Cadastrar
                            </Cadastrar >
                        </Box>
                    </Stack>
                </form>
            </Drawer>
            <div>
                <ButtonDrawer data-cy="openDrawer" onClick={handleOpen}><img src='assets/btn_create.svg' alt="create"/></ButtonDrawer>
            </div>
        </>
    )
}