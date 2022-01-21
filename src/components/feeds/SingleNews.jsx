import React from "react";
import { Row, Button, Modal, Form } from "react-bootstrap";
import "./style.css";
import { parseISO, format } from "date-fns";
import PostDropDown from "./PostDropDown";
import { useState } from "react";

function SingleNews({ posts }) {
  const [addPost, setAddPost] = useState(false);
  const [selectedPostDetails, setSelectedPostDetails] = useState(null);

  const showAddPost = () => setAddPost(true);
  const closeAddPost = () => setAddPost(false);

  const [selectedPost, setSelectedPost] = useState([]);

  const handleDeletePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjZmYTczZDVjYjAwMTUzOTVhOWMiLCJpYXQiOjE2NDI2MDg5MjksImV4cCI6MTY0MzgxODUyOX0.D7vLV9VQO7-vFQO8smX7U6ny2zlx8PFwUwdvbb5ra0c
            `,
          },
        }
      );
      if (response.status === 401) alert("You Can not Delete others Posts");

      if (response.ok) {
        closeAddPost();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`,
        {
          method: "PUT",
          body: JSON.stringify({
            text: selectedPostDetails.text,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjZmYTczZDVjYjAwMTUzOTVhOWMiLCJpYXQiOjE2NDI2MDg5MjksImV4cCI6MTY0MzgxODUyOX0.D7vLV9VQO7-vFQO8smX7U6ny2zlx8PFwUwdvbb5ra0c
            `,
          },
        }
      );
      if (response.status === 401) alert("you can not update others posts");
      if (response.ok) {
        closeAddPost();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = id => {
    setSelectedPost(id);
    showAddPost();
  };

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
                  <Button
                    onClick={showAddPost}
                    className="py-0 shadow-none"
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
                  <p
                    onClick={() => {
                      var x = document
                        .querySelectorAll(".bi-hand-thumbs-up")
                        .forEach(item => {
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
                  value={posts.text}
                  // onChange={e => setPost(e.target.value)}
                  rows={4}
                  onChange={e =>
                    setSelectedPostDetails({
                      ...selectedPostDetails,
                      text: e.target.value,
                    })
                  }
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
