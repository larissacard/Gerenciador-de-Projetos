import {  useState } from "react";
import api from "../../../api";
import { Form } from 'react-bootstrap';
import Button from "react-bootstrap/esm/Button";


function Reminders(){
    const [data, setData]= useState({
        le_descricao: '',
        le_data_lembrete: ''
    })

    function cadastrar(e){
        e.preventDefault();
        api.post(('/lembretes'),  {
            le_descricao: data.le_descricao,
            le_data_lembrete: data.le_data_lembrete,
        }).then(res=>{
            console.log('Deu certo')
        }).catch(e => { 
            console.log('Erro')     
        })

    }
    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    const handleClickCad = () => {
        if(data.le_descricao !== ''){
            console.log('num pode')
        }
    };

    return(
        <div>
        <Form onSubmit={(e)=> cadastrar(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control required onChange={(e)=>handle(e)} id="le_descricao" value={data.le_descricao} type="text" placeholder="Digite o lembrete"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Data</Form.Label>
                            <Form.Control required onChange={(e)=>handle(e)} id="le_data_lembrete" value={data.le_data_lembrete} type="date" placeholder="Informe a data"/>
                        </Form.Group>
                        <Button onClick={handleClickCad} variant="primary" type="submit">
                                Cadastrar
                        </Button >
        </Form>
        </div>
    )


}
export default Reminders;

// function Reminders(){
//     const [data, setData]= useState({
//         le_descricao: '',
//         le_data_lembrete: ''
//     })

//     const[le_descricao, setLe_descricao] = useState('')
//     const [date, setDate] = useState('')

//     useEffect(() =>{
//         axios.get('/lembretes')
//         .then(res => {
//             console.log("Getting from ::::", res.data)
//             setData(res.data)
//         }).catch(err => console.log(err))
//     }, [])

//     const postReminder = (e) => {
//         e.preventDefault();
//         axios.post('/lembretes', {
//             le_descricao,
//             le_data_lembrete
//         }).then(res => console.log('posting data', res)).catch(err => console.lolg(err))
//     }

//     return(
//         <div>
//             <form>
//                 <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
//                 <input type = "date" value={date} onChange={(e) => setDate(e.target.value)}/>
//                 <button onClick={postReminder}>Salvar</button>
//             </form>
//         </div>

        
//     )

// }