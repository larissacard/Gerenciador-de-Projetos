import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";

// dados
export const data = [
  ["Dia", "Tarefas Concluidas", "Não Concluidas"],
  ["Seg", 0, 2],
  ["Ter", 2, 3],
  ["Qua", 3.9, 4],
  ["Qui", 1.7, 1.8],
  ["Sex", 1.9, 1.7],
  ["Sab", 8.8, 1.3],
  ["Dom", 7.6, 1.2],
];

export const options = {
  curveType: "function",
  legend: { position: "top" },
  colors: ["#280948", "#667EEA"],
  backgroundColor: "none",
  

};

export function Grafico() {
  return (
    <Chart
      style={{transform: "scale(1.1"}}
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default Grafico;


