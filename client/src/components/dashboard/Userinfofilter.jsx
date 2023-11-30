import React, { useState } from "react";
import "../../styles/dashboard/Userinfofilter.css";
import auditorimg from "../../assets/auditor.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import Userachieve from "./Userachieve";
const Userinfofilter = () => {
  const [activetab, setactivetab] = useState(1);
  //   toggletab function
  function toggletab(index) {
    setactivetab(index);
  }
  return (
    <div className="userinfo-filter-main">
      {/* --------------------userinfofilterbox1-------------------- */}
      <div className="userinfofilterbox1">
        <div className="userinfofilter-btn">
          <ul>
            <li className={activetab === 1 ? "activetab" : ""}>
              <button
                onClick={() => {
                  toggletab(1);
                }}
              >
                Education
              </button>
            </li>
            <li className={activetab === 2 ? "activetab" : ""}>
              <button
                onClick={() => {
                  toggletab(2);
                }}
              >
                Skill
              </button>
            </li>

            <li className={activetab === 3 ? "activetab" : ""}>
              <button
                onClick={() => {
                  toggletab(3);
                }}
              >
                Experiance
              </button>
            </li>
            <li className={activetab === 4 ? "activetab" : ""}>
              <button
                onClick={() => {
                  toggletab(4);
                }}
              >
                Records
              </button>
            </li>
            <li className={activetab === 5 ? "activetab" : ""}>
              <button
                onClick={() => {
                  toggletab(5);
                }}
              >
                interest
              </button>
            </li>
            <li className={activetab === 6 ? "activetab" : ""}>
              <button
                onClick={() => {
                  toggletab(6);
                }}
              >
                About
              </button>
            </li>
          </ul>
        </div>
        {/* -------------------------userinfofilter-------------------- */}
        <div className="userinfo-contentmain">
          <div
            className={
              activetab === 1
                ? "userinfo-contentbox activefilter"
                : "userinfo-contentbox"
            }
          >
            <h1>Education</h1>
            <div className="usercontent-data">
              <img
                src="https://i.pinimg.com/474x/15/3a/d9/153ad9ab7acca6191d316d73aaff57cc.jpg"
                alt=""
              />
              <div className="usercontent-datatext">
                <h2>Bangladesh University of Engineering and Technology</h2>
                <h3>
                  Bachelor of Science, Electric and Electronic Engineering
                </h3>
                <p>2019-2023</p>
              </div>
            </div>
            <div className="usercontent-data">
              <img
                src="https://i.pinimg.com/474x/15/3a/d9/153ad9ab7acca6191d316d73aaff57cc.jpg"
                alt=""
              />
              <div className="usercontent-datatext">
                <h2>Bangladesh University of Engineering and Technology</h2>
                <h3>
                  Bachelor of Science, Electric and Electronic Engineering
                </h3>
                <p>2019-2023</p>
              </div>
            </div>
            <div className="usercontent-data">
              <img
                src="https://i.pinimg.com/474x/15/3a/d9/153ad9ab7acca6191d316d73aaff57cc.jpg"
                alt=""
              />
              <div className="usercontent-datatext">
                <h2>Bangladesh University of Engineering and Technology</h2>
                <h3>
                  Bachelor of Science, Electric and Electronic Engineering
                </h3>
                <p>2019-2023</p>
              </div>
            </div>
            <div className="all-eduinfo">
              <button>View All</button>
            </div>
          </div>
          {/* ------------------------skill box---------------------- */}
          <div
            className={
              activetab === 2
                ? "userinfo-contentbox activefilter"
                : "userinfo-contentbox"
            }
          >
            <h1>Skill</h1>
            <div className="skill-contentmain">
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-more">
                <button>
                  Show all 10 skills <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------experiance------------------------- */}
          <div
            className={
              activetab === 3
                ? "userinfo-contentbox activefilter"
                : "userinfo-contentbox"
            }
          >
            <h1>Experiance</h1>
            <div className="experaince-contentmain">
              <div className="experiance-contentbox">
                <img
                  src="https://1.bp.blogspot.com/-b033o_yMrlA/Xei8X3qBWkI/AAAAAAAAEXs/Jb8PP9bzPD4p4L8y0x0kJsiU9oVCs6GbwCLcBGAsYHQ/s1600/Abdul%2BKadir%2BMollah%2BCity%2BCollege%2BLogo.png"
                  alt=""
                />
                <div className="experiance-contentinfo">
                  <h2>Auditor</h2>
                  <p>
                    Intertek Bangladesh · Full-time Nov 2022 - Present · 1 yr
                  </p>
                  <p>Skills: Auditing · Assurance Services</p>
                </div>
              </div>
              <div className="experiance-contentbox">
                <img
                  src="https://1.bp.blogspot.com/-b033o_yMrlA/Xei8X3qBWkI/AAAAAAAAEXs/Jb8PP9bzPD4p4L8y0x0kJsiU9oVCs6GbwCLcBGAsYHQ/s1600/Abdul%2BKadir%2BMollah%2BCity%2BCollege%2BLogo.png"
                  alt=""
                />
                <div className="experiance-contentinfo">
                  <h2>Auditor</h2>
                  <p>
                    Intertek Bangladesh · Full-time Nov 2022 - Present · 1 yr
                  </p>
                  <p>Skills: Auditing · Assurance Services</p>
                </div>
              </div>
              <div className="experiance-contentbox">
                <img
                  src="https://1.bp.blogspot.com/-b033o_yMrlA/Xei8X3qBWkI/AAAAAAAAEXs/Jb8PP9bzPD4p4L8y0x0kJsiU9oVCs6GbwCLcBGAsYHQ/s1600/Abdul%2BKadir%2BMollah%2BCity%2BCollege%2BLogo.png"
                  alt=""
                />
                <div className="experiance-contentinfo">
                  <h2>Auditor</h2>
                  <p>
                    Intertek Bangladesh · Full-time Nov 2022 - Present · 1 yr
                  </p>
                  <p>Skills: Auditing · Assurance Services</p>
                </div>
              </div>
              <div className="all-eduinfo">
                <button>View All</button>
              </div>
            </div>
          </div>
          {/* ------------------------skill box---------------------- */}
          <div
            className={
              activetab === 4
                ? "userinfo-contentbox activefilter"
                : "userinfo-contentbox"
            }
          >
            <h1>Records</h1>
            <div className="skill-contentmain">
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-more">
                <button>
                  Show all 10 skills <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          {/* ------------------------skill box---------------------- */}
          <div
            className={
              activetab === 5
                ? "userinfo-contentbox activefilter"
                : "userinfo-contentbox"
            }
          >
            <h1>Interest</h1>
            <div className="skill-contentmain">
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skillcontent-box">
                <h2>Auditing</h2>
                <div className="skill-contentinfo-main">
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                  <div className="skill-contentinfo">
                    <img src={auditorimg} alt="" />
                    <div className="skillinfo-text">
                      <p>Auditor at Intertek Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-more">
                <button>
                  Show all 10 skills <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          {/* ------------------------About box---------------------- */}
          <div
            className={
              activetab === 6
                ? "userinfo-contentbox activefilter"
                : "userinfo-contentbox"
            }
          >
            <h1>About</h1>
            <div className="about-textinfo">
              <p>
                Hi, I am Jameabir, a professional web designer & WordPress
                developer with 9+ years of experience with over 3000+ Orders
                completed on Fiverr, and have been serving the Fiverr community
                since 2014. You will get hand-typed, well-documented, SEO
                friendly and w3c validated with the latest bootstrap. Each site
                we develop is using the latest development principles and
                techniques to meet modern web standards. We specialize in HTML5,
                CSS/CSS3, Tailwindcss, BOOTSTRAP, JAVASCRIPT/JQUERY. Feel free
                to contact us, cheers!
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------------contentmain------------------- */}
      </div>
      {/* --------------------userinfofilterbox1-------------------- */}
      {/* --------------------user review record post section------------------------ */}
      <Userachieve />
      {/* --------------------user review record post section------------------------ */}
    </div>
  );
};

export default Userinfofilter;
