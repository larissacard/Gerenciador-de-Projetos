import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import api from '../../../api';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#764BA2',
       // svg: {color: '#F4F5FA'},
      '&.Mui-focused': {
        borderColor: '#F4F5FA',
        // svg: {color: '#F57D3D'}
      },
      '& fieldset': {
        borderRadius: "20px",
        border: "2px solid #764BA"
      },
    //   '&:hover fieldset': {
    //     borderColor: '#C2C3C6',
    //   },
      '&.Mui-focused fieldset': {
        borderColor: '#764BA2',
      },
    },
    '.MuiInputLabel-outlined': {
      color: '#764BA2',
      '&.Mui-focused': {
          color:'#764BA2',
      },
    },
  })

export default function FormReminder () {
    const [value, setValue] = useState(new Date());

    const handleChange = (newValue) => {
      setValue(newValue);
    };
    console.log(value.getFullYear())
    
    
    return(
        <>
            <CssTextField
            fullWidth
            id="outlined-basic" label="Lembrete" variant="outlined" 
            size="small"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    inputFormat="dd/MM/yyyy - hh:mm"
                    ampm={false}
                    label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    />
            </LocalizationProvider>
        </>
)}