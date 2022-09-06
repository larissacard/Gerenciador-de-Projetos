import React, { useEffect, useState } from "react";
import api from "../../../api";

import { 
  TextField,
   Autocomplete 
} from '@mui/material';

export default function PessoasEquipe(Props) {
  const [pessoas, setPessoas] = useState ([])

  useEffect(() => {
    const getPessoas = async () => {
      try {
        const response = await api.get('/pessoas');
        setPessoas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPessoas();
  }, []);

  const [value, setValue] = useState(Props.dados.pessoas);

  return (
    <Autocomplete
      onChange={(event, newValue) => {
        setValue(newValue); (Props.childToParent(newValue))
      }}
      value={value}
      multiple
      options={pessoas}
      getOptionLabel={(pessoas) => pessoas.pe_nome}
      filterSelectedOptions
      isOptionEqualToValue={(option, value) => option.pe_id === value.pe_id}
      renderInput={(params) => (
        <TextField
          {...params}
          required
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
  );
}