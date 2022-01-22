import React from "react";
import logo from "./right.png";

function RightSide() {
  return (
    <>
      <div
        className="bg-white p-3 pb-0 w-100 round-border mt-2"
        style={{ fontSize: "12px" }}
      >
        <p className="h6 bold mb-2 d-flex justify-content-between">
          Add to you feed <i class="bi bi-exclamation-diamond"></i>
        </p>
        <div className="d-flex mt-2">
          <div style={{ width: "75px", height: "75px", marginRight: "5px" }}>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="camera lens"
            />
          </div>
          <div>
            <p className="bold m-0 p-0">Take a picture</p>
            <p className="m-0 p-0">Taking random pictures</p>
            <button className="rounded-btn grey-border my-3 p-1 px-3">
              <i className="bold bi bi-plus"></i>Follow
            </button>
          </div>
        </div>

        <div className="d-flex ">
          <div style={{ width: "75px", height: "75px", marginRight: "5px" }}>
            <img
              className="w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mY9GvoISl_wimVW63GqLNxprGzE6Q0kv6Uw0dZTrjJqzmWHySJJohv1dEARQcT0Y7jc&usqp=CAU"
              alt="mercedez"
            />
          </div>
          <div>
            <p className="bold m-0 p-0">Ride for all</p>
            <p className="m-0 p-0">Travel with Mercedez</p>
            <button className="rounded-btn grey-border  my-3 p-1 px-3">
              <i className="bold bi bi-plus"></i>Follow
            </button>
          </div>
        </div>

        <div className="d-flex ">
          <div style={{ width: "75px", height: "75px", marginRight: "5px" }}>
            <img
              className="w-100"
              src="https://c8.alamy.com/compfr/pw574a/lettre-h-luxury-concept-design-de-logo-modele-pw574a.jpg"
              alt="mercedez"
            />
          </div>

          <div>
            <p className="bold m-0 p-0">lorem for ipsum </p>
            <p className="m-0 p-0">Travlorem ipsumcedez</p>
            <button className="rounded-btn grey-border  my-3 p-1 px-3">
              <i className="bold bi bi-plus"></i>Follow
            </button>
          </div>
        </div>
        <p className="bold grey-hover mt-2 mb-n2">
          View all recommendations <i class="bi bi-arrow-right"></i>
        </p>
      </div>
      <div>
        <img
          className="w-100 my-3 round-border"
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </div>
      <div>
        <img className="w-100 right-image" src={logo} alt="" />
      </div>

      <div
        className="footer-feeds d-flex w-100 flex-wrap justify-content-around mt-3 px-4"
        style={{ fontSize: "12px" }}
      >
        <span>About</span>
        <span>Accessibility</span>
        <span>Help Center</span>

        <span>
          Privacy & Terms <i class="bi bi-chevron-down"></i>
        </span>
        <span>Ad Choices</span>
        <span>Advertising</span>

        <span>
          Business Services <i class="bi bi-chevron-down"></i>
        </span>
        <span>Get the LinkedIn app</span>
        <span>More</span>
        <p>
          <span>
            <img
              className="w-100"
              style={{ maxWidth: "40px", maxHeight: "40px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png"
              alt="linkedin logo"
            />
          </span>
          <span>LinkedIn Corporation © 2022</span>
        </p>
      </div>
    </>
  );
}

export default RightSide;
