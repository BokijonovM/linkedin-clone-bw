import React, { useState, useEffect } from "react";

function LeftSide({profile}) {

  useEffect(()=> {
    console.log('Profile from left side' ,profile)
  })
  return <div>
    {profile.name}
    {profile.surnamename}
    {profile.bio}
    </div>;
}

export default LeftSide;
