import React from "react";
import { location, useLocation } from "react-router-dom";

import DisplayList from "./DisplayList";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { Button } from "react-bootstrap";
import AddEditExperience from "./ProfileCardComponents/AddEditExperience";
const Experience = ({ userId }) => {
  console.log("userId", userId);
  //
  const [info, setInfo] = useState([]);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [experienceId, setExperienceId] = useState();

  const location = useLocation();
  const [editable, setEditable] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/profile") {
      setEditable(false);
    }
    fetchExperiences();
  }, [userId]);

  const fetchExperiences = async () => {
    try {
      let apiCall = await fetch(
        `http://localhost:3001/profiles/6214d6eedc5924e6a8291a06`,
        {
          // headers: {
          //   Authorization:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",
          // },
        }
      );
      if (apiCall.ok) {
        let data = await apiCall.json();
        setInfo(data.experiences);
      }
    } catch (error) {
      console.log("THIS IS catch ERROR", error);
    }
  };
  const downloadPost = (e) => {
    try {
      window.location.replace(
        `http://localhost:3001/profiles/${userId}/experiences/6215f45ad0ef1a1a8d1d4e73/CSV`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-3 mt-3 round-border">
      <p className="h4 d-flex justify-content-between">
        Experiencess
        <div className="d-flex align-items-center">
          <span
            className="mx-2 round-hover"
            onClick={(e) => setShowAddExperience(true)}
            style={{ display: editable ? "block" : "none" }}
          >
            <GoPlus />
          </span>
          <Button
            onClick={(e) => downloadPost(e)}
            variant="outline-secondary"
            className="h6 bold rounded-btn ml-2 shadow-none ml-2"
          >
            Get CSV
          </Button>
        </div>
      </p>
      <div style={{ marginTop: "60px" }}>
        <div
          className="pAbsolute w-100 modal-box"
          style={{
            display: showAddExperience ? "block" : "none",
          }}
        >
          {userId && (
            <AddEditExperience
              fetchExperiences={fetchExperiences}
              userId={userId}
              setShowAddExperience={setShowAddExperience}
            />
          )}
        </div>
      </div>

      <div className="experience">
        {info &&
          info.map((list, i) => (
            <DisplayList
              fetchExperiences={fetchExperiences}
              key={i}
              list={list}
              userId={userId}
            />
          ))}
      </div>
    </div>
  );
};

export default Experience;
