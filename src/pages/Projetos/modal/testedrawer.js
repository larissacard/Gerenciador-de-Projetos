import React, { useState } from 'react';
import { Button, Drawer, Form, Input, Select} from 'antd';
import { ContButton } from './styles'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import api from '../../../api';
import 'antd/dist/antd.css';

export default function PostProjetosNew(Props) {
    var [mensagem, setMensagem] = useState('')
    const [visible, setVisible] = useState(false);
  
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
    
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const [openAlert, setOpenAlert] = useState(false);
    
    const handleClickCad = () => {
        if(data.pr_nome !== ''){
            setOpenAlert(true);
        }
    }; 
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
        setEstado('')
    };

    const [data, setData]= useState({
        pr_nome: '',
        pr_descricao: ''
    })

    function cadastrar(e){
        e.preventDefault();
        api.post(('/projetos'),  {
            pr_nome: data.pr_nome,
            pr_descricao: data.pr_descricao
        }).then(res=>{
            setMensagem("Deu Certo!")
            setVisible(false)
            console.log(res.data)
            setData({
                pr_nome: '',
                pr_descricao: ''
            })
            setEstado("success");
            Props.update()
        }).catch(e => { 
            setMensagem(e.response.data);
            setVisible(true);
            setEstado("error");     
        })
    }

    const [estado, setEstado] = useState("");

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <>
            <Snackbar visible={openAlert} autoHideDuration={2200} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left',}}>
                <Alert onClose={handleCloseAlert} severity={estado}>
                    {mensagem}
                </Alert>
            </Snackbar>

            <Drawer
                title="Cadastro de um novo Projeto"
                onClose={onClose}
                visible={visible}
                className="my-drawer"
            >
                <Form 
                    layout={'vertical'}
                    onSubmit={(e)=> cadastrar(e)}
                >
                    <Form.Item
                        label="Nome"
                        rules={[
                            {
                            required: true,
                            message: "'Nome' é obrigatório",
                            },
                        ]}
                    >
                    <Input onChange={(e)=>handle(e)} id="pr_nome" value={data.pr_nome} type="text" placeholder="Digite o nome do projeto"/>
                    </Form.Item>
                <Form.Item
                    label="Descrição"
                >
                    <Input onChange={(e)=>handle(e)} id="pr_descricao" value={data.pr_descricao} type="text" placeholder="Digite a descrição do projeto"/>
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleClickCad} type="submit">Cadastrar</Button>
                </Form.Item>
            </Form>
            </Drawer>
            <ContButton>
                <Button onClick={showDrawer}><img src="assets/btn_create.svg" alt="icone criar"/></Button>
            </ContButton>
        </>
    )
}


