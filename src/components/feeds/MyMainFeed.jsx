import React from "react";
import MyNavbar from "./MyNavbar";
import { Row, Col, Container } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "./Footer";
import MyHeaderMain from "../profile/Header/MyHeaderMain";

function MyMainFeed({ profile }) {
  return (
    <div>
      <MyHeaderMain profile={profile} />
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center" md={3}>
            {profile && <LeftSide profile={profile} />}
          </Col>
          <Col className="px-4" md={6}>
            <NewsFeed />
          </Col>
          <Col md={3}>
            <RightSide />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default MyMainFeed;
