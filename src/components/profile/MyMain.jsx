import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import "./Style/profile.css";
function MyMain() {
  return (
    <div>
      {/* <Container> */}
      <Row
        className="justify-content-center"
        style={{ backgroundColor: "rgb(243,242,238)" }}
      >
        <Col sm={10} lg={8}>
          <Main />
        </Col>
        <Col sm={2} lg={4}>
          <Sidebar />
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default MyMain;
