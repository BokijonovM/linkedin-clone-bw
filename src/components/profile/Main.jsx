import React, { useState, useEffect } from "react";
import AboutCard from "./AboutCard";
import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";
import FeaturedCard from "./FeaturedCard";
import Experience from "./Experience";
function Main({profile}) {

  const[userId, setUserId] = useState()

  useEffect(()=>{
    if(profile){
      setUserId(profile._id)
    }
  },[profile])
  return (

    <div >    
      {profile && <ProfileCard profile={profile} />}
      <DashboardCard/>
      {profile && <AboutCard/>}
      <FeaturedCard/>
     {userId && <Experience userId={userId}/>}
    </div>
  );
}

export default Main;
