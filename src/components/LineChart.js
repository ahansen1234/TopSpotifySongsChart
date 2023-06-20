import React from "react";
import { Line } from "react-chartjs-2";

export const LineChart = ({ ytData }) => {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Youtube Revenue 2010 - 2020</h2>
        <Line
            data={ytData}
          options={{
              plugins: {
              title: {
                display: true,
                text: "Youtube Revenue (in billions USD): "
                  },
              legend: {
                display: false
                  },
                  
              },
             
          }}
        />
      </div>
    );
  };
  
  export default LineChart;