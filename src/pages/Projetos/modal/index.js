import React, {useState} from "react";
import { Drawer, Button } from 'rsuite';
import { ContButton } from './styles'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import api from '../../../api';
import EquipesProjeto from './equipes';
import { TextField, FormControl, MenuItem } from '@mui/material';

import "rsuite/dist/rsuite.min.css";

function PostProjetos(Props) {
    const [equipeEscolhida, setEquipeEscolhida] = useState()
    const childToParent = (childdata) => {
        setEquipeEscolhida(childdata);
    }
    
    var [mensagem, setMensagem] = useState('')
    const [open, setOpen] = useState(false);
    const [estado, setEstado] = useState();
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setNomeProjeto('')
        setDescricaoProjeto('')
    }
    
    const Alert = React.forwardRef(function Alert(props, ref) {
        console.log(props)
        return <MuiAlert elevation={6} ref={ref} severity={props.severity} variant="filled" {...props} />;
      });

    const [openAlert, setOpenAlert] = useState(false);
    
    const handleClickCad = () => {
        if(nomeProjeto !== ''){
            setOpenAlert(true);
        }
    }; 

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
        setEstado()
    };

    const [nomeProjeto, setNomeProjeto] = useState('')
    const [descricaoProjeto, setDescricaoProjeto] = useState('')

    function cadastrar(e){
        e.preventDefault();
        api.post(('/projetos'),  {
            pr_nome: nomeProjeto,
            pr_descricao: descricaoProjeto,
            equipes: equipeEscolhida
        }).then(res=>{
            setMensagem("Deu Certo!")
            setOpen(false)
            setEstado("success");
            Props.update()
        }).catch(e => { 
            setMensagem(e.response.data);
            setOpen(true);
            setEstado("error");     
        })
    } 

    return (
        <>
            <Snackbar open={openAlert} autoHideDuration={2200} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left',}}>
                <Alert onClose={handleCloseAlert} severity={estado}>
                    {mensagem}
                </Alert>
            </Snackbar>

            <Drawer open={open} onClose={handleClose} size="sm">
                <Drawer.Header>
                    <Drawer.Title>Cadastro de um novo Projeto</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                        <TextField
                            required
                            onChange={(e) => setNomeProjeto(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Nome'
                            placeholder='Digite o nome do Projeto'
                            margin='dense'
                        />

                        <TextField
                            onChange={(e) => setDescricaoProjeto(e.target.value)}
                            fullWidth
                            size='small'
                            id='outlined-required'
                            label='Descrição'
                            placeholder='Digite a descrição do Projeto'
                            margin='normal'
                        />

                        {/* <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control required onChange={(e)=>handle(e)} id="pr_nome" type="text" placeholder="Digite o nome do projeto"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pr_descricao" type="text" placeholder="Digite a descrição do projeto"/>
                        </Form.Group> */}

                        <EquipesProjeto childToParent={childToParent}/>
                        
                        <Drawer.Actions>
                            <Button onClick={handleClickCad} variant="primary" type="submit">
                                Cadastrar
                            </Button >
                            <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        </Drawer.Actions>
                </Drawer.Body>
            </Drawer>
            <ContButton>
                <Button onClick={handleOpen}><img src="assets/btn_create.svg" alt="icone criar"/></Button>
            </ContButton>
        </>
    );
}

export default PostProjetos;