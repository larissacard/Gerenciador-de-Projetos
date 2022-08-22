import React, { useState } from 'react';
import { Container, Top, Body, Prioridade, ButtonCancel, StatusTarefa, PrioridadeTarefa, Input } from './styles';
import { useDrag } from 'react-dnd'
import DetalheTarefa from '../../pages/Projetos_Id/Components/Tarefas_Id';
import { BsFlagFill } from 'react-icons/bs'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import { PropaneSharp } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function KanbanLi(Props) {
  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {'id': Props.dados.tr_id, 'status': Props.dados.tr_status},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [descricao, setDescricao] = useState(Props.dados.tr_descricao)
  const [titulo, setTitulo] = useState(Props.dados.tr_nome)

  return (
    <>
      <Container ref={dragRef} isDragging={isDragging} onClick={handleClickOpen}>
        <Top>
          <h3 title={Props.dados.tr_nome}>{Props.dados.tr_nome}</h3>
        </Top>
        <Body>
            <Prioridade>
              <span style={{ backgroundColor: Props.dados.tr_prioridade === 1 ? '#67CB65' :
                                              Props.dados.tr_prioridade === 2 ? '#FF9533' : 
                                              Props.dados.tr_prioridade === 3 ? '#E74444' : 'gray'}}>
                {
                  Props.dados.tr_prioridade === 1 ? 'Baixa' :
                  Props.dados.tr_prioridade === 2 ? 'Média' :
                  Props.dados.tr_prioridade === 3 ? 'Alta'  :
                  Props.dados.tr_prioridade
                }
              </span>
            </Prioridade>
            {/* <ul>
              <li>
                {Props.dados.tr_descricao.length > 100 ?
                <span><strong>Descricao:</strong> {`${Props.dados.tr_descricao.substring(0, 100)}...`}</span>
                : <span><strong>Descricao:</strong> {Props.dados.tr_descricao}</span>}
              </li>
              {Props.dados.tr_data_criacao &&
                <li>
                  <p>Data de Criação:</p> 
                  <span>{Props.dados.tr_datProps.dados.tr_nome

              }
              <li> <strong>Data de Entrega:</strong> {Props.dados.tr_data_entrega}</li>
            </ul> */}
        </Body>
      </Container>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby='alert-dialog-slide-description'
          PaperProps={{
            style: { borderRadius: '20px', 
            background: '#F5F5F7',
          }
        }}
        >
          <DialogTitle sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 600,
            fontSize: '30px',
            color: '#280948',
          }}>
            <Input type="text" value={titulo} onChange={e => setTitulo(e.target.value)}/>
            {/* <ButtonCancel onClick={handleClose}/> */}
          </DialogTitle>
          <Divider color="#764BA2" sx={{height: '1px'}}/>
          <DialogContent>
            <DialogContentText sx={{
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
            }}>
              <StatusTarefa>
                {Props.dados.tr_status}
              </StatusTarefa>
              <PrioridadeTarefa>
                {
                  Props.dados.tr_prioridade === 1 ? <BsFlagFill size={22} style={{color: '#67CB65'}}/> :
                  Props.dados.tr_prioridade === 2 ? <BsFlagFill size={22} style={{color: '#FF9533'}}/> :
                  Props.dados.tr_prioridade === 3 ? <BsFlagFill size={22} style={{color: '#E74444'}}/> :
                  Props.dados.tr_prioridade
                }
              </PrioridadeTarefa>
            </DialogContentText>
              <TextField
                fullWidth
                onChange={e => setDescricao(e.target.value)}
                value={descricao}
                sx={{
                  '& legend': { display: 'none' },
                  '& fieldset': { top: 0 },
                  marginTop: '24px'
                }}  
                placeholder='Descrição'
                multiline
                rows={4}
              />
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default KanbanLi;