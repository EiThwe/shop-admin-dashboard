import React from "react";
import { Line } from "react-chartjs-2";

const SineWaveGraph = ({ data, data2, data3 }) => {
  const labels = ["4Jan", "5Jan", "6Jan", "7Jan", "8Jan", "9Jan", "10Jan"];
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: data,
        borderColor: "rgba(113, 157, 225, 1)",
        fill: "start",
        backgroundColor: "rgba(113, 157, 225, 0.3)",
        pointBackgroundColor: "rgba(113, 157, 225, 1)",
      },
      {
        label: "Data 2",
        data: data2,
        borderColor: "rgba(255, 215, 213, 1)",
        fill: "start",
        backgroundColor: "rgba(255, 205, 213, 0.3)",
        pointBackgroundColor: "rgba(255, 215, 213, 1)",
      },
      {
        label: "Data 3",
        data: data3,
        borderColor: "rgba(178, 251, 212, 1)",
        fill: "start",
        backgroundColor: "rgba(178, 251, 212, 0.3)",
        pointBackgroundColor: "rgba(178, 251, 212, 1)",
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Hide the x-axis grid lines
        },
        ticks: {
          display: true, // Show the x-axis labels
        },
      },
      y: {
        ticks: {
          display: true,
            
          suggestedMin: 0, // Set the minimum suggested value for the y-axis
          suggestedMax: 200, // Set the maximum suggested value for the y-axis
          stepSize: 50, // Set the interval between each y-axis tick
          callback: function (value) {
            if (
              value === 0 ||
              value === 50 ||
              value === 100 ||
              value === 150 ||
              value === 200
            ) {
              return value;
            }
            return "";
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 1)", // Set tooltip background color to white
        borderColor: "rgba(128, 128, 128, 1)", // Set tooltip border color to gray
        borderWidth: 1, // Set tooltip border width
        bodyColor: "#000000",
        intersect: true,
        mode: "index",
        callbacks: {
          title: () => "", // Hide the tooltip title
          label: (context) => {
            let label = "";
            const datasetLabel = context.dataset.label || "";

            // Customize tooltip label for specific datasets
            if (datasetLabel === "Data") {
              label += "Via Referral: ";
            } else if (datasetLabel === "Data 2") {
              label += "Direct: ";
            } else if (datasetLabel === "Data 3") {
              label += "Via Social: ";
            }

            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }

            return label;
          },
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default SineWaveGraph;
