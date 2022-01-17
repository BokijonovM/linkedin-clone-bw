import React from "react";
import AboutCard from "./AboutCard";
import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";

function Main() {
  return (
    <div >
      <h1>main part</h1>
      <ProfileCard/>
      <DashboardCard/>
      <AboutCard/>
    </div>
  );
}

export default Main;
