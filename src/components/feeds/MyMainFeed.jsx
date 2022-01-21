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
      <Row className="header-row-myFeed">
        <MyHeaderMain profile={profile} />
      </Row>
      <Container className="pt-5">
        <Row xs={1} md={2} className="justify-content-center pt-4">
          <Col className="text-center" md={3}>
            {profile && <LeftSide profile={profile} />}
          </Col>
          <Col className="px-4 newFeed-main-line-col" md={6}>
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
