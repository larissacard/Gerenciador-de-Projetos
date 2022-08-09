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
    
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [descricaoTarefa, setDescricaoTarefa] = useState('')
    const [prioridade, setPrioridade] = useState([]);
    
    const handleChange = (e) => {
        setPrioridade(e.target.value);
    };

    // const handleClick = () => {
    //     if (nomeTarefa !== '') {
    //         setOpen(false)
    //     }
    // }

    function cadastrar(e){
        // e.preventDefault();
        api.post('/tarefas', {
            tr_nome: nomeTarefa,
            tr_descricao: descricaoTarefa,
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
            setOpen(true);
        })
    }

    return (
        <>
            <Drawer open={open} onClose={handleClose} size='sm'>
                <Drawer.Header>
                    <Drawer.Title>Criar uma nova tarefa</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <form onSubmit={handleClose}>
                        <TextField
                            required
                            onChange={(e) => setNomeTarefa(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o nome da Tarefa'
                            margin='dense'
                        />
                        <TextField
                            onChange={(e) => setDescricaoTarefa(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Descrição'
                            placeholder='Digite a descrição da Tarefa'
                            margin='normal'
                        />
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
                                <Button onClick={() => setOpen(false)} preventDefault>
                                    Cancelar
                                </Button>
                            </ContButtons>
                        </Drawer.Actions>
                    </form>
                </Drawer.Body>
            </Drawer>
            <div>
                <ButtonMore onClick={handleOpen}>+</ButtonMore>
            </div>
        </>
    );
}

