import { Line } from "react-chartjs-2";

export const TwoLinesChart = ({ labels, data1, data2 }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data 1",
        data: data1,
        fill: false,
        borderColor: "rgba(117,160,255,1)",
        pointBackgroundColor: "white",
        pointRadius: 5,
        pointHoverRadius: 7, // Increase point size on hover
        pointHoverBackgroundColor: "white",
        borderWidth: 2.5,
        tension: 0.1,
      },
      {
        label: "Data 2",
        data: data2,
        fill: false,
        borderColor: "#F3D676",
        borderWidth: 2,
        borderDash: [10, 4],
        pointBackgroundColor: "white",
        pointRadius: 5,
        pointHoverRadius: 7, // Increase point size on hover
        pointHoverBackgroundColor: "white",
        tension: 0.1,
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
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
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 1)", // Set tooltip background color to white
        borderColor: "rgba(128, 128, 128, 0.7)", // Set tooltip border color to gray
        borderWidth: 1, // Set tooltip border width
        bodyColor: "#000000",
        titleColor: "rgba(128, 128, 128, 1)",
        intersect: true,
        mode: "index",
        callbacks: {
          title: (context) => {
            return data.labels[context[0].dataIndex];
          },
          label: (context) => {
            let label = "";
            const datasetLabel = context.dataset.label || "";

            // Customize tooltip label for specific datasets
            if (datasetLabel === "Data 1") {
              label += "Active: ";
            } else if (datasetLabel === "Data 2") {
              label += "Inactive: ";
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

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
