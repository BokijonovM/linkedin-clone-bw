import React from "react";
import { location, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
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
        `http://localhost:3001/profiles/${userId}/experiences`
      );
      if (apiCall.ok) {
        let data = await apiCall.json();
        setInfo(data);
      }
    } catch (error) {
      console.log("THIS IS catch ERROR", error);
    }
  };

  const downloadPost = (e) => {
    try {
      window.location.replace(
        `http://localhost:3001/profiles/${userId}/experiences/${info._id}/CSV`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-3 mt-3 round-border">
      <p className="h4 d-flex justify-content-between">
        Experience
        <div className="d-flex ">
          <span
            className="mx-2 round-hover"
            onClick={(e) => setShowAddExperience(true)}
            style={{ display: editable ? "block" : "none" }}
          >
            <GoPlus />
          </span>
          <Button
            onClick={(e) => downloadPost(e)}
            variant="secondary"
            className="h6 bold rounded-btn ml-2 shadow-none"
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
