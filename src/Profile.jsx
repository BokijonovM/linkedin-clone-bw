import React from "react";
import { Row } from "react-bootstrap";
import Header from "./components/profile/Header";
import Footer from "./components/profile/Footer";
import MyMain from "./components/profile/MyMain";

function Profile() {
  return (
    <div>
      <Row>
        <Header />
      </Row>
      <Row>
        <MyMain />
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}

export default Profile;
