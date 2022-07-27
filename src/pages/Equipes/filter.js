import { React, useState, useEffect } from "react";
import api from "../../api";

function App() {

    const [equipes, setEquipes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get("/projetos")
                setEquipes(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        getData();
    }, []);

    const [sortState, setSortState] = useState("none");

    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: undefined },
        descending: { method: (a, b) => (a > b ? -1 : 1) },
    };

    var equipes2 = []


   
    function Concatenar(){
        {equipes.sort(sortMethods[sortState].method).map(e => (
            <li key={e.pr_id}>
                {equipes2.push(e.pr_nome)}
            </li>
           
        ))}
        return(
            equipes2.sort(sortMethods[sortState].method).map((f, index) => (
                <li key={index}>{f}</li>
            ))
        )
    }

    return (
        <div className="main">
            <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                <option value="DEFAULT" disabled>None</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            <ul>
                <Concatenar/>
            </ul>
        </div>
    );
}
export default App;



















/*  import React, {useState, useEffect} from "react";
 import {Dropdown} from 'react-bootstrap';

 
 function Registers({list = []}){
     const [order, setOrder] = useState(1)
     const [columnOrder, setColumnOrder] = useState('eq_nome')

     const  handleOrder = fieldName =>{
         setOrder(-order)
         setColumnOrder(fieldName)
     }


     list = list.sort((a, b) =>{
         return a[columnOrder ] < b[columnOrder] ? -order : order;
     })

     list.sort(function (a, b) {
	
        return (a.columnOrder > b.columnOrder) ? 1 : ((b.columnOrder > a.columnOrder) ? -1 : 0);
     
    });


   


     return <div>
         <div>
             <div>
                 <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">Filtros</Dropdown.Toggle>
                <Dropdown.Menu>
                     <Dropdown.Item href="#" onClick={e => handleOrder('pr_id')}>Mais antigos</Dropdown.Item>
                     <Dropdown.Item href="#" onClick={e => handleOrder('pr_id')}>Mais recentes</Dropdown.Item>
                     <th>descricao</th>
                     </Dropdown.Menu>
                </Dropdown> 
                <button className="btn" onClick={e => handleOrder('eq_id')}>Mais recentes/Mais Antigos</button>
                <button className="btn">Ordem Alfabetica</button>
             </div>
             <div>
             {list.map(( {eq_id,eq_nome, eq_descricao}) => (
              <div key={eq_id}>
                <div>
                    <h6>{eq_id}{eq_nome}</h6>
                    <p style={{width:"96.5%"}}>{eq_descricao}</p>
                </div>
                <div>
                    <a href={"equipes/" + eq_id}>Detalhes</a>
                </div>
                </div> 
            ))}
             </div>
         </div>
     </div>
 }

 function Show(){
     var [list, setList] = useState([])

     useEffect( () =>{
         fetch('https://api-brisa-nodejs-postgresql.herokuapp.com/equipes').then(async result => {
            setList (await result.json())
         })

     }, [])

     return <div>
         <Registers list={list} />
     </div>
 }

 export default Show; */