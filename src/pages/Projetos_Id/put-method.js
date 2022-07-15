import React, {useEffect, useState} from "react";
import axios, { Axios } from "axios";
import { Form, Button } from 'react-bootstrap';
import { Drawer } from 'rsuite';

function AtualizarProjetos(props) {
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
        pr_descricao: "",
        pr_id: []
    })

    function atualizar(e){
        e.preventDefault();
        const pr_id = props.match.params.id
        Axios.put((url+pr_id, data)
        .then(res=>{
            console.log(res.data)
            props.history.push("/")
        }).catch(err=>console.error(err))
        )}
       

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <>
            <Drawer open={open} onClose={handleClose} size="sm">
                <Drawer.Header>
                    <Drawer.Title>Cadastro de um novo Projeto</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <Form onSubmit={(e)=> atualizar(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pr_nome" value={data.pr_nome} type="text" placeholder="Digite o nome do projeto"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pr_descricao" value={data.pr_descricao} type="text" placeholder="Digite a descrição do projeto"/>
                        </Form.Group>
                        
                        <Drawer.Actions>
                            <Button onClick={() => setOpen(false)} variant="primary" type="submit">
                                Atualizar
                            </Button>
                            <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        </Drawer.Actions>
                    </Form>
                </Drawer.Body>
            </Drawer>
            <div>
                <Button onClick={handleOpen}>Atualizar</Button>
            </div>
        </>
    );
}

export default AtualizarProjetos;