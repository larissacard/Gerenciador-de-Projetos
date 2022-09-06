import React, { useEffect, useState } from "react";
import api from "../../../api";

import { 
  Checkbox,
  Select, 
  FormControl,
  MenuItem, 
  InputLabel, 
  OutlinedInput 
}from '@mui/material';

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
  const [pessoaNome, setPessoaNome] = useState([]);

  const handleChange = (event) => {
    setPessoaNome(event.target.value)
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Selecione as Pessoas</InputLabel>
        <Select
          multiple
          value={pessoaNome}
          onChange={(e) => {(Props.childToParent(e.target.value)); handleChange(e)}}
          input={<OutlinedInput label="Selecione as Pessoas" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          
          {pessoas.map((p) => 
            <MenuItem key={p.pe_id} value={p.pe_nome}>
              <Checkbox checked={pessoaNome.indexOf(p.pe_nome) > -1} />
              {p.pe_nome}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}