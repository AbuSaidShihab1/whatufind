import React from "react";
import "../../styles/dashboard/Dashglance.css";
const Dashglance = () => {
  return (
    <div className="dashglance-main">
      <div className="dashglance-boxmain">
        <h1>At A Glance</h1>
        <div className="dashglance-boxes">
          <div className="dashglance-box">
            <h2>Service</h2>
            <div className="dashglance-contentmain">
              <div className="dashglance-content">
                <img
                  src="https://thumbs.dreamstime.com/b/print-173909015.jpg"
                  alt=""
                />
                <p>You can get Electrical Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashglance;
