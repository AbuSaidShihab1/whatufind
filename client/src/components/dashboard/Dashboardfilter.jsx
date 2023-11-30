import React from "react";
import "../../styles/dashboard/Dashboardfilter.css";
import Dashhighlight from "./Dashhighlight";
import Dashglance from "./Dashglance";
import Userinfofilter from "./Userinfofilter";
const Dashboardfilter = () => {
  return (
    <div className="dashboard-filter-main">
      <div className="dashboardfilterbox1">
        <Dashhighlight />
      </div>
      {/* -----------------------dashboardfilterbox2-------------------*/}
      <div className="dashboardfilterbox2">
        <Userinfofilter />
      </div>
      {/* -----------------------dashboardfilterbox2-------------------*/}
      <div className="dashboardfilterbox3">
        <Dashglance />
      </div>
    </div>
  );
};

export default Dashboardfilter;
