import React, { useState } from 'react';
import api from '../../api';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, 
    Slide,
    Divider
} from '@mui/material';
import { 

    DeletarPermanente, 
    Cancelar, 
    Deletar 
} from './styles';

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
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deletarObjeto = () => {
        api.delete(Props.path)
        handleClickDelete();
        setTimeout(() => window.location.pathname = Props.pathFinal, 1500);
    };

    return (
        <>
            <Snackbar open={openAlert} autoHideDuration={1500} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left',}}>
                <Alert onClose={handleCloseAlert} severity='warning'>
                    {Props.alert}
                </Alert>
            </Snackbar>
            
            <div>
                <Deletar onClick={handleClick} >
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
                    <Divider color='#ccc!important'/>
                    <DialogContent>
                        <DialogContentText sx={{color: 'rgba(40, 9, 72, 0.5)'}}>
                            {Props.descricao}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{marginRight: '8px', marginBottom: '4px'}}>
                        <Cancelar onClick={handleClose}> Cancelar </Cancelar>
                        <DeletarPermanente data-cy="Deletar-Permantemente" onClick={() => {handleClose(); deletarObjeto()}}>Excluir</DeletarPermanente>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}