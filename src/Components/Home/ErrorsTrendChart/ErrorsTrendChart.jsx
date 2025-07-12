
import React from "react";
import Chart from "react-apexcharts";

const ErrorsTrendChart = () => {
  const chartOptions = {
    chart: {
      type: "area",
      height: 160,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Errors in the Last 7 Days",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#ffffff",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#FF6B6B"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#FF6B6B",
            opacity: 0.6,
          },
          {
            offset: 100,
            color: "#FF6B6B",
            opacity: 0.1,
          },
        ],
      },
    },
    xaxis: {
      categories: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ],
      labels: {
        style: {
          colors: "#bbb",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#bbb",
        },
      },
    },
    grid: {
      borderColor: "#444",
    },
    tooltip: {
      theme: "dark",
    },
  };

  const chartSeries = [
    {
      name: "Errors",
      data: [12, 19, 7, 22, 15, 9, 18], // You can replace with dynamic data
    },
  ];

  return (
    <div style={{ background: "#1f1c2c", padding: "1rem", borderRadius: "1rem", color: "white" }}>
      <Chart options={chartOptions} series={chartSeries} type="area" height={260} />
    </div>
  );
};

export default ErrorsTrendChart;
