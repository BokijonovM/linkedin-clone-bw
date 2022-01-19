import React, { useState, useEffect } from "react";
import AboutCard from "./AboutCard";
import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";
import FeaturedCard from "./FeaturedCard";
import Experience from "./Experience";
function Main({setUserOnNav, setUserPic, userPic}) {

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
      setUserOnNav(data)
    }
  }

  useEffect(()=>{
    fetchProfile()
    fetchExperience()
    setUserPic("https://miro.medium.com/max/1400/1*yIxkX8nAZkBxDP0gTjNrog.jpeg")
  },[])


  const fetchExperience= async()=>{
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/61e5270f73d5cb0015395a9d/experiences",{
      headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjcwZjczZDVjYjAwMTUzOTVhOWQiLCJpYXQiOjE2NDI0MDc2OTYsImV4cCI6MTY0MzYxNzI5Nn0.B1ilUGNw7LlLAHJb6MgXt6yxthjBHXwzG6x1aMcz1H8'
      }
    })
    if(response.ok){

      let data=await response.json()
    } else {
      console.log('Error reading data')
    }
    } catch (error) {
      console.log(error)
    }

  }
  

  return (

    <div >    
      {profile && <ProfileCard profile={profile} userPic={userPic}/>}
      <DashboardCard/>
      <AboutCard/>
      <FeaturedCard/>
      <Experience/>
    </div>
  );
}

export default Main;
