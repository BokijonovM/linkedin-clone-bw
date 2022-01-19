import React, { Component } from "react";
import DisplayList from "./DisplayList";
import { useEffect, useState } from "react";

const Experience = ({ userId }) => {
  //
  const [info, setInfo] = useState(
    []
    // _id: "",
    // image: "",
    // role: "",
    // company: "",
    // startDate: "",
    // endDate: "",
    // area: "",
  );

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.setState({
  //       experiences:
  //     });
  //   }
  // }
  useEffect(() => {
    fetchExperiences();
    console.log("use effext")
  }, [userId]);

  const fetchExperiences = async (userId) => {
    //preventDefault()
    console.log("fetch experience")

    try {
      let apiCall = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6163f500a890cc0015cf07e2/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1M2IwMjczZDVjYjAwMTUzOTVhYTEiLCJpYXQiOjE2NDI0MTI4MDIsImV4cCI6MTY0MzYyMjQwMn0.Rbm3B63oIh5acqeuTn3D6U538MLbS0-vfoNT62fpFGA",
          },
        }
      );
    console.log("fetch experience ",apiCall)


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
      <p className="h4">Experience</p>
      <div className="experience">
        {info && info.map((list, i) => <DisplayList key={i} list={list} />)}
      </div>
      <hr />
      <p>Education</p>
      <div className="education">
        {info && info.map((list, j) => <DisplayList key={j} list={list} />)}
      </div>
      <hr />
      <p>Licenses & Certifications</p>
      <div className="licenses">
        {info && info.map((list, k) => <DisplayList key={k} list={list} />)}
      </div>
      <hr />
    </div>
  );
};

export default Experience;
