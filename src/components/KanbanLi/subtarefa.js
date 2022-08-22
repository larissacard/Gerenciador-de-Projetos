import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import api from '../../api';

export default function Subtarefas(Props) {
    const [subtarefa, setSubtarefa] = useState('')

    console.log(path)
    function Cadastrar(e) {
        e.preventDefault
        api.post()

    }

    return (
        <CssTextField
            autoComplete='off'
            required
            onChange={(e) => setSubtarefa(e.target.value)}
            fullWidth
            size='small'
            placeholder='Digite o nome da Subtarefa'
            value={subtarefa}
            sx={{
                '& legend': { display: 'none' },
                '& fieldset': { top: 0 },
            }}
        />
    )
}

