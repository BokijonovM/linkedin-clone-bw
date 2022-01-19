import React from "react";
import MyNavbar from "./MyNavbar";
import { Row, Col, Container } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function MyMainFeed() {
  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="justify-content-center">
          <Col md={2}>
            <LeftSide />
          </Col>
          <Col className="px-4" md={7}>
            <NewsFeed />
          </Col>
          <Col md={3}>
            <RightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyMainFeed;
