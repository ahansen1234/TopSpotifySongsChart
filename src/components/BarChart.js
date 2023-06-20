import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Top 10 Songs Streamed on Spotify</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Most Streamed Songs (in millions):"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart;