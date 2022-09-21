import React, { useState, useEffect } from 'react';
import api from '../../../../api';

import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import create from '../../../../assets/btn_create.svg'
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core";

import { 
    ButtonPost, 
    ButtonCancel, 
    Cancelar, 
    Cadastrar, 
} from './styles'

import { 
    Drawer, 
    Box, 
    Typography, 
    TextField, 
    Snackbar, 
    Stack, 
    Autocomplete, 
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

const NumericFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="R$"
      />
    );
  });
  
NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
  

function PostPessoas(Props) {
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
        setNomePessoa('')
        setDatanasc('')
        setSalario('')
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

    const [cargoEscolhido, setCargoEscolhido] = useState()
    const [nomePessoa, setNomePessoa] = useState()
    const [datanasc, setDatanasc] = useState('')
    const [salario, setSalario] = useState()
    const [imagem, setImagem] = useState()

    const [values, setValues] = useState({
        numberformat: '',
    });

    const handleClickCad = () => {
        if(nomePessoa !== ''){
            setTimeout(() => setOpenAlert(true), 150);
            setOpenDrawer(false);    
        }
    }

    const config = {
        'Content-Type': 'multipart/form-data',
    }

    function cadastrar(e) {
        e.preventDefault();
        const Form = new FormData();
        Form.append('foto', imagem)
        Form.append('nome', nomePessoa)
        Form.append('nascimento', datanasc)
        Form.append('cargo', cargoEscolhido)
        Form.append('salario', salario.replace(",", "").replace(".", ""))

        api.post('/pessoas', Form, config)
        .then(res => {
            setNomePessoa('')
            setDatanasc('')
            setSalario('')
            setMensagem('Pessoa Cadastrada com Sucesso!')
            setEstado('success');
            Props.update()
        })

        .catch(err => { 
            // setOpenDrawer(true);
            setMensagem(err.response.data.message)
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
                        Cadastro de uma Nova Pessoa
                    </Typography>
                    <ButtonCancel onClick={handleClose} />
                </Box>

                <form onSubmit={handleClose}>
                    <Stack spacing={2.5}>
                        <CssTextField
                            data-cy="nome"
                            autoComplete='off'
                            required
                            onChange={(e) => setNomePessoa(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o Nome da Pessoa'
                            inputProps={{
                                maxLength: 50,
                              }}
                        />

                        <CssTextField
                            label="Salário"
                            required
                            size='small'                           
                            autoComplete='off'
                            placeholder='Digite o Salário da Pessoa'
                            value={values.numberformat}
                            onChange={(e) => setSalario(e.target.value)}
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                                inputComponent: NumericFormatCustom,
                                maxLength: 10,
                            }}
                            aria-haspopup='true'
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                fullWidth                                
                                disableFuture={true}
                                inputFormat="dd/MM/yyyy"
                                label="Data de Nascimento"
                                autoFocus={true}
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={datanasc}
                                onChange={(newValue) => {
                                    setDatanasc(newValue);
                                }}
                                renderInput={(params) => 
                                    <CssTextField 
                                        size='small' 
                                        focused
                                        autoComplete='off'
                                        {...params}
                                />}
                            />
                        </LocalizationProvider>

                        <CssTextField
                            data-cy="img"
                            autoComplete='off'
                            required
                            onChange={(e) => setImagem(e.target.files[0])}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            type='file'
                            encType='multipart/form-data'
                            sx={{
                                '& legend': { display: 'none' },
                                '& fieldset': { top: 0 },
                            }}
                        />

                        <Autocomplete
                            id="free-solo-demo"
                            size='small'
                            freeSolo
                            onChange={(e, newValue) => setCargoEscolhido(newValue)}
                            options={cargos.map((option) => option.cargo)}
                            renderInput={(params) => <CssTextField
                                                    // required
                                                    onChange={(e) => setCargoEscolhido(e.target.value)}
                                                    {...params} label="Cargo" />}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
                            <Cancelar onClick={() => setOpenDrawer(false)}>
                                Cancelar
                            </Cancelar>
                            <Cadastrar type='submit' onClick={(e) => {cadastrar(e); handleClickCad()}} >
                                Cadastrar
                            </Cadastrar >
                        </Box>
                    </Stack>
                </form>
            </Drawer>

            <div>
                <ButtonPost data-cy="adicionar pessoa" onClick={handleOpen}><img src={create} alt='create icon' /></ButtonPost>
            </div>
        </>
    );
}

export default PostPessoas;