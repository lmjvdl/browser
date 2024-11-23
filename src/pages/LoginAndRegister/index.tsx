import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.scss";
import SignInForm from "./signIn/signIn";
import SignUpForm from "./signUp/SignUp";

const Index: React.FC = () => {
  const [type, setType] = useState<"signIn" | "signUp">("signIn");
  const navigate = useNavigate(); 

  const handleOnClick = (text: "signIn" | "signUp") => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <>
      <div className="index bg-slate-400 w-full h-full">
        <div
          className="back-button absolute top-4 left-4 cursor-pointer text-gray-700"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className={containerClass} id="container">
          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1-signup">Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost button-signup"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h1-signup">Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost button-signup"
                  id="signUp"
                  onClick={() => handleOnClick("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
