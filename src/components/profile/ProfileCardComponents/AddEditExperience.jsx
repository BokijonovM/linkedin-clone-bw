import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function AddEditExperience({
  setShowAddExperience,
  list,
  userId,
  fetchExperiences,
}) {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");

  const [method, setMethod] = useState("POST");
  const [url, setUrl] = useState(
    `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
  );
  const [showDeleteBtn, SetShowDeleteBtn] = useState(false);
  const [heading, setHeading] = useState("Add Experience");
  const [selectedPic, setSelectedPic] = useState();
  const [showAddPic, setShowAddPic] = useState(false);

  useEffect(() => {
    if (list) {
      setRole(list.role);
      setCompany(list.company);
      setStartDate(new Date(list.startDate));
      setEndDate(new Date(list.endDate));
      setDescription(list.description);
      setArea(list.area);
      setMethod("PUT");
      setUrl(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${list._id}`
      );
      setHeading("Edit Experience");
      SetShowDeleteBtn(true);
      setShowAddPic(true);
    }
  }, []);

  const handleChangePic = (e) => {
    setSelectedPic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault()
    setShowAddExperience(false);
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
      let response = await fetch(url, {
        method,
        body: JSON.stringify(experience),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",

          "Content-Type": "application/JSON",
        },
      });
      if (response.ok) {
        let data = await response.json();
        fetchExperiences();
        console.log("display after adding experience", data);
        this.props.history.push("/profile");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setShowAddExperience(false);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${list._id}/picture`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",

            "Content-Type": "application/JSON",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        fetchExperiences();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSavePic = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("experience", selectedPic);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${list._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",
          },
        }
      );
      console.log(userId, formData, selectedPic.name, list._id);
      if (response.ok) {
        console.log("Image saved successfully");
      } else {
        console.log("Error on uploading image");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={(e) => setShowAddExperience(false)}>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column text-left">
        <div className="d-flex my-3">
          <div style={{ display: showAddPic ? "block " : "none" }}>
            <label>Add Picture of Company</label>
            <input type="file" onChange={(e) => handleChangePic(e)} />
            <span>{selectedPic && selectedPic.name}</span>
          </div>
          <Button
            style={{ display: showAddPic ? "block " : "none" }}
            variant="success"
            onClick={(e) => handleSavePic(e)}
          >
            Save
          </Button>
        </div>
        <label htmlFor="role">Role *</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <label htmlFor="company">Company *</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label htmlFor="startDate">Start Date *</label>
        <input
          type="date"
          id="startDate"
          defaultValue={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder={startDate}
        />

        <label htmlFor="endDate">endDate *</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder={endDate}
        />

        <label htmlFor="description">Description *</label>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="area">Area *</label>
        <input
          type="text"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={(e) => setShowAddExperience(false)}
        >
          Close
        </Button>
        <Button
          variant="danger"
          onClick={(e) => handleDelete(e)}
          style={{ display: showDeleteBtn ? "block" : "none" }}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={(e) => {
            handleSubmit(e);
            handleSavePic(e);
          }}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
