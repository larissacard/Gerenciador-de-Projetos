import React, { useState } from "react";
import api from "../../../api";

import { Chart } from "react-google-charts";

import NaoAutorizado from "../../../Components/NaoAutorizado";

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
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  const getRelatorio = async () => {
    api
      .get(`relatorios/pessoas/${Props.dados.id}`)
      .then(response => {
        setRelatorio(response.data.data)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsAlertVisible(true)
          setTimeout(() => window.location.href = "/login", 2000)
        } else console.log(err.message);
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
    <>
    {relatorio ? 
    <Chart
      chartType="AreaChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
      />
    : isAlertVisible && <NaoAutorizado /> }
    </>
  );
}
