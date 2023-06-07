import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Top 10 Songs Streamed on Spotify 2022</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Number of Streams"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;