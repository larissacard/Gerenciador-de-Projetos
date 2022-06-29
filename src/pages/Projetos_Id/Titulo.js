import React, { useState, useEffect } from 'react';
import api from '../../api'

function Data() {

    const [projetos, setProjetos] = useState([]);
    
    useEffect(() => {
      api
        .get('/projetos/')
        .then(res => {
          setProjetos(res.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, []);

    return (
      <div>
        {projetos.map(projeto => (
        <div>
          <p key={projeto.Id}>
            <h1>PROJETO {projeto.id}</h1>
            <h2>{projeto.nome}</h2>
            <p style={{color:"white"}}>{projeto.descricao}</p>
          </p>
        </div>
        ))}
      </div>
    );


    
}

export default Data;