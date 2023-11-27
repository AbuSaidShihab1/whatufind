import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Searchfooter = () => {
  return (
    <footer>
      <div className="footer-box">
        <p>@ 2023 Whatufind</p>
      </div>
      <div className="footer-box">
        <ul>
          <li>
            <NavLink>
              <IoLogoWhatsapp />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaTwitter />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaTelegramPlane />
            </NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Tearm Of Service</NavLink>
          </li>
          <li>
            <NavLink>Privacy</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Searchfooter;
