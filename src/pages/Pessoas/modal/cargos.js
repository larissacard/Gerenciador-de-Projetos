import * as React from 'react';
import {useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import api from "../../../api";

export default function CargosPessoa (Props) {
    const [cargos, setCargos] = useState ([])
    
    useEffect(() => {
        const getCargos = async () => {
            try {
                const response = await api.get('/cargos');
                setCargos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCargos();
    }, []);

    const handleChange = (e) => {
        setCargos(e.target.value);
    }
    
    return(
        <FormControl fullWidth>
            <InputLabel>Selecione o Cargo</InputLabel>
            <Select onChange={(e) => {(Props.childToParent(e.target.value)); handleChange()}} label="Selecione o Cargo">
            {cargos.map((cargos) =>   
               <MenuItem value={cargos.cargo} key={cargos.cargo}>{cargos.cargo}</MenuItem>
            )} 
            </Select>
        </FormControl>
    )
}