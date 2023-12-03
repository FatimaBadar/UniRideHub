import { useState, useEffect } from "react";
import "./css/user-auth.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import TextFade from "../components/TextFade";
import Signup from "../components/Signup";

const UserAuth = (props) => {
  const [isRegister, setIsRegister] = useState(false);
  const [text, setText] = useState("");

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const colors = [
    "#d9ed92",
    "#b5e48c",
    "#99d98c",
    "#76c893",
    "#52b69a",
    "#168aad",
    "#1a759f",
    "#1e6091",
    "#184e77",
    "#1e6091",
    "#1e6091",
    "#1a759f",
    "#168aad",
    "#52b69a",
    "#76c893",
    "#99d98c",
    "#b5e48c",
  ];

  const phrases = isRegister
    ? "Create your account to enjoy all the features exclusive for the members!"
    : "Welcome back! Sign in and pick up from where you left :)";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  const handleRegisterLink = () => {
    setIsRegister(!isRegister);
  };

  const divStyle = {
    backgroundColor: colors[currentColorIndex],
    transition: "background-color 1s ease",
  };

  return (
    <>
      <Navbar />
      <div className="auth-body">
        <div className="auth-side" style={divStyle}>
          {isRegister ? (
            <div>
              <TextFade text="UniRideHub!" fromDirection="top" />
              <TextFade
                text="Create account to enjoy all the features of carpool"
                fromDirection="bottom"
              />
            </div>
          ) : (
            <div>
              <TextFade text="Welcome back!" fromDirection="top" />
              <TextFade
                text="Sign in to pick up from where you left"
                fromDirection="bottom"
              />
            </div>
          )}
        </div>

        <div className="auth-card">
          {isRegister ? (
            <Signup handleRegister={handleRegisterLink} />
          ) : (
            <Login handleRegister={handleRegisterLink} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserAuth;
