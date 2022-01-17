import React from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import "./style/header.css";

function Header() {
  return (
    <div className="w-100">
      <Navbar className="px-5 py-0" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <i
            style={{
              fontSize: "35px",
              color: "#0a66c2",
            }}
            class="bi bi-linkedin"
          ></i>
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 shadow-none"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto icons-hover-needed">
            <div className="d-flex flex-column align-items-center mr-4">
              <i style={{ fontSize: "22px" }} class="bi bi-house-fill"></i>
              <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
                Home
              </p>
            </div>
            <div className="d-flex flex-column align-items-center mr-4">
              <i style={{ fontSize: "22px" }} class="bi bi-people-fill"></i>
              <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
                My Network
              </p>
            </div>
            <div className="d-flex flex-column align-items-center mr-4">
              <i style={{ fontSize: "22px" }} class="bi bi-briefcase-fill"></i>
              <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
                Jobs
              </p>
            </div>
            <div className="d-flex flex-column align-items-center mr-4">
              <i style={{ fontSize: "22px" }} class="bi bi-chat-dots-fill"></i>
              <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
                Messaging
              </p>
            </div>
            <div className="d-flex flex-column align-items-center mr-4">
              <i style={{ fontSize: "22px" }} class="bi bi-bell-fill"></i>
              <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
                Notifications
              </p>
            </div>
            <div className="d-flex flex-column align-items-center mr-5">
              <i style={{ fontSize: "22px" }} class="bi bi-person-circle"></i>
              <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
                Me<i class="bi bi-caret-down-fill"></i>
              </p>
            </div>
            <div style={{ borderRight: "1px solid black" }}></div>
          </Nav>
          <Nav className="ml-5 icons-hover-needed">
            <div className="d-flex flex-column align-items-center mr-3">
              <i
                style={{ fontSize: "22px" }}
                class="bi bi-grid-3x3-gap-fill"
              ></i>
              <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
                Work<i class="bi bi-caret-down-fill"></i>
              </p>
            </div>
            <div className="d-flex flex-column align-items-center mr-3">
              <p
                style={{ fontSize: "12px", color: "#915907" }}
                className="mb-0 mb-n1 mt-1"
              >
                Reactive
              </p>
              <p
                style={{ fontSize: "12px", color: "#915907" }}
                className="mb-0"
              >
                Premium
              </p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
