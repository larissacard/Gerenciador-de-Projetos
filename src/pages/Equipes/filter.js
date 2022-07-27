 import React, {useState, useEffect} from "react";
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
                {/* <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">Filtros</Dropdown.Toggle>
                <Dropdown.Menu>
                     <Dropdown.Item href="#" onClick={e => handleOrder('pr_id')}>Mais antigos</Dropdown.Item>
                     <Dropdown.Item href="#" onClick={e => handleOrder('pr_id')}>Mais recentes</Dropdown.Item>
                     <th>descricao</th>
                     </Dropdown.Menu>
                </Dropdown> * */}
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

 export default Show;