import React from "react";
import AboutCard from "./AboutCard";
import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";
import FeaturedCard from "./FeaturedCard";
import Fetchdata from "./fetch";
function Main() {
  return (
    <div >
      <h1>main part</h1>
      <ProfileCard/>
      <DashboardCard/>
      <AboutCard/>
      <FeaturedCard/>
      <Fetchdata/>
    </div>
  );
}

export default Main;
