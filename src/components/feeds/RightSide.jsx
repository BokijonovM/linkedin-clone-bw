import React from "react";
import { useState } from "react";
import "../profile/style/SideBar.css";

function RightSide() {
  const [state, setState] = useState({
    headers: "Want to work in Venice? Go anywhere",
    time: "16h ago • 7,680 readers",
  });
  console.log(state);
  return (
    <div className="mt-4 w-100 right-side-main">
      <div>
        <h5 className="pl-0 font-weight-bolder">LinkedIn News</h5>
        <div>
          <ul className="ul-li">
            <li className="">
              <a className="text-decoration-none text-dark" href="/#">
                <span className="header">{state.headers}</span>
                <p className="time">{state.time}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
