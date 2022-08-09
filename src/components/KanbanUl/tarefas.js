import React, { useState } from 'react';
import "rsuite/dist/rsuite.min.css";
import PessoasTarefa from './pessoas';
import { Button, ButtonMore, ContButtons } from './styles'
import { TextField, FormControl, MenuItem } from '@mui/material';
import { Drawer } from 'rsuite';
import { Form } from 'react-bootstrap';

import 'rsuite/dist/rsuite.min.css';

import api from '../../api';

export default function TarefasProjeto(Props) {
    const path = window.location.pathname;

    const [pessoaEscolhida, setPessoaEscolhida] = useState()
    const childToParentPessoa = (childdata) => {
        setPessoaEscolhida(childdata);
    }
    
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    
    const [nomeProjeto, setNomeProjeto] = useState('')
    const [descricaoProjeto, setDescricaoProjeto] = useState('')
    const [prioridade, setPrioridade] = useState([]);
    
    const handleChange = (e) => {
        setPrioridade(e.target.value);
    };

    function cadastrar(e){
        e.preventDefault();
        api.post('/tarefas', {
            tr_nome: nomeProjeto,
            tr_descricao: descricaoProjeto,
            tr_prioridade: prioridade, 
            pr_id: path.substring(10,), 
            pessoas: pessoaEscolhida
        })
        .then(res=>{
            console.log("Cadastrou")
            console.log(res.data)
        })
        .catch (e => {
            console.log(e.response.data)
        })
    }

    return (
        <>
            <Drawer open={open} onClose={handleClose} size='sm'>
                <Drawer.Header>
                    <Drawer.Title>Criar uma nova tarefa</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <div>
                        <form onSubmit={() => setOpen(false)}>
                            <FormControl onChange={(e) => setNomeProjeto(e.target.value)} fullWidth>
                                <TextField
                                required
                                size='small'
                                id='outlined-required'
                                label='Nome'
                                placeholder='Digite o nome da Tarefa'
                                margin='dense'
                                />
                            </FormControl>
                        
                            <FormControl onChange={(e) => setDescricaoProjeto(e.target.value)} fullWidth>
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
                                onChange={(e)=> handleChange(e)}
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
                                    <Button onClick={(e)=> cadastrar(e)} variant="primary" type="submit">
                                        Cadastrar
                                    </Button>
                                    <Button onClick={() => setOpen(false)}>Cancelar</Button>
                                </ContButtons>
                            </Drawer.Actions>
                        </form>
                    </div>
                </Drawer.Body>
            </Drawer>
            <div>
                <ButtonMore onClick={handleOpen}>+</ButtonMore>
            </div>
        </>
    );
}

