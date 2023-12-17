import React from "react";
import Homeheader from "../components/home/Homeheader";
import Profilemain from "../components/publicprofile/Profilemain";

const Profile = () => {
  return (
    <div className="public-profilemain">
      <Homeheader />
      {/* -----------------profile-main--------------- */}
      <Profilemain />
    </div>
  );
};

export default Profile;
