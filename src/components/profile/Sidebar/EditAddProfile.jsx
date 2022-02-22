import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../Style/SideBar.css";

export default class EditAddProfile extends Component {
  render() {
    return (
      <>
        <Row className="ml-0 mr-0">
          <Col id="editComp">
            <div className="editDiv">
              <div className="d-flex align-items-center pt-2 mb-n1">
                <a className="text-dark font-weight-bolder" href="/">
                  Edit public profile & URL
                </a>
                <p className="first-span ml-auto px-2">?</p>
              </div>
              <hr />
              <div className="d-flex pb-2 align-items-center mt-n2">
                <a href="/" className="text-dark font-weight-bolder">
                  Add profile in another language
                </a>
                <p className="first-span ml-auto px-2">?</p>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
