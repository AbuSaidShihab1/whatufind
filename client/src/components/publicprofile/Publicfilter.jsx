import React from "react";
import "../../styles/dashboard/Dashboardfilter.css";
import Publichighlight from "./Publichiglight";
import Publicinfo from "./Publicinfo";
import Publicglance from "./Publicglance";
const Publicfilter = () => {
  return (
    <div className="dashboard-filter-main">
      <div className="dashboardfilterbox1">
        <Publichighlight />
      </div>
      {/* -----------------------dashboardfilterbox2-------------------*/}
      <div className="dashboardfilterbox2">
        <Publicinfo />
      </div>
      {/* -----------------------dashboardfilterbox2-------------------*/}
      <div className="dashboardfilterbox3">
        <Publicglance />
      </div>
    </div>
  );
};

export default Publicfilter;
