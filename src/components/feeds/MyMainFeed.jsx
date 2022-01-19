import React from "react";
import MyNavbar from "./MyNavbar";
import { Row, Col, Container } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function MyMainFeed({ profile }) {
  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="justify-content-center">
          <Col md={3}>{profile && <LeftSide profile={profile} />}</Col>
          <Col md={6}>
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
