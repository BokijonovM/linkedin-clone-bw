import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import "../style/header.css";

function ExtraHeader({userPic, userOnNav}) {
  return (
    <div>
      <Navbar className="px-5 py-0 extra-navbar" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            className="extra-nav-image"
            src={userPic}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div>
              {userOnNav && (<>
                <p
                className="mb-n1"
                style={{ fontSize: "14px", fontWeight: "600" }}
                >
                 {userOnNav.name} {userOnNav.surname}
              </p>
              <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
                {userOnNav.title}
              </p>
                  </>)}                 
            </div>
          </Nav>
          <div>
            <Button
              className="py-1 extra-nav-button shadow-none"
              variant="outline-secondary"
              style={{ fontWeight: "600" }}
            >
              More
            </Button>
            <Button
              className="py-1 extra-nav-button shadow-none mx-2"
              variant="outline-secondary"
              style={{ fontWeight: "600" }}
            >
              Add Section
            </Button>
            <Button
              className="py-1 extra-nav-button shadow-none"
              variant="primary"
              style={{ fontWeight: "600" }}
            >
              Open to
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default ExtraHeader;
