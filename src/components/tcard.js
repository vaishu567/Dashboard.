import React from "react";
import "../styles/scard.css";
import img1 from "../assets/d2.png";

const Tcard = () => {
  return (
    <div>
      <div className="container-scard">
        <div className="image-container">
          <img src={img1} alt="" className="above-svg-image" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            className="svg-image"
          >
            <circle cx="16.7543" cy="16.7225" r="15.9145" fill="#DEBF85" />
          </svg>
        </div>
        <div className="text">Total Transactions</div>
        <div className="amount-label">
          <span className="amount">1,520</span>
          <div className="label-con">
            <span className="label">+1.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tcard;
