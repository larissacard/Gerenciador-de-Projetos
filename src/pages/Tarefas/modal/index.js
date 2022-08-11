import React, {useState} from "react";
import { Drawer } from 'rsuite';
import { Button } from './styles'
import { TextField, MenuItem, FormControl } from "@mui/material";

import "rsuite/dist/rsuite.min.css";
import api from "../../../api";

function PostTarefas() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const [prioridade, setPrioridade] = useState();
    const handleChange = (e) => {
        setPrioridade(e.target.value);
    };

    const url= "https://api-brisa-nodejs-postgresql.herokuapp.com/tarefas"
    const [data, setData]= useState({
        tr_nome: "",
        tr_descricao: ""
    })

    function cadastrar(e){
        e.preventDefault();
        api.post(url,{
            tr_nome: data.tr_nome,
            tr_descricao: data.tr_descricao,
            tr_prioridade: prioridade
        })
            .then(res=>{
                if (res.data === 'Esse tarefa já foi inserido!') {
                    alert('Esse tarefa já foi inserido!')
                }
                else {
                    alert('Tarefa inserida com sucesso!')
                }
            })
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return (
        <>
            <Drawer open={open} onClose={handleClose} size="sm">
                <Drawer.Header>
                    <Drawer.Title>Cadastro de uma nova tarefa</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <div>
                        <TextField
                            required
                            id='nome'
                            name='nome'
                            label='Nome'
                            onChange={(e) => handle(e.target.value)} 
                            variant='outlined'
                            margin='dense'
                            fullWidth
                            size='small'
                            placeholder='Digite o nome da Tarefa'
                        />
    
                        <TextField
                            fullWidth
                            id='descricao'
                            name='descricao'
                            size='small'
                            variant='outlined'
                            label='Descrição'
                            onChange={(e) => handle(e.target.value)}
                            placeholder='Digite a descrição da tarefa'
                            margin='normal'
                        />
                    
                        <TextField
                            select
                            fullWidth
                            label='Prioridade'
                            size='small'
                            margin='normal'
                            onChange={(e)=> {handle(e); handleChange(e);}}
                            placeholder='Selecione a Prioridade'
                            defaultValue=''
                        >
                            <MenuItem value={1}>Baixa</MenuItem>
                            <MenuItem value={2}>Média</MenuItem>
                            <MenuItem value={3}>Alta</MenuItem>
                        </TextField>

                        <Drawer.Actions>
                            <Button onClick={(e)=> cadastrar(e)} variant="primary" type="submit">
                                Cadastrar
                            </Button>
                            <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        </Drawer.Actions>
                    </div>
                </Drawer.Body>
            </Drawer>
            <div>
                <Button onClick={handleOpen}><img src="assets/btn_create.svg" alt="create icon"/></Button>
            </div>
        </>
    );
}

export default PostTarefas;