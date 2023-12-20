import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "../../styles/search/Joinfooter.css";
const Joinfooter = () => {
  return (
    <footer>
      <ul>
        <li>
          <NavLink>@ 2023 Whatufind</NavLink>
        </li>
        <li>
          <NavLink>Services</NavLink>
        </li>
        <li>
          <NavLink>Products</NavLink>
        </li>
        <li>
          <NavLink>Jobs</NavLink>
        </li>
        <li>
          <NavLink>Training</NavLink>
        </li>
        <li>
          <NavLink>People</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Tearm Of Service</NavLink>
        </li>
        <li>
          <NavLink>Policy & Guidelines</NavLink>
        </li>
        <li>
          <NavLink>Language</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Joinfooter;
