import React from "react";
import AboutCard from "./AboutCard";
import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";
import FeaturedCard from "./FeaturedCard";

function Main() {
  return (
    <div >
      <h1>main part</h1>
      <ProfileCard/>
      <DashboardCard/>
      <AboutCard/>
      <FeaturedCard/>
    </div>
  );
}

export default Main;
