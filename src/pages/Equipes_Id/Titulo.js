import React, { useState, useEffect } from 'react';
import api from '../../api'
import { useParams } from "react-router-dom";

function Data() {

    const { id } = useParams();

    const [equipes, setEquipes] = useState([]);
    
    useEffect(() => {
      api
        .get('/equipes/'+id)
        .then(res => {
          setEquipes(res.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, []);

    return (
      <div>
        {equipes.map(equipe => (
        <p key={equipe.Id}>
          <h1>EQUIPE {equipe.id}</h1>
          <h2>{equipe.nome}</h2>
          {/* <p style={{color:"white"}}>{equipe.descricao}</p> */}
        </p>
        ))}
      </div>
    );
}

export default Data;