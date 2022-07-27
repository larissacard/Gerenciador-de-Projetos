import * as React from 'react';
import {useEffect, useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import api from "../../../api";


export default function PessoasEquipe(Props) {
    const [pessoas, setPessoas] = useState ([])
    const nomes = [
        pessoas
    ]
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
    const [pessoaNome, setPessoaNome] = React.useState([]);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setPessoaNome(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Selecione as Pessoas</InputLabel>
        <Select
          multiple
          value={pessoaNome}
          onChange={(e) => {(Props.childToParent(e.target.value)); handleChange()}}
          input={<OutlinedInput label="Selecione as Pessoas" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {pessoas.map((pessoas) => (
            <MenuItem key={pessoas.pe_nome} value={pessoas.pe_nome}>
              <Checkbox checked={pessoaNome.indexOf(nomes) > -1} />
              <ListItemText primary={pessoas.pe_nome} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}