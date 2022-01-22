import React, { useState, useEffect } from "react";
import { IoIosPeople } from "react-icons/io";
function LeftSide({ profile }) {
  useEffect(() => {
    console.log("Profile from left side", profile);
  });
  return (
    <>
      <div
        className="bg-white round-border mt-2  w-100"
        style={{ fontSize: "12px" }}
      >
        <div className="d-flex">
          <img
            className="w-100"
            style={{ borderRadius: "10px 10px 0 0" }}
            src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp"
            alt="linkedin cover"
          />
        </div>
        <div
          className="rounded m-auto pRelative"
          style={{ top: "-30px", width: "75px", height: "75px" }}
        >
          <img
            src={profile.image}
            alt="user"
            style={{
              borderRadius: "50%",
              border: "2px solid white",
              overflow: "hidden",
              width: "75px",
              height: "75px",
            }}
          />
        </div>
        <a href="/profile" style={{ color: "black" }}>
          <p className="h5 bold px-3">
            {profile.name} {profile.surname}
          </p>
        </a>
        <p className="px-5">{profile.bio}</p>
        <hr />
        <div className="h6 px-3 d-flex justify-content-between">
          <span> Who viewed your profile </span>
          <span className="bold blue-link">41</span>
        </div>
        <div className="h6 px-3 d-flex justify-content-between">
          <span>Views of your post</span>
          <span className="bold blue-link">328</span>
        </div>
        <hr />
        <p className="px-3 text-left" style={{ fontSize: "14px" }}>
          Access exclusive tools & insights
        </p>
        <div className="d-flex px-2">
          {/* <div style={{minHeight:'10px',minWeight:'15px',color:'transparent',backgroundImage:'linear-gradient(210deg, rgb(231,163,62), rgb(247,199,125))'}}>aa</div> */}
          <div>
            <p
              className=" m-2 p-2"
              style={{
                maxHeight: "15px",
                minWeight: "15px",
                backgroundImage:
                  "linear-gradient(70deg, rgb(231,163,62), rgb(247,199,125))",
              }}
            ></p>
          </div>
          <p className=" bold text-left">Get Hired Faster, Try Premium Free</p>
        </div>
        <hr />
        <p className="h5 text-left px-3 pb-3">
          {" "}
          <i className="m-2 bi bi-bookmark-fill"></i>My items
        </p>
      </div>
      <div
        className="left-sidebar-2 bg-white text-left round-border mt-3  w-100"
        style={{ fontSize: "12px", overflow: "hidden " }}
      >
        <div className="px-3 bold pt-2">
          <p className="my-2">Recent</p>
          <p>
            <IoIosPeople className="mr-2" />
            React.JS Devs
          </p>
          <p>
            <IoIosPeople className="mr-2" />
            Frontend Developer and Web Developers
          </p>
          <p>
            <IoIosPeople className="mr-2" />
            Full Stack Developer - Java technologies, UI & Microservices
          </p>
          <p>
            <IoIosPeople className="mr-2" />
            Web Developer Jobs
          </p>
          <p>
            <IoIosPeople className="mr-2" />
            JavaScript Full Stack Developer
          </p>

          <p className="bold blue-link mt-5 mb-2">Groups</p>
          <p>
            <IoIosPeople className="mr-2" />
            React.JS Devs
          </p>
          <p>
            <IoIosPeople className="mr-2" />
            Frontend Developer and Web Developers
          </p>
          <p>
            <IoIosPeople className="mr-2" />
            Full Stack Developer
          </p>
          <p>
            <IoIosPeople className="mr-2" />
            Java technologies
          </p>
          <p>
            <IoIosPeople className="mr-2" />
            UI & Microservices
          </p>
          <p>
            Show more <i class="bi bi-chevron-down"></i>
          </p>

          <p className="mt-4 blue-link bold d-flex justify-content-between">
            <span>Events</span>
            <i className="h6 bold bi bi-plus"></i>
          </p>

          <p className="blue-link bold">Followed Hashtags</p>
        </div>
        <div className="h6 w-100 text-center grey-hover pointer px-2  pb-3 mb-0">
          <hr />
          Discover More
        </div>
      </div>
    </>
  );
}

export default LeftSide;
