import React, { useState } from 'react';
import { Container, Top, Body, Prioridade, ButtonCancel, StatusTarefa, PrioridadeTarefa, Input, TituloSubtarefas } from './styles';
import { useDrag } from 'react-dnd'
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
import api from '../../api';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { Progress } from 'rsuite';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function KanbanLi(Props) {
  // -=-=-=-=-=-=-=-=-=-=- Constante que permite o Drag -=-=-=-=-=-=-=-=-=-=-
  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {'id': Props.dados.tr_id, 'status': Props.dados.tr_status},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  // -=-=-=-=-=-=-=-=-=-=- Abrir e fechar dialog de detalhes -=-=-=-=-=-=-=-=-=-=-
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // -=-=-=-=-=-=-=-=-=-=- Recebe os objetos de subtarefas -=-=-=-=-=-=-=-=-=-=-
  const [descricao, setDescricao] = useState(Props.dados.tr_descricao)
  const [titulo, setTitulo] = useState(Props.dados.tr_nome)

  // -=-=-=-=-=-=-=-=-=-=- Checkbox das subtarefas -=-=-=-=-=-=-=-=-=-=-
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [tarefas, setTarefas] = useState ([])

  const getSubtarefas = async () => {
    api.get('/tarefas')
      .then(response => {
        setTarefas(response.data);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <>
      <Container ref={dragRef} isDragging={isDragging} onClick={handleClickOpen}>
        <Top>
          <h3 title={Props.dados.tr_nome}>{Props.dados.tr_nome}</h3>
        </Top>
        <Body>
            {/* -=-=-=-=-=-=-=-=-=-=- Prioridade na tela de projetos/tarefas -=-=-=-=-=-=-=-=-=-=- */}
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
      <>
        {/* -=-=-=-=-=-=-=-=-=-=- Dialog de detalhamento de subtarefa -=-=-=-=-=-=-=-=-=-=- */}
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
              <TituloSubtarefas>
                Subtarefas
              </TituloSubtarefas>
                {/* -=-=-=-=-=-=-=-=-=-=- Subtarefas dentro de uma lista -=-=-=-=-=-=-=-=-=-=- */}
                <List dense sx={{ width: '100%', marginTop: '-24px'}}>
                  {[0].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        key={value}
                        
                      >
                        {/* <ListItemButton onClick={handleToggle(value)} dense> */}
                          
                            <Checkbox
                              edge="start"
                              onClick={handleToggle(value)}
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          {tarefas.map(tarefa => (
                            <ListItemText key={tarefa.subTarefas.id} primary={`tarefa.subTarefas.nome ${value + 1}`} />
                          ))}
                        {/* </ListItemButton> */}
                      </ListItem>
                    );
                  })}
                </List>
            </DialogContentText>
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
      </>
    </>
  );
}

export default KanbanLi;