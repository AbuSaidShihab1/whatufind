import React from "react";
import "../../styles/dashboard/Dashboardfilter.css";
import Dashhighlight from "./Dashhighlight";
const Dashboardfilter = () => {
  return (
    <div className="dashboard-filter-main">
      <div className="dashboardfilterbox1">
        <Dashhighlight />
      </div>
      <div className="dashboardfilterbox2"></div>
      <div className="dashboardfilterbox3"></div>
    </div>
  );
};

export default Dashboardfilter;
