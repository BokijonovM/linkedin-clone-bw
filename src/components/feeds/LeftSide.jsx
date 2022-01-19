import React, { useState, useEffect } from "react";
import "../profile/style/SideBar.css";

function LeftSide({ profile }) {
  useEffect(() => {
    console.log("Profile from LeftSide BAR", profile);
  });
  return (
    <>
      <div className="temporary">
        <div className="left-profile">
          <div className="bg-image-wrapper">
            <img
              className="user-bg-image"
              src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png"
              alt=""
            />
          </div>
          <img
            className="img-fluid user-image"
            src={profile.image}
            alt="user"
          />
          <div className="font-weight-bolder">
            {profile.name} {profile.surname}
          </div>
          <p className="">{profile.title}</p>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
