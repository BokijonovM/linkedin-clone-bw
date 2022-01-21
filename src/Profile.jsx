import React, { useState } from "react";
import { Row } from "react-bootstrap";
import MyHeaderMain from "./components/profile/Header/MyHeaderMain";
import Footer from "./components/profile/Header/Footer";
import MyMain from "./components/profile/MyMain";

function Profile({ profile, fetchProfile }) {
  return (
    <div>
      <Row className="header-row-profile">
        <MyHeaderMain profile={profile} />
      </Row>
      <Row className="profile-myMain-row">
        <MyMain fetchProfile={fetchProfile} profile={profile} />
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}

export default Profile;
