import React from "react";
import Notificationmain from "../components/notification/Notificationmain";
import Homeheader from "../components/home/Homeheader";
import "../styles/notification/Notificationpage.css";
const Notificationpage = () => {
  return (
    <div className="notificationpage-main">
      {/* ------------------header-------------- */}
      <Homeheader />
      {/* ---------------------notification-main------------------ */}
      <Notificationmain />
    </div>
  );
};

export default Notificationpage;
