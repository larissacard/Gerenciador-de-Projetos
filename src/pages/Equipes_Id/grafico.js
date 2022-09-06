import React, { useEffect, useState } from 'react';
import api from '../../api';

import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJs, 
  Tooltip, 
  Title, 
  Legend, 
  LinearScale, 
  BarElement, 
  CategoryScale
} from 'chart.js';

ChartJs.register(
  LinearScale,
  BarElement, CategoryScale, Tooltip, Title, Legend
);

const path = window.location.pathname;
function RANKING() {
  const [graf, setGraf] = useState([])
  const [dados, setDados] = useState({
    datasets: [{
      data: [],
      backgroundColor: []
    },
    ],
    labels: [],
  });

  useEffect(() => {
    api.get('/relatorios' + path)
      .then((res) => {
        setGraf(res.data)
      }).catch(e => {
        console.log("error", e)
      })
    }, [])
    
    const label = [];
    const dataum = [];    
    
    useEffect(() => {
      graf.forEach((element) => {
        dataum.push([`${element.count}`])
        label.push([`${element.pe_nome}`])
      })
      setDados(
        {
          datasets: [{
            label: 'Tarefas Concluidas',
            borderRadius: '10px',
            data: dataum,
            backgroundColor: [
              'rgba(40, 12, 235, 0.5)',
            ]
          }],
        labels: label,
        }
      )
    }, [graf])
    
    return (
      <div className="App" style={{ width: '95%', height: '90%' }}>
      
      <Bar data={dados}
        options={{
          responsive: true
        }}
      />
    </div>
  );
}

export default RANKING;