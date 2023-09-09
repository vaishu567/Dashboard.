import React from "react";
import Card from "./card";
import "../styles/rightside.css";
import img1 from "../assets/google-icon 1.png";
import img2 from "../assets/apple 1.png";
import { useNavigate } from "react-router-dom";

const RightSide = () => {
  const navigate = useNavigate();
  const handleSignInWithGoogle = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="container-right ">
        <div className="title flex flex-col gap-2 pl-40 py-5">
          <h2 className="text-4xl font-bold">Sign In</h2>
          <span className=" text-xl w-2/3  text-black-500">
            Sign in to your account
          </span>
        </div>
        <div className="options pl-40">
          <span className="opt">
            <img src={img1} alt="" />
            <button onClick={handleSignInWithGoogle} className="txt">
              Signin with me!!
            </button>
          </span>
          <span className="opt">
            <img src={img2} alt="" />
            <span className="txt">Sign in with Apple</span>
          </span>
        </div>
        <div className="card pl-40 ">
          <Card handleSignInWithGoogle={handleSignInWithGoogle} />
        </div>

        <div className="down pl-40 pt-5">
          <span className="text-gray-500">
            Don't have account?{" "}
            <a href="/login" className="text-blue-500">
              {" "}
              Register here{" "}
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default RightSide;
