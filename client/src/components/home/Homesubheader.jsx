import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/home/Homesubheader.css";
const Homesubheader = () => {
  return (
    <div className="homesub-header">
      <ul>
        <li>
          <NavLink to="">Services</NavLink>
        </li>
        <li>
          <NavLink to="">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="">Consultant</NavLink>
        </li>
        <li>
          <NavLink to="">Training</NavLink>
        </li>
        <li>
          <NavLink to="">Products</NavLink>
        </li>
        <li>
          <NavLink to="">People</NavLink>
        </li>
        <li>
          <NavLink to="">Q&A</NavLink>
        </li>
      </ul>
      <div className="sub-btn">
        <button>Earn Money</button>
      </div>
    </div>
  );
};

export default Homesubheader;
