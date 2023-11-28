import React from "react";
import "../../styles/dashboard/Dashboardmain.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Dashboardmain = () => {
  return (
    <div className="dashboard-section">
      <div className="dashboardtop-section">
        <div className="dashboard-profile">
          <div className="user-status">
            <p>Online</p>
          </div>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="dahuserprofile-info">
            <h1>A K M Sazzadul Alam</h1>
            <h2>Electrician | Plumber</h2>
            <p>Uttara, Dhaka, Bangladesh</p>
            <button>Message</button>
          </div>
          <div className="profilerating">
            <div className="review-completestar">
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaRegStar />
            </div>
            <p>(Rating)</p>
          </div>
          <div className="varify-count">
            <p>Varified</p>
            <div className="varified-bar">
              <div className="varified-subbar">75%</div>
            </div>
          </div>
          <div className="profile-contactinfo">
            <div className="profile-contactinfobox">
              <p>
                {" "}
                <Link>Contact info</Link>
              </p>
              <div className="follower-count">
                <button className="followsercount1">Follow</button>
                <p>500+ Follwers</p>
              </div>
            </div>
            <div className="profile-contactinfobox">
              <p>
                <Link>Transiction info</Link>
              </p>
              <div className="follower-count">
                <button className="followsercount2">Connect</button>
                <p>300+ Connectors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardbottom-section"></div>
    </div>
  );
};

export default Dashboardmain;
