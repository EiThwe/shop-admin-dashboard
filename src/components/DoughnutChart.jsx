import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: [
      "Order:broken",
      "Order:completed",
      "Order:unpaid",
      "Order:pending",
      "Order:canceled",
      "Order:returned",
    ],
    datasets: [
      {
        // label: "Order",
        data: [150, 4100, 2500, 1800, 2300, 400],
        backgroundColor: [
          "#66ccff",
          "#6699ff",
          "#00cc99",
          "#8080ff",
          "#ffdb4d",
          "#ff6666",
        ],
        // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    elements: {
      arc: {
        borderWidth: 1, // Set the border width of the arcs to 0
      },
    },
    cutout: "75%", // Adjust the cutout size to control the ring size
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
