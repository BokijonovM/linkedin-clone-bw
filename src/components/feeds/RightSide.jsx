import React from "react";
import logo from "./right.png";

function RightSide() {
  return (
    <>
      <div className="right-sidebar-main mt-2">
        <p>Add to your feed</p>
      </div>
      <div>
        <img className="w-100 right-image" src={logo} alt="" />
      </div>
    </>
  );
}

export default RightSide;
