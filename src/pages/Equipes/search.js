 import React, { useEffect, useState } from "react";



 function Projec(){
    const [initialProjetos, setInitialProjetos] = useState([])
    const [projetos, setProjetos] = useState([])

    useEffect (() =>{
        const fetchProjetos = async  () => {
            try {
                const response = await fetch('https://api-brisa-nodejs-postgresql.herokuapp.com/projetos');
                const data = await response.json();
                setInitialProjetos(data);
                setProjetos(data);
               
            } catch (error) {
                console.log(error);
            }
        };
        fetchProjetos();
    }, []);

    const handleChange = ({target}) =>{
        if(!target.value){
            setProjetos(initialProjetos)
            return;
        }
        const filterProjetos = projetos.filter((projetos,pr_nome) => projetos.pr_nome.includes(target.value))
        setProjetos(filterProjetos)
    }

    console.log(projetos)
    return(
    <div>
        <div className="container-input">
            <input type="text" onChange={handleChange}/>
        </div>
        <div className="container-list">
            <ul>
                {projetos.map((projetos, index) =>
                <li key={projetos.pr_id}>{projetos.pr_nome}</li>
                )}
            </ul>
        </div>
    </div>)
 }

 export default Projec;

// function Registers({list = []}){
//     const [order, setOrder] = useState(1)
//     const [columnOrder, setColumnOrder] = useState('pr_nome')
//     const [filter, setFilter] = useState('')

//     const  handleOrder = fieldName =>{
//         setOrder(-order)
//         setColumnOrder(fieldName)
//     }



//     list = list.sort((a, b) =>{
//         return a[columnOrder ] < b[columnOrder] ? -order : order;
//     })

//     if(filter){
//         const exp = eval(`/${filter.replace(/[^\d\w]+/,'.*')}/i`)
//         list = list.filter( item => exp.test(item.pr_nome))
//     }

//     const handleFilter = e =>{
//         setFilter(e.target.values)
//     }


//     return <div>
//         <input type="text" placeholder="Pesquisa" onChange={handleFilter}/>
//         <table>
//             <thead>
//                 <tr>
//                     <th onClick={e => handleOrder('pr_id')}>id</th>
//                     <th onClick={e => handleOrder('pr_nome')}>nome</th>
//                     <th>descricao</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     list.map(( {pr_id,pr_nome, pr_descricao}) =>{
//                         return <tr key={pr_id}>
//                             <td>{pr_id}</td>
//                             <td>{pr_nome}</td>
//                             <td>{pr_descricao}</td>
//                         </tr>
//                     }
                        
//                         )
//                 }
//             </tbody>
//         </table>
//     </div>
// }

// function Show(){
//     var [list, setList] = useState([])

//     useEffect( () =>{
//         fetch('https://api-brisa-nodejs-postgresql.herokuapp.com/projetos').then(async result => {
//             setList (await result.json())
//         })

//     }, [])

//     return <div>
//         <Registers list={list} />
//     </div>
// }

// export default Show;