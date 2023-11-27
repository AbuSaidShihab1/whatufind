import React from "react";
import Logo from "../../assets/logo.png";
import "../../styles/search/Join.css";
import googleimg from "../../assets/google.png";
import facebookimg from "../../assets/facebook.png";
import { Link } from "react-router-dom";
import Searchfooter from "../footer/Searchfooter";
const Signin = () => {
  return (
    <div className="join-main">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </header>
      {/* -------------join form---------------- */}
      <div className="join-form">
        <div className="joinform-box">
          <h1>Stay connected to get everything in one place.</h1>
          <div className="joinform-all">
            {/* --------------form-------------- */}
            <form action="">
              <h1 style={{ textAlign: "left", marginBottom: "15px" }}>
                Sign In
              </h1>
              <input type="text" placeholder="Email" name="email" />
              <div className="pass-box">
                <input type="password" placeholder="Password" name="password" />
              </div>
              <div className="remember-box2">
                <div className="remember-subbox">
                  <input
                    type="checkbox"
                    name="checkbox"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: 0,
                      cursor: "pointer",
                    }}
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <div className="forget-pass">
                  <p>
                    <Link>Forget Password?</Link>
                  </p>
                </div>
              </div>

              <button>Sign In</button>
            </form>
            {/* --------------form-------------- */}
            <div className="other-option">
              <div className="orbox">
                <div></div>
                <p>Or</p>
                <div></div>
              </div>
              <div className="signup-option">
                <img src={googleimg} alt="google" />
                <p>Join in with gogole</p>
              </div>
              <div className="signup-option">
                <img src={facebookimg} alt="google" />
                <p>Join in with facebook</p>
              </div>
            </div>
            {/* ----------------other option-------------------- */}
          </div>
          <div className="signin-account">
            <p>
              New in whatufind? <Link to="/join">Join now</Link>
            </p>
          </div>
        </div>
      </div>
      {/* -------------join form---------------- */}
      <Searchfooter />
    </div>
  );
};

export default Signin;
