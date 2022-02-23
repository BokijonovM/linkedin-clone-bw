import React, { useState, useEffect } from "react";
import AboutCard from "./AboutCard";
import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";
import FeaturedCard from "./FeaturedCard";
import Experience from "./Experience";
function Main({ profile, fetchProfile, newProfile }) {
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (profile) {
      setUserId(newProfile._id);
    }
  }, [profile]);
  return (
    <div>
      {profile && (
        <ProfileCard
          fetchProfile={fetchProfile}
          profile={profile}
          newProfile={newProfile}
          userId={userId}
        />
      )}
      <DashboardCard />
      {profile && <AboutCard />}
      <FeaturedCard />
      {userId && <Experience userId={userId} />}
    </div>
  );
}

export default Main;
