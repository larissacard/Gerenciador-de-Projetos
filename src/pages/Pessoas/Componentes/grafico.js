import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import api from "../../../api";

var data = [];

export const options = {
  title: "Tarefas Concluidas",
  colors: ["#667EEA","#280948"],
  vAxis: { minValue: 0 },
  legend: { position: "top" },
  chartArea: { width: "80%", height: "70%" },
};

export function Grafico(Props) {
  const [relatorio, setRelatorio] = useState([])
  const [dados, setDados] = useState(Props.dados)

  const getRelatorio = async () => {
    api
      .get(`relatorios/pessoas/${Props.dados.dados.pe_id}`)
      .then(response => {
        setRelatorio(response.data)
      })
      .catch((err) => {
        if (err.response.status == 401) {
          alert("Faça o Login para visualizar a página");
          window.location.href = "/login";
        } else alert(err.message);
      });
  }

  if (dados != Props.dados) {
    setDados(Props.dados)
    getRelatorio()
  }

  data = [
    ["Mês", "Concluidos"],
  ];

  relatorio.forEach(e => {
    data.push([`${e.mes}-${e.ano}`, parseInt(e.count)])  
  });


  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
      />
  );
}