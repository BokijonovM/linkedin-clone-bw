import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import "./style/SideBar.css";

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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1M2IwMjczZDVjYjAwMTUzOTVhYTEiLCJpYXQiOjE2NDI0MTI4MDIsImV4cCI6MTY0MzYyMjQwMn0.Rbm3B63oIh5acqeuTn3D6U538MLbS0-vfoNT62fpFGA",
          },
        }
      );

      if (apiCall.ok) {
        let user = await apiCall.json();
        console.log(user);
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
        <ul className="pl-0 mb-0 w-100">
          <div>
            {" "}
            <h2 className="text-heading-medium pt-3">People also viewed</h2>
          </div>
          {info.slice(0, showMore).map(u => (
            <li className="" key={u._id}>
              <a className="text-dark font-weight-bolder d-flex" href="/">
                <img className="img-fluid" src={u.image} alt="user" />
                <div className="mt-3">
                  <p className="mb-0" style={{ fontSize: "14px" }}>
                    {u.name} <n />
                    {u.surname}
                  </p>
                  <p className="text-secondary mb-0">{u.title}</p>
                </div>
              </a>
              <div className="">
                <button className="btn btn-connect py-0 shadow-none px-4 mt-n3">
                  Connect
                </button>
              </div>
            </li>
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
        </ul>
      </section>
      {/* </Col>
      </Row> */}
    </div>
  );
};

export default PeopleViewed;
