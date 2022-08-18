import * as React from 'react';
import {useEffect, useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { TextField, Autocomplete } from '@mui/material';
import api from "../../../api";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

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