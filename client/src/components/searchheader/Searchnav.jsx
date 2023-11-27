import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Searchnav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink>Services</NavLink>
          </li>
          <li>
            <NavLink>Jobs</NavLink>
          </li>
          <li>
            <NavLink>Experts</NavLink>
          </li>
          <li>
            <NavLink>Training</NavLink>
          </li>
          <li>
            <NavLink>Products</NavLink>
          </li>
          <li>
            <NavLink>People</NavLink>
          </li>
          <li>
            <NavLink>Q&A</NavLink>
          </li>
          <li>
            <button>Earn Money</button>
          </li>
        </ul>
      </nav>
      <div className="register-btn">
        <button
          onClick={() => {
            navigate("/join");
          }}
        >
          Join
        </button>
        <button
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default Searchnav;
