 import React, { useEffect, useState } from "react";



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