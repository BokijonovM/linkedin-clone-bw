import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/profile/Header/Footer";
import Header from "./components/profile/Header/Header";
import Sidebar from "./components/profile/Sidebar/Sidebar";
import MyMain from "./components/profile/MyMain";
import { useParams } from "react-router-dom";

const OtherUser = () => {
  const params = useParams();

  const [profile, setProfile] = useState(null);
  const [id, setId] = useState(null);

  const fetchProfile = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ZWQ0Y2MyYzE4ODAwMTVhYjk0YjUiLCJpYXQiOjE2NDI1MjM5ODEsImV4cCI6MTY0MzczMzU4MX0.Co-ZiB-K6ynPob1rwDlJ3Nkq2YC6J9ewG5ExQJ2sT00",
        },
      }
    );

    if (response.ok) {
      let data = await response.json();
      setProfile(data);
    } else {
      console.log("error line 29 OtherUser.jsx");
    }
  };

  useEffect(() => {
    let userId = params.userId;

    console.log(id);
    console.log(userId);
    fetchProfile();
  }, []);

  return <div>{profile && <MyMain profile={profile} />}</div>;
};

export default OtherUser;
