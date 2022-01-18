import React from "react";
import { Row } from "react-bootstrap";
import Header from "./components/profile/Header/Header";
import Footer from "./components/profile/Header/Footer";
import MyMain from "./components/profile/MyMain";
import "./components/profile/SideBar.css";

function Profile() {
  return (
    <div>
      <Row className="header-row-profile">
        <Header />
      </Row>
      <Row className="profile-myMain-row">
        <MyMain />
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}

export default Profile;
