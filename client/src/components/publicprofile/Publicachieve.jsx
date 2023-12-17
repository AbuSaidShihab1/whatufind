import React, { useState } from "react";
import "../../styles/dashboard/Userachieve.css";
import bangladeshimg from "../../assets/bangladesh.jpg";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
const Publicachieve = () => {
  const [activetab, setactivetab] = useState(1);
  //   toggletab function
  function toggletab(index) {
    setactivetab(index);
  }
  return (
    <div className="userachieve-main">
      <div className="userinfofilter-btn">
        <ul>
          <li className={activetab === 1 ? "activetab" : ""}>
            <button
              onClick={() => {
                toggletab(1);
              }}
            >
              Posts
            </button>
          </li>
          <li className={activetab === 2 ? "activetab" : ""}>
            <button
              onClick={() => {
                toggletab(2);
              }}
            >
              Photos
            </button>
          </li>

          <li className={activetab === 3 ? "activetab" : ""}>
            <button
              onClick={() => {
                toggletab(3);
              }}
            >
              Videos
            </button>
          </li>
          <li className={activetab === 4 ? "activetab" : ""}>
            <button
              onClick={() => {
                toggletab(4);
              }}
            >
              Rells
            </button>
          </li>
          <li className={activetab === 5 ? "activetab" : ""}>
            <button
              onClick={() => {
                toggletab(5);
              }}
            >
              Reviews
            </button>
          </li>
          <li className={activetab === 6 ? "activetab" : ""}>
            <button
              onClick={() => {
                toggletab(6);
              }}
            >
              Recommandations
            </button>
          </li>
        </ul>
      </div>
      {/* ----------------------user-achienve------------------------ */}
      <div
        className={
          activetab === 5
            ? "userachieve-mainbox activefilter"
            : "userachieve-mainbox"
        }
      >
        <div className="userachieve-reviews">
          <div className="user-getreviewcount">
            <h2>182 reviews for this seller</h2>
            <div className="getreview-star">
              <div className="getreviewstar-box">
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaRegStar />
              </div>
              <p>4.0</p>
            </div>
          </div>
          <div className="user-reviewbar-main">
            <div className="userreview-barbox">
              <h2>5 Star</h2>
              <div className="review-progressbarbox">
                <div className="review-progressbar">
                  <div className="review-sbprogress"></div>
                </div>
                <p>(150)</p>
              </div>
            </div>
            <div className="userreview-barbox">
              <h2>4 Star</h2>
              <div className="review-progressbarbox">
                <div className="review-progressbar">
                  <div className="review-sbprogress"></div>
                </div>
                <p>(10)</p>
              </div>
            </div>
            <div className="userreview-barbox">
              <h2>3 Star</h2>
              <div className="review-progressbarbox">
                <div className="review-progressbar">
                  <div className="review-sbprogress"></div>
                </div>
                <p>(34)</p>
              </div>
            </div>
            <div className="userreview-barbox">
              <h2>2 Star</h2>
              <div className="review-progressbarbox">
                <div className="review-progressbar">
                  <div className="review-sbprogress"></div>
                </div>
                <p>(20)</p>
              </div>
            </div>
            <div className="userreview-barbox">
              <h2>1 Star</h2>
              <div className="review-progressbarbox">
                <div className="review-progressbar">
                  <div className="review-sbprogress"></div>
                </div>
                <p>(130)</p>
              </div>
            </div>
          </div>
        </div>
        {/* -----------------------review-------------- */}
        <div className="userachieve-box">
          <div className="userarchieve-reviewpic">
            <img
              src="https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="userreview-text">
            <h2>mihaiconstantin</h2>
            <div className="reviewgiven-country">
              <img src={bangladeshimg} alt="bangladesh" />
              <h3>Bangladesh</h3>
            </div>
            <div className="review-starcount">
              <div className="reviewstar">
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaRegStar />
              </div>
              <h4>2 months ago</h4>
            </div>
            <p>
              We agreed on a home page and working contact page with mail form.
              Mail form was not working. When asked how to set up, seller said
              will revert next day. Did not revert for 3 days. Then still no
              proper solution. I had to make it work on my own... See more
            </p>
            <div className="parchased-infobox">
              <h3>Purchased:</h3>
              <Link>Convert HTML</Link>
            </div>
          </div>
        </div>
        <div className="userachieve-box">
          <div className="userarchieve-reviewpic">
            <img
              src="https://images.pexels.com/photos/3782214/pexels-photo-3782214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="userreview-text">
            <h2>mihaiconstantin</h2>
            <div className="reviewgiven-country">
              <img src={bangladeshimg} alt="bangladesh" />
              <h3>Bangladesh</h3>
            </div>
            <div className="review-starcount">
              <div className="reviewstar">
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaRegStar />
              </div>
              <h4>2 months ago</h4>
            </div>
            <p>
              We agreed on a home page and working contact page with mail form.
              Mail form was not working. When asked how to set up, seller said
              will revert next day. Did not revert for 3 days. Then still no
              proper solution. I had to make it work on my own... See more
            </p>
            <div className="parchased-infobox">
              <h3>Purchased:</h3>
              <Link>Convert HTML</Link>
            </div>
          </div>
        </div>
        <div className="userachieve-box">
          <div className="userarchieve-reviewpic">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="userreview-text">
            <h2>mihaiconstantin</h2>
            <div className="reviewgiven-country">
              <img src={bangladeshimg} alt="bangladesh" />
              <h3>Bangladesh</h3>
            </div>
            <div className="review-starcount">
              <div className="reviewstar">
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaStar color="#358293" />
                <FaRegStar />
              </div>
              <h4>2 months ago</h4>
            </div>
            <p>
              We agreed on a home page and working contact page with mail form.
              Mail form was not working. When asked how to set up, seller said
              will revert next day. Did not revert for 3 days. Then still no
              proper solution. I had to make it work on my own... See more
            </p>
            <div className="parchased-infobox">
              <h3>Purchased:</h3>
              <Link>Convert HTML</Link>
            </div>
          </div>
        </div>
        {/* --------------------user review button----------------- */}
        <div className="addreview">
          <button>Show more reviews</button>
          <button>Add Review</button>
        </div>
      </div>

      {/* ----------------------user-achienve------------------------ */}
    </div>
  );
};

export default Publicachieve;
