import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import "./style/profile.css";
function MyMain() {
  return (
    <div style={{ backgroundColor: "rgb(243,242,238)" }}>
      {/* <Container> */}
      <Row
        className="justify-content-center mt-4"
        
      >
        <Col sm={10} lg={7}>
          <Main />
        </Col>
        <Col sm={2} lg={3}>
          <Sidebar />
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default MyMain;
