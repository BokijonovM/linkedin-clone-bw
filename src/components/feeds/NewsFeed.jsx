import React from "react";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import "./style.css";
import { useState, useEffect } from "react";
import SingleNews from "./SingleNews";

function NewsFeed() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
          console.log("data if", dataRes);
          setPosts(dataRes);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Col>
        <Row className="mt-2 start-post-div px-4 pt-4 pb-2 flex-column">
          <div className="d-flex justify-content-between ">
            <img
              className="nav-profile-image-1"
              src="https://th.bing.com/th/id/R.2d083db2480f8bc1be770e83ced8e705?rik=D17WYQgsM%2fx8Kw&pid=ImgRaw&r=0"
              alt=""
            />
            <div>
              <Form inline className="form-main-nav-1 pl-auto">
                <FormControl
                  type="text"
                  placeholder="Start a post"
                  className="mr-sm-2 shadow-none start-post-form py-4"
                  style={{
                    width: "400px",
                  }}
                />
              </Form>
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
          className="w-100"
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            borderColor: "#000000",
          }}
        />
        <SingleNews />
      </Col>
    </div>
  );
}

export default NewsFeed;
