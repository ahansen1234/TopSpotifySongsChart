import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { Data } from "./utils/Data";
import { youtubeRevenue } from "./utils/YouTubeData";
import DoughnutChart from "./components/DoughnutChart";
import BarChart from "./components/BarChart";
import TempBarChart from "./components/TempBarChart";
import { LineChart } from "./components/LineChart";
import "./App.css";
import { TempData } from "./utils/TempData";

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

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(TempData.length);

  const onClick = () => {
    reset();
    setRight(6);
  };

  const reset = () => {
    setLeft(0);
    setRight(TempData.length);
  }

  const secondQuarter = () => {
    reset();
    setLeft(5);
    setRight(11);
  }

  const thirdQuarter = () => {
    reset();
    setLeft(10);
    setRight(16);
  }

  const fourthQuarter = () => {
    reset();
    setLeft(15);
    setRight(21);
  }

  useEffect(() => {
    setTemperData({
      labels: TempData.slice(left, right).map((data) => data.year),
      datasets: [
        {
          label: "Annual Average Temperature (F) ",
          data: TempData.slice(left, right).map((data) => data.value),
          backgroundColor: "black",
          borderColor: "black",
          borderWidth: 2,
        }
      ]
    });
  }, [right, left]);
  const [temperData, setTemperData] = useState({
    labels: TempData.map((data) => data.year),
    datasets: [
      {
        label: "Annual Average Temperature (F) ",
        data: TempData.map((data) => data.value),
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 2,
      }
    ]
  });
 
  const ViewOne = () => {
    return(
    <div className="chart-container">
      <div className="row">
        <div className="column">
          <div>
            <h1> Interactive Graphs</h1>
            <p>Created with ChartJs & Javascript </p>
          </div>
          <div className="card">

            <TempBarChart temperData={temperData} />
            <button onClick={onClick}> 1900 - 1925 </button>
            <button onClick={secondQuarter}> 1925 - 1950 </button>
            <button onClick={thirdQuarter}> 1950 - 1975 </button>
            <button onClick={fourthQuarter}> 1975 - 2000 </button>
              <button onClick={reset}> 1900 - 2000 </button>
            <button onClick={changeView}> Enlarge this Data</button>
              
          </div>
          <div className="card">
            <BarChart chartData={chartData} />
          </div>
        </div>
        <div className="column">
          <div className="card">
            <LineChart ytData={ytData} />
            
          </div>
          <div className="card">
            <DoughnutChart chartData={chartData} />
          </div>
        </div>
        </div>
      </div>
    )
  }

  const changeView = () => {
    setCurrentView("view2");
  }
  const fullView = () => {
    setCurrentView("view1");
  }
  const ViewTwo = () => {
    return (
      <div className="card">

      <TempBarChart temperData={temperData} />
      <button onClick={onClick}> 1900 - 1925 </button>
      <button onClick={secondQuarter}> 1925 - 1950 </button>
      <button onClick={thirdQuarter}> 1950 - 1975 </button>
      <button onClick={fourthQuarter}> 1975 - 2000 </button>
        <button onClick={reset}> 1900 - 2000 </button>
        <div> 
        <button onClick={fullView}> Full Page View</button>

        </div>
    </div>
    )
  }
  const [currentView, setCurrentView] = useState("view1");

  return (
    <div>
        {
          currentView === "view1" ? 
          <ViewOne  /> : 
          <ViewTwo  />
       }
      </div>
  );
}