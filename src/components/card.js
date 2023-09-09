import React from "react";
import "../styles/card.css";
const Card = ({ handleSignInWithGoogle }) => {
  return (
    <>
      <div className="glass flex flex-col">
        <form className="py-1">
          <div className="profile py-4"></div>
          <div className=" flex flex-col gap-3">
            <span className="side-span">Email address</span>
            <input type="text" placeholder="Username" className="textbox" />
            <span className="side-span">Password</span>
            <input type="password" placeholder="Password" className="textbox" />
            <span className="forgot-span ">Forgot password? </span>
            <button
              type="submit"
              className="btn"
              onClick={handleSignInWithGoogle}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
