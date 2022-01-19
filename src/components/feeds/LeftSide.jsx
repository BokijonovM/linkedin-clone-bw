import React from "react";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const LeftSide = () => {
  //{ userPic, userOnNav }
  const [userPost, setUserPost] = useState("");

  let fetchPost = async () => {
    try {
      let apiCall = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1M2IwMjczZDVjYjAwMTUzOTVhYTEiLCJpYXQiOjE2NDI0MTI4MDIsImV4cCI6MTY0MzYyMjQwMn0.Rbm3B63oIh5acqeuTn3D6U538MLbS0-vfoNT62fpFGA",
          },
        }
      );
      if (apiCall.ok) {
        let post = await apiCall.json();
        setUserPost(post);
        console.log(post);
      } else {
        console.log("API is NOT ok");
      }
    } catch (error) {
      console.log("Error Catch", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // console.log("TEST from PROFILE LEft SIDE", userOnNav);
  // console.log("TEST from PROFILE LEft SIDE", userPic);

  return (
    <>
      <Col className="bg-light">
        <div>
          <img src="" alt="" />
        </div>
        <div className="text-dark">Doston Azimboev</div>{" "}
        {userPost.map((user) => (
          <div>
            {/* <p>{user.user.name}</p>
            <p>{user.user.lastname}</p> */}
          </div>
        ))}
      </Col>
    </>
  );
};

export default LeftSide;
