import React, { useState } from "react";
import "../styles/addprofile.css";
import img1 from "../assets/Controls.png";
import cross from "../assets/Icon.png";
import User from "./userprofile";

const Profile = () => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [showBasic, setShowBasic] = useState(true);
  const [showSocial, setShowSocial] = useState(false);
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState("John Doe");
  const [phone, setPhone] = useState(912993881234);
  const [email, setEmail] = useState("john@xyz.com");
  const [insta, setInsta] = useState("john_official");
  const [tube, setTube] = useState("john_official");

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handleInsta = (e) => {
    setInsta(e.target.value);
  };
  const handleTube = (e) => {
    setTube(e.target.value);
  };

  const handlephone = (e) => {
    setPhone(e.target.value);
  };
  const handlemail = (e) => {
    setEmail(e.target.value);
  };

  const handleBasicClick = () => {
    setShowBasic(true);
    setShowSocial(false);
  };

  const handleSocialClick = () => {
    setShowBasic(false);
    setShowSocial(true);
  };

  const toggleForm = () => {
    setFormVisibility(!isFormVisible);
  };
  const doneFun = () => {
    setUser(true);
    setFormVisibility(!isFormVisible);
  };

  return (
    <div>
      {!user ? (
        <div className="container-profile">
          <div className="image-container">
            <img
              src={img1}
              alt=""
              className="abosvg-image"
              onClick={toggleForm}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
            >
              <circle
                cx="39"
                cy="39"
                r="37.8918"
                fill="#F5F5F5"
                stroke="#F2F2F2"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="36"
                fill="#000"
              ></text>
            </svg>
          </div>
          <span className="kisi">Add Profile</span>
        </div>
      ) : (
        <User
          username={username}
          phone={phone}
          email={email}
          insta={insta}
          tube={tube}
        />
      )}

      {isFormVisible && (
        <div className="form-popup">
          <div className="header-sec">
            <span className="adi">Add New Profile</span>
            <img src={cross} alt="" className="imi" onClick={toggleForm} />
          </div>
          <div className="sec-con">
            <div className="bas-soc">
              <div className="ili">Basic</div>
              {showBasic ? (
                <div className="bar"></div>
              ) : (
                <div className="bar1"></div>
              )}
            </div>
            <div className="bas-soc">
              <div className="ili">Social</div>
              {showSocial ? (
                <div className="bar"></div>
              ) : (
                <div className="bar1"></div>
              )}
            </div>
          </div>

          <div className={`form-section ${showBasic ? "active" : ""}`}>
            <div className="pix">
              <form>
                {/* Basic section form fields */}
                <label className="kix">Enter Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Eg. John Doe"
                  className="inip"
                  onChange={handleUser}
                  required
                />
                <label className="kix">Enter Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Eg. John@xyz.com"
                  className="inip"
                  onChange={handlemail}
                  required
                />
                <label className="kix">Enter Phone*</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Eg.  9123456789"
                  className="inip"
                  onChange={handlephone}
                  required
                />
                {/* Add more basic section form fields as needed */}
              </form>
            </div>
            <div className="end">
              <button className="section-buttons" onClick={handleSocialClick}>
                Next
              </button>
            </div>
          </div>
          <div className={`form-section ${showSocial ? "active" : ""}`}>
            <form>
              {/* Social section form fields */}
              <label className="kix">
                Instagram Link (Optional)
                <input
                  type="text"
                  name="twitter"
                  className="inip"
                  placeholder="Eg. ..instagram.com/username"
                  onChange={handleInsta}
                />
              </label>
              <label className="kix">
                Youtube Link (Optional)
                <input
                  type="text"
                  name="facebook"
                  className="inip"
                  placeholder="Eg. ..youtube/username"
                  onChange={handleTube}
                />
              </label>
              {/* Add more social section form fields as needed */}
            </form>
            <div className="end">
              <button className="section-buttons" onClick={handleBasicClick}>
                Back
              </button>
              <button className="section-buttons" onClick={doneFun}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
