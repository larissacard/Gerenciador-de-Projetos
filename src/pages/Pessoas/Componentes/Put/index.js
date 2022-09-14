import React, { useState, useEffect } from 'react';
import api from '../../../../api';

import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";

import { 
    ButtonCancel, 
    Cancelar, 
    Cadastrar, 
    Salario, 
    Editar 
} from './styles'

import { 
    Drawer, 
    Box, 
    Typography, 
    TextField, 
    Snackbar, 
    Stack, 
    Autocomplete,
    InputAdornment 
} from '@mui/material'

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
                const response = await api.get('/pessoas/cargos');
                setCargos(response.data.data);
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
    
    const [cargoEditEscolhido, setCargoEditEscolhido] = useState(Props.dados.cargo)
    const [nomeEditPessoa, setNomeEditPessoa] = useState(Props.dados.nome)
    const [datanascEdit, setDatanascEdit] = useState(moment(Props.dados.nascimento).utc().format('YYYY-MM-DD'))
    const [salarioEdit, setEditSalario] = useState(Props.dados.salario)
    // const [imagemEdit, setEditImagem] = useState(Props.dados.foto)
    
    const handleClickCad = () => {
        if(nomeEditPessoa !== '') setTimeout(() => setOpenAlert(true), 150)
    }
    
    function update(e) {
        e.preventDefault();
        api.put(`/pessoas/${Props.dados.id}`, {
            cargo: cargoEditEscolhido,
            nome: nomeEditPessoa,
            pe_data_nasc: datanascEdit,
            pe_salario: salarioEdit
        })
        .then(res => {
            setMensagem('Pessoa Editada com Sucesso!')
            setEstado('success');
            setOpenDrawer(false)
        })
        .catch(e => { 
            setMensagem(e.response.data.data);
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
                            data-cy="edita-nome-pessoa"
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
                            data-cy="edita-salario-pessoa"
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
                                    <InputAdornment position='start' style={{marginTop: '8.5px'}}>
                                        <Salario className='teste12'>R$</Salario>  
                                    </InputAdornment>
                                ),
                            }}
                            inputProps={{
                                maxLength: 5,
                              }}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                data-cy="edita-datanasc-pessoa"
                                autoComplete='off'
                                fullWidth
                                required
                                disableFuture={true}
                                inputFormat="dd/MM/yyyy"
                                label="Data de Nascimento"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={datanascEdit}
                                onChange={(newValue) => {
                                    setDatanascEdit(newValue);
                                }}
                                renderInput={(params) => <CssTextField size='small' {...params}
                                />}
                            />
                        </LocalizationProvider>
                        
                        <Autocomplete
                            data-cy="edita-cargo-pessoa"
                            id="free-solo-demo"
                            size='small'
                            freeSolo
                            onChange={(e, newValue) => setCargoEditEscolhido(newValue)}
                            value={cargoEditEscolhido}
                            options={cargos.map((option) => option.cargo)}
                            renderInput={(params) => <CssTextField
                                                    // required
                                                    onChange={(e) => setCargoEditEscolhido(e.target.value)}
                                                    {...params} label="Cargo" />}
                        />

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