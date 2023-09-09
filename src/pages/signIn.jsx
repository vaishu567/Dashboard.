import React from "react";
import Leftside from "../components/leftside";
import Rightside from "../components/rightside";
import "../styles/signin.css";
const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="left-side">
          <Leftside />
        </div>
        <div className="right-side">
          <Rightside />
        </div>
      </div>
    </>
  );
};

export default SignIn;
