import React, { useEffect } from "react";
import "../../styles/dashboard/Messagebox.css";
import { IoSearchOutline } from "react-icons/io5";
import { BsArrowsAngleContract, BsThreeDotsVertical } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
const Messagebox = ({ messageactive, messagefalse }) => {
  console.log(messageactive);
  function removemessagebox() {
    messagefalse(false);
  }
  return (
    <div className={messageactive ? "message-mainbox" : "deletemessage"}>
      <div className="messeage-searchbar">
        <div className="searchbar1">
          <div className="messageprofile-pic">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="messagesearch-field">
            <i>
              <IoSearchOutline />
            </i>
            <input type="text" placeholder="Search message" />
          </div>
        </div>
        <div className="searchbar2">
          <button>
            <BsArrowsAngleContract />
          </button>
          <button>
            <BsThreeDotsVertical />
          </button>
          <button onClick={removemessagebox}>
            <GrClose />
          </button>
        </div>
      </div>
      {/* --------------------user friend--------------- */}
      <div className="friend-messagebox-main">
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>

        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
        <div className="friend-messagebox">
          <div className="freind-textbox">
            <div className="friendimg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="frdtext-left">
              <h3>Rahim</h3>
              <p>How,are you?</p>
            </div>
          </div>
          <div className="frdtext-time">
            <p>22 Dec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messagebox;
