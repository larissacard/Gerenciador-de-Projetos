import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Tarefas Concluidas",
  hAxis: { title: "Year", titleTextStyle: { color: "#667EEA" } },
  colors: ["#667EEA","#280948"],
  vAxis: { minValue: 0 },
  legend: { position: "top" },
  chartArea: { width: "80%", height: "70%" },
};

export function Grafico() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
