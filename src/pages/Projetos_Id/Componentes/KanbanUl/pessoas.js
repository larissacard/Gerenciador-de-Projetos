import React, {useState} from 'react';

import MuiAlert from '@mui/material/Alert';

import { 
  TextField,
  Autocomplete, 
  Snackbar
} from '@mui/material';

export default function PessoasTarefa(Props) {
  const [pessoas, setPessoas] = useState ()
  const [nomePessoa, setNomePessoa] = useState();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} severity={props.severity} variant='filled' {...props} />;
  });

  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpenAlert(false);
  };

  if (!pessoas) {
    let pessoasList = []
    Props.dados.equipes
      .map(eqs => eqs.pessoas)
      .forEach(e => e.forEach((p) => pessoasList.push(p)))
    setPessoas(pessoasList)

    if (pessoasList.length === 0) setOpenAlert(true)
  }

  return (
    
    pessoas &&
    <>
      <Snackbar open={openAlert} autoHideDuration={2200} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
        <Alert onClose={handleCloseAlert} severity='warning'>
          Xiii, num tem ninguem pra fazer essa tarefa aí
        </Alert>
      </Snackbar>
      
      <Autocomplete
        onChange={(_event, newValue) => { setNomePessoa(newValue); console.log(newValue); (Props.childToParent(newValue)) }}
        multiple
        options={pessoas}
        getOptionLabel={(pessoa) => pessoa.nome}
        filterSelectedOptions
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={nomePessoa}
        renderInput={(params) => (
          <TextField
            required
            {...params}
            label='Pessoas'
            placeholder='Selecione as Pessoas'
            size='small'
            sx={{
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
            }}
          />
        )}
      />
    </>
  );
}