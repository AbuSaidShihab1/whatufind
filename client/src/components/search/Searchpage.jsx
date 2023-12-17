import React from "react";
import Searchheader from "../searchheader/searchheader";
import { TbGridDots } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import Typed from "typed.js";
import Searchfooter from "../footer/Searchfooter";
const Searchpage = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Find what you want", "Find what you need"],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="search-main">
      <Searchheader />
      {/* -----------search hero section------------- */}
      <div className="search-hero">
        {/* --------------searc-top---------------- */}
        <div className="search-top">
          <div className="ninedot-icon">
            <TbGridDots />
          </div>
          <img
            src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        {/* --------------searc-top---------------- */}
        {/* ------------------search-box-------------------- */}
        <div className="search-box">
          <h1>someone is there to help you</h1>
          <h2>
            <span ref={el}>Find what you want</span>
          </h2>
          <div className="search-field">
            <div className="search-inputbox">
              <div className="search-left">
                <button>
                  <IoSearchOutline />
                </button>
                <input
                  type="text"
                  placeholder="Find what you need"
                  id="inpplaceholder"
                />
              </div>
              <button>Find</button>
            </div>
          </div>
        </div>
        {/* ------------------search-box-------------------- */}
      </div>
      {/* -----------search hero section------------- */}
      {/* --------------search footer---------------- */}
      <Searchfooter />
      {/* --------------search footer---------------- */}
    </div>
  );
};

export default Searchpage;
