import { useEffect, useState } from 'react';
import { Bar} from 'react-chartjs-2';
import {Chart as ChartJs, Tooltip, Title,  Legend, LinearScale, BarElement, CategoryScale, } from 'chart.js';
ChartJs.register(
    LinearScale,
    BarElement, CategoryScale, Tooltip, Title, Legend
);


const data = {
    datasets: [{
        data: [10, 20, 30],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
  ], 
};
function RANKING() {
  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
            '#764BA2',
            '#E391EA',
            '#667EEA'
        ]
    },
  ],
  labels: [
  ], 
});

    const path = window.location.pathname;
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('/relatorios' + path).then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("res", res)
        const label = [];
        const data = [];
        for(var i of res) {
            label.push(i.pe_nome);
            data.push(i.count)
        }
        setData(
          {
            datasets: [{
                label: 'Tarefas Concluidas',
                borderRadius: '10px',
                data:data,
                backgroundColor:[
                'rgba(40, 12, 235, 0.5)',
                ]
            },
          ],
          labels:label, 
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])
  return (
    <div className="App" style={{width:'95%', height:'90%'}}>
      <Bar data={data}
      options={{
        responsive: true}}
      />
    </div>
  );
}

export default RANKING;