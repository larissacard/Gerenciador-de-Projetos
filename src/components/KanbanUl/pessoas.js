import * as React from 'react';
import {useEffect, useState} from "react";
import { InputLabel, FormControl, OutlinedInput, useTheme, MenuItem, Select, Box, Chip, styled } from '@mui/material';

import api from '../../api';

// const CssSelect = styled(Select)({
//   '& .MuiOutlinedInput-root': {
//       color: '#764BA2',
//      // svg: {color: '#F4F5FA'},
//     '&.Mui-focused': {
//       borderColor: '#F4F5FA',
//       // svg: {color: '#F57D3D'}
//     },
//     '& fieldset': {
//       borderRadius: "20px",
//       border: "2px solid #764BA"
//     },
//   //   '&:hover fieldset': {
//   //     borderColor: '#C2C3C6',
//   //   },
//     '&.Mui-focused fieldset': {
//       borderColor: '#764BA2',
//     },
//   },
//   '.MuiInputLabel-outlined': {
//     color: '#764BA2',
//     '&.Mui-focused': {
//         color:'#764BA2',
//     },
//   },
// })

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function getStyles(pessoas, pessoaNome, theme) {
  return {
    fontWeight:
      pessoaNome.indexOf(pessoas) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PessoasTarefa(Props) {
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

  const [pessoaNome, setPessoaNome] = useState([]);
  const theme = useTheme();

  const handleChangePessoa = (event) => {
    setPessoaNome(event.target.value)
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Selecione as Pessoas</InputLabel>
      <Select
        multiple
        value={pessoaNome}                                                                  
        onChange={(e) => {(Props.childToParentPessoa(e.target.value)); handleChangePessoa(e);}}
        renderValue={(selected) => (<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
          {selected.map((pessoaNome) => (
            <Chip key={pessoaNome} label={pessoaNome} />
            ))}
            </Box>
          )}
        size='small'
        MenuProps={MenuProps}
        input={<OutlinedInput label="Selecione as Pessoas"/>}
      >
        {pessoas.map((p) => 
          <MenuItem key={p.pe_nome} value={p.pe_nome} style={getStyles(pessoas, pessoaNome, theme)}>
            {p.pe_nome}
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
}