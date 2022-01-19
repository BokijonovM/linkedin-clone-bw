import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Profile from "./Profile";
import { Col } from "react-bootstrap";
import MyMainFeed from "./components/feeds/MyMainFeed";
import OtherUser from "./OtherUser";
import PageError from "./PageError";

function App() {
  const[profile,setProfile]=useState()
  

  const fetchProfile = async() => {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me",{
      headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjcwZjczZDVjYjAwMTUzOTVhOWQiLCJpYXQiOjE2NDI0MDc2OTYsImV4cCI6MTY0MzYxNzI5Nn0.B1ilUGNw7LlLAHJb6MgXt6yxthjBHXwzG6x1aMcz1H8'
      }
    })
    let data = await response.json()
    if(data){
      setProfile(data)
    
    }
  }

  useEffect(()=>{
    fetchProfile()
  },[])
  
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={profile && <MyMainFeed  profile={profile}/>} />
        <Route path="/profile" element={profile && <Profile  profile={profile}/>} />
        <Route path="/OtherUser/:userId" element={<OtherUser />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
