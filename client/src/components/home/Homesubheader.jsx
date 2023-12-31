import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/home/Homesubheader.css";
import "../../styles/dashboard/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const Homesubheader = () => {
  const [linkindex, setlinkindex] = useState();
  const [activetab, setactivetab] = useState(1);
  const [activemodal, setactivemodal] = useState(false);
  //   toggletab function
  function toggletab(index) {
    setactivetab(index);
  }
  const onOpenModal = () => {
    setactivemodal(true);
  };
  const onCloseModal = () => {
    setactivemodal(false);
  };
  function setindex(index) {
    setactivetab(index);
    setlinkindex(index);
    setactivemodal(true);
  }
  return (
    <>
      <div className="homesub-header">
        <ul>
          <li
            onClick={() => {
              setindex(2);
            }}
          >
            <NavLink to="">Services</NavLink>
          </li>
          <li
            onClick={() => {
              setindex(3);
            }}
          >
            <NavLink to="">Jobs</NavLink>
          </li>
          <li
            onClick={() => {
              setindex(4);
            }}
          >
            <NavLink to="">Consultant</NavLink>
          </li>
          <li
            onClick={() => {
              setindex(5);
            }}
          >
            <NavLink to="">Training</NavLink>
          </li>
          <li
            onClick={() => {
              setindex(6);
            }}
          >
            <NavLink to="">Products</NavLink>
          </li>
          <li
            onClick={() => {
              setindex();
            }}
          >
            <NavLink to="">People</NavLink>
          </li>
          <li
            onClick={() => {
              setindex(7);
            }}
          >
            <NavLink to="">Q&A</NavLink>
          </li>
        </ul>
        <div className="sub-btn">
          <button>Earn Money</button>
        </div>
      </div>
      {/* --------------------modalbox----------------------- */}
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
                    <input type="text" placeholder="Fees" name="servicename" />
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
    </>
  );
};

export default Homesubheader;
