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
                const response = await api.get("/equipes")
                setEquipes(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        getData();
    }, []);

    equipes.map(e => (
        equipes2.push(e.eq_nome, e.eq_id)
    ))

    function ValidaEquipe(props) {
        if (isNaN(props.f) === false) {
            return (
                <a href={"equipes/" + props.f}>Detalhes</a>
            )
        } else {
            return (
                <div key={props.f}>
                    <p>{props.f}</p>
                </div>
            )
        }
    }

    return (
        <div className="main">
            <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)} style={{ backgroundColor: "black" }}>
                <option value="DEFAULT" disabled>Filtro</option>
                <option value="ascending">Mais Antigos</option>
                <option value="descending">Mais Recentes</option>
            </select>
            <div>
                {equipes2.sort(sortMethods[sortState].method).map(f => (
                    <ValidaEquipe f={f} />
                ))}
            </div>
        </div>
    );
}

export default App;