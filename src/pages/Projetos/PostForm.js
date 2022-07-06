import React, {useState} from "react";
import axios, { Axios } from "axios";
import { Form } from 'react-bootstrap';
import { Button, Drawer } from 'rsuite';

import "rsuite/dist/rsuite.min.css";

function PostForm() {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const url= "https://api-brisa-nodejs-postgresql.herokuapp.com/projetos"
    const [data, setData]= useState({
        pr_nome: "",
        pr_descricao: ""
    })

    function cadastrar(e){
        e.preventDefault();
        axios.post(url,{
            pr_nome: data.pr_nome,
            pr_descricao: data.pr_descricao
        })
            .then(res=>{
                console.log(res.data)
                if (res.data == 'Esse projeto já foi inserido!') {
                    alert('Esse Projeto já foi inserido')
                }
                else {
                    alert('Projeto inserido com sucesso!')
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
            <Drawer 
                open={open} 
                onClose={handleClose}
                size="sm"
                >

                <Drawer.Header>
                    <Drawer.Title>Cadastro de um novo Projeto</Drawer.Title>
                    <Drawer.Actions>
                    <Button onClick={() => setOpen(false)}>Cancelar</Button>
                    <Button onClick={() => setOpen(false)} appearance="primary">
                        Cadastrar
                    </Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <Form onSubmit={(e)=> cadastrar(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pr_nome" value={data.pr_nome} type="text" placeholder="Digite o nome do projeto"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pr_descricao" value={data.pr_descricao} type="text" placeholder="Digite a descrição do projeto"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </Drawer.Body>
            </Drawer>
            <div>
                <button onClick={handleOpen}><img src="assets/btn_create.svg" /></button>
            </div>
        </>
    );
}

export default PostForm;