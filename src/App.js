import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Profile from "./Profile";
import { Col } from "react-bootstrap";
import MyMainFeed from "./components/feeds/MyMainFeed";
import OtherUser from "./OtherUser";
import PageError from "./PageError";
import MyLayout from "./MyLayout";

function App() {
  const [profile, setProfile] = useState();

  const fetchProfile = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjZmYTczZDVjYjAwMTUzOTVhOWMiLCJpYXQiOjE2NDI2MDg5MjksImV4cCI6MTY0MzgxODUyOX0.D7vLV9VQO7-vFQO8smX7U6ny2zlx8PFwUwdvbb5ra0c",
        },
      }
    );
    let data = await response.json();
    if (data) {
      setProfile(data);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{ backgroundColor: "rgb(243,242,238)" }}
      ></div>
      <Routes>
        <Route path="/" element={profile && <MyMainFeed profile={profile} />} />
        <Route
          path="/profile"
          element={
            profile && <Profile fetchProfile={fetchProfile} profile={profile} />
          }
        />
        <Route
          path="/OtherUser/:userId"
          element={
            <MyLayout profile={profile}>
              <OtherUser />
            </MyLayout>
          }
        />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
