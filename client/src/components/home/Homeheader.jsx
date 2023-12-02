import React from "react";
import logo2img from "../../assets/logo2.png";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import "../../styles/home/Homeheader.css";
const Homeheader = () => {
  return (
    <div className="home-header">
      <div className="homeheader-left">
        <div className="logo">
          <img src={logo2img} alt="" />
        </div>
        <div className="home-search">
          <div className="homesearch-box">
            <i>
              <IoSearchOutline />
            </i>
            <input type="text" placeholder="Find what you need" />
          </div>
          <button>Find</button>
        </div>
      </div>
      <nav>
        <div className="link-icon">
          <NavLink to="/home">
            <i>
              <GoHome />
            </i>
            <p>Home</p>
          </NavLink>
        </div>
        {/* <div className="link-icon">
          <NavLink>
            <i>
              <FaRegStar />
            </i>
            <p>Connection</p>
          </NavLink>
        </div> */}
        <div className="link-icon">
          <NavLink>
            <i>
              <CgNotes />
            </i>
            <p>History</p>
          </NavLink>
        </div>
        <div className="link-icon">
          <NavLink to="/message">
            <i>
              <AiOutlineMessage />
            </i>
            <p>Message</p>
          </NavLink>
        </div>
        <div className="link-icon">
          <NavLink to="/notification">
            <i>
              <IoNotificationsOutline />
            </i>
            <p>Notification</p>
          </NavLink>
        </div>
        <div className="home-profilepic">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};

export default Homeheader;
