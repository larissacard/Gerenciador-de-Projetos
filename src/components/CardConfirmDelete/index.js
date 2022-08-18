import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide  } from '@mui/material';
import { DeletarPermanente, Cancelar, Deletar } from './styles';
import { useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import api from '../../api';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDeleteDialog(Props) {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
    });

    const [openAlert, setOpenAlert] = useState(false);
    
    const handleClickDelete = () => {
        setOpenAlert(true);
    };
    
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenAlert(false);
    } 
    const path = window.location.pathname;

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let navigate = useNavigate()

    const deletarProjeto = () => {
        api.delete(path)
        handleClickDelete();
        setTimeout(() => navigate('/projetos'), 1500);
    };

    return (
        <>
            <Snackbar open={openAlert} autoHideDuration={1500} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left',}}>
                <Alert onClose={handleCloseAlert} severity='warning'>
                    {Props.alert}
                </Alert>
            </Snackbar>
            
            <div>
                <Deletar onClick={handleClick}>
                    Excluir
                </Deletar>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    fullWidth
                    maxWidth="xs"
                    PaperProps={{
                        style: { borderRadius: '16px' }
                    }}
                >
                    <DialogTitle sx={{color: '#280948' }}>
                        {Props.titulo}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText sx={{color: 'rgba(40, 9, 72, 0.5)'}}>
                        {Props.descricao}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{marginRight: '8px', marginBottom: '4px'}}>
                    <Cancelar onClick={handleClose}> Cancelar </Cancelar>
                    <DeletarPermanente onClick={() => {handleClose(); deletarProjeto()}}>Excluir</DeletarPermanente>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}