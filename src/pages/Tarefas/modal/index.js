import React, {useState} from "react";
import axios, { Axios } from "axios";
import { Form } from 'react-bootstrap';
import { Drawer } from 'rsuite';
import { Button } from './styles'

import "rsuite/dist/rsuite.min.css";

function PostForm() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const url= "https://api-brisa-nodejs-postgresql.herokuapp.com/tarefas"
    const [data, setData]= useState({
        tr_nome: "",
        tr_descricao: ""
    })

    function cadastrar(e){
        e.preventDefault();
        axios.post(url,{
            tr_nome: data.tr_nome,
            tr_descricao: data.tr_descricao
        })
            .then(res=>{
                console.log(res.data)
                if (res.data == 'Esse tarefa já foi inserido!') {
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
                    <Form onSubmit={(e)=> cadastrar(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="tr_nome" value={data.tr_nome} type="text" placeholder="Digite o nome da tarefa"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="tr_descricao" value={data.tr_descricao} type="text" placeholder="Digite a descrição da tarefa"/>
                        </Form.Group>

                        <Drawer.Actions>
                            <Button onClick={() => setOpen(false)} variant="primary" type="submit">
                                Cadastrar
                            </Button>
                            <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        </Drawer.Actions>
                    </Form>
                </Drawer.Body>
            </Drawer>
            <div>
                <Button onClick={handleOpen}><img src="assets/btn_create.svg" /></Button>
            </div>
        </>
    );
}

export default PostForm;