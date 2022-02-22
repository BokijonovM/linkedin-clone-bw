import React from "react";
import { Navbar, Form, FormControl, Nav, Badge } from "react-bootstrap";
import "../Style/header.css";
import NavDropdown from "./NavDropdown";
import NavWork from "./NavWork";
import ExtraHeader from "./ExtraHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

function MyHeaderMain({ profile }) {
  const [navbar, setNavbar] = useState(false);

  const extraHeader = () => {
    if (window.scrollY >= 380) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", extraHeader);
  return (
    <div style={{ width: "100%" }}>
      <Navbar className="px-5 py-0 navbar-profile " bg="light" expand="lg">
        <Navbar.Brand href="/">
          <i
            style={{
              fontSize: "35px",
              color: "#0a66c2",
            }}
            className="bi bi-linkedin pl-5"
          ></i>
        </Navbar.Brand>
        <Form inline className="form-main-nav">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 shadow-none"
          />
        </Form>

        <Nav className="ml-auto icons-hover-needed d-flex flex-row">
          <Link to="/">
            <div className="d-flex flex-column align-items-center mr-4">
              <i style={{ fontSize: "22px" }} className="bi bi-house-fill"></i>
              <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
                Home
              </p>
            </div>
          </Link>
          <div className="d-flex flex-column align-items-center mr-4 d-none-needed-network">
            <i style={{ fontSize: "22px" }} className="bi bi-people-fill"></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              My Network
            </p>
          </div>
          <div className="d-flex flex-column align-items-center pr-4 badge-required d-none-needed-jobs">
            <i
              style={{ fontSize: "22px" }}
              className="bi bi-briefcase-fill"
            ></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              Jobs
            </p>
            <Badge
              className="bg-danger"
              style={{
                color: "white",
              }}
              variant="danger"
            >
              1
            </Badge>
          </div>
          <div className="d-flex flex-column align-items-center mr-4">
            <i
              style={{ fontSize: "22px" }}
              className="bi bi-chat-dots-fill"
            ></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              Messaging
            </p>
          </div>
          <div className="d-flex flex-column align-items-center mr-4 badge-required-1">
            <i style={{ fontSize: "22px" }} className="bi bi-bell-fill"></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              Notifications
            </p>
            <Badge
              className="bg-danger"
              style={{
                color: "white",
              }}
              variant="danger"
            >
              99
            </Badge>
          </div>
          <div className="d-flex flex-column align-items-center ">
            {/* <i style={{ fontSize: "22px" }} className="bi bi-person-circle"></i> */}
            <Link to="/profile">
              <img
                className="nav-profile-image"
                src={profile.image}
                alt="profile pic"
              />
            </Link>
            <div style={{ fontSize: "12px" }} className="mb-0 mt-n1">
              <NavDropdown profile={profile} />
              {/* <i className="bi bi-caret-down-fill"></i> */}
            </div>
          </div>
          <div
            className="none-550-needed mx-5"
            style={{ borderRight: "1px solid black" }}
          ></div>
          <div className="d-flex flex-column align-items-center mr-3 nav-work-div">
            <i
              style={{ fontSize: "22px" }}
              className="bi bi-grid-3x3-gap-fill"
            ></i>
            <div style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              <NavWork />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center pr-5">
            <p
              style={{ fontSize: "12px", color: "#915907" }}
              className="mb-0 mb-n1 mt-1"
            >
              Reactive
            </p>
            <p style={{ fontSize: "12px", color: "#915907" }} className="mb-0 ">
              Premium
            </p>
          </div>
        </Nav>
      </Navbar>
      {profile && navbar ? (
        <ExtraHeader profile={profile} />
      ) : (
        <span style={{ width: "0px" }}></span>
      )}
    </div>
  );
}

export default MyHeaderMain;
