import React, {useState} from "react";
import { Row } from "react-bootstrap";
import Header from "./components/profile/Header/Header";
import Footer from "./components/profile/Header/Footer";
import MyMain from "./components/profile/MyMain";

function Profile({profile}) {

  
  return (
    <div>
      <Row className="header-row-profile">
      <Header profile={profile}/>
      </Row>
      <Row className="profile-myMain-row">
        <MyMain profile={profile}/>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}

export default Profile;
