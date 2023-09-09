import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/donut.css";

ChartJS.register(ArcElement, Tooltip, Legend);
const Donut = () => {
  // Define your chart data
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
    options: {
      borderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <div className="don-container">
        <div>
          <h2 className="acti-top">Top products</h2>
          <div className="fur2">May-June 2023</div>
        </div>
        <div className="fordon">
          <div className="donu">
            <Doughnut
              data={data}
              options={data.options}
              width={"160px"}
              height={"160px"}
            />
          </div>

          <div className="side-heads">
            <div>
              <div className="fur">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <circle cx="5.5" cy="5.5" r="5.5" fill="#98D89E" />
                </svg>
                <div className="fur1">Basic Tees</div>
              </div>
              <div className="fur2">55%</div>
            </div>
            <div>
              <div className="fur">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <circle cx="5.5" cy="5.5" r="5.5" fill="#F6DC7D" />
                </svg>
                <div className="fur1">Custom Short Pants</div>
              </div>
              <div className="fur2">31%</div>
            </div>
            <div>
              <div className="fur">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <circle cx="5.5" cy="5.5" r="5.5" fill="#EE8484" />
                </svg>
                <div className="fur1">Super Hoodies</div>
              </div>
              <div className="fur2">14%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donut;
