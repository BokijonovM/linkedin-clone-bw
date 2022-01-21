import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/profile/Header/Footer";
import MyHeaderMain from "./components/profile/Header/MyHeaderMain";
import Sidebar from "./components/profile/Sidebar/Sidebar";
import MyMain from "./components/profile/MyMain";
import { useParams } from "react-router-dom";

const OtherUser = ({ userId }) => {
  const params = useParams();
  const [profile, setProfile] = useState();
  const [id, setId] = useState();
  const [isLoading, setIsloading] = useState();

  const fetchProfile = async id => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id,
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
        console.log("error response not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.userId) {
      let userId = params.userId;
      setId(userId);
      console.log(userId);
      fetchProfile(userId);

      // return () => {
      //   isCancelled = false;
      // };
    }
  }, [params.userId]);

  useEffect(() => {
    let isCancelled = true;
    if (params.userId) {
      let userId = params.userId;
      setId(userId);
      console.log(userId);
      fetchProfile(userId);

      return () => {
        isCancelled = false;
      };
    }
  }, [params.userId]);

  return <div>{profile && <MyMain profile={profile} />}</div>;
};

export default OtherUser;
