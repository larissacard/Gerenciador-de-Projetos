import React, {useState} from "react";
import { Form } from 'react-bootstrap';
import { Drawer } from 'rsuite';
import { Button, Name } from './styles'
import api from "../../../api";
import PessoasEquipe from "./pessoas";

import "rsuite/dist/rsuite.min.css";

function PostEquipes() {
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

    const url= "https://api-brisa-nodejs-postgresql.herokuapp.com/equipes"
    const [data, setData]= useState({
        eq_nome: "",
    })

    function cadastrar(e){
        e.preventDefault();
        api.post(url,{
            eq_nome: data.eq_nome,
            pessoas: pessoaEscolhida
        })
            .then(res=>{
                if (res.data === 'Essa equipe já foi inserida!') {
                    alert('Essa Equipe já foi inserida!')
                }
                else {
                    alert('Equipe inserida com sucesso!')
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
                    <Drawer.Title>Cadastro de uma nova Equipe</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <Form onSubmit={(e)=> cadastrar(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control required onChange={(e)=>handle(e)} id="eq_nome" value={data.eq_nome} type="text" placeholder="Digite o nome da Equipe"/>
                        </Form.Group>
                        <PessoasEquipe childToParent={childToParent}/>

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
                <Button onClick={handleOpen}>
                    <img src="assets/Group.svg" alt="create icon"/>
                    <Name>Adicionar Equipe</Name>
                </Button>
            </div>
        </>
    );
}

export default PostEquipes;