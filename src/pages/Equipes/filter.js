import { React, useState, useEffect } from "react";
import api from "../../api";

function App() {


    const [sortState, setSortState] = useState("none");

    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: undefined },
        descending: { method: (a, b) => (a > b ? -1 : 1) },
    };

    var equipes2 = []


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


    equipes.map(e => (
        equipes2.push(e.pr_nome)
    ))


    return (
        <div className="main">
            <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                <option value="DEFAULT" disabled>None</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            <ul>
                {equipes2.sort(sortMethods[sortState].method).map((f) => (
                    <li key={f}>{f}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;