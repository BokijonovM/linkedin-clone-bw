import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import "../style/SideBar.css";

const PeopleViewed = () => {
  const [showMore, setShowMore] = useState(5);
  const [info, setInfo] = useState([]);

  let fetchUser = async () => {
    try {
      let apiCall = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjZmYTczZDVjYjAwMTUzOTVhOWMiLCJpYXQiOjE2NDI2MDg5MjksImV4cCI6MTY0MzgxODUyOX0.D7vLV9VQO7-vFQO8smX7U6ny2zlx8PFwUwdvbb5ra0c",
          },
        }
      );

      if (apiCall.ok) {
        let user = await apiCall.json();
        setInfo(user);
      } else {
        console.log("Something wrong");
      }
    } catch (err) {
      console.log("error Catched");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {/* <Row className="ml-0 mr-0">
        <Col className="pl-0 pr-0"> */}
      <section className="peopleView mt-4">
        <div className="pl-0 mb-0 w-100">
          <div>
            {" "}
            <h2 className="text-heading-medium pt-3">People also viewed</h2>
          </div>
          {info.slice(0, showMore).map(u => (
            <Link key={u._id} to={"/OtherUser/" + u._id}>
              <div className="" key={u._id}>
                <div className="text-dark font-weight-bolder d-flex" href="/">
                  <img className="img-fluid" src={u.image} alt="user" />
                  <div className="mt-3">
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      {u.name} {u.surname}
                    </p>
                    <p className="text-secondary mb-0">{u.title}</p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-connect py-0 shadow-none px-4 mt-n3">
                    Connect
                  </button>
                </div>
              </div>
            </Link>
          ))}
          <div className="button-show">
            <div
              className="pointer"
              id="btn"
              onClick={e => setShowMore(showMore + 5)}
            >
              Show more
            </div>
            <IoIosArrowDown className="text-secondary" />
          </div>
        </div>
      </section>
      {/* </Col>
      </Row> */}
    </div>
  );
};

export default PeopleViewed;
