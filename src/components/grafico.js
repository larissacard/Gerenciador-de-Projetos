import React from "react";
import { Chart } from "react-google-charts";

// dados
export const data = [
  ["Dia", "Essa semana", "Semana"],
  [1, 0, 2],
  [2, 2, 3],
  [3, 3.9, 4],
  [4, 1.7, 1.8],
  [5, 1.9, 1.7],
  [6, 8.8, 1.3],
  [7, 7.6, 1.2],
  [8, 1.3, 2.9],
  [9, 6.9, 4.2],
  [10, 2.8, 3.9],
  [11, 5.3, 7.9],
  [12, 6.6, 8.4],
  [13, 4.8, 6.3],
  [14, 4.2, 6.2],
];

export const options = {
  curveType: "function",
  legend: { position: "top" },
  colors: ["#280948", "#667EEA"],
};

export function Grafico() {
  return (
    <Chart
      chartType="LineChart"
      width="609px"
      height="344px"
      data={data}
      options={options}
    />
  );
}

export default Grafico;


