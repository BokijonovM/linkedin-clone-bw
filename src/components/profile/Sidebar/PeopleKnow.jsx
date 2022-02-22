import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import "../Style/SideBar.css";

const PeopleKnow = () => {
  const [showMore, setShowMore] = useState(5);
  const [info, setInfo] = useState([]);

  let fetchUser = async () => {
    try {
      let apiCall = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",
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
            <h2 className="text-heading-medium pt-3">People you may know</h2>
          </div>
          {info.slice(3, showMore).map((u) => (
            <Link key={u._id} to={"/OtherUser/" + u._id}>
              <div className="" key={u._id}>
                <div className="text-dark font-weight-bolder d-flex">
                  <img className="img-fluid" src={u.image} alt="user" />
                  <div className="mt-3">
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      {u.name} &nbsp;
                      {u.surname}
                    </p>
                    <p className="text-secondary mb-0">
                      {u.title.slice(0, 35)}
                    </p>
                  </div>
                </div>
                <div className="">
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
              onClick={(e) => setShowMore(showMore + 5)}
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

export default PeopleKnow;
