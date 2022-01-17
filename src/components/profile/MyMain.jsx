import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Row, Col } from "react-bootstrap";
import './Style/profile.css'
function MyMain() {
  return (
    <div>
      <Row className="justify-content-center">
        <Col md={7}>
          <Main />
        </Col>
        <Col md={2}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default MyMain;
