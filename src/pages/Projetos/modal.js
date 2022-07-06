import React, { useState, useEffect } from 'react';
import ExibirProjetos from "../../components/data";
import { Button, Drawer, IconButton } from 'rsuite';

import PostForm from './PostForm';

import "rsuite/dist/rsuite.min.css";

function Cadastro () {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div>
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
                    <PostForm />
                </Drawer.Body>
            </Drawer>
            <div>
                <button onClick={handleOpen}><img src="assets/btn_create.svg" /></button>
            </div>
        </div>
    )}

export default Cadastro;
