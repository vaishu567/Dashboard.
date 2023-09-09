// BarGraph.js
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import "../styles/bargraph.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarGraph = () => {
  // Sample data for demonstration
  const [chartData, setChartData] = useState({
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [
      {
        label: "Guest",
        backgroundColor: "#98D89E",
        borderColor: "#98D89E",
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.9,
        borderRadius: 6,
        data: [12, 19, 3, 5, 2], // Sample data values
      },
      {
        label: "User",
        backgroundColor: "#EE8484",
        borderColor: "#EE8484",
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.9,
        borderRadius: 6,
        data: [12, 19, 3, 5, 2], // Sample data values
      },
    ],
  });

  const [chartKey, setChartKey] = useState(0); // Unique key for re-rendering

  // Simulate fetching data
  useEffect(() => {
    // You can replace this with actual data fetching logic
    // For demonstration purposes, we'll use a setTimeout to simulate an API request
    setTimeout(() => {
      // Replace the sample data with your fetched data
      const newData = {
        labels: ["week1", "week2", "week3", "week4"],
        datasets: [
          {
            label: "Guest",
            backgroundColor: "#98D89E",
            borderColor: "#98D89E",
            borderWidth: 1,
            barPercentage: 0.5,
            categoryPercentage: 0.9,
            borderRadius: 6,
            data: [12, 19, 3, 5, 2], // Sample data values
          },
          {
            label: "User",
            backgroundColor: "#EE8484",
            borderColor: "#EE8484",
            borderWidth: 1,
            barPercentage: 0.5,
            categoryPercentage: 0.9,
            borderRadius: 6,
            data: [12, 19, 3, 5, 2], // Sample data values
          },
        ],
      };
      setChartData(newData);
      setChartKey((prevKey) => prevKey + 1); // Update the key to force re-render
    }, 2000); // Simulating a 2-second delay
  }, []);

  const options = {
    scales: {
      x: {
        type: "category",
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="container-graph">
      <div className="top-texti">
        <div className="text-acti">
          <span className="acti">Activities</span>
          <span className="sub-text">May-June 2023</span>
        </div>
        <div className="sma">
          <div className="sma1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <circle cx="5.52881" cy="5.33032" r="5" fill="#E9A0A0" />
            </svg>
            <span className="exi">Guest</span>
          </div>
          <div className="sma1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
            >
              <circle cx="5" cy="5.33032" r="5" fill="#9BDD7C" />
            </svg>
            <span className="exi">User</span>
          </div>
        </div>
      </div>

      <Bar
        key={chartKey}
        data={chartData}
        options={options}
        width={"460px"}
        height={"150px"}
      />
    </div>
  );
};

export default BarGraph;
