import React from "react";
import "../../styles/home/Storypost.css";
import { HiOutlinePlus } from "react-icons/hi";
const Storypost = () => {
  return (
    <div className="storypost-main">
      <div className="storypost-mainboxes">
        <div className="story-postbox">
          <div className="storypost-text">
            <p>Create Story</p>
            <div className="storypost-btn">
              <div className="storybtn-box">
                <HiOutlinePlus />
              </div>
            </div>
          </div>
          <div className="story-picture">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        {/* -------people story----------------- */}
        <div className="people-story">
          <div className="people-info">
            <div className="people-picture">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <h2>Elizabeth</h2>
          </div>
          <div className="people-postimg">
            <img
              src="https://images.pexels.com/photos/2224353/pexels-photo-2224353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="people-story">
          <div className="people-info">
            <div className="people-picture">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <h2>Elizabeth</h2>
          </div>
          <div className="people-postimg">
            <img
              src="https://images.pexels.com/photos/2224353/pexels-photo-2224353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storypost;
