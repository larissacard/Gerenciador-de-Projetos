import React, { useState, useEffect } from 'react';
import { ButtonCancel, Cancelar, Cadastrar, Salario, Editar } from './styles'
import { Drawer, Box, Typography, TextField, Snackbar, Stack, MenuItem, InputAdornment } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import api from '../../../api';

const CssTextField = styled(TextField)({
    '&:hover .MuiInputLabel-outlined': {
        color: '#6956E5',
        transition: '0.5s',
    },
    '& .MuiOutlinedInput-root': {
        color: '#764BA2',
        transition: '0.5s',
        svg: { color: '#764BA2' },

        '&:hover': {
            color: '#6956E5',
            transition: '0.5s',
            svg: { color: '#6956E5' },
        },
        '&.Mui-focused': {
            borderColor: '#764BA2',
            color: '#280948',
            transition: '0.5s',
            svg: { color: '#280948' },
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

function EditarPessoa(Props) {
    const [cargos, setCargos] = useState([])

    useEffect(() => {
        const getCargos = async () => {
            try {
                const response = await api.get('/cargos');
                setCargos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCargos();
    }, []);

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
    
    // function adicionaZero(numero){
    //     if (numero <= 9) 
    //         return "0" + numero;
    //     else
    //         return numero; 
    // }

    // let dataAtual = new Date(Props.dados.dados.pe_data_nasc); 
    // let dataAtualFormatada = (adicionaZero(dataAtual.getDate().toString()) + "/" + (adicionaZero(dataAtual.getMonth()+1).toString()) + "/" + dataAtual.getFullYear());
    // console.log(dataAtualFormatada);
    
    // let data = Date.parse(datanascEdit)
    // let data_formatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()
    // console.log(data_formatada)
    
    const [cargoEditEscolhido, setCargoEditEscolhido] = useState(Props.dados.dados.pe_cargo)
    const [nomeEditPessoa, setNomeEditPessoa] = useState(Props.dados.dados.pe_nome)
    const [datanascEdit, setDatanascEdit] = useState(Props.dados.dados.pe_data_nasc)
    const [salarioEdit, setEditSalario] = useState(Props.dados.dados.pe_salario)
    // const [imagemEdit, setEditImagem] = useState(Props.dados.dados.foto)
    
    const handleClickCad = () => {
        if(nomeEditPessoa !== ''){
            setTimeout(() => setOpenAlert(true), 150)
        }
    }
    
    function update(e) {
        e.preventDefault();
        api.put(`/pessoas/${Props.dados.dados.pe_id}`, {
            pe_cargo :cargoEditEscolhido,
            pe_nome :nomeEditPessoa,
            pe_data_nasc :datanascEdit,
            pe_salario :salarioEdit
        })
        .then(res => {
            setMensagem('Pessoa Editada com Sucesso!')
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
                    <Typography variant='h6' component='div' color='#280948' fontWeight='500'>
                        Editar Pessoa 
                    </Typography>
                    <ButtonCancel onClick={handleClose} />
                </Box>

                <form onSubmit={handleClose}>
                    <Stack spacing={2.5}>
                        <CssTextField
                            autoComplete='off'
                            required
                            onChange={(e) => setNomeEditPessoa(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o Nome da Pessoa'
                            value={nomeEditPessoa}
                            inputProps={{
                                maxLength: 50,
                              }}
                        />

                        <CssTextField
                            autoComplete='off'
                            required
                            onChange={(e) => setEditSalario(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Salário'
                            placeholder='Digite o Novo Salário da Pessoa'   
                            value={salarioEdit}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' >
                                        <Salario className='teste12'>R$</Salario>  
                                    </InputAdornment>
                                ),
                            }}
                            inputProps={{
                                maxLength: 5,
                              }}
                        />

                        <CssTextField
                            autoComplete='off'
                            required
                            onChange={(e) => setDatanascEdit(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Data de Nascimento'
                            type='date'
                            value={datanascEdit}
                            InputLabelProps={{
                                shrink: true
                              }}
                        />
                        
                        <CssTextField
                            select
                            required
                            fullWidth
                            label='Cargo'
                            size='small'
                            onChange={(e) => setCargoEditEscolhido(e.target.value)}
                            placeholder='Selecione o Cargo'
                            defaultValue=''
                            value={cargoEditEscolhido}
                        >
                            {cargos.map((cargos) =>
                                <MenuItem value={cargos.cargo} key={cargos.cargo}>{cargos.cargo}</MenuItem>
                            )}
                        </CssTextField>

                        <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
                            <Cancelar onClick={() => setOpenDrawer(false)}>
                                Cancelar
                            </Cancelar>
                            <Cadastrar onClick={(e) => {update(e); handleClickCad()}} type='submit'>
                                Salvar
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

export default EditarPessoa;