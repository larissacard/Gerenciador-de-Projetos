import * as React from 'react';
import {useEffect, useState} from 'react';
import api from '../../../../api';
import { TextField, Autocomplete } from '@mui/material';

export default function EquipesProjetoEdit(Props) {
  const [equipes, setEquipes] = useState ([])

  useEffect(() => {
      const getEquipes = async () => {
        try {
            const response = await api.get('/equipes');
            setEquipes(response.data);
        } catch (error) {
            console.log(error);
        }
      };
      getEquipes();
  }, []);
  
  const [value, setValue] = useState(Props.dados.equipes)

  return (
    <Autocomplete
      onChange={(event, newValue) => {
        setValue(newValue); (Props.childToParent(newValue))
      }}
      value={value}
      multiple
      options={equipes}
      getOptionLabel={(equipe) => equipe.eq_nome}
      filterSelectedOptions
      isOptionEqualToValue={(option, value) => option.eq_id === value.eq_id}
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