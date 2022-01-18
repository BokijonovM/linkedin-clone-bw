import React from "react";
import { useState } from "react";
import { FormControl, Dropdown, Button } from "react-bootstrap";

function NavDropdown() {
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
          <div className="mx-3 d-flex justify-content-center">
            <Button
              className="mx-n5 w-100 py-0"
              variant="outline-primary"
              style={{
                borderRadius: "99px",
              }}
            >
              View Profile
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
        <Dropdown.Item eventKey="1">Language</Dropdown.Item>
        <hr />
        <Dropdown.Item eventKey="1" style={{ fontWeight: "700" }}>
          Manage
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">Post Activity</Dropdown.Item>
        <Dropdown.Item eventKey="2">job Posting Account</Dropdown.Item>
        <hr />
        <Dropdown.Item eventKey="1">Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  //   return <div></div>;
}

export default NavDropdown;