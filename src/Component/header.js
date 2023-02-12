import React, { useState } from "react";
import "./styling.css";
import logoImage from "./image/AI-logo.png";
import Modal from "react-modal";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import SelectCompanies from "./selectCompanies";
import SelectTopic from "./selectTopic";
import PreInterview from "./preInterview";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const App = (props) => {
  const [openModal, setopenModal] = useState(false);
  const [emailValue, setEmaiValue] = useState("");
  const [allSeats, setAllSeats] = useState([]);
  const [userData, setUserData] = useState({});
  const [activeIndex, setActiveIndex] = useState("1");
  const [company, setCompany] = useState("");
  const [topics, setTopics] = useState("");
  const [preference, setPreference] = useState("");

  const navigate = useNavigate();

  const giveActivePage = (ind) => {
    switch (ind) {
      case "1":
        return <FirstIndex changeActiveIndex={changeIndex} />;
      case "2":
        return (
          <SelectCompanies
            setCompany={setCompany}
            changeActiveIndex={changeIndex}
          />
        );
      case "3":
        return (
          <SelectTopic setTopics={setTopics} changeActiveIndex={changeIndex} />
        );
      case "4":
        return (
          <PreInterview
            setPreference={setPreference}
            navigateToPlayground={() =>
              navigate("interview", {
                state: {
                  company,
                  topics,
                },
              })
            }
            changeActiveIndex={changeIndex}
          />
        );
    }
  };

  console.log({ activeIndex });

  const changeIndex = (ind) => {
    // if (!userData.userName) {
    //   alert("please login first");
    //   return;
    // }

    setActiveIndex(ind);
  };

  return (
    <div className="mainContainer">
      <div className="row">
        {/* <img src={logoImage} alt="ticket booking" className="logo" /> */}

        <ul className="main-nav">
          <li>
            {!userData?.userName ? (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const userValue = jwt_decode(credentialResponse.credential);
                  //   console.log({ userValue });
                  setUserData({
                    userName: userValue?.given_name + userValue?.family_name,
                    email: userValue?.email,
                    profilePic: userValue?.picture,
                  });
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={userData?.profilePic}
                  alt="ticket booking"
                  className="logo"
                  style={{ height: 50, width: 50, backgroundColor: " red" }}
                />
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setopenModal(true);
                  }}
                  href="#"
                >
                  My account
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>

      <Modal style={customStyles} isOpen={openModal}>
        <div className="inputContainer">
          <div class="container__item">
            Name: {userData?.userName}
            <br />
            email: {userData?.email}
          </div>
          <div style={{ display: "flex", margin: "20px 0" }}>
            <a
              onClick={(e) => {
                e.preventDefault();
                setUserData({});
                setopenModal(false);
              }}
              className="btn btn-full"
              href=""
            >
              Logout{" "}
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setopenModal(false);
              }}
              className="btn btn-ghost"
              href="#"
            >
              Cancel{" "}
            </a>
          </div>
        </div>
      </Modal>

      <div className="hero-text-box">{giveActivePage(activeIndex)}</div>
    </div>
  );
};

const FirstIndex = ({ changeActiveIndex }) => {
  return (
    <div>
      <h1>
        {"Prepare your Interview with AI"}
        <br />
        Start Giving Interview any time
      </h1>
      {/* <a
          onClick={(e) => {
            e.preventDefault();
            props.referenceToPage("section1");
          }}
          className="btn btn-full"
          href=""
        >
          Select Companies{" "}
        </a> */}
      <a
        onClick={(e) => {
          e.preventDefault();
          changeActiveIndex("2");
        }}
        className="btn btn-ghost"
        href="#"
      >
        Start AI Interview{" "}
      </a>
    </div>
  );
};

export default App;
