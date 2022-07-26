import React, {useEffect, useState, useMemo} from "react";
import api from "../../../api";
import PaginationComponent from "./pagination";
import useFullPageLoader from "./fullpageloader";
import Search from "./search";
import Header from "./header";


const Datatable = () => {
    const [equipes, setEquipes] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });


    const ITEMS_PER_PAGE = 50;  

    const headers = [
        { name: "ID#", field: "id", sortable: false },
        { name: "Nome", field: "nome", sortable: true },
        // { name: "Email", field: "email", sortable: true },
        { name: "Descrição", field: "body", sortable: false }
    ];

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch("https://api-brisa-nodejs-postgresql.herokuapp.com/equipes")
            .then((response) => response.json())
            .then((json) => {
                hideLoader();
                setEquipes(json.data);
            });
            console.log(setEquipes)
    };

        getData();
    }, []);

    const equipesData = useMemo(() => {
        let computedEquipes = equipes;
        
        if (search) {
            computedEquipes = computedEquipes.filter(
                equipes =>
                    equipes.nome.toLowerCase().includes(search.toLowerCase()) ||
                    equipes.body.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedEquipes.length);


        //Sorting equipes
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedEquipes = computedEquipes.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedEquipes.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [equipes, currentPage, search, sorting]);

    return (
        <>
            {/* <Headers title="Todas as Equipes" /> */}

            {/* <ExternalInfo page="datatable" /> */}

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <PaginationComponent
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>

                    <table className="table table-striped">
                        <Header
                            headers={headers}
                            onSorting={(field, order) =>
                                setSorting({ field, order })
                            }
                        />
                        <tbody>
                            {equipesData.map(e => (
                                <tr>
                                    <th scope="row" key={e.eq_id}>
                                        {e.eq_id}
                                    </th>
                                    <td>{e.eq_nome}</td>
                                    <td>{e.eq_descricao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {loader}
        </>
    );


}

export default Datatable;