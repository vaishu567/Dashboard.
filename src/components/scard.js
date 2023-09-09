import React from "react";
import img1 from "../assets/d1.png";
import "../styles/scard.css";
const Scard = () => {
  return (
    <>
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
            <circle cx="16.7543" cy="16.7225" r="15.9145" fill="#7FCD93" />
          </svg>
        </div>
        <div className="text">Total Revenues</div>
        <div className="amount-label">
          <span className="amount">$2,129,430</span>
          <div className="label-con">
            <span className="label">+2.5%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scard;
