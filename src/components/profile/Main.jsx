import React, { useState } from "react";
import AboutCard from "./AboutCard";
import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";
import FeaturedCard from "./FeaturedCard";
import Experience from "./Experience";

function Main() {

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

  useState(()=>{
    fetchProfile()
  },[])


  return (

    <div >    
      {profile && <ProfileCard profile={profile}/>}
      <DashboardCard/>
      <AboutCard/>
      <FeaturedCard/>
      <Experience/>
    </div>
  );
}

export default Main;
