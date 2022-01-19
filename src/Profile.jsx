import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Header from "./components/profile/Header/Header";
import Footer from "./components/profile/Header/Footer";
import MyMain from "./components/profile/MyMain";

function Profile({ setUserOnNav, setUserPic, userPic, userOnNav }) {
  return (
    <div>
      <Row className="header-row-profile">
        <Header userOnNav={userOnNav} userPic={userPic} />
      </Row>
      <Row className="profile-myMain-row">
        <MyMain
          setUserOnNav={setUserOnNav}
          setUserPic={setUserPic}
          userPic={userPic}
        />
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}

export default Profile;
