import React from "react";
import "../../styles/dashboard/Dashhighlight.css";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
const Dashhighlight = () => {
  return (
    <>
      <div className="dashhighlightbox">
        <h1>Highlights</h1>
        <div className="highlight-allinfos">
          <div className="highlighbox-info">
            <img
              src="https://thumbs.dreamstime.com/b/print-173909015.jpg"
              alt=""
            />
            <div className="highinfo-category">
              <p>Bangladesh University of Engineering and Technology</p>
            </div>
          </div>
          <div className="highlighbox-info">
            <img
              src="https://thumbs.dreamstime.com/b/print-173909015.jpg"
              alt=""
            />
            <div className="highinfo-category">
              <p>Bangladesh University of Engineering and Technology</p>
            </div>
          </div>
          <div className="highlighbox-info">
            <img
              src="https://thumbs.dreamstime.com/b/print-173909015.jpg"
              alt=""
            />
            <div className="highinfo-category">
              <p>Bangladesh University of Engineering and Technology</p>
            </div>
          </div>
          <div className="highlighbox-info">
            <img
              src="https://thumbs.dreamstime.com/b/print-173909015.jpg"
              alt=""
            />
            <div className="highinfo-category">
              <p>Bangladesh University of Engineering and Technology</p>
            </div>
          </div>
          <div className="highlighbox-info">
            <img
              src="https://thumbs.dreamstime.com/b/print-173909015.jpg"
              alt=""
            />
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

export default Dashhighlight;
