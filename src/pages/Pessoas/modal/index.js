import React, {useEffect, useState} from "react";
import { Form } from 'react-bootstrap';
import { Drawer } from 'rsuite';
import { Button } from './styles'
import CargosPessoa from "./cargos";

import api from "../../../api";
import "rsuite/dist/rsuite.min.css";


function PostPessoas() {
    const [cargoEscolhido, setCargoEscolhido] = useState()
    const childToParent = (childdata) => {
        setCargoEscolhido(childdata);
        console.log(childdata)
      }

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const [data, setData]= useState({
        pe_nome: "",
        pe_data_nasc: "",
        pe_salario: "",
    })

    function cadastrar(e){
        e.preventDefault();
        api.post('/pessoas',{
            pe_nome: data.pe_nome,
            pe_data_nasc: data.pe_data_nasc,
            pe_cargo: cargoEscolhido,
            pe_salario: data.pe_salario
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
                            <Form.Label>Salario</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pe_salario" value={data.pe_salario} type="text" placeholder="Digite o salario da pessoa"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Data de nascimento</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pe_data_nasc" value={data.pe_data_nasc} type="date" placeholder="Digite a data de nascimento"/>
                        </Form.Group>

                        {/* <Form.Select>
                            <option>Selecione o cargo</option>
                            {cargos.map(({cargo, index}) => 
                                <option value={cargo} key={index}> {cargo} </option>
                            )}
                        </Form.Select> */}
                        <CargosPessoa childToParent={childToParent}/>
                        
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