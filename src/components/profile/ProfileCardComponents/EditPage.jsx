import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
export default function EditPage({ profile, setShowEditPage, fetchProfile }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    setName(profile.name);
    setSurname(profile.surname);
    setEmail(profile.email);
    setBio(profile.bio);
    setTitle(profile.title);
    setArea(profile.area);
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault()
    setShowEditPage(false);
    let user = {
      name: name,
      surname: surname,
      email: email,
      bio: bio,
      title: title,
      area: area,
    };
    console.log(user);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",

            "Content-Type": "application/JSON",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        fetchProfile();
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
      <Modal.Header closeButton onClick={(e) => setShowEditPage(false)}>
        <Modal.Title>Edit Intro</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column text-left">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <label htmlFor="addName">Email Address *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="bio">Bio *</label>
        <input
          type="text"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
        <Button variant="secondary" onClick={(e) => setShowEditPage(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
