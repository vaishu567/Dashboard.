import React from "react";
import Board from "../components/board";
import Scard from "../components/scard";
import Tcard from "../components/tcard";
import "../styles/dashboard.css";
import Lcard from "../components/lcard";
import Ucard from "../components/ucard";
import SearchBar from "../components/searchbar";
import img1 from "../assets/bell.png";
import img2 from "../assets/image 1.png";
import BarGraph from "../components/bargraph";
import Profile from "../components/addprofile";
import Donut from "../components/donutchart";
// import SlidingForm from "../components/slidingform";
const Dashboard = () => {
  const handleSearch = (query) => {
    // Handle the search query (e.g., fetch data based on the query)
    console.log("Search query:", query);
  };
  return (
    <div className="container-dash">
      <div className="board">
        <Board />
      </div>
      <div className="rest-dash">
        <div className="top-dash">
          <div className="text-con">
            <span>Dashboard</span>
          </div>
          <div className="top-icons">
            <SearchBar onSearch={handleSearch} className="search" />
            <img src={img1} alt="" className="bell-icon" />
            <img src={img2} alt="" className="mask" />
          </div>
        </div>
        <div className="cards">
          <Scard />
          <Tcard />
          <Lcard />
          <Ucard />
        </div>
        <div className="acti">
          {" "}
          <BarGraph />
        </div>
        <div className="pro-add">
          <div className="don-pro">
            <Donut />
          </div>
          <div className="add-user">
            <Profile />
          </div>
          {/* <SlidingForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
