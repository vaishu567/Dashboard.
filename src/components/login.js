import React from "react";
import "../styles/login.css";
import "../styles/rightside.css";

import img1 from "../assets/google-icon 1.png";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  console.log("Current user:", user);
  const handleLogin = async () => {
    await loginWithRedirect();
    // The loginWithRedirect function is asynchronous, so you can use await to ensure the login is completed.
    // After login, you can navigate to the "/dashboard" route.
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="container-login">
          <div className="down  pt-5">
            <div>
              <h1 className="text-gray-500">
                Hey! You are Already Signed In!{" "}
              </h1>
              <NavLink to="/dashboard" className="text-blue-500">
                You Can Go to Dashboard{" "}
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-login">
          <div className="title elex flex flex-col gap-2 py-10 pl-0">
            <h2 className="text-2xl font-bold">Not Yet Signed In...???</h2>
            <div className="options pl-10">
              <span className="oni">
                <img src={img1} alt="" />
                <button onClick={handleLogin} className="txt">
                  Sign in with Google
                </button>
              </span>
            </div>
            <span className="text-gray-500">
              Please Sign in to visit dashboard!{" "}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
