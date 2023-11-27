import React from "react";
import Homeheader from "../components/home/Homeheader";
import Homesubheader from "../components/home/Homesubheader";
import Homepost from "../components/home/Profilepost";
import Profilepost from "../components/home/Profilepost";

const Home = () => {
  return (
    <div className="home-page">
      {/* ----------header---------------- */}
      <Homeheader />
      {/* ----------sub header---------------- */}
      <Homesubheader />
      {/* ----------Main Section---------------- */}
      <Profilepost />
    </div>
  );
};

export default Home;
