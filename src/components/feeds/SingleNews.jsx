import React from "react";
import { Row, Button, Modal, Form } from "react-bootstrap";
import "./style.css";
import { parseISO, format } from "date-fns";
import PostDropDown from "./PostDropDown";
import { useState } from "react";

function SingleNews({ posts }) {
  const [addPost, setAddPost] = useState(false);

  const showAddPost = () => setAddPost(true);
  const closeAddPost = () => setAddPost(false);

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
                    {posts.user.name} {posts.user.surname}
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
                  <Button
                    onClick={showAddPost}
                    className="py-0"
                    size="sm"
                    variant="secondary"
                  >
                    Edit
                  </Button>
                  <PostDropDown />
                </div>
              </div>
              <div>
                <p className="w-100">{posts.text}</p>
              </div>
              <div>
                <hr />
                <div className="d-flex justify-content-between px-2 like-comment-share-save">
                  <p>
                    <i
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
            <Modal.Title>Updated Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>What do you want to talk about?</Form.Label>
                <Form.Control
                  className="w-100 shadow-none border-0"
                  as="textarea"
                  required
                  value={posts.text}
                  // onChange={e => setPost(e.target.value)}
                  rows={4}
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
                  <div
                    style={{ borderRight: "1px solid black", height: "30px" }}
                  ></div>
                  <i class="bi mx-2 bi-chat-dots"></i>
                  <i>Anyone</i>
                </div>
                <Button
                  // onClick={addPostFunction}
                  className="shadow-none modal-post-btn border-0"
                  // disabled={!post}
                >
                  Save
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
export default SingleNews;
