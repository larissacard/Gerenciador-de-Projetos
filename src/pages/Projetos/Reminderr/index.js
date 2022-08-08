import { useState } from "react";
import api from "../../../api";
import { Form } from 'react-bootstrap';
import { alpha, styled, ThemeProvider } from '@mui/material/styles';
import Button from "react-bootstrap/esm/Button";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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

  const color = "#764BA2"; 


function Reminders() {
    const [data, setData] = useState(new Date().toISOString())
    const [descricao, setDescricao] = useState("")

    function cadastrar(e) {
        e.preventDefault();
        if (data && descricao) {
            api.post(('/lembretes'), {
                le_descricao: descricao,
                le_data_lembrete: data,
            }).then(res => {
                console.log('Deu certo')
            }).catch(e => {
                console.log(Error)
            })
        }
    }

    const handleClickCad = () => {
        console.log(descricao)
        console.log(data)
    };

    return (

        <div>   
            <Form onSubmit={(e) => cadastrar(e)}>
                {/* <Form.Group className="mb-3">
                    <Form.Label>Lembrete</Form.Label>
                    <Form.Control required onChange={(e) => setDescricao(e.target.value)} id="le_descricao" type="text" placeholder="Digite o lembrete" value={descricao}/>
                </Form.Group> */}
                <CssTextField
                    fullWidth
                    id="outlined-basic" label="Lembrete" variant="outlined" 
                    size="small"
                    margin="normal"
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props}
                        sx={{
                            svg: { color },
                            input: { color },
                            label: { color },
                            margin:"small",
                            '&.Mui-focused': {
                                borderColor: '#764BA2',
                                // svg: {color: '#F57D3D'}
                              },
                          }}
                         />}
                        value={data}
                        label="Data"
                        onChange={(e) => setData(e.toISOString())}
                        
                    />
                </LocalizationProvider>
                <Button onClick={handleClickCad} variant="primary" type="submit">
                    Cadastrar
                </Button >
            </Form>
        </div>

    )
}
export default Reminders;