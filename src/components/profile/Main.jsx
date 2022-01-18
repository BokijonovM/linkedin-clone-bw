import React from "react";
import AboutCard from "./AboutCard";
import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";
import FeaturedCard from "./FeaturedCard";
import Experience from "./Experience";

function Main() {
  return (
    <div>
      <ProfileCard />
      <DashboardCard />
      <AboutCard />
      <FeaturedCard />
      <Experience />
    </div>
  );
}

export default Main;
