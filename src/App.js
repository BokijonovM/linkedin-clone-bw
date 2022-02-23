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
  const [newProfile, setNewProfile] = useState();

  const fetchProfile = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",
        },
      }
    );
    let data = await response.json();
    if (data) {
      setProfile(data);
      console.log(data);
    }
  };

  const fetchNew = async () => {
    try {
      let res = await fetch(
        "http://localhost:3001/profiles/6214d6eedc5924e6a8291a06"
      );
      if (res.ok) {
        let data = await res.json();
        console.log("resNew", data);
        setNewProfile(data);
      } else {
        console.log("new data error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchNew();
  }, []);

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{ backgroundColor: "rgb(243,242,238)" }}
      ></div>
      <Routes>
        <Route
          path="/"
          element={
            profile && <MyMainFeed profile={profile} newProfile={newProfile} />
          }
        />
        <Route
          path="/profile"
          element={
            profile && (
              <Profile
                fetchProfile={fetchProfile}
                newProfile={newProfile}
                profile={profile}
              />
            )
          }
        />
        <Route
          path="/OtherUser/:userId"
          element={
            <MyLayout profile={profile} newProfile={newProfile}>
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
