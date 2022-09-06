import React, { useState, useEffect } from "react";
import api from "../../../api";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Catalogo, Close, Container, Icon, Open, Pic, Text } from "./styles";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: 'none',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    width: '30%',
    height: '30%',
};

export default function TeamProfile(Props) {
    const [fotos, setFotos] = useState([]);

    const [fotoEscolhida, setFotoEscolhida] = useState()

    const childToParent = (childdata) => {
        setFotoEscolhida(childdata);
    }

    //Modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        const getFotos = async () => {
            try {
                const response = await api.get('/equipes/fotos')
                setFotos(response.data)
            } catch (err) {
                console.log(err);
            }
        };
        getFotos();
    }, []);

    return (
        <>
            {
                fotoEscolhida &&
                <Icon>
                    <img src={fotoEscolhida.link}/>
                </Icon>
            }
            <div>

                <Open className="d-flex" variant="outlined" onClick={handleClickOpen}>
                    <Text>Escolher Icon</Text>
                </Open>

                <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth
                    >
                    <DialogTitle style={{color: '#7C6A8F'}}>{"Escolha uma foto para sua equipe!!"}</DialogTitle>
                    <DialogContent>
                    </DialogContent>

                    <Catalogo>
                            {fotos.map(i => (
                                <div key={i.id}>
                                    <Pic 
                                    onClick={(e) => {
                                        Props.childToParent(i.id)
                                        setFotoEscolhida(i)
                                        handleClose()
                                    }} 

                                    style={{border: 'none'}}>
                                        <img src={i.link}    />
                                    </Pic>
                                </div>
                            ))}
                    </Catalogo>
                    <DialogActions>
                        <Close onClick={handleClose}>Fechar</Close>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}