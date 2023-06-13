

import React from "react";
import { Line } from "react-chartjs-2";

export const TempBarChart = ({ temperData }) => {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Average Anual Temperatures (in degrees F) </h2>
        <Line
            data={temperData}
          options={{
              plugins: {
              title: {
                display: false,
                text: "Average Anual Temperatures (F) "
                  },
              legend: {
                display: false
                  },
                  
              },
              scales: {
                
                y: {
                      min: 50,
                    max: 55
                }
            }
          }}
        />
      </div>
    );
  };
  
  export default TempBarChart;