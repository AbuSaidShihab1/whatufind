import React from "react";
import "../../styles/home/Postfield.css";
const Postfield = () => {
  return (
    <div className="postfield-main">
      <div className="profile-pic">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="post-input">
        <input type="text" placeholder="Add Something..." name="postinp" />
        <button>Add</button>
      </div>
    </div>
  );
};

export default Postfield;
