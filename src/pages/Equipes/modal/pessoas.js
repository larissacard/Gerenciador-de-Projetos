import React, { useEffect, useState } from 'react';
import api from '../../../api';

import { 
  TextField, 
  Autocomplete 
} from '@mui/material';

export default function PessoasEquipe(Props) {
  const [pessoas, setPessoas] = useState ([])

  useEffect(() => {
    const getEquipes = async () => {
      try {
        const response = await api.get('/pessoas');
        setPessoas(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEquipes();
  }, []);

  const [nomePessoa, setNomePessoa] = useState(pessoas)

  return (
    <Autocomplete
      onChange={(event, newValue) => {
        setNomePessoa(newValue); (Props.childToParent(newValue))
      }}
      data-cy="equipes"
      value={nomePessoa}
      multiple
      options={pessoas}
      getOptionLabel={(pessoa) => pessoa.nome}
      filterSelectedOptions
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          label='Equipes'
          placeholder='Selecione as Equipes'
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
  );
}