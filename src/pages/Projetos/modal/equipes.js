import * as React from 'react';
import {useEffect, useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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

export default function EquipesProjeto(Props) {
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
    const [equipeNome, setEquipeNome] = useState([]);

  const handleChange = (event) => {
    setEquipeNome(event.target.value)
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Selecione as Equipes</InputLabel>
        <Select
          multiple
          value={equipeNome}
          onChange={(e) => {(Props.childToParent(e.target.value)); handleChange(e)}}
          input={<OutlinedInput label="Selecione as Equipes" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          
          {equipes.map((equipe) => 
            <MenuItem key={equipe.eq_nome} value={equipe.eq_nome}>
              <Checkbox checked={equipeNome.indexOf(equipe.eq_nome) > -1} />
              {equipe.eq_nome}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}