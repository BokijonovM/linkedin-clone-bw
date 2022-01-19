import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import "./style/profile.css";
function MyMain({ setUserOnNav, setUserPic, userPic }) {
  return (
    <div
      className="myMain-first-div"
      style={{ backgroundColor: "rgb(243,242,238)" }}
    >
      {/* <Container> */}
      <Row
        className="justify-content-center mt-4"
        style={{
          marginLeft: "-80px",
          marginRight: "-100px",
        }}
      >
        <Col sm={10} lg={7}>
          <Main
            setUserOnNav={setUserOnNav}
            setUserPic={setUserPic}
            userPic={userPic}
          />
        </Col>
        <Col sm={0} md={3} lg={3}>
          <Sidebar />
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default MyMain;
