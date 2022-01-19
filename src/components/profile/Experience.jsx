import React, { Component } from "react";
import DisplayList from "./DisplayList";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import AddExperience from "./ProfileCardComponents/AddExperience";
const Experience = ({ userId }) => {
  //
  const [ info, setInfo] = useState([]);
  const [ showAddExperience , setShowAddExperience ] = useState (false)
  const [ experienceId , setExperienceId ] = useState ()
  

  
  
  useEffect(() => {
    fetchExperiences();
  }, [userId]);

  const fetchExperiences = async () => {
    //preventDefault()
    console.log("fetch experience")

    try {
      let apiCall = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1M2IwMjczZDVjYjAwMTUzOTVhYTEiLCJpYXQiOjE2NDI0MTI4MDIsImV4cCI6MTY0MzYyMjQwMn0.Rbm3B63oIh5acqeuTn3D6U538MLbS0-vfoNT62fpFGA",
          },
        }
      );
      if (apiCall.ok) {
        let data = await apiCall.json();
        console.log("RESPONSE TEST", data);
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
       <span className="mx-2 round-hover" onClick={(e)=>setShowAddExperience(true)}>
            <GoPlus />
          </span>
        </p>
        <div style={{ marginTop: "60px" }}>
          <div
              className="pAbsolute w-100 modal-box"
              style={{
                display: showAddExperience? "block" : "none",
              }}
              fluid
            >
              {userId && (
                <AddExperience  userId={userId} setShowAddExperience={setShowAddExperience}/>
              )}
          </div>
          </div>
          
      <div className="experience">
        {info && info.map((list, i) => <DisplayList key={i} list={list} userId={userId}/>)}
      </div>
    </div>
  );
};

export default Experience;
