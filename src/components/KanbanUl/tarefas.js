import React, { useState } from 'react';
import "rsuite/dist/rsuite.min.css";
import PessoasTarefa from './pessoas';
import { Button, ButtonMore, ContButtons } from './styles'
import { TextField, FormControl, MenuItem } from '@mui/material';
import { Drawer } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import api from '../../api';

export default function TarefasProjeto(Props) {
    const path = window.location.pathname;

    const [pessoaEscolhida, setPessoaEscolhida] = useState()
    const childToParentPessoa = (childdata) => {
        setPessoaEscolhida(childdata);
    }

    const [prioridade, setPrioridade] = useState();
    const handleChange = (event) => {
        setPrioridade(event.target.value);
    };

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setData('')
    }

    const [data, setData]= useState({
        tr_nome: '',
        tr_descricao: '',
    })

    function cadastrar(e){
        e.preventDefault();
        api.post(('/tarefas'),{
            tr_nome: data.tr_nome,
            tr_descricao: data.tr_descricao,
            tr_prioridade: prioridade, 
            pr_id: path.substring(10,), 
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
            <Drawer open={open} onClose={handleClose} size='sm'>
                <Drawer.Header>
                    <Drawer.Title>Criar uma nova tarefa</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <div onSubmit={(e)=> cadastrar(e)}>
                        <FormControl onChange={(e)=>handle(e)} value={data.tr_nome} type='text' fullWidth>
                            <TextField
                            required
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o nome da Tarefa'
                            margin='dense'
                            />
                        </FormControl>
                    
                        <FormControl onChange={(e)=>handle(e)} value={data.tr_descricao} type='text' fullWidth>
                            <TextField
                            size='small'
                            id='outlined-required'
                            label='Descrição'
                            placeholder='Digite a descrição da tarefa'
                            margin='normal'
                            />
                        </FormControl>

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

                        <PessoasTarefa childToParentPessoa={childToParentPessoa}/>

                        <Drawer.Actions>
                            <ContButtons>
                                <Button onClick={() => setOpen(false)} variant="primary" type="submit">
                                    Cadastrar
                                </Button>
                                <Button onClick={() => setOpen(false)}>Cancelar</Button>
                            </ContButtons>
                        </Drawer.Actions>
                    </div>
                </Drawer.Body>
            </Drawer>
            <div>
                <ButtonMore onClick={handleOpen}>+</ButtonMore>
            </div>
        </>
    );
}

