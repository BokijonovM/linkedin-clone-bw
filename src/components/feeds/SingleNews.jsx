import React from "react";
import { Row } from "react-bootstrap";
import "./style.css";
import { parseISO, format } from "date-fns";

function SingleNews({ posts }) {
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
                  src="https://th.bing.com/th/id/R.2d083db2480f8bc1be770e83ced8e705?rik=D17WYQgsM%2fx8Kw&pid=ImgRaw&r=0"
                  alt=""
                ></img>
                <div className="ml-3">
                  <p
                    className="mb-n1 mt-n2"
                    style={{ fontSize: "14px", fontWeight: "600" }}
                  >
                    {/* {posts.user.name} {posts.user.surname}{" "} */}
                    {posts.username}
                    <i className="bi bi-dot"></i> 1st
                  </p>
                  <p className="mb-n1" style={{ fontSize: "12px" }}>
                    {/* {posts.user.title} */}
                    title
                  </p>
                  <p className="mb-n1" style={{ fontSize: "10px" }}>
                    {format(parseISO(posts.updatedAt), "MMMM do yyyy | HH:mm")}
                    {/* <i className="bi bi-dot"></i> 19h{" "} */}
                    <i className="bi bi-dot"></i> <i class="bi bi-globe2"></i>
                  </p>
                </div>
              </div>
              <div>
                <p className="w-100">{posts.text}</p>
                {/* <p className="w-100">{posts.user.area}</p> */}
              </div>
              <div>
                {/* <img
                  className="w-100 mb-3"
                  src="https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2123&q=80"
                  alt=""
                /> */}
                {/* <i
                  class="bi bi-hand-thumbs-up-fill"
                  style={{ color: "#c7e1fa" }}
                ></i>{" "}
                number of likes */}
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
    </div>
  );
}

export default SingleNews;
