import React from "react"
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

export default function LineChart({ chartData }:{chartData: any}) {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    );
}
