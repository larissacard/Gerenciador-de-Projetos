import React, { useState } from 'react'
import { Drawer, Box, Typography, TextField, Snackbar, Stack } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import {ButtonDrawer, ButtonCancel, Cadastrar, Cancelar, Name } from './styles'
import api from "../../../api";
import PessoasEquipe from "./pessoas";
import TeamProfile from '../team profile/profile';

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


function PostEquipes(Props) {
    const [pessoaEscolhida, setPessoaEscolhida] = useState()
    const [fotoEscolhida, setFotoEscolhida] = useState()
    const childToParent = (childdata) => {
        setPessoaEscolhida(childdata);
    }
    
    const childToParentPhoto = (childdata) => {
        setFotoEscolhida(childdata);
    }


    const [openDrawer, setOpenDrawer] = useState(false)
    
    const handleOpen = () => {
        setOpenDrawer(true);
    }
    const handleClose = () => {
        setOpenDrawer(false);
    }

    const handleClickCad = () => {
        if(nomeEquipe !== ''){
            setTimeout(() => setOpenAlert(true), 150)
        }
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

    const [nomeEquipe, setNomeEquipe] = useState('')

    function cadastrar(e){
        e.preventDefault();
        api.post('/equipes',{
            eq_foto: fotoEscolhida,
            eq_nome: nomeEquipe,
            pessoas: pessoaEscolhida
        })
        .then(res=>{
            setMensagem('Equipe Inserida com Sucesso!')
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
                        Cadastro de uma nova Equipe
                    </Typography>
                    <ButtonCancel onClick={handleClose}/>
                </Box>

                <form onSubmit={handleClose}>

                 <TeamProfile childToParent={childToParentPhoto}/>  

                    <Stack spacing={2.5}>
                        <CssTextField
                            autoComplete='off'
                            required
                            onChange={(e) => setNomeEquipe(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o nome da Equipe'
                            value={nomeEquipe}
                            inputProps={{
                                maxLength: 50,
                              }}
                        />    

                
                        <PessoasEquipe dados={Props.dados} childToParent={childToParent}/>
                
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
                <ButtonDrawer onClick={handleOpen}>
                    <img src='assets/Group.svg' alt="group icon"/>
                    <Name>Adicionar Equipe</Name>
                </ButtonDrawer>
            </div>
        </>
    );
}

export default PostEquipes;