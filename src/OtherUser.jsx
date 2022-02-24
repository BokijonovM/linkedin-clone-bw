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
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = async (id) => {
    try {
      let response = await fetch(
        "https://buildweek3-backend.herokuapp.com/profiles/" + id
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
    let isCancelled = true;
    if (params.userId) {
      let userId = params.userId;
      setId(userId);
      fetchProfile(userId);

      return () => {
        isCancelled = false;
        setProfile();
        setId();
        setIsLoading(false);
      };
    }
  }, [params.userId]);

  return <div>{profile && <MyMain profile={profile} />}</div>;
};

export default OtherUser;
