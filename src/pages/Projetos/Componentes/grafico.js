import React, { useEffect, useState } from 'react';
import api from '../../../api';

import { Chart } from 'react-google-charts';

// dados
let data = []

const options = {
  curveType: 'function',
  legend: { position: 'top' },
  colors: ['#280948', '#667EEA'],
  backgroundColor: 'none',
};

export function Grafico() {
  const [data2, setData2] = useState([]);
  useEffect(() => {
      api
        .get('/relatorios/projetos')
        .then(response => {
          setData2(response.data.data)
        })
        .catch((err) => {
          if (err.response.status == 401) {
            // alert("Faça o Login para visualizar a página");
            window.location.href = "/login";
          } else console.log(err.message);
        });
  }, []);

  data = [
    ['Mês', 'Concluidos'],
  ];
  data2.forEach((element) => {
    data.push([`${element.mes}-${element.ano}`, parseInt(element.concluidos)])
  })

  return (
    <Chart
      style={{
        position: 'relative',
        overflow: 'hidden',
        marginLeft: '-5%',
        marginTop: '-2%',
      }}
      chartType='LineChart'
      width='110%'
      height='110%'
      data={data}
      options={options}
    />
  );
}

export default Grafico;