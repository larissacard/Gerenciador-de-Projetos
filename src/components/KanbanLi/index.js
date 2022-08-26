import React, { useState } from 'react';
import { Container, Top, Body, Prioridade, StatusTarefa, PrioridadeTarefa, Input, TituloSubtarefas, FormSubtarefas, FormDiv, CheckboxSubtarefas, SpanCheckbox, LabelCheckbox, Save, ProgressBar, ButtonPrioridade } from './styles';
import { useDrag } from 'react-dnd'
import { BsFlagFill, BsFlag } from 'react-icons/bs'
import { FormControlLabel, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import api from '../../api';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Progress } from 'rsuite';import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { ConstructionOutlined } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CheckboxStyles = styled(Checkbox)({
  color: '#280948',
  '&.Mui-checked': {
    color: '#280948',
  }
})

const style = {
  width: 200, 

};

function KanbanLi(Props) {
  // -=-=-=-=-=-=-=-=-=-=- Constantes para o Menu de Prioridades -=-=-=-=-=-=-=-=-=-=-
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = (e) => {
    setAnchorEl('');
    if (e.target.value) {
      setPrioridade(e.target.value)
    }
  };

  const [anchorElSubtarefa, setAnchorElSubtarefa] = useState(null);
  const openMenuSubtarefa = Boolean(anchorElSubtarefa);
  const handleClickSubtarefa = (e) => {
    setAnchorElSubtarefa(e.currentTarget);
  };
  const handleCloseMenuSubtarefa = (e) => {
    setAnchorElSubtarefa('');
    if (e.target.value) {
      setprioridadeSubtarefa(e.target.value)
    }
  };

  // -=-=-=-=-=-=-=-=-=-=- Constante que Permite o Drag -=-=-=-=-=-=-=-=-=-=-
  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {'id': Props.dados.tr_id, 'status': Props.dados.tr_status},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  // -=-=-=-=-=-=-=-=-=-=- Recebe os Objetos de Tarefas -=-=-=-=-=-=-=-=-=-=-
  const [descricao, setDescricao] = useState(Props.dados.tr_descricao)
  const [titulo, setTitulo] = useState(Props.dados.tr_nome)
  const [prioridade, setPrioridade] = useState(Props.dados.tr_prioridade)
  const [tarefas, setTarefas] = useState()

  // -=-=-=-=-=-=-=-=-=-=- Get em Tarefas -=-=-=-=-=-=-=-=-=-=-
  const getTarefas = async () => {
    api.get(`/tarefas/${Props.dados.tr_id}`)
      .then(response => {
        setTarefas(response.data);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  // -=-=-=-=-=-=-=-=-=-=- Mudar Status da Checkbox -=-=-=-=-=-=-=-=-=-=-
  const changeStatus = async (e, id) => {
    let newStatus = e.target.checked ? 1 : 0

    api
      .put(`/subtarefas/${id}/status/${newStatus}`)
      .then(() => getTarefas())
      .catch(e => { console.log(e)})
  }

  // -=-=-=-=-=-=-=-=-=-=- Calculo da ProgressBar -=-=-=-=-=-=-=-=-=-=-
  const calculo = () => {
    if (tarefas.subTarefas.length === 0) return 0
    return Math.round(tarefas.subTarefas.filter(t => t.status === 1).length / tarefas.subTarefas.length * 100)
  }

  // -=-=-=-=-=-=-=-=-=-=- Post em Subtarefas -=-=-=-=-=-=-=-=-=-=-
  const [subtarefa, setSubtarefa] = useState('')
  const [prioridadeSubtarefa, setprioridadeSubtarefa] = useState('')

  function PostSubtarefa (e) {
    e.preventDefault()
    api
      .post(`/subtarefas/${Props.dados.tr_id}`, {
        nome: subtarefa,
        prioridade: prioridadeSubtarefa,
      })
      .then(res=> {
        getTarefas()
        setSubtarefa('')
      }
        )
      .catch(e => {
        console.log(e)
      })
  }
  
  // -=-=-=-=-=-=-=-=-=-=- Abrir e fechar dialog de detalhes -=-=-=-=-=-=-=-=-=-=-
  const [open, setOpen] = useState(false);

  const handleClickOpen = async () => {
    getTarefas()
    setOpen(true);
  };

  const handleClose = () => {
    if (titulo != Props.dados.tr_nome || descricao != Props.dados.tr_descricao || prioridade != Props.dados.tr_prioridade) {
      api
        .put(`/tarefas/${Props.dados.tr_id}`, {
          tr_nome: titulo,
          tr_descricao: descricao,
          tr_prioridade: prioridade
        })
        .then(res => {
          Props.dados.tr_nome = titulo
          Props.dados.tr_descricao = descricao
          Props.dados.tr_prioridade = prioridade
          Props.update();
        })
      }
    setSubtarefa('')
    setprioridadeSubtarefa('')
    setInputDisabled(false)
    setVisible('none')
    setOpen(false);
  };

  // -=-=-=-=-=-=-=-=-=-=- Constante para mudar o Estado do Botão -=-=-=-=-=-=-=-=-=-=-
  const [visible, setVisible] = useState('none') 

  const handledigit = (e) => {
    e.preventDefault()
    if (e.target.value !== '') {
      setVisible('block')
    }
    else {
      setVisible('none')
    }
  } 

  const [inputDisabled, setInputDisabled] = useState()
  const [editSubtarefaNome, setEditSubtarefaNome] = useState()
  const [editSubtarefaPrioridade, setEditSubtarefaPrioridade] = useState()

  const updateSubtarefa = (e, id) => {
    e.preventDefault()

    api.put(`/subtarefas/${id}`, {
      nome: editSubtarefaNome,
      prioridade: 2
    })
    .then(() => {
      setInputDisabled()
      setEditSubtarefaNome()
      setEditSubtarefaPrioridade()
      getTarefas()
    })
    .catch(e => {
      alert(e)
    })
  }

  return (
    <>
      <Container ref={dragRef} isDragging={isDragging} onClick={handleClickOpen}>
        <Top>
          <h3 title={Props.dados.tr_nome}>{Props.dados.tr_nome}</h3>
        </Top>

        {/* -=-=-=-=-=-=-=-=-=-=- Mostra as Prioridades na Lista de cada Tarefa -=-=-=-=-=-=-=-=-=-=- */}
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
        </Body>
      </Container>
      <>
        {/* -=-=-=-=-=-=-=-=-=-=- Dialog de detalhamento de Tarefas -=-=-=-=-=-=-=-=-=-=- */}
        { tarefas &&
          <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby='alert-dialog-slide-description'
          PaperProps={{
            style: { borderRadius: '20px', 
            background: '#F5F5F7',
            width: '600px',
          }
        }}
        >
          {/* -=-=-=-=-=-=-=-=-=-=- Título da Tarefa -=-=-=-=-=-=-=-=-=-=- */}
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
          <Divider 
            color="#764BA2" 
            sx={{height: '1px'}}
          />
          <DialogContent style={{marginTop: '-6px', overflowX: 'hidden'}}>
            {/* -=-=-=-=-=-=-=-=-=-=- Status da Tarefa e Prioridade -=-=-=-=-=-=-=-=-=-=- */}
            <div style={{
              display: 'flex', 
              alignItems: 'center'
            }}>
              <StatusTarefa>{Props.dados.tr_status}</StatusTarefa>
              <div>
                <Button
                  id="fade-button"
                  aria-controls={openMenu ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{marginLeft: '-10px'}}
                >
                  <PrioridadeTarefa title={`Prioridade: ${prioridade === 1 ? 'Baixa' :
                                                          prioridade === 2 ? 'Media' :
                                                          prioridade === 3 ? 'Alta' :
                                                          prioridade}`}>
                    {
                      prioridade === 1 ? <BsFlagFill size={22} style={{color: '#67CB65'}}/> :
                      prioridade === 2 ? <BsFlagFill size={22} style={{color: '#FF9533'}}/> :
                      prioridade === 3 ? <BsFlagFill size={22} style={{color: '#E74444'}}/> :
                      prioridade
                    }
                  </PrioridadeTarefa>
                </Button>
                <Menu
                  onChange={(e)=> setPrioridade(e)}
                  id="fade-menu"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleCloseMenu}
                  TransitionComponent={Fade}
                  
                  onClick={handleCloseMenu}
                >
                  <MenuItem value={1}>Baixa</MenuItem>
                  <MenuItem value={2}>Média</MenuItem>
                  <MenuItem value={3}>Alta</MenuItem>
                </Menu>
              </div>
            </div>
            {/* -=-=-=-=-=-=-=-=-=-=- Descrição da Tarefa -=-=-=-=-=-=-=-=-=-=- */}
            <TextField
              fullWidth
              onChange={e => setDescricao(e.target.value)}
              value={descricao}
              sx={{
                '& legend': { display: 'none' },
                '& fieldset': { top: 0 },
                '& .MuiOutlinedInput-root': {
                  color: 'rgba(40, 9, 72, 0.6)',
                  '&:hover' :{
                      color: '#6956E5',
                      transition: '0.5s',
                  },
                  '&.Mui-focused': {
                      borderColor: '#764BA2',
                      color: '#280948',
                      transition: '0.5s',
                  },
                  '& fieldset': {
                      border: '0.1px solid rgba(40, 9, 72, 0.6)',
                      transition: '0.5s',
                  },
                    '&:hover fieldset': {
                      border: '2px solid #6956E5',
                      transition: '0.5s',
                    },
                  '&.Mui-focused fieldset': {
                      borderColor: '#280948',
                      transition: '0.5s',
                  },
              },
                marginTop: '16px',
              }}  
              placeholder='Descrição'
              multiline
              rows={4}
              // InputProps={{
              //   endAdornment: (<InputAdornment position='end' sx={{root: {
              //     alignItems: 'flex-end'
              //   }}}><Save style={{marginTop: '85px'}}>Salvar</Save></InputAdornment>),
              // }}
              />
            <ProgressBar>
              <Progress.Line percent={calculo()} strokeColor="#667EEA" trailColor="white" />
            </ProgressBar>
            <DialogContentText>
              <TituloSubtarefas>
                Subtarefas
              </TituloSubtarefas>
            </DialogContentText>
              {/* -=-=-=-=-=-=-=-=-=-=- Lista de Subtarefas com Checkbox -=-=-=-=-=-=-=-=-=-=- */}
              <FormSubtarefas onSubmit={(e) => e.preventDefault()}>
                {tarefas.subTarefas.map((tarefa, index) => (
                  <FormDiv key={tarefa.id}>
                      <LabelCheckbox htmlFor={tarefa.nome}>
                        <CheckboxSubtarefas
                          id={tarefa.nome}
                          type="checkbox"
                          onChange={(e) => changeStatus(e, tarefa.id)}
                          key={tarefa.id}
                          checked={tarefa.status === 1 ? true : false}>
                        </CheckboxSubtarefas>
                        {/* <FormControlLabel 
                          checked={tarefa.status === 1 ? true : false} 
                          onChange={(e) => changeStatus(e, tarefa.id)} 
                          // id={tarefa.nome} 
                          // key={tarefa.id}
                          value={tarefa.nome}
                          control={<CheckboxStyles size='small'/>}/> */}
                       

                        <SpanCheckbox
                          onChange={(e) => setEditSubtarefaNome(e.target.value)}
                          value={inputDisabled !== tarefa.id ? tarefa.nome : editSubtarefaNome}
                          disabled={inputDisabled !== tarefa.id}
                        />

                        <button
                          type='button'
                          onClick={() => {
                            setInputDisabled(tarefa.id);
                            setEditSubtarefaNome(tarefa.nome)
                          }}>Editar</button>

                        <button
                          type="submit"
                          onClick={(e) => updateSubtarefa(e, tarefa.id)}
                          style={{display: (tarefa.nome !== editSubtarefaNome && inputDisabled === tarefa.id)? "block" : "none" }}
                          >Salvar</button>
                      </LabelCheckbox>
                  </FormDiv>
                )
                )}
              </FormSubtarefas>
                
              {/* -=-=-=-=-=-=-=-=-=-=- Input de Cadastro de uma Subtarefa -=-=-=-=-=-=-=-=-=-=- */}
              <form onSubmit={(e) => PostSubtarefa(e)}>
                <OutlinedInput
                  autoComplete='off'
                  required
                  onChange={(e) => {setSubtarefa(e.target.value); handledigit(e)}}
                  fullWidth
                  size='small'
                  placeholder='Digite o nome da Subtarefa'
                  value={subtarefa}
                  sx={{
                    '& legend': { display: 'none' },
                    '& fieldset': { top: 0 },
                  }}
                
                  endAdornment={
                  <InputAdornment position="end">
                    <button type="button" 
                      id="fade-button"
                      aria-controls={openMenuSubtarefa ? 'fade-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openMenuSubtarefa ? 'true' : undefined}
                      onClick={handleClickSubtarefa}
                      sx={{marginLeft: '-10px'}}
                      style={{ 
                        borderRadius: '50%',
                        width: '26px',
                        height: '26px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '4px',
                        background: 'transparent',
                        display: visible}}>
                      <PrioridadeTarefa title={`PrioridadeSubtarefa: ${prioridadeSubtarefa === 1 ? 'Baixa' :
                                                              prioridadeSubtarefa === 2 ? 'Media' :
                                                              prioridadeSubtarefa === 3 ? 'Alta'  :
                                                              prioridadeSubtarefa}`}>
                        {
                          prioridadeSubtarefa === 1 ? <BsFlagFill size={14} style={{color: '#67CB65'}}/> :
                          prioridadeSubtarefa === 2 ? <BsFlagFill size={14} style={{color: '#FF9533'}}/> :
                          prioridadeSubtarefa === 3 ? <BsFlagFill size={14} style={{color: '#E74444'}}/> :             
                          <BsFlag size={14} style={{color: 'rgba(40, 9, 72, 0.5)', display: visible,marginLeft: '6px'}}/>
                        }
                      </PrioridadeTarefa>
                    </button>
                    <Menu
                      onChange={(e)=> setprioridadeSubtarefa(e)}
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorElSubtarefa}
                      open={openMenuSubtarefa}
                      onClose={handleCloseMenuSubtarefa}
                      TransitionComponent={Fade}
                      
                      onClick={handleCloseMenuSubtarefa}
                    >
                      <MenuItem value={1}>Baixa</MenuItem>
                      <MenuItem value={2}>Média</MenuItem>
                      <MenuItem value={3}>Alta</MenuItem>
                    </Menu>
                    
                    <Save type="submit" style={{display: visible}} value="Salvar"/>
                  </InputAdornment>
                  }
                />
              </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button>Agree</Button>
          </DialogActions>
        </Dialog>}
      </>
    </>
  );
}

export default KanbanLi;