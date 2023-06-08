import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Top 10 Songs Streamed on Spotify</h2>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Most Streamed Songs: "
            }
          }
        }}
      />
    </div>
  );
};


export default DoughnutChart;
