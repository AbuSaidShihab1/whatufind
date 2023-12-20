import React from "react";
import Logo from "../../assets/logo.png";
import "../../styles/search/Join.css";
import googleimg from "../../assets/google.png";
import facebookimg from "../../assets/facebook.png";
import { Link } from "react-router-dom";
import Searchfooter from "../footer/Searchfooter";
import Joinfooter from "../footer/Joinfooter";
const Searchjoin = () => {
  return (
    <div className="join-main">
      <header style={{ boxShadow: "none" }}>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </header>
      {/* -------------join form---------------- */}
      <div className="join-form">
        <div className="joinform-box">
          <h1>Join now to find someone for your help.</h1>
          <div className="joinform-all">
            {/* --------------form-------------- */}
            <form action="">
              <input type="text" placeholder="Email" name="email" />
              <div className="pass-box">
                <input
                  type="password"
                  placeholder="Set Password"
                  name="password"
                />
              </div>
              <div className="pass-box">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                />
              </div>
              <div className="remember-box">
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
              <p>
                By clicking Agree and join, you agree to the whatufind
                <span>User Agreement</span>, <span>privacy policy</span>, and
                <span>cookie policy</span>.
              </p>
              <button>Agree & Join</button>
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
              Already on <span style={{ fontWeight: "bold" }}>whatufind</span>?
              <Link to="/signin">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
      {/* -------------join form---------------- */}
      <Joinfooter />
    </div>
  );
};

export default Searchjoin;
