import React, { useState } from 'react';
import api from '../../api';
import TextField from '@mui/material/TextField';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { Drawer, Button} from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import PessoasTarefa from './pessoas';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TarefasProjeto(Props) {
    const [pessoaEscolhida, setPessoaEscolhida] = useState()
    const childToParent = (childdata) => {
        setPessoaEscolhida(childdata);
    }

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const [data, setData]= useState({
        tr_nome: '',
        tr_descricao: '',
        tr_prioridade: '',
        pr_id: '',
    })

    function cadastrar(e){
        e.preventDefault();
        api.post(('/tarefas'),{
            tr_nome: data.tr_nome,
            tr_descricao: data.tr_descricao,
            tr_prioridade: data.tr_prioridade, //mudar para o input para um select e puxar a prioridade do banco
            pr_id: data.pr_id, //passar o id do projeto aqui
            pessoas: pessoaEscolhida
        })
        .then(res=>{
            console.log(res.data)
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
                    <Drawer.Title>Criar uma nova tarefa</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <div onSubmit={(e)=> cadastrar(e)}>
                        <FormControl onChange={(e)=>handle(e)} id="tr_nome" value={data.tr_nome} type="text" fullWidth>
                            <TextField
                            required
                            size='small'
                            id="outlined-required"
                            label="Nome"
                            placeholder='Digite o nome da Tarefa'
                            margin='dense'
                            />
                        </FormControl>
                    
                        <FormControl onChange={(e)=>handle(e)} id="tr_descricao" value={data.tr_descricao} type="text" fullWidth>
                            <TextField
                            size='small'
                            id="outlined-required"
                            label="Descrição"
                            placeholder='Digite a descrição da tarefa'
                            margin='normal'
                            />
                        </FormControl>

                        <PessoasTarefa childToParent={childToParent}/>

                        <Drawer.Actions>
                            <Button onClick={() => setOpen(false)} variant="primary" type="submit">
                                Cadastrar
                            </Button>
                            <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        </Drawer.Actions>
                    </div>
                </Drawer.Body>
            </Drawer>
            <div>
                <Button onClick={handleOpen}>+</Button>
            </div>
        </>
    );
}

