import React from "react";
import { Row, Col } from "react-bootstrap";
import EditAddProfile from "../EditAddProfile";
import PeopleViewed from "./PeopleViewed";
import "./SideBar.css";

function Sidebar() {
  return (
    <div>
      <Row className="d-block-flex mr-4  ">
        <Col className="col-3 bg-secondary ml-auto p-4">
          <aside>
            {" "}
            <EditAddProfile />
            <PeopleViewed />
            <PeopleViewed />
          </aside>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;
