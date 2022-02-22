import React from "react";
import { location, useLocation } from "react-router-dom";

import DisplayList from "./DisplayList";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import AddEditExperience from "./ProfileCardComponents/AddEditExperience";
const Experience = ({ userId }) => {
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
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",
          },
        }
      );
      if (apiCall.ok) {
        let data = await apiCall.json();
        setInfo(data);
      }
    } catch (error) {
      console.log("THIS IS catch ERROR", error);
    }
  };

  return (
    <div className="bg-white p-3 mt-3 round-border">
      <p className="h4 d-flex justify-content-between">
        Experience
        <span
          className="mx-2 round-hover"
          onClick={(e) => setShowAddExperience(true)}
          style={{ display: editable ? "block" : "none" }}
        >
          <GoPlus />
        </span>
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
