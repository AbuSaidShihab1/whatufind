import React from "react";
import "../../styles/dashboard/Dashboardfilter.css";
import Dashhighlight from "./Dashhighlight";
import Dashglance from "./Dashglance";
const Dashboardfilter = () => {
  return (
    <div className="dashboard-filter-main">
      <div className="dashboardfilterbox1">
        <Dashhighlight />
      </div>
      <div className="dashboardfilterbox2"></div>
      <div className="dashboardfilterbox3">
        <Dashglance />
      </div>
    </div>
  );
};

export default Dashboardfilter;
