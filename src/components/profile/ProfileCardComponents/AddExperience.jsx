

import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function AddExperience ({setShowAddExperience, info, userId }) {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    setRole(info.role);
    setCompany(info.company);
    setStartDate(info.startDate);
    setEndDate(info.endDate);
    setDescription(info.description);
    setArea(info.area);
    console.log(info, userId,'from the add experience page')

  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault()
    let experience = {
      role: role,
      company: company,
      startDate: startDate,
      endDate: endDate,
      description: description,
      area: area,
    };
    console.log(experience);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/JSON",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjcwZjczZDVjYjAwMTUzOTVhOWQiLCJpYXQiOjE2NDI0MDc2OTYsImV4cCI6MTY0MzYxNzI5Nn0.B1ilUGNw7LlLAHJb6MgXt6yxthjBHXwzG6x1aMcz1H8",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        console.log("data changed");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={(e)=>setShowAddExperience(false)}>
        <Modal.Title>Edit Intro</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column text-left">
        <label for="role">Role *</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          Place
        />

        <label for="company">Company *</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label for="startDate">Start Date *</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label for="endDate">endDate *</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label for="description">Description *</label>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label for="area">Area *</label>
        <input
          type="text"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={(e)=>setShowAddExperience(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
