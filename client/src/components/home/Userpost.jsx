import React from "react";
import "../../styles/home/Userpost.css";
import { FiPlus } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const Userpost = () => {
  return (
    <div className="userpost-main">
      <div className="userpost-filter">
        <h3>Post</h3>
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>products</button>
          </li>
          <li>
            <button>training</button>
          </li>
          <li>
            <button>Consultant</button>
          </li>
        </ul>
      </div>
      {/* ----------------user post---------- */}
      <div className="userpost-show">
        <div className="userpostbox">
          <div className="userpostboxtop">
            <div className="userprofile-info">
              <img
                src="https://images.pexels.com/photos/2837570/pexels-photo-2837570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="userpost-time">
                <h3>Carlos Jany</h3>
                <p>3d</p>
              </div>
            </div>
            <div className="user-postmethod">
              <i>
                <FiPlus />
              </i>
              <p>Follow</p>
              <i>
                <HiOutlineDotsHorizontal />
              </i>
              <i>
                <MdClose />
              </i>
            </div>
          </div>
          {/* -----------------userpost-------------------- */}
          <div className="userpostboxmiddle">
            <div className="userposttext">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente aliquam ex consectetur iure molestiae sint dolor
                possimus doloribus similique deleniti!
              </p>
            </div>
            <div className="userpostpic">
              <img
                src="https://images.pexels.com/photos/4069205/pexels-photo-4069205.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
            </div>
          </div>
          {/* -----------------userpost-------------------- */}
          <div className="userpostboxbottom"></div>
        </div>
      </div>
      {/* ----------------user post---------- */}
    </div>
  );
};

export default Userpost;
