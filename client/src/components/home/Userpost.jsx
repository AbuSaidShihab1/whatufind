import React from "react";
import "../../styles/home/Userpost.css";
import { FiPlus } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { TbShare3 } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import { Link } from "react-router-dom";
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
              <Link to="/public-profile">
                <img
                  src="https://images.pexels.com/photos/2837570/pexels-photo-2837570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
              </Link>
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
                src="https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          {/* -----------------userpost-------------------- */}
          <div className="userpostboxbottom">
            <div className="userpost-count">
              <div className="userpost-likecount">
                <p>100K</p>
              </div>
              <div className="userpost-commentcount">
                <p>20K Comments</p>
                <p>1200 Shares</p>
              </div>
            </div>
            <div className="userpost-validoption">
              <div className="userpost-optionbox">
                <i>
                  <GrLike />
                </i>
                <p>React</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <FaRegCommentDots />
                </i>
                <p>Comments</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <TbShare3 />
                </i>
                <p>Shares</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <VscSend />
                </i>
                <p>Send</p>
              </div>
            </div>
          </div>
        </div>
        <div className="userpostbox">
          <div className="userpostboxtop">
            <div className="userprofile-info">
              <Link to="/public-profile">
                <img
                  src="https://images.pexels.com/photos/2837570/pexels-photo-2837570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
              </Link>
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
                src="https://images.pexels.com/photos/14316588/pexels-photo-14316588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          {/* -----------------userpost-------------------- */}
          <div className="userpostboxbottom">
            <div className="userpost-count">
              <div className="userpost-likecount">
                <p>100K</p>
              </div>
              <div className="userpost-commentcount">
                <p>20K Comments</p>
                <p>1200 Shares</p>
              </div>
            </div>
            <div className="userpost-validoption">
              <div className="userpost-optionbox">
                <i>
                  <GrLike />
                </i>
                <p>React</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <FaRegCommentDots />
                </i>
                <p>Comments</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <TbShare3 />
                </i>
                <p>Shares</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <VscSend />
                </i>
                <p>Send</p>
              </div>
            </div>
          </div>
        </div>
        <div className="userpostbox">
          <div className="userpostboxtop">
            <div className="userprofile-info">
              <Link to="/public-profile">
                <img
                  src="https://images.pexels.com/photos/2837570/pexels-photo-2837570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
              </Link>
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
                possimus doloribus similique deleniti! <span>See more...</span>
              </p>
            </div>
            <div className="userpostpic">
              <img
                src="https://images.pexels.com/photos/4036562/pexels-photo-4036562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          {/* -----------------userpost-------------------- */}
          <div className="userpostboxbottom">
            <div className="userpost-count">
              <div className="userpost-likecount">
                <p>100K</p>
              </div>
              <div className="userpost-commentcount">
                <p>20K Comments</p>
                <p>1200 Shares</p>
              </div>
            </div>
            <div className="userpost-validoption">
              <div className="userpost-optionbox">
                <i>
                  <GrLike />
                </i>
                <p>React</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <FaRegCommentDots />
                </i>
                <p>Comments</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <TbShare3 />
                </i>
                <p>Shares</p>
              </div>
              <div className="userpost-optionbox">
                <i>
                  <VscSend />
                </i>
                <p>Send</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------user post---------- */}
    </div>
  );
};

export default Userpost;
