import React, { useState, useEffect } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import DropAddSection from "../ProfileCardComponents/DropAddSection";
import DropMore from "../ProfileCardComponents/DropMore";
import DropOpenTo from "../ProfileCardComponents/DropOpenTo";
import "../Style/header.css";

function ExtraHeader({ profile }) {
  const [dropdown, setDropdown] = useState("");
  const [info, setInfo] = useState();
  const [pic, setPic] = useState();

  useEffect(() => {
    if (profile) {
      setInfo(profile);
      setPic(profile.image);
    }
  }, [profile]);

  const showDropdown = (input) => {
    if (dropdown === input) {
      setDropdown("");
    } else {
      setDropdown(input);
    }
  };

  return (
    <div>
      <Navbar className="px-5  py-1 extra-navbar" bg="light" expand="lg">
        <Navbar.Brand className="pl-5" href="#home">
          <img className="extra-nav-image" src={profile.image} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {profile && (
              <div>
                <p
                  className="mb-n1"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  {profile.name} {profile.surname}
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {profile.title}
                </p>
              </div>
            )}
          </Nav>
          <div className="pRelative pr-5">
            <Button
              className="py-1 extra-nav-button shadow-none"
              variant="outline-secondary"
              style={{ fontWeight: "600" }}
              onClick={(e) => showDropdown(e.target.innerText)}
            >
              More
            </Button>
            <Button
              className="py-1 extra-nav-button shadow-none mx-2"
              variant="outline-secondary"
              style={{ fontWeight: "600" }}
              onClick={(e) => showDropdown(e.target.innerText)}
            >
              Add Section
            </Button>
            <Button
              className="py-1 extra-nav-button shadow-none"
              variant="primary"
              style={{ fontWeight: "600" }}
              onClick={(e) => showDropdown(e.target.innerText)}
            >
              Open to
            </Button>
            <div>
              <div
                className="drop-open"
                style={{
                  display: dropdown === "Open to" ? "block" : "none",
                  borderRadius: "0 10px 10px 10px",
                  right: "40px",
                  top: "45px",
                }}
              >
                <DropOpenTo />
              </div>
              <div
                className="drop-selection"
                style={{
                  display: dropdown === "Add Section" ? "block" : "none",
                  borderRadius: "10px 10px 10px 10px",
                  right: "60px",
                  top: "45px",
                }}
              >
                <DropAddSection />
              </div>
              <div
                className="drop-more"
                style={{
                  display: dropdown === "More" ? "block" : "none",
                  borderRadius: "10px 0 10px 10px",
                  right: "120px",
                  top: "45px",
                }}
              >
                <DropMore />
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default ExtraHeader;
