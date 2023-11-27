import React from "react";
import Logo from "../../assets/logo.png";
import Searchnav from "./Searchnav";
import { Link } from "react-router-dom";
const Searchheader = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      {/* ----------------navbar----------- */}
      <Searchnav />
      {/* ----------------navbar----------- */}
    </header>
  );
};

export default Searchheader;
