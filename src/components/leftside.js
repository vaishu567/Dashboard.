import React from "react";
import "../styles/leftside.css";
import img1 from "../assets/carbon_logo-discord.png";
import img2 from "../assets/carbon_logo-linkedin.png";
import img3 from "../assets/Vector (1).png";
import img4 from "../assets/Vector.png";
const Leftside = () => {
  return (
    <div>
      <div className="svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="720"
          height="1024"
          viewBox="0 0 720 1024"
          fill="none"
        >
          <path
            d="M0 0L719.988 0L569.314 1024H0V0Z"
            fill="url(#paint0_linear_0_147)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_147"
              x1="359.994"
              y1="0"
              x2="359.994"
              y2="1024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4285F4" />
              <stop offset="1" stopColor="#286DE0" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <div className="logo-text">LOGO</div>
          <div className="svg-text">
            {" "}
            <div className="leftside">
              <div className="board">
                <h1>Board.</h1>
              </div>
            </div>
            <div className="icons">
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
