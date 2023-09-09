import React from "react";
import "../styles/userprofile.css";
import img1 from "../assets/svgviewer-output 1.png";
import img2 from "../assets/logo-instagram 1.png";
import img3 from "../assets/Mail.png";
import img4 from "../assets/logo-twitter 1.png";

const User = ({ username, email, phone, insta, tube }) => {
  return (
    <div className="user-container">
      <div className="top-nam">
        <div className="nam">{username}</div>
      </div>
      <div className="section">
        <div className="sec">
          <div className="sec1">
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
                <circle cx="16.7543" cy="16.7225" r="15.9145" fill="#E9F9EB" />
              </svg>
            </div>
            <span className="spani">+91{phone}</span>
          </div>
          <div className="sec1">
            <div className="image-container">
              <img src={img3} alt="" className="above-svg-image" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                className="svg-image"
              >
                <circle cx="16.7543" cy="16.7225" r="15.9145" fill="#eeeafa" />
              </svg>
            </div>
            <span className="spani">{email}</span>
          </div>
        </div>
        <div className="sec">
          <div className="sec1">
            <div className="image-container">
              <img src={img2} alt="" className="above-svg-image" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                className="svg-image"
              >
                <circle cx="16.7543" cy="16.7225" r="15.9145" fill="#FFE9EC" />
              </svg>
            </div>
            <span className="spani">{insta}</span>
          </div>

          <div className="sec1">
            <div className="image-container">
              <img src={img4} alt="" className="above-svg-image" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                className="svg-image"
              >
                <circle cx="16.7543" cy="16.7225" r="15.9145" fill="#FFE9E9" />
              </svg>
            </div>
            <span className="spani">{tube}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
