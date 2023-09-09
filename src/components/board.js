import React from "react";
import img1 from "../assets/dashboard_icon.png";
import img2 from "../assets/transaction_icon.png";
import img3 from "../assets/schedule_icon.png";
import img4 from "../assets/user_icon.png";
import img5 from "../assets/setting_icon.png";
import "../styles/board.css";
const Board = () => {
  return (
    <>
      <div className="container-board">
        <div className="board">
          <span>
            <h1 className="title text-4xl">Board.</h1>
          </span>
        </div>

        <div className="contents">
          <span className="con">
            <img src={img1} alt="" />
            <span className="con">Dashboard</span>
          </span>
          <span className="con">
            <img src={img2} alt="" />
            <span className="con">Transactions</span>
          </span>
          <span className="con">
            <img src={img3} alt="" />
            <span className=" con ">Schedules</span>
          </span>
          <span className="con">
            <img src={img4} alt="" />
            <span className=" con ">Users</span>
          </span>
          <span className="con">
            <img src={img5} alt="" />
            <span className="con ">Settings</span>
          </span>
        </div>
        <div className="footer">
          <span className="text-xl">Help</span>
          <span className="text-xl">Contact Us</span>
        </div>
      </div>
    </>
  );
};

export default Board;
