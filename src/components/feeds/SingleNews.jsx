import React, { useEffect } from "react";
import { Row, Button, Modal, Form, Dropdown } from "react-bootstrap";
import "./style.css";
import { parseISO, format } from "date-fns";
// import PostDropDown from "./PostDropDown";
import { useState } from "react";
import { StylesContext } from "@material-ui/styles";

function SingleNews({ posts, fetchData }) {
  const [addPost, setAddPost] = useState(false);

  const showAddPost = () => setAddPost(true);
  const closeAddPost = () => setAddPost(false);

  const [postId, setPostId] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    setPostId(posts._id);
    setText(posts.text);
    console.log("from single post", posts._id);
  }, []);

  const handleDeletePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + postId,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY
            `,
          },
        }
      );

      if (response.ok) {
        setAddPost(false);
        fetchData();
      } else if (response.status === 401)
        alert("You Can not Delete others Posts");
      else {
        console.log("delete error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + postId,
        {
          method: "PUT",
          body: JSON.stringify({
            text: text,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY
            `,
          },
        }
      );
      if (response.status === 401) alert("you can not update others posts");
      if (response.ok) {
        closeAddPost();
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    showAddPost();
  };
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      style={{ color: "black" }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      {/* &#x25bc; */}
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
          <div className="mx-3 d-flex justify-content-center"></div>
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <div>
      <Row
        className=" start-post-div px-4 pt-4 pb-2 flex-column mb-2"
        style={{ width: "550px" }}
      >
        <div>
          <div className="d-flex flex-column">
            <div className="d-flex  flex-column">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="nav-profile-image-1"
                  src={posts.user.image}
                  alt=""
                ></img>
                <div className="ml-3">
                  <p
                    className="mb-n1 mt-n2"
                    style={{ fontSize: "14px", fontWeight: "600" }}
                  >
                    <a
                      href={"/OtherUser/" + posts.user._id}
                      style={{
                        color: "black",
                      }}
                    >
                      {posts.user.name} {posts.user.surname}
                    </a>
                    <i className="bi bi-dot"></i> 1st
                  </p>
                  <p className="mb-n1" style={{ fontSize: "12px" }}>
                    {posts.user.title}
                  </p>
                  <p className="mb-n1" style={{ fontSize: "10px" }}>
                    {format(parseISO(posts.updatedAt), "MMMM do yyyy | HH:mm")}
                    <i className="bi bi-dot"></i> <i class="bi bi-globe2"></i>
                  </p>
                </div>
                <div className="ml-auto d-flex align-items-center">
                  {/* <Button
                    onClick={showAddPost}
                    className="py-0 shadow-none"
                    size="sm"
                    variant="secondary"
                  >
                    Edit
                  </Button> */}
                  <Dropdown alignRight>
                    <Dropdown.Toggle
                      alignRight
                      as={CustomToggle}
                      id="dropdown-custom-components"
                      style={{ color: "black !important" }}
                    >
                      <i className="bi bi-three-dots single-post-three-dots"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{ width: "240px" }}
                      as={CustomMenu}
                      alignRight
                    >
                      <div className="post-dropdown">
                        <div
                          onClick={showAddPost}
                          className="d-flex align-items-center justify-content-between px-3 py-2 mx-2"
                        >
                          <i class="bi bi-pencil-square"></i>
                          <div>
                            <p
                              className="mb-0"
                              style={{ fontWeight: "600", fontSize: "12px" }}
                            >
                              Edit
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
                          <i class="bi bi-download"></i>
                          <div>
                            <p
                              className="mb-n1"
                              style={{ fontWeight: "600", fontSize: "12px" }}
                            >
                              Save
                            </p>
                            <p className="mb-0" style={{ fontSize: "10px" }}>
                              Save for later
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
                          <i class="bi bi-link"></i>
                          <div>
                            <p
                              className="mb-0"
                              style={{ fontWeight: "600", fontSize: "12px" }}
                            >
                              Copy link to post
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
                          <i class="bi bi-code-slash"></i>
                          <div>
                            <p
                              className="mb-n1"
                              style={{ fontWeight: "600", fontSize: "12px" }}
                            >
                              Embed this post
                            </p>
                            <p className="mb-0" style={{ fontSize: "10px" }}>
                              Copy and Paste embed to you site
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
                          <i class="bi bi-flag-fill"></i>
                          <div>
                            <p
                              className="mb-n1"
                              style={{ fontWeight: "600", fontSize: "12px" }}
                            >
                              Report this post
                            </p>
                            <p className="mb-0" style={{ fontSize: "10px" }}>
                              I don't want to see this post
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
                          <i class="bi bi-ui-radios"></i>
                          <div>
                            <p
                              className="mb-n1"
                              style={{ fontWeight: "600", fontSize: "12px" }}
                            >
                              Improve my feed
                            </p>
                            <p className="mb-0" style={{ fontSize: "10px" }}>
                              Get recommended source to follow
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
                          <i class="bi bi-eye-fill"></i>
                          <div>
                            <p
                              className="mb-n1"
                              style={{ fontWeight: "600", fontSize: "12px" }}
                            >
                              Who can see that post?
                            </p>
                            <p className="mb-0" style={{ fontSize: "10px" }}>
                              Visible to anyone on or off LinkedIn
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div>
                <p className="w-100">{posts.text}</p>
              </div>
              <div>
                <hr />
                <div className="d-flex justify-content-between px-2 like-comment-share-save">
                  <p
                    onClick={() => {
                      var x = document
                        .querySelectorAll(".bi-hand-thumbs-up")
                        .forEach((item) => {
                          item.style.color = "blue";
                        });

                      // for (let i = 0; i < x.length; i++) {
                      //   x[i].style.color = "blue";
                      // }
                    }}
                  >
                    <i
                      id="bi-hand-thumbs-up"
                      class="bi bi-hand-thumbs-up mr-2"
                      style={{ color: "grey", fontSize: "20px" }}
                    ></i>
                    Like
                  </p>
                  <p>
                    <i
                      class="bi bi-chat-dots mr-2"
                      style={{ color: "grey", fontSize: "20px" }}
                    ></i>
                    Comment
                  </p>
                  <p>
                    <i
                      style={{ color: "grey", fontSize: "20px" }}
                      class="bi bi-arrow-return-right mr-2"
                    ></i>
                    Share
                  </p>
                  <p>
                    <i
                      style={{ color: "grey", fontSize: "20px" }}
                      class="bi bi-send-fill mr-2"
                    ></i>
                    Send
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Modal show={addPost} onHide={closeAddPost}>
        <Modal.Dialog className="w-100 border-0 px-3">
          <Modal.Header closeButton>
            <Modal.Title>
              Updated Post of
              <a
                href={"/OtherUser/" + posts.user._id}
                style={{
                  color: "black",
                }}
              >
                {" "}
                {posts.user.name} {posts.user.surname}
              </a>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>What do you want to talk about?</Form.Label>
                <Form.Control
                  className="w-100 shadow-none border-0"
                  as="textarea"
                  required
                  value={text}
                  // onChange={e => setPost(e.target.value)}
                  rows={4}
                  onChange={(e) => setText(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-between px-3">
                <div className="d-flex justify-content-between align-items-center">
                  <i className="bi mr-2 bi-image-fill"></i>
                  <i className="bi mr-2 bi-youtube"></i>
                  <i className="bi mr-2 bi-calendar-event"></i>
                  <i className="bi mr-2 bi-briefcase-fill"></i>
                  <i className="bi mr-2 bi-patch-check-fill"></i>
                  <i className="bi mr-2 bi-bar-chart-line"></i>
                  <i className="bi mr-2 bi-three-dots"></i>
                </div>
                <div>
                  <Button
                    variant="danger"
                    className="shadow-none modal-post-btn-delete border-0"
                    onClick={handleDeletePost}
                  >
                    Delete
                  </Button>
                  <Button
                    className="shadow-none modal-post-btn border-0"
                    onClick={handleUpdatePost}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
export default SingleNews;
