import React from "react";
import { Row, Col, Form, FormControl, Button, Modal } from "react-bootstrap";
import "./style.css";
import { useState, useEffect } from "react";
import SingleNews from "./SingleNews";
import Loader from "./Loader";

function NewsFeed({ setPostsAdded, data }) {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [addPost, setAddPost] = useState(false);
  const [post, setPost] = useState("");
  const showAddPost = () => setAddPost(true);
  const closeAddPost = () => setAddPost(false);

  const [postValue, setPostValue] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handlePostValue = e => {
    setPostValue(e.target.value);
    setSubmitted(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      closeAddPost();
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/ ",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjZmYTczZDVjYjAwMTUzOTVhOWMiLCJpYXQiOjE2NDI2MDg5MjksImV4cCI6MTY0MzgxODUyOX0.D7vLV9VQO7-vFQO8smX7U6ny2zlx8PFwUwdvbb5ra0c",
            },
          }
        );
        if (response.ok) {
          let dataRes = await response.json();

          setPosts(dataRes);
          setIsLoading(false);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const addPostFunction = async e => {
    e.preventDefault();
    closeAddPost();
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts`,
        {
          method: "POST",
          body: JSON.stringify({
            text: post,
          }),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjZmYTczZDVjYjAwMTUzOTVhOWMiLCJpYXQiOjE2NDI2MDg5MjksImV4cCI6MTY0MzgxODUyOX0.D7vLV9VQO7-vFQO8smX7U6ny2zlx8PFwUwdvbb5ra0c",
            "Content-type": "application/json",
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        // setPost(data.stringify());
      } else {
        console.error("fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Col className="d-flex flex-column align-items-center">
        <Row className="mt-2 start-post-div px-4 pt-4 pb-2 flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <img
              className="nav-profile-image-1 mr-3"
              src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <div>
              <Button
                onClick={showAddPost}
                className="button start-post-btn second-btn-outline w-100 shadow-none"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "270px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  textAlign: "left",
                  fontWeight: "normal",
                }}
              >
                Start a post
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-between px-4 mt-2 post-post-icons-div">
            <p>
              <i className="bi mr-2 bi-image-fill"></i>Photo
            </p>
            <p>
              <i className="bi mr-2 bi-youtube"></i>Video
            </p>
            <p>
              <i className="bi mr-2 bi-calendar-event"></i>Event
            </p>
            <p>
              <i className="bi mr-2 bi-newspaper"></i>Write Article
            </p>
          </div>
        </Row>

        <hr
          style={{
            width: "500px",
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            borderColor: "#000000",
          }}
        />
        <Row className="px-3 pb-2 flex-column mb-5">
          {isLoading ? (
            <Loader />
          ) : (
            posts.reverse().map(post => {
              return <SingleNews key={post._id} posts={post} />;
            })
          )}
        </Row>
      </Col>
      <Modal show={addPost} onHide={closeAddPost}>
        <Modal.Dialog className="w-100 border-0 px-3">
          <Modal.Header closeButton>
            <Modal.Title>Create a post</Modal.Title>
          </Modal.Header>
          <Modal.Header>
            <Modal.Title className="d-flex align-items-center">
              <img
                className="nav-profile-image-1 mr-3"
                src="https://th.bing.com/th/id/R.2d083db2480f8bc1be770e83ced8e705?rik=D17WYQgsM%2fx8Kw&pid=ImgRaw&r=0"
                alt=""
              />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control className="mt-3 shadow-none" as="select">
                  <option>Anyone</option>
                  <option>Connections</option>
                  <option>Anyone + Twitter</option>
                  <option>Group Members</option>
                </Form.Control>
              </Form.Group>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="px-1">
            <Form onSubmit={addPostFunction}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>What do you want to talk about?</Form.Label>
                <Form.Control
                  className="w-100 shadow-none border-0"
                  as="textarea"
                  required
                  onChange={e => setPost(e.target.value)}
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
                  onClick={addPostFunction}
                  className="shadow-none modal-post-btn border-0"
                  disabled={!post}
                >
                  Post
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default NewsFeed;
