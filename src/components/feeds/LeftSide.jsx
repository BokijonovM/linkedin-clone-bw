import React, { useEffect } from "react";
import BsBookmarkFill from "react-icons/bs";
import "../profile/style/SideBar.css";

function LeftSide({ profile }) {
  useEffect(() => {
    console.log("Profile from LeftSide BAR", profile);
  });
  return (
    <>
      <div className="main-wrapper">
        <div className="left-profile">
          <div className="bg-image-wrapper">
            <img
              className="user-bg-image"
              src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png"
              alt=""
            />
          </div>
          <a href="/#" className="text-dark">
            <div className="user-img-wrapper">
              <img
                className="img-fluid user-image"
                src={profile.image}
                alt="user"
              />
            </div>
            <div className="font-weight-bolder user-names">
              {profile.name} {profile.surname}
            </div>
          </a>
          <p className="user-title text-muted">{profile.title}</p>
          <div className="second-part-user mt-1 mb-1">
            <ul className="p-3 mb-0">
              <a className="text-dark a-link text-decoration-none" href="/#">
                <li className="d-flex pl-0">
                  <div className="text-muted font-weight-bolder">
                    Who viewd your profile
                  </div>
                  <div className="ml-auto text-primary font-weight-bolder">
                    58
                  </div>
                </li>
              </a>
              <a className="text-dark a-link text-decoration-none" href="/#">
                <li className="d-flex">
                  <div className="text-muted font-weight-bolder">
                    Views of your post
                  </div>
                  <div className="ml-auto text-primary font-weight-bolder">
                    177
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div className="pl-3 pt-1">
            <a id="third-part-user" href="/#">
              <h3>Access exclusice tools & insights</h3>
              <a href="/#" className="get-hired text-decoration-none">
                Get Hired Faster, Try Premium Free
              </a>
            </a>
          </div>
          <div className="border-top">
            <a href="/#">
              <p className="get-hired text-decoration-none p-3 mb-0">
                {/* <BsBookmarkFill />  */}My Items
              </p>
            </a>
          </div>
        </div>
        <div className="second-main-part mt-3">
          <div>
            <section>Recent</section>
            <div></div>
          </div>
          <div>
            <section>Groups</section>
            <div></div>
          </div>
          <div>
            <section>Events</section>
            <div>+</div>
          </div>
          <div>
            <section>Followed Hashtags</section>
            <div></div>
          </div>
          <div>
            <section>Discover more</section>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
