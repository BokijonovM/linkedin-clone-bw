import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./profile/Style/SideBar.css";

export default class EditAddProfile extends Component {
  render() {
    return (
      <>
        <Row className="ml-0 mr-0">
          <Col id="editComp">
            <div className="editDiv">
              <div className="d-flex pt-2">
                <a className="text-dark font-weight-bolder" href="/">
                  Edit public profile & URL
                </a>
                <span className="first-span ml-auto">?</span>
              </div>
              <hr />
              <div className="d-flex pb-2">
                <a href="/" className="text-dark font-weight-bolder">
                  Add profile in another language
                </a>
                <span className="first-span ml-auto">?</span>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
