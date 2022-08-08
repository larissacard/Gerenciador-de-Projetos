import * as React from 'react';
import {useEffect, useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';


import api from '../../api';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function PessoasTarefa(Props) {
  console.log(Props)
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

  const [prioridade, setPrioridade] = useState();
  console.log(prioridade)
  const handleChangePrioridade = (event) => {
      const value = event.target.value
      setPrioridade(typeof value === 'string' ? value.split(',') : value);
    };

  const handleChangePessoa = (event) => {
    setPessoaNome(event.target.value)
  };

  return (
    <div>
      <TextField
        select
        fullWidth
        label="Prioridade"
        size='small'
        margin='normal'
        value={prioridade}
        onChange={(e) => {Props.childParentPrioridade(e.target.value); handleChangePrioridade(e);}} 
        placeholder='Selecione a Prioridade'
    >
        <MenuItem value={1}>Baixa</MenuItem>
        <MenuItem value={2}>Média</MenuItem>
        <MenuItem value={3}>Alta</MenuItem>
      </TextField>

      {/* <TextField
        select
        fullWidth
        label="Pessoas"
        size='small'
        margin='normal'
        value={pessoaNome}                                                                  
        onChange={(e) => {(Props.childToParentPessoa(e.target.value)); handleChangePessoa(e);}}
        input={<OutlinedInput label="Selecione as Pessoas" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        SelectProps={{
          multiple: true,
          ITEM_HEIGHT: 50,
          ITEM_PADDING_TOP: 8,
        }}
      >
        {pessoas.map((p) => 
            <MenuItem key={p.pe_nome} value={p.pe_nome}>
              <Checkbox checked={pessoaNome.indexOf(p.pe_nome) > -1} />
              {p.pe_nome}
            </MenuItem>
          )}
      </TextField>   */}

      <FormControl fullWidth>
        <InputLabel>Selecione as Pessoas</InputLabel>
        <Select
          multiple
          size='small'
          value={pessoaNome}                                                                  
          onChange={(e) => {(Props.childToParentPessoa(e.target.value)); handleChangePessoa(e);}}
          input={<OutlinedInput label="Selecione as Pessoas" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {pessoas.map((p) => 
            <MenuItem key={p.pe_nome} value={p.pe_nome}>
              <Checkbox checked={pessoaNome.indexOf(p.pe_nome) > -1} />
              {p.pe_nome}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}