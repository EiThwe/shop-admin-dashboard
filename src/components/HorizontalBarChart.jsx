import React from "react";
import { Bar } from "react-chartjs-2";

const HorizontalBarChart = ({ labels, data1 }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sign Up",
        data: data1,
        backgroundColor: "#88AAF3",
        
        barThickness: 15,
      },
    ],
  };

  const options = {
    indexAxis: "y", // This will make the chart horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend for a cleaner look
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: true,
          suggestedMin: 0, // Set the minimum suggested value for the x-axis
          suggestedMax: 20,
          stepSize: 5, // Set the step size to 5, so labels will be shown for 0%, 5%, 10%, etc.
          callback: (data1) => `${data1}%`, // Display values with a percentage symbol
          font: {
            size: 12, // Set the font size for the Y-axis labels
            // Set the font color for the Y-axis labels
          },
          color: "#A6AAB4",
        },
      },
      y: {
        grid: {
          display: false, // Hide the Y-axis grid lines
        },
        ticks: {
          color: "#A6AAB4",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
