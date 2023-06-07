import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./utils/Data";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import "./App.css";

Chart.register(CategoryScale);
 
export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.song), 
    datasets: [
      {
        label: "Times Streamed 2022 ",
        data: Data.map((data) => data.plays),
        backgroundColor: Data.map((data) => data.color),
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div className="chart-container">
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
    </div>
  );
}