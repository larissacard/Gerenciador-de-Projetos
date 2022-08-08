import { useState } from "react";
import api from "../../../api";
import { Form } from 'react-bootstrap';
import Button from "react-bootstrap/esm/Button";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


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
                <Form.Group className="mb-3">
                    <Form.Label>Lembrete</Form.Label>
                    <Form.Control required onChange={(e) => setDescricao(e.target.value)} id="le_descricao" type="text" placeholder="Digite o lembrete" value={descricao}/>
                </Form.Group>
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}a
                        value={data}
                        label="DateTimePicker"
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