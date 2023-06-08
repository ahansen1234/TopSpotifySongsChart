import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./utils/Data";
import { youtubeRevenue } from "./utils/YouTubeData";
import DoughnutChart from "./components/DoughnutChart";
import BarChart from "./components/BarChart";
import { LineChart } from "./components/LineChart";
import "./App.css";

Chart.register(CategoryScale);
 
export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.song),
    datasets: [
      {
        label: "Times Streamed (in millions): ",
        data: Data.map((data) => data.plays),
        backgroundColor: Data.map((data) => data.color),
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })
  const [ytData, setYtData] = useState({
    labels: youtubeRevenue.map((data) => data.year),
    datasets: [
      {
        label: "Revenue (in billions USD): ",
        data: youtubeRevenue.map((data) => data.revenue),
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 2,
      }
    ]
    });
 
  return (
    <div className="chart-container">
      <DoughnutChart chartData={chartData} />
      <BarChart chartData={chartData} />
      <LineChart ytData={ytData} />
    </div>
  );
}