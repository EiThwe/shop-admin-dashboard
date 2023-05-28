import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: [
      "1h",
      "10m",
      "50m",
      "30m",
      "40m",
      "20m",
      "30m",
      "25m",
      "20m",
      "5m",
      "10m",
    ],
    datasets: [
      {
        label: "signup",
        data: [15, 30, 27, 43, 39, 18, 42, 25, 13, 18, 59],
        backgroundColor: [
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
        ],
        borderColor: [
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
          "#578CFF",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    scales: {
      x: {
        display: false, // Hide x-axis labels
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    // Display bars horizontally
    maxBarThickness: 10, // Adjust the value as per your requirement
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
