import * as React from 'react';
import {useEffect, useState} from "react";
import api from "../../../api";

import { InputLabel, FormControl, OutlinedInput, useTheme, MenuItem, Select, Box, Chip, styled } from '@mui/material';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function getStyles(equipes, equipeNome, theme) {
  return {
    fontWeight:
      equipeNome.indexOf(equipes) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

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
  const theme = useTheme();

  const handleChange = (event) => {
    setEquipeNome(event.target.value)
  };

  return (
    <div>
      <FormControl fullWidth size='small'>
        <InputLabel>Selecione as Equipes</InputLabel>
        <Select
          multiple
          value={equipeNome}
          onChange={(e) => {(Props.childToParent(e.target.value)); handleChange(e)}}
          renderValue={(selected) => (<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
          {selected.map((equipeNome) => (
            <Chip key={equipeNome} label={equipeNome} />
            ))}
            </Box>
          )}
          MenuProps={MenuProps}
          input={<OutlinedInput label="Selecione as Equipes" />}
        >
          {equipes.map((equipe) => 
            <MenuItem key={equipe.eq_nome} value={equipe.eq_nome} style={getStyles(equipes, equipeNome, theme)}>
              {equipe.eq_nome}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}