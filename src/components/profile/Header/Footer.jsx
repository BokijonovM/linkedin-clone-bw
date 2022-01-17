import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "../style/header.css";
import logo from "./Logo.svg";

function Footer() {
  return (
    <div className="w-100 px-5" style={{ backgroundColor: "#f3f2ef" }}>
      <Row>
        <Col className="my-3">
          <img
            style={{
              width: "100px",
            }}
            src={logo}
            alt=""
          />
        </Col>
      </Row>
      <Row>
        <Col className="row-2-col">
          <p>
            <a href="#">About</a>
          </p>
          <p>
            <a href="#">Community Guidelines</a>
          </p>
          <p>
            <a href="#">
              Privacy & Terms <i class="bi bi-caret-down"></i>
            </a>
          </p>
          <p>
            <a href="#">Sales Solutions</a>
          </p>
          <p>
            <a href="#">Safety Center</a>
          </p>
        </Col>
        <Col className="row-2-col">
          <p>
            <a href="#">Accessibility</a>
          </p>
          <p>
            <a href="#">Careers</a>
          </p>
          <p>
            <a href="#">Add choice</a>
          </p>
          <p>
            <a href="#">Mobile</a>
          </p>
        </Col>
        <Col className="row-2-col">
          <p>
            <a href="#">Talent Solutions</a>
          </p>
          <p>
            <a href="#">Market Solutions</a>
          </p>
          <p>
            <a href="#">Advertising</a>
          </p>
          <p>
            <a href="#">Small Business</a>
          </p>
        </Col>
        <Col>
          <div className="d-flex">
            <i class="bi bi-question-circle-fill mt-1 pr-1"></i>
            <div>
              <p className="mb-n2">
                <a
                  style={{
                    fontSize: "14px",
                    color: "black",
                    fontWeight: "600",
                  }}
                  href="#"
                >
                  Questions
                </a>
              </p>
              <p>
                <a style={{ fontSize: "10px", color: "black" }} href="#">
                  Visit our Help Center.
                </a>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <i class="bi bi-gear-fill mt-1 mr-1"></i>
            <div>
              <p className="mb-n2">
                <a
                  style={{
                    fontSize: "14px",
                    color: "black",
                    fontWeight: "600",
                  }}
                  href="#"
                >
                  Manage your account and privacy
                </a>
              </p>
              <p>
                <a style={{ fontSize: "10px", color: "black" }} href="#">
                  Go to your Settings.
                </a>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label style={{ fontSize: "12px", color: "black" }}>
              Select Language
            </Form.Label>
            <Form.Control className="shadow-none" as="select">
              <option>English (English)</option>
              <option>Italian</option>
              <option>Polish</option>
              <option>Russian</option>
              <option>Uzbek</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            style={{
              fontSize: "12px",
            }}
            className="pb-3"
          >
            LinkedIn Corporation © 2022
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
