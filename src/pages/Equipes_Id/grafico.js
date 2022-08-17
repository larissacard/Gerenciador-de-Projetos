import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import api from "../../api";

const path = window.location.pathname;
let data = []



 const options = {

    colors: ['#6C5DD3']
 };

export function Ranking(){
    const [dados, setDados] = useState([])
    useEffect(() => {
        const getDados = async () => {
            const response = await api.get('/relatorios' + path)
            setDados(response.data);
        };
        getDados();
    }, []);


    data = [
        ['Nome', 'Tarefas Concluidas'],
    ];
    dados.forEach((element) => {
        data.push([`${element.pe_nome}`, parseInt(element.count)])
    })

return (
     <Chart
       chartType="Bar"
       width="100%"
       height="300px"
       data={data}
       options={options}
     />
   );
}

export default Ranking;


// export const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales, Expenses, and Profit: 2014-2017",
//   },
// };

// export function Ranking() {
//   return (
//     <Chart
//       chartType="Bar"
//       width="100%"
//       height="300px"
//       data={data}
//       options={options}
//     />
//   );
// }
