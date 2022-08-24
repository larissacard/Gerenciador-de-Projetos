import api from "../../../api";
import { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


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

            <Avatar size={64} icon={fotoEscolhida} />
            <div>Aoba</div>

            {/* Modal */}
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Slide in alert dialog
                </Button>
                <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Team Pic Changer"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                        Escolha uma foto para sua equipe!!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose}>Agree</Button>
                    </DialogActions>

                    <div>
                            {fotos.map(i => (
                                <div key={i.id} className='d-flex'>
                                    <button 
                                    onClick={(e) => setFotoEscolhida(i.id)} 
                                    style={{border: 'none'}}>
                                        <img src={i.link} style={{width: '30px', height: '30px'}} />
                                    </button>
                                </div>
                            ))}
                    </div>
                </Dialog>

                {/* <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Team Pic Changer
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Escolha uma foto para sua equipe!!
                        </Typography>
                        <div>
                            <div>
                            {fotos.map(i => (
                                <div key={i.id} className='d-flex'>
                                    <button 
                                    onClick={(e) => setFotoEscolhida(i.id)} 
                                    style={{border: 'none'}}>
                                        <img src={i.link} style={{width: '30px', height: '30px'}} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        </div>
                
                    </Box>
                </Modal> */}
            </div>
        </>
    )



}