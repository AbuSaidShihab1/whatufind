import React from "react";
import "../../styles/dashboard/Dashboardmain.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { TbShare3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import Dashboardfilter from "./Dashboardfilter";
const Dashboardmain = () => {
  return (
    <div className="dashboard-section">
      {/* ------------------------dashboard-top-------------------- */}
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
        <div className="dashboard-servicesection">
          <div className="dashboard-filterbtn">
            <select name="filter">
              <option value="">Services</option>
              <option value="">Products</option>
            </select>
          </div>
          <div className="dashboard-allproducts">
            <div className="dashboardproduct-box">
              <img
                src="https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="productbox-allinfo">
                <div className="productuploader-info">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <h3>A K M Sazzadul Alam</h3>
                </div>
                <p>
                  Professional Services is a leading HVAC and electrical ....
                </p>
                <div className="uploader-rating">
                  <i>
                    <FaStar />
                  </i>
                  <p>
                    5.0 <span>(10)</span>
                  </p>
                </div>
              </div>
              <div className="product-spreadoption">
                <div className="commentoptionbox">
                  <button>
                    <GrLike />
                  </button>
                  <button>
                    <TbShare3 />
                  </button>
                </div>
                <div className="commentoptionbox">
                  <button>
                    <GrMenu />
                  </button>
                </div>
              </div>
            </div>
            <div className="dashboardproduct-box">
              <img
                src="https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="productbox-allinfo">
                <div className="productuploader-info">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <h3>A K M Sazzadul Alam</h3>
                </div>
                <p>
                  Professional Services is a leading HVAC and electrical ....
                </p>
                <div className="uploader-rating">
                  <i>
                    <FaStar />
                  </i>
                  <p>
                    5.0 <span>(10)</span>
                  </p>
                </div>
              </div>
              <div className="product-spreadoption">
                <div className="commentoptionbox">
                  <button>
                    <GrLike />
                  </button>
                  <button>
                    <TbShare3 />
                  </button>
                </div>
                <div className="commentoptionbox">
                  <button>
                    <GrMenu />
                  </button>
                </div>
              </div>
            </div>
            <div className="dashboardproduct-box">
              <img
                src="https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="productbox-allinfo">
                <div className="productuploader-info">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <h3>A K M Sazzadul Alam</h3>
                </div>
                <p>
                  Professional Services is a leading HVAC and electrical ....
                </p>
                <div className="uploader-rating">
                  <i>
                    <FaStar />
                  </i>
                  <p>
                    5.0 <span>(10)</span>
                  </p>
                </div>
              </div>
              <div className="product-spreadoption">
                <div className="commentoptionbox">
                  <button>
                    <GrLike />
                  </button>
                  <button>
                    <TbShare3 />
                  </button>
                </div>
                <div className="commentoptionbox">
                  <button>
                    <GrMenu />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------dashboard-top-------------------- */}
      <div className="dashboardbottom-section">
        <Dashboardfilter />
      </div>
    </div>
  );
};

export default Dashboardmain;
