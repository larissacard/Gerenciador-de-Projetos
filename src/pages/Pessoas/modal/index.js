import React, {useState, useEffect} from "react";
import { Form } from 'react-bootstrap';
import { Drawer } from 'rsuite';
import { Button } from './styles'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import api from "../../../api";
import "rsuite/dist/rsuite.min.css";


function PostPessoas() {
    const [cargos, setCargos] = useState ([])
    
    useEffect(() => {
        const getCargos = async () => {
            try {
                const response = await api.get('/cargos');
                setCargos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCargos();
    }, []);

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    
    const [cargoEscolhido, setCargoEscolhido] = useState()
    const [imagem, setImagem] = useState()
    const [data, setData]= useState({
        pe_nome: "",
        pe_data_nasc: "",
        pe_salario: "",
    })

    const config = {
        'Content-Type': 'multipart/form-data',
    }

    function cadastrar(e){
        e.preventDefault();

        
        const Form = new FormData();
        Form.append("foto", imagem)
        Form.append("pe_nome", data.pe_nome)
        Form.append("pe_data_nasc", data.pe_data_nasc)
        Form.append("pe_cargo", cargoEscolhido)
        Form.append("pe_salario", data.pe_salario)

        api.post('/pessoas', Form, config)
            .then(res=>{
                if (res.data === 'Essa pessoa já foi inserida!') {
                    alert('Essa Pessoa já foi inserida!')
                }
                else {
                    alert('Pessoa inserida com sucesso!')
                }
            })
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <>
            <Drawer open={open} onClose={handleClose} size="sm">
                <Drawer.Header>
                    <Drawer.Title>Cadastro de uma nova pessoa</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <Form onSubmit={(e)=> cadastrar(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pe_nome" value={data.pe_nome} type="text" placeholder="Digite o nome da pessoa"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Salario</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pe_salario" value={data.pe_salario} type="text" placeholder="Digite o salario da pessoa"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Data de nascimento</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pe_data_nasc" value={data.pe_data_nasc} type="date" placeholder="Digite a data de nascimento"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Foto de Perfil</Form.Label>
                            <Form.Control onChange={(e)=> setImagem(e.target.files[0])} id="pe_foto" type="file" encType="multipart/form-data"/>
                        </Form.Group>

                        <FormControl fullWidth>
                            <InputLabel>Selecione o Cargo</InputLabel>
                            <Select onChange={(e) => setCargoEscolhido(e.target.value)}>
                                {cargos.map((cargos) =>   
                                    <MenuItem value={cargos.cargo} key={cargos.cargo}>{cargos.cargo}</MenuItem>
                                )} 
                            </Select>
                        </FormControl>
                        
                        <Drawer.Actions>
                            <Button onClick={() => setOpen(false)} variant="primary" type="submit">
                                Cadastrar
                            </Button>
                            <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        </Drawer.Actions>
                    </Form>
                </Drawer.Body>
            </Drawer>
            <div>
                <Button onClick={handleOpen}><img src="assets/btn_create.svg" alt="create icon"/></Button>
            </div>
        </>
    );
}

export default PostPessoas;