import { useState } from "react";
import api from "../../../api";
import { Form } from 'react-bootstrap';
import Button from "react-bootstrap/esm/Button";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function Reminders() {
    const [data, setData] = useState({
        le_descricao: '',
        le_data_lembrete: ''
    })
    function cadastrar(e) {
        e.preventDefault();
        api.post(('/lembretes'), {
            le_descricao: data.le_descricao,
            le_data_lembrete: data.le_data_lembrete,
        }).then(res => {
            console.log('Deu certo')
        }).catch(e => {
            console.log(Error)
        })

    }
    
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    function handleDate(event) {
        const newdata = { ...data }
        setData(newdata)
    }

    const handleClickCad = () => {
        try {
            if (data.le_descricao !== '') {
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (

        <div>
            <Form onSubmit={(e) => cadastrar(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Lembrete</Form.Label>
                    <Form.Control required onChange={(e) => handle(e)} id="le_descricao" value={data.le_descricao} type="text" placeholder="Digite o lembrete" />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Label>Data</Form.Label>
                    <Form.Control required onChange={(e) => handle(e)} id="le_data_lembrete" value={data.le_data_lembrete} type="date " placeholder="Informe a data" />
                </Form.Group>  */}
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="DateTimePicker"
                        value={data.le_data_lembrete}
                        onChange={(event) => handleDate(event.toISOString())}
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