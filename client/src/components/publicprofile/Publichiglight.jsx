import React from "react";
import "../../styles/dashboard/Dashhighlight.css";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
const Publichighlight = () => {
  return (
    <>
      <div className="dashhighlightbox">
        <h1>Highlights</h1>
        <div className="highlight-allinfos">
          <div className="highlighbox-info">
            <div className="dashhighlight-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrIFUide8ZhS7RzVxxPAlV4t0Ysd41mNX8IOY1t4fVlULah5wBm9OLuF_7t4VmkHvZXw&usqp=CAU"
                alt=""
              />
            </div>
            <div className="highinfo-category">
              <p>Bangladesh University of Engineering and Technology</p>
            </div>
          </div>
          <div className="highlighbox-info">
            <div className="dashhighlight-img">
              <img
                src="https://i.pinimg.com/736x/5f/7a/ff/5f7aff7fcf3ebcfaf8038b480a5b51c8.jpg"
                alt=""
              />
            </div>
            <div className="highinfo-category">
              <p>Bangladesh University of Engineering and Technology</p>
            </div>
          </div>
          <div className="highlighbox-info">
            <div className="dashhighlight-img">
              <img
                src="https://img.freepik.com/premium-vector/education-badge-logo-design-university-high-school-emblem-vector-logo-template_441059-505.jpg?w=360"
                alt=""
              />
            </div>
            <div className="highinfo-category">
              <p>Bangladesh University of Engineering and Technology</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashhighlightbox2">
        <h1>Other Accounts</h1>
        <div className="otherlink-boxes">
          <div className="otheraccount-link">
            <Link>
              <i>
                <FaFacebook color="#3498db" />
              </i>
              <p>Facebook</p>
            </Link>
          </div>
          <div className="otheraccount-link">
            <Link>
              <i>
                <FaLinkedin color="#5352ed" />
              </i>
              <p>Linkedin</p>
            </Link>
          </div>
          <div className="otheraccount-link">
            <Link>
              <i>
                <SiUpwork color="#27ae60" />
              </i>
              <p>Upwork</p>
            </Link>
          </div>
          <div className="otheraccount-link">
            <Link>
              <i>
                <TbBrandFiverr color="#16a085" />
              </i>
              <p>Fiverr</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publichighlight;
