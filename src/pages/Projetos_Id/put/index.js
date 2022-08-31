import React, {useState} from 'react';
import { Drawer, Box, Typography, TextField, Snackbar, Stack } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import { Cadastrar, Cancelar, ButtonCancel } from './styles'
import { Editar } from './styles'
import EquipesProjetoEdit from './equipesEdit';
import api from '../../../api';

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

function Edit(Props) {
    const [equipeEditEscolhida, setEquipeEditEscolhida] = useState(Props.dados.equipes)
    const childToParent = (childdata) => {
        setEquipeEditEscolhida(childdata);
    }
    
    const [openDrawer, setOpenDrawer] = useState(false)
    
    const handleOpen = () => {
        setOpenDrawer(true);
    }
    const handleClose = () => {
        setOpenDrawer(false);
    }
    
    var [mensagem, setMensagem] = useState('')
    
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} severity={props.severity} variant='filled' {...props} />;
    });
    
    const [openAlert, setOpenAlert] = useState(false);
    
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    }
    
    const projetoPath = window.location.pathname;
    const [nomeEditProjeto, setNomeEditProjeto] = useState(Props.dados.dados.pr_nome)
    const [descricaoEditProjeto, setDescricaoEditProjeto] = useState(Props.dados.dados.pr_descricao)
    
    const handleClickEdit = () => {
        if(nomeEditProjeto !== ''){
            setTimeout(() => setOpenAlert(true), 150)
        }
    }
    
    function update(e){
        e.preventDefault();
        api.put(projetoPath, {
            pr_nome: nomeEditProjeto,
            pr_descricao: descricaoEditProjeto,
            equipes: equipeEditEscolhida
        })
        .then(res=>{
            setMensagem('Projeto Editado com Sucesso!')
            setOpenDrawer(false)
            Props.update()
        })
        .catch(e => { 
            console.log(e)
        })
    }

    return (
        <>
            <Snackbar open={openAlert} autoHideDuration={2200} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
                <Alert onClose={handleCloseAlert} severity='success'>
                    {mensagem}
                </Alert>
            </Snackbar>

            <Drawer anchor='right' 
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
                        Editar Projeto
                    </Typography>
                    
                    <ButtonCancel onClick={handleClose}/>
                    
                </Box>
                <form onSubmit={handleClose}>
                    <Stack spacing={2.5}>
                        <CssTextField
                            autoComplete='off'
                            required
                            onChange={(e) => setNomeEditProjeto(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o novo Nome do Projeto'
                            value={nomeEditProjeto}
                            inputProps={{
                                maxLength: 50,
                              }}
                        />

                        <CssTextField
                            autoComplete='off'
                            onChange={(e) => setDescricaoEditProjeto(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Descrição'
                            placeholder='Digite a nova Descrição do Projeto'
                            value={descricaoEditProjeto}
                            inputProps={{
                                maxLength: 400,
                              }}
                        />

                        <EquipesProjetoEdit dados={Props.dados} childToParent={childToParent}/>

                        <Box sx={{display: 'flex', justifyContent: 'end', gap: '10px'}}>
                            <Cancelar onClick={() => setOpenDrawer(false)}>
                                Cancelar
                            </Cancelar>
                            <Cadastrar onClick={(e)=> {update(e); handleClickEdit()}} type='submit'>
                                Cadastrar
                            </Cadastrar >
                        </Box>
                    </Stack>
                </form>
            </Drawer>
            <div>
                <Editar onClick={handleOpen}>Editar</Editar>
            </div>
        </>
    );
}

export default Edit;