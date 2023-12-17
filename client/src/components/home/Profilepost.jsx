import React from "react";
import "../../styles/home/Profilepost.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Storypost from "./Storypost";
import Postfield from "./Postfield";
import Userpost from "./Userpost";
const Profilepost = () => {
  return (
    <div className="post-section">
      <div className="post-sectionbox1 postbox">
        <h1>Profile info</h1>
        <div className="completed-level">
          <div className="completed-text">
            <p>Completed</p>
          </div>
          <div className="complete-parcent">
            <div className="sub-completeparcent">
              <p>75%</p>
            </div>
          </div>
        </div>
        <div className="completed-level">
          <div className="completed-text">
            <p>Varified</p>
          </div>
          <div className="complete-parcent">
            <div className="sub-completeparcent">
              <p>75%</p>
            </div>
          </div>
        </div>
        <div className="completed-level">
          <div className="completed-text">
            <p>Review</p>
          </div>
          <div className="complete-parcent" style={{ background: "red" }}>
            <div className="sub-completeparcent" id="subreview">
              <p>75%</p>
            </div>
          </div>
        </div>
        <div className="completed-level">
          <div className="completed-text">
            <p>Review</p>
          </div>
          <div className="complete-star">
            <div className="sub-completestar">
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaRegStar />
            </div>
          </div>
        </div>
      </div>
      {/* -------------------post-section2---------------- */}
      <div className="post-sectionbox2 postbox">
        <Storypost />
        {/* -----------------post filed--------------- */}
        <Postfield />
        {/* -----------------All post--------------- */}
        <Userpost />
      </div>
      {/* -------------------post-section3---------------- */}
      <div className="post-sectionbox3 postbox">
        <div className="post-sectiontext">
          <h1>Recommanded for you</h1>
        </div>
        <div className="recommand-tag">
          <ul>
            <li>Services</li>
            <li>jobs</li>
            <li>Consultant</li>
            <li>Training</li>
            <li>people</li>
            <li>Products</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profilepost;
