import React from "react";
import Homeheader from "../components/home/Homeheader";
import Homesubheader from "../components/home/Homesubheader";
import Dashboardmain from "../components/dashboard/Dashboardmain";
const Dashboard = () => {
  return (
    <div className="dashboard-main">
      {/* ----------header---------------- */}
      <Homeheader />
      {/* ----------sub header---------------- */}
      {/* <Homesubheader /> */}
      {/* ---------------dahboard-main-section-------------------- */}
      <Dashboardmain />
    </div>
  );
};

export default Dashboard;
