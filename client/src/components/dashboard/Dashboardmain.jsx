import React, { useState } from "react";
import "../../styles/dashboard/Dashboardmain.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { TbShare3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import Dashboardfilter from "./Dashboardfilter";
import "../../styles/dashboard/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Searchfooter from "../footer/Searchfooter";
const Dashboardmain = () => {
  const [activetab, setactivetab] = useState(1);
  const [activemodal, setactivemodal] = useState(false);
  function toggletab(index) {
    setactivetab(index);
  }
  const onOpenModal = () => {
    setactivemodal(true);
  };
  const onCloseModal = () => {
    setactivemodal(false);
  };
  return (
    <div className="dashboard-section">
      {/* ------------------------dashboard-top-------------------- */}
      <div className="dashboardtop-section">
        <div className="dashboard-profile">
          <div className="user-status">
            <p>Online</p>
          </div>
          <div className="mainprofile-pic">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="dahuserprofile-info">
            <h1>A K M Sazzadul Alam</h1>
            <h2>Electrician | Plumber</h2>
            <p>Uttara, Dhaka, Bangladesh</p>
            <button>Message</button>
          </div>
          <div className="profilerating">
            <div className="review-completestar">
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaStar color="#358293" />
              <FaRegStar />
            </div>
            <p>(Rating)</p>
          </div>
          <div className="varify-count">
            <p>Varified</p>
            <div className="varified-bar">
              <div className="varified-subbar">75%</div>
            </div>
          </div>
          <div className="joined-text">
            <p>Joined 2023 </p>
          </div>
          <div className="profile-contactinfo">
            <div className="profile-contactinfobox">
              <p>
                <Link>Contact info</Link>
              </p>
              <div className="follower-count">
                <button className="followsercount1">Follow</button>
                <p>500+ Follwers</p>
              </div>
            </div>
            <div className="profile-contactinfobox">
              <p>
                <Link>Transiction info</Link>
              </p>
              <div className="follower-count">
                <button className="followsercount2">Connect</button>
                <p>300+ Connectors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-servicesection">
          {/* -------------modal---------------- */}

          <div className="modal-main">
            <Modal
              open={activemodal}
              onClose={onCloseModal}
              center
              classNames={{ modal: "customModal" }}
            >
              <div className="modal-box">
                <div className="modal-text">
                  <h1>Add Something</h1>
                  {/* <button>
                <AiOutlineClose />
              </button> */}
                </div>
                <div className="modalbox-filter">
                  <div className="modalbox-propic">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className="modalbox-filterbtn">
                    <h2>A K M Sazzadul Alam</h2>
                    <ul>
                      <li className={activetab === 1 ? "activetab" : ""}>
                        <button
                          onClick={() => {
                            toggletab(1);
                          }}
                        >
                          Post
                        </button>
                      </li>
                      <li className={activetab === 2 ? "activetab" : ""}>
                        <button
                          onClick={() => {
                            toggletab(2);
                          }}
                        >
                          Service
                        </button>
                      </li>

                      <li className={activetab === 3 ? "activetab" : ""}>
                        <button
                          onClick={() => {
                            toggletab(3);
                          }}
                        >
                          Job
                        </button>
                      </li>
                      <li className={activetab === 4 ? "activetab" : ""}>
                        <button
                          onClick={() => {
                            toggletab(4);
                          }}
                        >
                          Consultancy
                        </button>
                      </li>
                      <li className={activetab === 5 ? "activetab" : ""}>
                        <button
                          onClick={() => {
                            toggletab(5);
                          }}
                        >
                          Training
                        </button>
                      </li>
                      <li className={activetab === 6 ? "activetab" : ""}>
                        <button
                          onClick={() => {
                            toggletab(6);
                          }}
                        >
                          Product
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* --------------------modal-contentbox-main------------------ */}
                <div className="modal-contentbox-main">
                  <div
                    className={
                      activetab === 1
                        ? "modalcontent-box activefilter"
                        : "modalcontent-box"
                    }
                  >
                    <div className="postuploader-box">
                      <div className="postinp-field">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="What's on your mind ?"
                        ></textarea>
                      </div>
                      <div className="postadd-method">
                        <div className="post-item">
                          <button>
                            <AiOutlinePicture />
                          </button>
                          <button>
                            <FaVideo />
                          </button>
                          <button>
                            <IoPricetag />
                          </button>
                          <button>
                            <IoIosColorPalette />
                          </button>
                        </div>
                        <div className="upload-lettercount">
                          <p>0/250</p>
                        </div>
                      </div>
                    </div>
                    <div className="modalpost-button">
                      <button>Post</button>
                    </div>
                  </div>
                  <div
                    className={
                      activetab === 2
                        ? "modalcontent-box activefilter"
                        : "modalcontent-box"
                    }
                  >
                    <div className="postuploader-box">
                      <div className="postinp-allfield">
                        <input
                          type="text"
                          placeholder="Service name"
                          name="servicename"
                        />
                        <br />
                        <textarea
                          name="description"
                          id="description"
                          placeholder="Description"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="postadd-method">
                        <div className="post-item">
                          <button>
                            <AiOutlinePicture />
                          </button>
                          <button>
                            <FaVideo />
                          </button>
                          <button>
                            <IoPricetag />
                          </button>
                          <button>
                            <IoIosColorPalette />
                          </button>
                        </div>
                        <div className="upload-lettercount">
                          <p>0/250</p>
                        </div>
                      </div>
                    </div>
                    <div className="modalpost-button">
                      <button>Post</button>
                    </div>
                  </div>
                  <div
                    className={
                      activetab === 3
                        ? "modalcontent-box activefilter"
                        : "modalcontent-box"
                    }
                  >
                    <div className="postuploader-box">
                      <div className="postinp-allfield">
                        <input
                          type="text"
                          placeholder="Company name"
                          name="servicename"
                        />
                        <br />
                        <input
                          type="text"
                          placeholder="Position"
                          name="servicename"
                        />
                        <br />
                        <input
                          type="text"
                          placeholder="Job location"
                          name="servicename"
                        />
                        <br />
                        <input
                          type="text"
                          placeholder="Requirements"
                          name="servicename"
                        />
                        <br />
                        <input
                          type="text"
                          placeholder="Salary"
                          name="servicename"
                        />
                        <br />
                        <textarea
                          name="description"
                          id="description"
                          placeholder="Description"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="postadd-method">
                        <div className="post-item">
                          <button>
                            <AiOutlinePicture />
                          </button>
                          <button>
                            <FaVideo />
                          </button>
                          <button>
                            <IoPricetag />
                          </button>
                          <button>
                            <IoIosColorPalette />
                          </button>
                        </div>
                        <div className="upload-lettercount">
                          <p>0/250</p>
                        </div>
                      </div>
                    </div>
                    <div className="modalpost-button">
                      <button>Post</button>
                    </div>
                  </div>
                  <div
                    className={
                      activetab === 4
                        ? "modalcontent-box activefilter"
                        : "modalcontent-box"
                    }
                  >
                    <div className="postuploader-box">
                      <div className="postinp-allfield">
                        <input
                          type="text"
                          placeholder="Consultancy name"
                          name="servicename"
                        />
                        <br />
                        <textarea
                          name="description"
                          id="description"
                          placeholder="Description"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="postadd-method">
                        <div className="post-item">
                          <button>
                            <AiOutlinePicture />
                          </button>
                          <button>
                            <FaVideo />
                          </button>
                          <button>
                            <IoPricetag />
                          </button>
                          <button>
                            <IoIosColorPalette />
                          </button>
                        </div>
                        <div className="upload-lettercount">
                          <p>0/250</p>
                        </div>
                      </div>
                    </div>
                    <div className="modalpost-button">
                      <button>Post</button>
                    </div>
                  </div>
                  {/* ------------------------training----------------------- */}
                  <div
                    className={
                      activetab === 5
                        ? "modalcontent-box activefilter"
                        : "modalcontent-box"
                    }
                  >
                    <div className="postuploader-box">
                      <div className="postinp-allfield">
                        <input
                          type="text"
                          placeholder="Topic name"
                          name="servicename"
                        />
                        <br />
                        <input
                          type="text"
                          placeholder="Time duration"
                          name="servicename"
                        />
                        <br />
                        <input
                          type="text"
                          placeholder="Fees"
                          name="servicename"
                        />
                        <br />

                        <textarea
                          name="description"
                          id="description"
                          placeholder="Description"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="postadd-method">
                        <div className="post-item">
                          <button>
                            <AiOutlinePicture />
                          </button>
                          <button>
                            <FaVideo />
                          </button>
                          <button>
                            <IoPricetag />
                          </button>
                          <button>
                            <IoIosColorPalette />
                          </button>
                        </div>
                        <div className="upload-lettercount">
                          <p>0/250</p>
                        </div>
                      </div>
                    </div>
                    <div className="modalpost-button">
                      <button>Post</button>
                    </div>
                  </div>
                  {/* --------------------product------------------ */}
                  <div
                    className={
                      activetab === 6
                        ? "modalcontent-box activefilter"
                        : "modalcontent-box"
                    }
                  >
                    <div className="postuploader-box">
                      <div className="postinp-allfield">
                        <input
                          type="text"
                          placeholder="Product name"
                          name="servicename"
                        />
                        <br />
                        <textarea
                          name="description"
                          id="description"
                          placeholder="Description"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="postadd-method">
                        <div className="post-item">
                          <button>
                            <AiOutlinePicture />
                          </button>
                          <button>
                            <FaVideo />
                          </button>
                          <button>
                            <IoPricetag />
                          </button>
                          <button>
                            <IoIosColorPalette />
                          </button>
                        </div>
                        <div className="upload-lettercount">
                          <p>0/250</p>
                        </div>
                      </div>
                    </div>
                    <div className="modalpost-button">
                      <button>Post</button>
                    </div>
                  </div>
                  {/* ---------------------product-------------------- */}
                </div>
                {/* --------------------modal-contentbox-main------------------ */}
              </div>
            </Modal>
          </div>
          {/* ----------------modal------------- */}
          <div className="dashboard-searchservicefield" onClick={onOpenModal}>
            <div className="prifilepic-service">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="serviceadd-filed">
              <input type="text" placeholder="Add Something..." />
              <button>Add</button>
            </div>
          </div>
          <div className="dashboard-servicepart2">
            <div className="dashboard-filterbtn">
              <button>
                <IoFilterSharp />
              </button>
            </div>
            <div className="dashboard-allproducts">
              <div className="dashboardproduct-box">
                <img
                  src="https://images.pexels.com/photos/3839265/pexels-photo-3839265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="productbox-allinfo">
                  <div className="productuploader-info">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <h3>A K M Sazzadul Alam</h3>
                  </div>
                  <p>
                    Professional Services is a leading HVAC and electrical ....
                  </p>
                  <div className="uploader-rating">
                    <i>
                      <FaStar />
                    </i>
                    <p>
                      5.0 <span>(10)</span>
                    </p>
                  </div>
                </div>
                <div className="product-spreadoption">
                  <div className="commentoptionbox">
                    <button>
                      <GrLike />
                    </button>
                    <button>
                      <TbShare3 />
                    </button>
                  </div>
                  <div className="commentoptionbox">
                    <button>
                      <GrMenu />
                    </button>
                  </div>
                </div>
              </div>
              <div className="dashboardproduct-box">
                <img
                  src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="productbox-allinfo">
                  <div className="productuploader-info">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <h3>A K M Sazzadul Alam</h3>
                  </div>
                  <p>
                    Professional Services is a leading HVAC and electrical ....
                  </p>
                  <div className="uploader-rating">
                    <i>
                      <FaStar />
                    </i>
                    <p>
                      5.0 <span>(10)</span>
                    </p>
                  </div>
                </div>
                <div className="product-spreadoption">
                  <div className="commentoptionbox">
                    <button>
                      <GrLike />
                    </button>
                    <button>
                      <TbShare3 />
                    </button>
                  </div>
                  <div className="commentoptionbox">
                    <button>
                      <GrMenu />
                    </button>
                  </div>
                </div>
              </div>
              <div className="dashboardproduct-box">
                <img
                  src="https://images.pexels.com/photos/3583877/pexels-photo-3583877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="productbox-allinfo">
                  <div className="productuploader-info">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <h3>A K M Sazzadul Alam</h3>
                  </div>
                  <p>
                    Professional Services is a leading HVAC and electrical ....
                  </p>
                  <div className="uploader-rating">
                    <i>
                      <FaStar />
                    </i>
                    <p>
                      5.0 <span>(10)</span>
                    </p>
                  </div>
                </div>
                <div className="product-spreadoption">
                  <div className="commentoptionbox">
                    <button>
                      <GrLike />
                    </button>
                    <button>
                      <TbShare3 />
                    </button>
                  </div>
                  <div className="commentoptionbox">
                    <button>
                      <GrMenu />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------dashboard-top-------------------- */}
      <div className="dashboardbottom-section">
        <Dashboardfilter />
      </div>
      {/* footer */}
      <Searchfooter />
    </div>
  );
};

export default Dashboardmain;
