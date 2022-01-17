import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Row, Col } from "react-bootstrap";
import './Style/profile.css'
function MyMain() {
  return (
    <div>
      <Row className="justify-content-center" style={{backgroundColor:'rgb(243,242,238)'}}>
        <Col sm={10} lg={7}>
          <Main />
        </Col>
        <Col lg={2}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default MyMain;
