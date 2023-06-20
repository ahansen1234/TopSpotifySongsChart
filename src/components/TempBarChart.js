

import React from "react";
import { Line } from "react-chartjs-2";

export const TempBarChart = ({ temperData }) => {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Average Anual Temperatures</h2>
        <Line
            data={temperData}
          options={{
              plugins: {
              title: {
                display: true,
                text: "Average Anual Temperatures (in degrees F)"
                  },
              legend: {
                display: false
                  },
                  
              },
              scales: {
                y: {
                    min: 50,
                    max: 55,
                }
            }
          }}
        />
      </div>
    );
  };
  
  export default TempBarChart;