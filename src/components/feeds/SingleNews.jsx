import React from "react";
import { Row } from "react-bootstrap";
import "./style.css";
import { parseISO, format } from "date-fns";
import Loader from "./Loader";
import { useState, useEffect } from "react";

function SingleNews({ posts }) {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const PostData = () => {
  //     setData(posts);
  //     setIsLoading(false);
  //   };
  //   PostData();
  // }, []);

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
                    {posts.username}
                    <i className="bi bi-dot"></i> 1st
                  </p>
                  <p className="mb-n1" style={{ fontSize: "12px" }}>
                    title
                  </p>
                  <p className="mb-n1" style={{ fontSize: "10px" }}>
                    {format(parseISO(posts.updatedAt), "MMMM do yyyy | HH:mm")}
                    <i className="bi bi-dot"></i> <i class="bi bi-globe2"></i>
                  </p>
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
    </div>
  );
}

export default SingleNews;
