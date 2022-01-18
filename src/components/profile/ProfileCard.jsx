import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { GrFormEdit, GrDocument } from "react-icons/gr";
import { RiShareForwardFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
class ProfileCard extends React.Component {
  state = {
    dropdown: "",
  };

  showDropdown = input => {
    if (this.state.dropdown === input) {
      this.setState({ dropdown: "" });
    } else {
      this.setState({ dropdown: input });
    }
  };
  render() {
    return (
      <div>
        <Card className="profile-card round-border">
          <div style={{ overflow: "hidden", borderRadius: "10px 10px 0 0" }}>
            <Card.Img
              variant="top"
              className="profile-banner-img"
              src={
                "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp"
              }
            />
          </div>
          <span className="edit-bg h4 round-hover">
            <GrFormEdit />
          </span>
          <Card.Body>
            <img
              className="profile-pic"
              src="https://miro.medium.com/max/1400/1*yIxkX8nAZkBxDP0gTjNrog.jpeg"
              alt="linkedin user"
            />
            <span className="h3 edit-bg-img text-primary dRelative">
              <GrFormEdit />
            </span>
            <Card.Text className="mt-5">
              <p className="h2 bold">Strive School</p>
              <p>
                Loading….Full Stack Developer||Front End ||Back End ||Javascript
                Developer||React.js Developer||Bootstrap||HTML||CSS Strive
                School Lisbon, Lisbon, Portugal{" "}
                <span className="h6 bold blue-link">Contact info</span>
              </p>
              <p>
                <span className="h6 bold blue-link">96 Connections</span>
              </p>
              <div>
                <Button
                  onClick={e => this.showDropdown(e.target.innerText)}
                  className="h6 bold rounded-btn shadow-none"
                  style={{ backgroundColor: "rgb(9, 79, 168)" }}
                >
                  Open to
                </Button>
                <Button
                  onClick={e => this.showDropdown(e.target.innerText)}
                  variant="outline-secondary"
                  className="h6 bold rounded-btn ml-2 shadow-none"
                >
                  Add Section
                </Button>
                <Button
                  onClick={e => this.showDropdown(e.target.innerText)}
                  variant="outline-secondary"
                  className="h6 bold rounded-btn ml-2 shadow-none"
                >
                  More
                </Button>
              </div>
              <div className="pRelative">
                <div
                  id="drop-open"
                  className="grey-border"
                  style={{
                    display:
                      this.state.dropdown === "Open to" ? "block" : "none",
                    borderRadius: "0 10px 10px 10px",
                  }}
                >
                  <div>
                    <p className="h6"> Hiring</p>
                    <p>
                      Share that you’re hiring and attract qualified candidates
                    </p>
                  </div>
                  <div>
                    <p className="h6"> Providing services</p>
                    <p>
                      Showcase services you offer so new clients can discover
                      you
                    </p>
                  </div>
                </div>
                <div
                  id="drop-selection"
                  className="grey-border"
                  style={{
                    display:
                      this.state.dropdown === "Add Section" ? "block" : "none",
                    borderRadius: "10px 10px 10px 10px",
                  }}
                >
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between">
                      <span>Info</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </li>
                    <hr />
                    <li className="d-flex justify-content-between">
                      <span>About</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </li>
                    <hr />
                    <li className="d-flex justify-content-between">
                      <span>Featured</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </li>
                    <hr />
                    <li className="d-flex justify-content-between">
                      <span>Background</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </li>
                    <hr />
                    <li className="d-flex justify-content-between">
                      <span>Skill</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </li>
                    <hr />
                    <li className="d-flex justify-content-between">
                      <span>Accomplishments</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </li>
                    <hr />
                    <li className="d-flex justify-content-between">
                      <span>Aditional Information</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </li>
                    <hr />
                    <li className="d-flex justify-content-between">
                      <span>Supported Languages</span>
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </li>
                  </ul>
                </div>

                <div
                  id="drop-selection"
                  className="grey-border "
                  style={{
                    display: this.state.dropdown === "More" ? "block" : "none",
                    borderRadius: "10px 0 10px 10px",
                  }}
                >
                  <ul className="list-unstyled">
                    <li>
                      <span className="mx-3">
                        <RiShareForwardFill />
                      </span>
                      <span>Share Profile in a message</span>
                    </li>
                    <li>
                      <span className="mx-3">
                        <FiDownload />
                      </span>
                      <span className="text-left">Save to pdf</span>
                    </li>
                    <li>
                      <span className="mx-3">
                        <GrDocument />
                      </span>
                      <span>Build a resume</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="mt-3 round-border py-1 px-3"
                style={{
                  backgroundColor: "rgb(232,229,223)",
                  fontSize: "14px",
                }}
              >
                <div className="m-0 p-0 d-flex justify-content-between">
                  <span className="bold">Open to work</span>
                  <span className="h4 round-hover">
                    <GrFormEdit />
                  </span>
                </div>
                <div>
                  <p className="bold">
                    {" "}
                    Javascript Developer, Frontend Developer, Back End
                    Developer, Web Developer and React Developer roles
                    <br /> <span className="h6 blue-link">See all details</span>
                  </p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;
