import React, { useState, useEffect } from "react";

function LeftSide({profile}) {

  useEffect(()=> {
    console.log('Profile from left side' ,profile)
  })
  return <div>hi</div>;
}

export default LeftSide;
