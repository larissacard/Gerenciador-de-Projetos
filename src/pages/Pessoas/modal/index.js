import React, {useState} from "react";
import axios, { Axios } from "axios";
import { Form } from 'react-bootstrap';
import { Drawer } from 'rsuite';
import { Button } from './styles'

import "rsuite/dist/rsuite.min.css";

function PostPessoas() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const url= "https://api-brisa-nodejs-postgresql.herokuapp.com/pessoas"
    const [data, setData]= useState({
        pe_nome: "",
        ca_cargo: "",
        pe_data_nasc: ""
    })

    function cadastrar(e){
        e.preventDefault();
        axios.post(url,{
            pe_nome: data.pe_nome,
            ca_cargo: data.ca_cargo,
            pe_data_nasc: data.pe_data_nasc
        })
            .then(res=>{
                console.log(res.data)
                if (res.data == 'Essa pessoa já foi inserida!') {
                    alert('Essa Pessoa já foi inserida!')
                }
                else {
                    alert('Pessoa inserida com sucesso!')
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
                    <Drawer.Title>Cadastro de uma nova pessoa</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <Form onSubmit={(e)=> cadastrar(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pe_nome" value={data.pe_nome} type="text" placeholder="Digite o nome da pessoa"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="ca_cargo" value={data.ca_cargo} type="number" placeholder="Digite o cargo da pessoa"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Data de nascimento</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pe_data_nasc" value={data.pe_data_nasc} type="date" placeholder="Digite a data de nascimento"/>
                        </Form.Group>

                        <Form.Select>
                            <option>Selecione o cargo</option>
                            <option value="1">FrontEnd Junior</option>
                            <option value="2">FrontEnd Pleno</option>
                            <option value="3">BackEnd Junior</option>
                            <option value="4">BackEnd Pleno</option>
                        </Form.Select>
                        
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

export default PostPessoas;