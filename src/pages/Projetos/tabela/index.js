import React, {useEffect, useState} from "react";
import {Dropdown} from 'react-bootstrap';

import {
    ContProjetos,
    CabecalhoProjetos,
    Filtros,
    Search,
    SearchIcon,
    ContTabela,
    CardProjeto,
    ContMais,
} from './styles';

function Tabela() {
    const [initialProjetos, setInitialProjetos] = useState([])
    const [projetos, setProjetos] = useState([])

    useEffect(() => {
        const fetchProjetos = async () => {
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

    const handleChange = ({target}) => {
        if (!target.value) {
            setProjetos(initialProjetos)
            return;
        }
        const filterProjetos = projetos.filter((projetos, pr_nome) => projetos.pr_nome.toUpperCase().includes(target.value.toUpperCase()))
        setProjetos(filterProjetos)
    }

    return (
        <ContProjetos>
            <CabecalhoProjetos>
                <h2>Todos os Projetos</h2>

                <ContMais>
                    <Filtros>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">Filtros</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Ordem Alfabetica A-Z</Dropdown.Item>
                                <Dropdown.Item href="#">Mais Recentes</Dropdown.Item>
                                <Dropdown.Item href="#">Mais Antigos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Filtros>
                    <Search>
                        <input type="search" placeholder="Pesquise..." onChange={handleChange}></input>
                        <SearchIcon/>
                    </Search>
                </ContMais>
            </CabecalhoProjetos>

            <ContTabela>
                <ul> 
                    {projetos.map((projetos, index) => 
                    <CardProjeto>
                        <p key={projetos.pr_id}> {projetos.pr_nome} </p>
                        <a href={"projetos/" + projetos.pr_id}>Detalhes</a>
                    </CardProjeto>)} 
                </ul>
            </ContTabela>

        </ContProjetos>
    )
}

export default Tabela;

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
