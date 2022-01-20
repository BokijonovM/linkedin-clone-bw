import React from "react";
import { Row, Col } from "react-bootstrap";
import EditAddProfile from "./EditAddProfile";
import PeopleViewed from "./PeopleViewed";
import PeopleKnow from "./PeopleKnow";

function Sidebar() {
  return (
    <div>
      {/* <Row className="d-block-flex mr-5  ">
        <Col className="mt-5"> */}
      <aside>
        {" "}
        <EditAddProfile />
        <PeopleViewed />
        <PeopleKnow />
      </aside>
      {/* </Col>
      </Row> */}
    </div>
  );
}

export default Sidebar;
