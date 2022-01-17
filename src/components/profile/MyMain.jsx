import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Row, Col } from "react-bootstrap";

function MyMain() {
  return (
    <div>
      <Row>
        <Col md={9}>
          <Main />
        </Col>
        <Col md={3}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default MyMain;
