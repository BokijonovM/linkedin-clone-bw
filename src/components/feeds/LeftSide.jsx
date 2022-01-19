import React, { useState, useEffect } from "react";

function LeftSide({profile}) {

  useEffect(()=> {
    console.log('Profile from left side' ,profile)
  })
  return <div>
    {profile.name}
    {profile.surnamename}
    {profile.bio}
    {profile._id}
   <div className="rounded" style={{width:'50px',height:'50px'}}> <img className="w-100" src={profile.image} alt='user '/></div>
    </div>;
}

export default LeftSide;
