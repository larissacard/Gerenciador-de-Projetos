import { Form } from 'react-bootstrap';
import React, {useEffect, useState} from "react";

import api from "../../../api";

export default function CargosPessoa (Props) {
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

    return(
        <Form.Select onChange={(e) => Props.childToParent(e.target.value)}>
            <option>Selecione o cargo</option>
            {cargos.map((cargos) =>
                <option value={cargos.cargo} key={cargos.cargo}>{cargos.cargo}</option>
            )}
        </Form.Select> 
    )
}