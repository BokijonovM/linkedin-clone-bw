import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LeftSide({ profile }) {
  useEffect(() => {
    console.log("Profile from left side", profile);
  });
  return (
    <div className="left-sidebar-main py-4 mt-2">
      <img className="left-sidebar-image" src={profile.image} alt="user " />

      <a className="mb-n2" href="/profile" className="mb-0">
        {profile.name}
      </a>
      <a className="mt-n2" href="/profile">
        {profile.surname}
      </a>

      <h6>{profile.bio}</h6>
    </div>
  );
}

export default LeftSide;
