import React from "react";
import { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavDropdown({ userOnNav, userPic }) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      style={{ color: "black" }}
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          {/* <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={e => setValue(e.target.value)}
            value={value}
          /> */}
          {userOnNav && (
            <div className="p-3">
              <p className="h5">
                {" "}
                {userOnNav.name} {userOnNav.surname}
              </p>
              <p>{userOnNav.bio}</p>
            </div>
          )}
          <div className="mx-3 d-flex justify-content-center">
            {/* <Button
              className="mx-n5 w-100 py-0"
              variant="outline-primary"
              style={{
                borderRadius: "99px",
              }}
            >
              View Profile
            </Button> */}

            <Button
              className="mx-n5 w-100 py-0 d-flex"
              variant="outline-primary"
              style={{
                borderRadius: "99px",
              }}
            >
              <a href="/profile" className="view-profile-a">
                View Profile
              </a>
            </Button>
          </div>
          <hr />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              child =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Dropdown alignRight>
      <Dropdown.Toggle
        alignRight
        as={CustomToggle}
        id="dropdown-custom-components"
        style={{ color: "black !important" }}
      >
        Me
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: "240px" }} as={CustomMenu} alignRight>
        <Dropdown.Item eventKey="1" style={{ fontWeight: "700" }}>
          Account
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">Setting & Privacy</Dropdown.Item>
        <Dropdown.Item eventKey="3">Help</Dropdown.Item>
        <Dropdown.Item eventKey="4">Language</Dropdown.Item>
        <hr />
        <Dropdown.Item eventKey="5" style={{ fontWeight: "700" }}>
          Manage
        </Dropdown.Item>
        <Dropdown.Item eventKey="6">Post Activity</Dropdown.Item>
        <Dropdown.Item eventKey="7">job Posting Account</Dropdown.Item>
        <hr />
        <Dropdown.Item eventKey="8">Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  //   return <div></div>;
}

export default NavDropdown;
