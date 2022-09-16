import React, { useState } from 'react';
import api from '../../../../api';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag } from 'react-dnd'
import { Progress } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

import { 
  BsFlagFill, 
  BsFlag 
} from 'react-icons/bs'

import { 
  Container, 
  Top, 
  Body, 
  Prioridade, 
  StatusTarefa, 
  PrioridadeTarefa, 
  Input, 
  TituloSubtarefas, 
  FormSubtarefas, 
  FormDiv, 
  SpanCheckbox, 
  LabelCheckbox, 
  Save, 
  ProgressBar 
} from './styles';

import { 
  FormControlLabel, 
  TextField, 
  Button, 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  Slide, 
  Divider, 
  InputAdornment,
  OutlinedInput,
  styled, 
  Checkbox,
  Menu, 
  MenuItem, 
  Fade
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CheckboxStyles = styled(Checkbox)({
  color: '#280948',
  '&.Mui-checked': {
    color: '#280948',
  }
})

function KanbanLi(Props) {
  // -=-=-=-=-=-=-=-=-=-=- Constantes para o Menu de Prioridades -=-=-=-=-=-=-=-=-=-=-

  // -=-=-=-=-=-=-=-=-=-=- Edita a prioridade da Tarefa -=-=-=-=-=-=-=-=-=-=-
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

  // -=-=-=-=-=-=-=-=-=-=- Adiciona uma nova Prioridade na Subtarefa -=-=-=-=-=-=-=-=-=-=-
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
  
  // -=-=-=-=-=-=-=-=-=-=- Edita a Prioridade da Subtarefa -=-=-=-=-=-=-=-=-=-=-
  const [anchorElEditSubtarefa, setAnchorElEditSubtarefa] = useState(null);
  const [anchorElEditSubtarefaId, setAnchorElEditSubtarefaId] = useState(null);
  const openMenuEditSubtarefa = Boolean(anchorElEditSubtarefa);
  const handleClickEditSubtarefa = (e, id) => {
    setAnchorElEditSubtarefa(e.currentTarget);
    setAnchorElEditSubtarefaId(id)
  };
  const handleCloseMenuEditSubtarefa = (e, nome, prioridade) => {
    
    api.put(`/subtarefas/${anchorElEditSubtarefaId}`, {
      nome: nome,
      prioridade: prioridade
    })
    .then(res => {
      setAnchorElEditSubtarefa('');
      setAnchorElEditSubtarefaId()
      getTarefas()
    })
  };

  // -=-=-=-=-=-=-=-=-=-=- Constante que Permite o Drag -=-=-=-=-=-=-=-=-=-=-
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { 'id': Props.dados.id, 'status': Props.dados.status },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  // -=-=-=-=-=-=-=-=-=-=- Recebe os Objetos de Tarefas -=-=-=-=-=-=-=-=-=-=-
  const [descricao, setDescricao] = useState(Props.dados.descricao)
  const [titulo, setTitulo] = useState(Props.dados.nome)
  const [prioridade, setPrioridade] = useState(Props.dados.prioridade)
  const [tarefas, setTarefas] = useState()

  // -=-=-=-=-=-=-=-=-=-=- Get em Tarefas -=-=-=-=-=-=-=-=-=-=-
  const getTarefas = async () => {
    api.get(`/tarefas/${Props.dados.id}`)
      .then(response => {
        setTarefas(response.data.data);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  // -=-=-=-=-=-=-=-=-=-=- Mudar Status da Checkbox -=-=-=-=-=-=-=-=-=-=-
  const [selected, setSelected] = useState()
  const [checkedAll, setCheckedAll] = useState(false)

  // Pega uma lista das subtarefas que estão inialmente marcadas
  if (!selected && tarefas) { 
    let tarefasIniciais = tarefas.subTarefas.filter(sub => sub.status === 1)
    setSelected(tarefasIniciais)
    if (tarefasIniciais.length === tarefas.subTarefas.length) setCheckedAll(true)
  }
  
  const changeStatus = async (e, id) => {
    let newStatus = e.target.checked ? 1 : 0
    
    if (selected.length === 1 && newStatus === 0) setCheckedAll(false)
    else if (selected.length == tarefas.subTarefas.length - 1 && newStatus === 1) setCheckedAll(true)
    else setCheckedAll(false)

    if (e.target.checked) {
      let selectedList = selected
      selectedList.push({id})
      setSelected(selectedList)
    }
    else {
      setSelected(selected.filter(sub => sub.id !== id ))
    }
    
    api
      .put(`/subtarefas/${id}/status/${newStatus}`)
      .then(() => {
        getTarefas();
      }) 
      .catch(e => { console.log(e) })    
  }
    
    // -=-=-=-=-=-=-=-=-=-=- Calculo da ProgressBar -=-=-=-=-=-=-=-=-=-=-
    const calculo = () => {
      if (tarefas.subTarefas.length === 0) return 0
      return Math.round(tarefas.subTarefas.filter(t => t.status === 1).length / tarefas.subTarefas.length * 100)
    }
    
    // -=-=-=-=-=-=-=-=-=-=- Post em Subtarefas -=-=-=-=-=-=-=-=-=-=-
    const [subtarefa, setSubtarefa] = useState()
    const [prioridadeSubtarefa, setprioridadeSubtarefa] = useState()
    const [prioridadeEditSubtarefa, setprioridadeEditSubtarefa] = useState()
    
    function PostSubtarefa(e) {
      e.preventDefault()
      api
      .post(`/subtarefas/${Props.dados.id}`, {
        nome: subtarefa,border: 'none',
        prioridade: prioridadeSubtarefa,
      })
      .then(res => {
        getTarefas()
        if (selected.length !== tarefas.subTarefas) setCheckedAll(false)
        setSubtarefa('')
        setprioridadeSubtarefa('')
        setVisible('none')
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
    if (titulo != Props.dados.nome || descricao != Props.dados.descricao || prioridade != Props.dados.prioridade) {
      api
      .put(`/tarefas/${Props.dados.id}`, {
          nome: titulo,
          descricao: descricao,
          prioridade: prioridade
        })
        .then(res => {
          Props.dados.nome = titulo
          Props.dados.descricao = descricao
          Props.dados.prioridade = prioridade
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
  // const [editSubtarefaPrioridade, setEditSubtarefaPrioridade] = useState()

  // -=-=-=-=-=-=-=-=-=-=- Método Put da Subtarefa -=-=-=-=-=-=-=-=-=-=-
  const updateSubtarefa = (e, id) => {
    e.preventDefault()
    
    api.put(`/subtarefas/${id}`, {
      nome: editSubtarefaNome,
      prioridade: prioridadeEditSubtarefa
    })
    .then(() => {
      setInputDisabled()
      setEditSubtarefaNome()
      setprioridadeEditSubtarefa()
      // verificaStatus()
      getTarefas()
      })
      .catch(e => {
        console.log(e)
      })
    }
    
    // -=-=-=-=-=-=-=-=-=-=- Método Delete da Subtarefa -=-=-=-=-=-=-=-=-=-=-
    function deletarSubtarefa(e, id) {
      api
      .delete(`/subtarefas/${id}`)
      .then((res) => {
        getTarefas()
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }

  // -=-=-=-=-=-=-=-=-=-=- Método put de Todas as Subtarefas -=-=-=-=-=-=-=-=-=-=-
  // const [checkedAll, setCheckedAll] = useState(true)

  // const verificaStatus = () => {
    //   setCheckedAll(true)
    //   tarefas.subTarefas.forEach((subtarefa) => {
      //     if (subtarefa.status !== 0) setCheckedAll(false)
      //   })
      // }
      
      function ConcluirSubtarefas (marcar) {    
        api
        .put(`/tarefas/${Props.dados.id}/check/${marcar}`)
        .then(() => {
          getTarefas()
        })
  }

  // if (tarefas) {
  //     checkedAll = tarefas.subTarefas.length > 0 && selected.length === tarefas.subTarefas.length;
  //     // ConcluirSubtarefas()
  // }

  const handleChange = (e) => {
    const value = e.target.checked;
    if (value) {
      setSelected(selected.length === tarefas.subTarefas.length ? [] : tarefas.subTarefas);
      ConcluirSubtarefas(1)
      setCheckedAll(true)
      return;
    }
    else {
      ConcluirSubtarefas(0)
      setSelected([])
      setCheckedAll(false)
    } 

    

    // const list = [...selected];
    // const index = list.indexOf(value);
    // index === -1 ? list.push(value) : list.splice(index, 1);
    // setSelected(list);
  };
    
  return (
    <>
      <Container ref={dragRef} isDragging={isDragging} onClick={handleClickOpen}>
        <Top>
          <h3 title={Props.dados.nome}>{Props.dados.nome}</h3>
        </Top>

        {/* -=-=-=-=-=-=-=-=-=-=- Mostra as Prioridades na Lista de cada Tarefa -=-=-=-=-=-=-=-=-=-=- */}
        <Body>
          {/* -=-=-=-=-=-=-=-=-=-=- Prioridade na tela de projetos/tarefas -=-=-=-=-=-=-=-=-=-=- */}
          <Prioridade>
            <span style={{
              backgroundColor: Props.dados.prioridade === 1 ? '#67CB65' :
                               Props.dados.prioridade === 2 ? '#FF9533' :
                               Props.dados.prioridade === 3 ? '#E74444' : 'gray'
            }}>
              {
                Props.dados.prioridade === 1 ? 'Baixa' :
                Props.dados.prioridade === 2 ? 'Média' :
                Props.dados.prioridade === 3 ? 'Alta' :
                Props.dados.prioridade
              }
            </span>
          </Prioridade>
        </Body>
      </Container>
      <>
        {/* -=-=-=-=-=-=-=-=-=-=- Dialog de detalhamento de Tarefas -=-=-=-=-=-=-=-=-=-=- */}
        {tarefas &&
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
              <Input type='text' value={titulo} onChange={e => setTitulo(e.target.value)} />
              <p style={{fontSize: '12px'}} title='Identificador da Tarefa'>{`(#${Props.dados.id})`}</p>
              {/* <ButtonCancel onClick={handleClose}/> */}
            </DialogTitle>
            <Divider
              color='#764BA2'
              sx={{ height: '1px' }}
            />
            <DialogContent style={{ marginTop: '-6px', overflowX: 'hidden' }}>
              {/* -=-=-=-=-=-=-=-=-=-=- Status da Tarefa e Prioridade -=-=-=-=-=-=-=-=-=-=- */}
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <StatusTarefa>{Props.dados.status}</StatusTarefa>
                <div>
                  <Button
                    id='fade-button'
                    aria-controls={openMenu ? 'fade-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ marginLeft: '-10px' }}
                  >
                    <PrioridadeTarefa title={`Prioridade: ${prioridade === 1 ? 'Baixa' :
                                                            prioridade === 2 ? 'Media' :
                                                            prioridade === 3 ? 'Alta' :
                                                            prioridade}`}>
                      {
                        prioridade === 1 ? <BsFlagFill size={22} style={{ color: '#67CB65' }} /> :
                        prioridade === 2 ? <BsFlagFill size={22} style={{ color: '#FF9533' }} /> :
                        prioridade === 3 ? <BsFlagFill size={22} style={{ color: '#E74444' }} /> :
                        prioridade
                      }
                    </PrioridadeTarefa>
                  </Button>
                  <Menu
                    onChange={(e) => setPrioridade(e)}
                    id='fade-menu'
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
                    '&:hover': {
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
                <Progress.Line percent={calculo()} strokeColor='#667EEA' trailColor='white' />
              </ProgressBar>

              <TituloSubtarefas sx={{
                display: 'flex', 
                alignItems: 'center'}}
              >
                Subtarefas
                <Checkbox
                  checked={checkedAll}
                  value={checkedAll}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  style={{display: tarefas.subTarefas.length > 0 ? 'inline-block' 
                    : 'none', width: '50px', justifyContent: 'center'}}
                />
              </TituloSubtarefas>

              {/* -=-=-=-=-=-=-=-=-=-=- Lista de Subtarefas com Checkbox -=-=-=-=-=-=-=-=-=-=- */}
              <FormSubtarefas onSubmit={(e) => e.preventDefault()}>
                {tarefas.subTarefas.map((tarefa, index) => (
                  <FormDiv key={tarefa.id}>
                    <LabelCheckbox htmlFor={tarefa.nome}>
                      <FormControlLabel
                        checked={tarefa.status === 1 ? true : false}
                        onChange={(e) => changeStatus(e, tarefa.id)}
                        id={tarefa.nome}
                        key={tarefa.id}
                        value={tarefa.nome}
                        control={<CheckboxStyles size='small' />} />
                      <SpanCheckbox
                        onChange={(e) => {
                          setEditSubtarefaNome(e.target.value);
                          setprioridadeEditSubtarefa(tarefa.prioridade) 
                        }}
                        inputProps={{
                          maxLength: 100,
                        }}
                        value={inputDisabled !== tarefa.id ? tarefa.nome : editSubtarefaNome}
                        disabled={inputDisabled !== tarefa.id}
                      />

                      <button
                        style={{ background: 'transparent', border: 'none'}}
                        type='button'
                        onClick={() => {
                          setInputDisabled(tarefa.id);
                          setEditSubtarefaNome(tarefa.nome)
                        }}
                      >
                        <EditIcon style={{ fontSize: '18px'}} />
                      </button>

                      <div>
                        <button type='button'
                          id='fade-button'
                          aria-controls={openMenuEditSubtarefa ? 'fade-menu' : undefined}
                          aria-haspopup='true'
                          onClick={(e) => handleClickEditSubtarefa(e, tarefa.id)}
                          aria-expanded={openMenuEditSubtarefa ? 'true' : undefined}
                          style={{
                            background: 'transparent',
                            border: 'none',
                          }}>
                            {
                              anchorElEditSubtarefaId === tarefa.id ?
                              <>
                                <PrioridadeTarefa title={`Prioridade Subtarefa ${prioridadeEditSubtarefa === 1 ? 'Baixa' :
                                                                                  prioridadeEditSubtarefa === 2 ? 'Media' :
                                                                                  prioridadeEditSubtarefa === 3 ? 'Alta' :
                                                                                  prioridadeEditSubtarefa}`}>
                                {
                                prioridadeEditSubtarefa === 1 ? <BsFlagFill style={{ color: '#67CB65', fontSize: '16px' }} /> :
                                prioridadeEditSubtarefa === 2 ? <BsFlagFill style={{ color: '#FF9533', fontSize: '16px' }} /> :
                                prioridadeEditSubtarefa === 3 ? <BsFlagFill style={{ color: '#E74444', fontSize: '16px' }} /> :
                                <BsFlag size={14} style={{ color: 'rgba(40, 9, 72, 0.5)', marginLeft: '6px' }} />
                                }
                                {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Criar as funçoes para receber o editar + rota put -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
                                </PrioridadeTarefa>
                              </> : <>
                              {
                                tarefa.prioridade === 1 ? <BsFlagFill style={{ color: '#67CB65', fontSize: '16px' }} /> :
                                tarefa.prioridade === 2 ? <BsFlagFill style={{ color: '#FF9533', fontSize: '16px' }} /> :
                                tarefa.prioridade === 3 ? <BsFlagFill style={{ color: '#E74444', fontSize: '16px' }} /> :
                                <BsFlag size={14} style={{ color: 'rgba(40, 9, 72, 0.5)', marginLeft: '6px' }} />
                                }
                              </>
                          } 
                        </button>
                        <Menu
                          onChange={(e) => setprioridadeEditSubtarefa(e)}
                          id='fade-menu'
                          MenuListProps={{
                            'aria-labelledby': 'fade-button',
                          }}
                          anchorEl={anchorElEditSubtarefa}
                          open={openMenuEditSubtarefa}
                          onClose={(e) => handleCloseMenuEditSubtarefa(e, tarefa.nome, e.target.value)}
                          TransitionComponent={Fade}

                          onClick={(e) => handleCloseMenuEditSubtarefa(e, tarefa.nome, e.target.value)}
                        >
                          <MenuItem value={1}>Baixa</MenuItem>
                          <MenuItem value={2}>Média</MenuItem>
                          <MenuItem value={3}>Alta</MenuItem>
                        </Menu>
                      </div>

                      <button
                        style={{ background: 'transparent', border: 'none' }}
                      >
                        <DeleteIcon style={{ fontSize: '18px' }} onClick={(e) => deletarSubtarefa(e, tarefa.id)}/>
                      </button>
                      {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Criar função pro delete + rota delete -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

                      <button
                        type='submit'
                        onClick={(e) => updateSubtarefa(e, tarefa.id)}
                        style={{ display: (tarefa.nome !== editSubtarefaNome && inputDisabled === tarefa.id) ? 'block' : 'none' }}
                      >Salvar
                      </button>
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
                  value={subtarefa}
                  placeholder='Digite o nome da Subtarefa'
                  inputProps={{
                    maxLength: 100,
                  }}

                  sx={{
                    '& legend': { display: 'none' },
                    '& fieldset': { top: 0 },
                    '& .MuiOutlinedInput-root': {
                      color: 'rgba(40, 9, 72, 0.6)',
                      '&:hover': {
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
                    marginTop: '4px'
                  }}

                  endAdornment={
                    <InputAdornment position='end'>
                      <button type='button'
                        id='fade-button'
                        aria-controls={openMenuSubtarefa ? 'fade-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={openMenuSubtarefa ? 'true' : undefined}
                        onClick={handleClickSubtarefa}
                        sx={{ marginLeft: '-10px' }}
                        style={{
                          borderRadius: '50%',
                          width: '26px',
                          height: '26px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '4px',
                          background: 'transparent',
                          display: visible,
                          border: 'none',
                        }}>
                        <PrioridadeTarefa title={`Prioridade Subtarefa ${prioridadeSubtarefa === 1 ? 'Baixa' :
                                                                         prioridadeSubtarefa === 2 ? 'Media' :
                                                                         prioridadeSubtarefa === 3 ? 'Alta' :
                                                                         prioridadeSubtarefa}`}>
                          {
                            prioridadeSubtarefa === 1 ? <BsFlagFill size={14} style={{ color: '#67CB65' }} /> :
                            prioridadeSubtarefa === 2 ? <BsFlagFill size={14} style={{ color: '#FF9533' }} /> :
                            prioridadeSubtarefa === 3 ? <BsFlagFill size={14} style={{ color: '#E74444' }} /> :
                            <BsFlag size={14} style={{ color: 'rgba(40, 9, 72, 0.5)', display: visible, marginLeft: '6px', border: 'none'}} />
                          }
                        </PrioridadeTarefa>
                      </button>
                      <Menu
                        onChange={(e) => setprioridadeSubtarefa(e)}
                        id='fade-menu'
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

                      <Save type='submit' style={{ display: visible }} value='Salvar' disabled={prioridadeSubtarefa && subtarefa ? false : true}/>
                    </InputAdornment>
                  }
                />
              </form>
            </DialogContent>
          </Dialog>}
      </>
    </>
  );
}

export default KanbanLi;